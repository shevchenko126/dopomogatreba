# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
# pylint: disable=missing-class-docstring
# pylint: disable=trailing-whitespace
from django.db import models
from django.conf import settings # for AdvertResponse

# Create your models here.
class Advert(models.Model):
# model Advert 
# title - charfield 
# image - filefield 
# description - textField

    title = models.CharField(verbose_name="Advert",
                            max_length=100,
                            blank=True,
                            null=True)
    image = models.FileField(verbose_name="Logo",
                            max_length=100,
                            blank=True,
                            null=True)
    description = models.CharField(verbose_name="Description",
                            max_length=100,
                            blank=True,
                            null=True)
    
    def __str__(self):
        return str(self.title)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        
    class Meta:
        verbose_name = "Advert"
        verbose_name_plural = "Adverts"

#Бенкенд -  в приложении adverts делаем модель AdvertCategory
#  с поле name и привязываем Advert к ней полем  category
class AdvertCategory(models.Model):

    name = models.CharField(verbose_name="AdvertCategory",
                            max_length=100,
                            blank=True,
                            null=True)
    category = models.ForeignKey(Advert, verbose_name="Category",
                            max_length=100,
                            on_delete=models.CASCADE,
                            blank=True,
                            null=True)
        
    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        
    class Meta:
        verbose_name = "AdvertCategory"
        verbose_name_plural = "AdvertCategories"

#Бекенд - в приложении adverts делаем модель AdvertResponse
# title - charField
# user - ForeignKey User  
 
class AdvertResponse(models.Model):
    
    title = models.CharField(verbose_name="AdvertResponse",
                            max_length=100,
                            blank=True,
                            null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                            verbose_name="User",
                            on_delete=models.CASCADE,
    )
            
    def __str__(self):
        return str(self.title)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
           
    class Meta:
        verbose_name = "AdvertResponse"
        verbose_name_plural = "AdvertResponses"    