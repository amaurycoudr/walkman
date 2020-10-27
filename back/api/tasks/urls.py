from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  Task  # , TaskDetail

router = DefaultRouter()
router.register('', Task, basename='Task')

# router.register('detail/?<str:id>', TaskDetail, basename='TaskDetail'),

urlpatterns = [
    path('', include(router.urls)),
]
