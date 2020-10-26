# thib token : adc549e0711ed4eca8adc3a88a59989bbeb4c346
from datetime import datetime, timedelta

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import  NotAcceptable

from rest_framework.permissions import IsAuthenticated

from .models import Categorie,Difficulty,Task
from .serializer import TaskSerializer

from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError


class TaskList(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)
    
    def list(self,request):
        tasks = request.user.task_set.all()
        serializer = TaskSerializer(tasks,many=True)
        return Response(serializer.data)


class CreateTask(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    def create(self,request):
        user = request.user
        try :
            categorie = Categorie.objects.get(title=request.data.pop("categorie"))#title of categorie
        except ObjectDoesNotExist :
            raise NotAcceptable("categorie name doesn't exist")
        except KeyError :
            raise NotAcceptable("categorie name not provided")

        try :
            difficulty = Difficulty.objects.get(label=request.data.pop("difficulty"))#label of difficulty
        except ObjectDoesNotExist :
            raise NotAcceptable("Difficulty name doesn't exist")
        except KeyError :
            raise NotAcceptable("Difficulty name not provided")
        serializer = TaskSerializer(data=request.data,partial=True)
        if(serializer.is_valid() and (categorie is not None) and (difficulty is not None)):
            try :
                newTask = serializer.save(user=user,difficulty=difficulty,categorie=categorie)
            except IntegrityError:
                raise NotAcceptable("Integrity error")
            return Response({"message":"task succesfully added"})
        else :
            raise NotAcceptable("data not valid")


# update lastBegin or update other parameters
class UpdateTask(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    def update(self,request,pk=None):
        task = Task.objects.get(id=pk)
        action = request.query_params.get("state")
        if(action=="doing"):
            task.lastBegin=datetime.now()
            task.done += 1 # A ajuster en effectuant cette action après task.duration minutes
            task.save()
            return Response({"message":"task succesfully updated to doing"})
        elif(action=="done"):
            task.done += 1
            task.lastBegin = datetime.now() - timedelta(minutes=task.duration)
            task.save()
            return Response({"message":"task succesfully updated to done"})
        else:
            try:
                categorie = Categorie.objects.get(title=request.data.pop("categorie"))
            except:
                categorie = task.categorie
            try:
                difficulty = Difficulty.objects.get(lable=request.data.pop("difficulty"))
            except:
                difficulty = task.difficulty
            serializer = TaskSerializer(task,data=request.data,partial=True)
            if(serializer.is_valid()):
                task = serializer.save(categorie=categorie,difficulty=difficulty)
                return Response({"message":"task succesfully updated"})
            else :
                print(serializer.errors)
                raise NotAcceptable("data not valid")


    
    

    
