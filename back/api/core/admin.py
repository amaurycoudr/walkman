from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from core.models import User,OneTimePassword
class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email','phone', 'name']
    fieldsets = (
        (None, {
            'fields': ('name','is_active','email', 'phone')
        }),

    )

admin.site.register(User,UserAdmin)
admin.site.register(OneTimePassword)