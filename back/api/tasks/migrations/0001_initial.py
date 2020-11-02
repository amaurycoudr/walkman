# Generated by Django 3.1.2 on 2020-10-23 09:19

import colorfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('color', colorfield.fields.ColorField(default='#FFF', max_length=18)),
            ],
        ),
        migrations.CreateModel(
            name='Difficulty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=30, unique=True)),
                ('points', models.IntegerField(default=0)),
            ],
        ),
    ]
