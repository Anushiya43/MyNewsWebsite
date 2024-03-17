from django.db import models

# Create your models here.
class News(models.Model):
    id = models.CharField(max_length=250,primary_key = True)
    name = models.CharField(max_length=250)
    description = models.TextField()
    url = models.CharField(max_length=500,default='-')
    category = models.CharField(max_length=200,default='general')
    language = models.CharField(max_length=250,default='english')
    country = models.CharField(max_length=200,default='us') 

    def __str__(self):
        return self.name
