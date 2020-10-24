from django.db import models
from colorfield.fields import ColorField

from os.path import splitext
from datetime import datetime, timedelta
#from PIL import Image

def saveTaskPhoto(instance,filename):
    taskId = instance.id
    name,ext = splitext(filename)
    return f'tasks/task_{taskId}{ext}'
    



class Difficulty(models.Model):
    label = models.CharField(max_length=30,unique=True)
    points = models.IntegerField(default=0)

    def __str__(self):
        return self.label

class Categorie(models.Model):
    title = models.CharField(max_length=50,unique=True)
    color = ColorField(default="#FFF")
    icon = models.CharField(max_length=50,blank=True,null=True) #for now it's the icon's name (if we use fontello for example)

    def __str__(self):
        return self.title

class Task(models.Model):
    difficulty = models.ForeignKey(Difficulty,on_delete=models.SET_NULL,null=True)
    categorie = models.ForeignKey(Categorie,on_delete=models.SET_NULL,null=True)
    user = models.ForeignKey('core.User',on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    #thumbnail = models.ImageField(null=True,blank=True,upload_to=saveTaskPhoto) #to do
    description = models.TextField(null=True,blank=True)
    begin = models.DateField(auto_now_add=True)
    repeat = models.IntegerField() # Set when a task is created and will not channge
    frequency = models.IntegerField() # number of days
    duration = models.IntegerField() # number of minutes
    lastBegin = models.DateTimeField(null=True,blank=True)
    done = models.IntegerField(default=0) # how many time the task has been done

    class Meta:
        unique_together = ('title', 'user',)

    """ def save(self, *args, **kwargs):
        super(Task, self).save(*args, **kwargs)
        image = Image.open(self.thumbnail.path)
        output_size = (50, 50)  
        image.thumbnail(output_size)
        image.save(self.thumbnail.path) """

    @property
    def points(self):
        return self.done * self.difficulty.points
    
    @property
    def finish(self):
        return self.done == self.repeat
    
    @property
    def predictedEnd(self):
        today = datetime.today()
        delta = (self.repeat - self.done)*self.frequency
        end = today + timedelta(days=delta)
        return end.date()
    
    @property
    def state(self):
        if self.lastBegin is None :
            return "to do"
        today = datetime.now()
        delta = today - self.lastBegin
        if delta.days >= self.frequency :
            return "to do"
        else :
            if self.lastBegin + timedelta(minutes=self.duration) > today :
                return "doing"
            else :
                return "done"
    
    def __str__(self):
        return f'{self.title} / {self.id}'


