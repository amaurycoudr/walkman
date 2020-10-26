from rest_framework import serializers
from .models import Categorie,Difficulty,Task

class DifficultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Difficulty
        fields = "__all__"

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    categorie = CategorieSerializer()
    difficulty = DifficultySerializer()
    points = serializers.ReadOnlyField()
    finish = serializers.ReadOnlyField()
    predictedEnd = serializers.ReadOnlyField()
    state = serializers.ReadOnlyField()

    class Meta :
        model = Task
        exclude = ['user']
    
    
    def create(self,validated_data):
        return Task.objects.create(**validated_data)
    
    def update(self,instance,validated_data):
        instance.difficulty = validated_data.get('difficulty', instance.difficulty)
        instance.categorie = validated_data.get('categorie', instance.categorie)
        instance.user = validated_data.get('user', instance.user)
        instance.user = validated_data.get('user', instance.user)
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.repeat = validated_data.get('repeat', instance.repeat)
        instance.frequency = validated_data.get('frequency', instance.frequency)
        instance.duration = validated_data.get('duration', instance.duration)
        instance.done = validated_data.get('done', instance.done)
        instance.save()
        return instance