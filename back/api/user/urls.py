from django.urls import path, include
from rest_framework.routers import DefaultRouter
from user.views import SignUpView, SignInView,NewCode

router = DefaultRouter()
router.register('signup', SignUpView, basename='SignUp'),
router.register('signin', SignInView, basename='Signin'),
router.register('getcode', NewCode, basename='GetCode'),
urlpatterns = [

    path('', include(router.urls)),

]
