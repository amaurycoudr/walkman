from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  Task, Category, Difficulty

router = DefaultRouter()
router.register('', Task, basename='Task')


urlpatterns = [
    path('', include(router.urls)),
    path('categories', Category.as_view()),
    path('difficulties', Difficulty.as_view()),
]
