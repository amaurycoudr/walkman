# Generated by Django 3.1.2 on 2020-11-06 09:17

import colorfield.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import tasks.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('color', colorfield.fields.ColorField(default='#FFF', max_length=18)),
                ('icon', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Difficulty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=30, unique=True)),
                ('points', models.IntegerField(default=0)),
                ('icon', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('repeat', models.IntegerField()),
                ('frequency', models.IntegerField()),
                ('duration', models.IntegerField(blank=True, null=True)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to=tasks.models.saveTaskPhoto)),
                ('description', models.TextField(blank=True, null=True)),
                ('begin', models.DateField(auto_now_add=True)),
                ('lastBegin', models.DateTimeField(blank=True, null=True)),
                ('done', models.IntegerField(default=0)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tasks.category')),
                ('difficulty', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tasks.difficulty')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('title', 'user')},
            },
        ),
    ]