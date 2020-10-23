from django.contrib import admin
from .models import Difficulty, Categorie,Task

# Register your models here.
admin.site.register(Difficulty)
admin.site.register(Categorie)
admin.site.register(Task)