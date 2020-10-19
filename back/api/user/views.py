"""
the views to handle the users/ endpoint
"""

from pyotp import HOTP
from datetime import datetime
import base64

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.exceptions import ParseError, NotAcceptable
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

from user.serializer import UserEmailSerializer, UserPhoneSerializer
from core.models import OneTimePassword, User
from user.twilioApi import twilio_sms_sign
from user.mailSender import sign_mail


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
        twilio_sms_sign(user.phone, code.at(otp.counter))
    elif count_type == 'email':
        print(user)
        sign_mail(user.email, code.at(otp.counter))


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

    def get_serializer(self, data=None):
        count_type = self.request.query_params.get('type')
        if count_type == 'phone':
            return UserPhoneSerializer(data=data)
        elif count_type == 'email':
            return UserEmailSerializer(data=data)
        else:
            raise NotAcceptable("you must provide a type")

    @staticmethod
    def list(request):
        user = get_user_model().objects.all().values_list("name", flat=True)
        return Response(list(user))

    def create(self, request):
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
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(False):
            user = serializer.save()
            otp = OneTimePassword.objects.create(user=user)

            key = base64.b32encode(return_value(user.name).encode())
            code = HOTP(key)
            send_password(user, otp, self.request.query_params.get('type'), code)
            return Response({"message": "You are signup, your code has been send as your email or phone"}, status=201)
        else:
            raise ParseError("something goes wrong... already register ?")


class NewCode(viewsets.ViewSet):
    @staticmethod
    def create(request):
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
        print(user)
        otp = OneTimePassword.objects.get(user=user)
        otp.counter += 1
        otp.isValid = True
        otp.save()
        key = base64.b32encode(return_value(user.name).encode())
        code = HOTP(key)
        send_password(user, otp, count_type, code)

        return Response({"message": "Your code has been send as your email or phone"}, status=201)


class SignInView(viewsets.ViewSet):
    """The Sign In View
        handle the user signIn
        with the methode create it checks the password and send the token
    """

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
