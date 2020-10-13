from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, \
    BaseUserManager
from api import settings


class UserManger(BaseUserManager):
    """ custom user manager """

    def create_user(self, name=None, password=None, email=None, phone=None, **extra_fields):
        """ create and save a new user"""
        if not email and not phone and not password:
            raise ValueError('User must have a valid email or phone')
        if email:
            user = self.model(
                email=self.normalize_email(email), **extra_fields)
        elif phone:
            user = self.model(
                phone=phone, **extra_fields)
        else:
            user = self.model(
                name=name, **extra_fields
            )
        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()
        user.save()
        return user

    def create_superuser(self, name, password):
        """ create and save a new superuser"""
        user = self.create_user(name, password)
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    """custom user models """
    phone = models.IntegerField(unique=True, null=True, blank=True)
    email = models.EmailField(max_length=255, unique=True, null=True, blank=True)
    name = models.CharField(max_length=255, unique=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManger()

    USERNAME_FIELD = 'name'


class OneTimePassword(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    counter = models.IntegerField(default=0, blank=False)
    isValid = models.BooleanField()
