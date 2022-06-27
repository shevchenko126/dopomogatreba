from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField()

class BlogCategory(models.Model):
    title = models.CharField() 