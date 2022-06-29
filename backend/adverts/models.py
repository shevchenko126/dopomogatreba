from pyexpat import model
from django.db import models
from django.contrib.auth.models import User

class Advert(models.Model):
    title = models.CharField(verbose_name = 'title', 
                             max_length=150, 
                             db_index=True, 
                             blank=True, 
                             null=True)
    image = models.FieldFile(upload_to='uploads/', 
                             max_length=254, 
                             default="images/default.jpg", 
                             blank=True, 
                             null=True)
    description  = models.TextField(blank = True, 
                                    null= True, 
                                    db_index=True)

    def __str__(self):
        return self.title

    def seve(self, *args, **kwargs):
        super().save(*args, **kwargs)

    class Mena:
        verbose_name = 'Title'
        verbose_name_plural = 'Titles'

class AdvertResponse(models.Model):
    title = models.CharField(verbose_name = 'title', 
                             max_length=250, 
                             db_index=True, 
                             blank=True, 
                             null=True)
    user = models.ForeignKey(User, blank = True, null=True, 
                                   on_delete=models.SET_NULL)

    def __str__(self) -> str:
        return self.title

    def seve(self, *args, **kwargs):
        super().save(*args, **kwargs)

    class Mena:
        verbose_name = 'Title'
        verbose_name_plural = 'Titles'
