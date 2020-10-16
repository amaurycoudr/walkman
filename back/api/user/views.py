"""
the views to handle the users/ endpoint
"""

from pyotp import HOTP
from datetime import datetime
import base64

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.exceptions import ParseError
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.authtoken.models import Token

from api.settings import EMAIL_HOST_USER
from user.serializer import UserEmailSerializer, UserPhoneSerializer, UserNameSerializer
from core.models import OneTimePassword, User
from user.twilioApi import twilioSMS


def return_value(name):
    """
       This function return a string used for generate a key

       Parameters
       ----------
       name : str
           the user name
       Returns
       -------
       str
           string for generate the key
    """
    return str(name) + str(datetime.date(datetime.now())) + "string for the secret"


def send_password(user, otp, count_type, code):
    """
        send a email or SMS to the user with its password

        Parameters
        ----------
        user : User
            the user.
        otp : OneTimePassword
            the OneTimePassword for the user.
        count_type : str
            the type of count choose for the connection "email" or "phone"
        code : HOTP

    """
    if count_type == 'phone':
        twilioSMS(user.phone, code.at(otp.counter))
    elif count_type == 'email':
        mail_message = "Your secret code is " + code.at(otp.counter)
        print(mail_message)
        send_mail(
            'Inscription WalkMan',
            mail_message,
            EMAIL_HOST_USER,
            [user.email],
            fail_silently=False,
        )


def retrieve_user(request):
    """
        Retrieve a user with its phone or email

        Parameters
        ----------
        request : Request
            the api request
        Returns
        ----------
        User
            the user
    """
    count_type = request.query_params.get('type')

    if count_type != 'email' and count_type != 'phone':
        raise ParseError("you must provide a type")
    else:
        if count_type == 'phone':
            try:
                user = get_user_model().objects.get(phone=request.data["phone"])
            except get_user_model().DoesNotExist:
                raise ParseError("verify your phone number")
        else:
            try:
                user = get_user_model().objects.get(email=request.data["email"])
            except get_user_model().DoesNotExist:
                raise ParseError("verify your email")
        return user, count_type


class SignUpView(viewsets.ViewSet):
    """The Sign Up View
        handle the user signUp with the methode create
    """

    @staticmethod
    def list(request):
        user=get_user_model().objects.all()
        serializer=UserNameSerializer(user,many=True)
        return Response(serializer.data)
    @staticmethod
    def create(request):
        """
        Create a new user, and send the otp to the user

        Parameters
        ----------
        request : Request
            the api request
        Returns
        ----------
        Response
            confirm that the user is signup
        """
        count_type = request.query_params.get('type')
        if count_type == 'phone':
            serializer = UserPhoneSerializer(data=request.data)
        elif count_type == 'email':
            serializer = UserEmailSerializer(data=request.data)
        else:
            raise ParseError("you must provide a type")
        if serializer.is_valid(False):
            user = serializer.save()
            otp = OneTimePassword.objects.create(user=user)
            key = base64.b32encode(return_value(user.name).encode())
            code = HOTP(key)
            send_password(user, otp, count_type, code)
            return Response({"message": "You are signup, your code has been send as your email or phone"}, status=200)
        else:
            raise ParseError("the user provide is not valid")


class SignInView(viewsets.ViewSet):
    """The Sign In View
        handle the user signIn
        with the methode list it sends a new otp to the user
        with the methode create it checks the password and send the token
    """

    @staticmethod
    def list(request):
        """
            send a new otp to the user

            Parameters
            ----------
            request : Request
                the api request
            Returns
            ----------
            Response
                confirm that the otp has been sent
        """
        user, count_type = retrieve_user(request)
        otp = OneTimePassword.objects.get(user=user)
        otp.counter += 1
        otp.isValid = True
        otp.save()
        key = base64.b32encode(return_value(user.name).encode())
        code = HOTP(key)
        send_password(user, otp, count_type, code)

        return Response({"message": "Your code has been send as your email or phone"}, status=200)

    @staticmethod
    def create(request):
        """
            Verify the otp and send to the user its token

            Parameters
            ----------
            request : Request
                the api request
            Returns
            ----------
            Response
                confirm that the user is signup
        """
        user, count_type = retrieve_user(request)
        otp = OneTimePassword.objects.get(user=user)
        key = base64.b32encode(return_value(user.name).encode())
        code = HOTP(key)
        if code.verify(request.data["otp"], otp.counter) and otp.isValid:
            otp.isValid = False
            otp.save()
            user.is_active = True
            user.save()
            token = Token.objects.create(user=user)
            return Response({"Token": token.key})

        else:
            raise ParseError("Wrong code")
