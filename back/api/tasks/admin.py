from django.contrib import admin
from .models import Difficulty, Category,Task

# Register your models here.
admin.site.register(Difficulty)
admin.site.register(Category)
admin.site.register(Task)