from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  Task

router = DefaultRouter()
router.register('', Task, basename='Task')


urlpatterns = [
    path('', include(router.urls)),
]
