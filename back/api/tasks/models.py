from django.db import models
from colorfield.fields import ColorField
from api import settings
from os.path import splitext
from datetime import datetime, timedelta
from PIL import Image


def saveTaskPhoto(instance,filename):
    taskId = instance.id
    name,ext = splitext(filename)
    return f'tasks/task_{taskId}{ext}'
    
class Task(models.Model):
    difficulty = models.IntegerField(default=0)
    category = models.SmallIntegerField(default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    repeat = models.IntegerField() # Set when a tasks is created and will not channge
    frequency = models.IntegerField() # number of days
    duration = models.IntegerField(null=True,blank=True) # number of minutes
    thumbnail = models.ImageField(null=True,blank=True,upload_to=saveTaskPhoto) 
    description = models.TextField(null=True,blank=True)
    begin = models.DateField(auto_now_add=True)
    lastBegin = models.DateTimeField(null=True,blank=True)
    done = models.IntegerField(default=0) # how many time the tasks has been done

    class Meta:
        unique_together = ('title', 'user',)

    def save(self, *args, **kwargs):
        super(Task, self).save(*args, **kwargs)
        if(self.thumbnail):
            image = Image.open(self.thumbnail.path)
            output_size = (50, 50)  
            image.thumbnail(output_size)
            image.save(self.thumbnail.path)

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
        now = datetime.now()
        delta = now - self.lastBegin
        if delta.days >= self.frequency :
            return "to do"
        else :
            if self.duration and self.lastBegin + timedelta(minutes=self.duration) > now :
                return "doing"
            else :
                return "done"
    
    def __str__(self):
        return f'{self.title} / {self.id}'


