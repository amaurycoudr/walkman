# Generated by Django 3.1.2 on 2020-10-24 14:24

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tasks', '0002_auto_20201023_1214'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='tasks',
            unique_together={('title', 'user')},
        ),
    ]
