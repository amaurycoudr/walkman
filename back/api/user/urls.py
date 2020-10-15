from django.urls import path, include
from rest_framework.routers import DefaultRouter
from user.views import SignUpView, SignInView

router = DefaultRouter()
router.register('signup', SignUpView, basename='SignUp'),
router.register('signin', SignInView, basename='Signin'),
urlpatterns = [

    path('', include(router.urls)),

]
