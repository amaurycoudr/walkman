from django.urls import path, include
from rest_framework.routers import DefaultRouter
from user.views import SignUpView

router = DefaultRouter()
router.register('signup', SignUpView),
urlpatterns = [

    path('', include(router.urls)),

]