from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskList, CreateTask, UpdateTask #, TaskDetail

router = DefaultRouter()
router.register('', TaskList, basename='TaskList'),
router.register('create', CreateTask, basename='CreateTask'),
router.register('update', UpdateTask, basename='UpdateTask'),
#router.register('detail/?<str:id>', TaskDetail, basename='TaskDetail'),

urlpatterns = [
    path('', include(router.urls)),
]
