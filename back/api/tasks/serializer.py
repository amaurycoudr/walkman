from rest_framework import serializers
from .models import Category, Difficulty, Task


class DifficultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Difficulty
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class TaskSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        many=False,
        queryset=Category.objects.all()
    )
    difficulty = serializers.PrimaryKeyRelatedField(
        many=False,
        queryset=Difficulty.objects.all()
    )

    class Meta:
        model = Task
        fields = ('id', 'difficulty', 'category',
                  'title', 'repeat', 'frequency', 'duration',
                  'thumbnail', 'description', 'begin',
                  'lastBegin', 'done',)


