# Generated by Django 3.1.2 on 2020-11-04 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='difficulty',
            name='icon',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]