from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields = ('id', 'difficulty', 'category',
                  'title', 'repeat', 'frequency', 'duration',
                  'thumbnail', 'description', 'begin',
                  'lastBegin', 'done','state',)


