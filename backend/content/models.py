<<<<<<< HEAD
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
=======
from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(
        verbose_name="Назва", blank=True, null=True, max_length=30
        )
    def __str__(self):
        return self.title
    
    def save(self):
        super().save()
    class Meta:
        verbose_name = "Блог"
        verbose_name_plural = "Блоги"

class BlogCategory(models.Model):
    title = models.CharField(
        verbose_name="Назва", blank=True, null=True, max_length=30
        )
    
    blog = models.ForeignKey(
        Blog, verbose_name="Назва блогу", null=True, blank=True, on_delete=models.SET_NULL
        )

    def __str__(self):
        return self.title
    
    def save(self):
        super().save()

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"
>>>>>>> 1ebbf31daafbc5ee37967331a558b96b76b8e28c
