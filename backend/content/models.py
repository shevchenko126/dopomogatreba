# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
# pylint: disable=missing-class-docstring
# pylint: disable=trailing-whitespace
from django.db import models

# Бенкенд - делаем приложение content, там Модель Blog и BlogCategory 
# (в каждой модели по title, и foreignKey из Blog в Blog Category)
class Blog(models.Model):

    title = models.CharField(verbose_name="BlogName",
                            max_length=100,
                            blank=True,
                            null=True)
    def __str__(self):
        return str(self.title)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        
    class Meta:
        verbose_name = "BlogName"
        verbose_name_plural = "BlogNames"

#Бенкенд -  в приложении adverts делаем модель AdvertCategory
#  с поле name и привязываем Advert к ней полем  category
class BlogCategory(models.Model):

    title = models.CharField(verbose_name="BlogCategory",
                            max_length=100,
                            blank=True,
                            null=True)
    category = models.ForeignKey(Blog, verbose_name="category",
                            max_length=100,
                            on_delete=models.CASCADE,
                            blank=True,
                            null=True)
        
    def __str__(self):
        return str(self.title)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        
    class Meta:
        verbose_name = "BlogCategory"
        verbose_name_plural = "BlogCategories"