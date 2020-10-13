from rest_framework import serializers
from django.contrib.auth import get_user_model


class UserEmailSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = get_user_model()
        fields = ('email', 'name')

    def create(self, validated_data):
        """"""
        return get_user_model().objects.create_user(**validated_data)


class UserPhoneSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = get_user_model()
        fields = ('phone', 'name')

    def create(self, validated_data):
        """"""
        return get_user_model().objects.create_user(**validated_data)
