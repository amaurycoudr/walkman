import pyotp
from datetime import datetime
import base64
from rest_framework import viewsets
from user.serializer import UserEmailSerializer, UserPhoneSerializer
from rest_framework.response import Response
from rest_framework.exceptions import ParseError
from django.contrib.auth import get_user_model
from core.models import OneTimePassword


class GenerateKey:
    @staticmethod
    def return_value(count_type):
        return str(count_type) + str(datetime.date(datetime.now())) + "string for the secret"


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
            if count_type =='phone':
                key = base64.b32encode(GenerateKey.return_value(user.phone).encode())
            else:
                key = base64.b32encode(GenerateKey.return_value(user.email).encode())
            OTP = pyotp.HOTP(key)

        return Response({"OTP": OTP.at(otp.counter)}, status=200)
