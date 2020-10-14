import pyotp
from datetime import datetime
import base64
from rest_framework import viewsets
from user.serializer import UserEmailSerializer, UserPhoneSerializer
from rest_framework.response import Response
from rest_framework.exceptions import ParseError
from django.contrib.auth import get_user_model
from core.models import OneTimePassword
from user.twilioApi import message

class HandleOTP:
    @staticmethod
    def return_value(name):
        return str(name) + str(datetime.date(datetime.now())) + "string for the secret"
    


class SignUpView(viewsets.ViewSet):
    """"""
    queryset = get_user_model().objects.all()

    def list(self, request):
        """"""
        count_type = request.query_params.get('type')
        if count_type == 'phone':
            serializer = UserPhoneSerializer(data=request.data)
        elif count_type == 'email':
            serializer = UserEmailSerializer(data=request.data)
        else:
            raise ParseError("you must provide a type", )
        if serializer.is_valid(True):
            user=serializer.save()
            otp = OneTimePassword.objects.create(user=user)
            key = base64.b32encode(HandleOTP.return_value(user.name).encode())
            OTP = pyotp.HOTP(key)
            if count_type == 'phone':
                message(user.phone,OTP.at(otp.counter))

        return Response({"Your code has been send as your email or phone"}, status=200)
