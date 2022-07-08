from django.conf import settings
from django.db import models

# Create your models here.
class Advert(models.Model):
    title = models.CharField(max_length=200)
    image = models.FileField(blank=True, null=True)
    description = models.TextField(max_length=1000, blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                blank=True, null=True)


    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Advert"
        verbose_name_plural = "Adverts" 

class AdvertCategory(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Advert, max_length=50, on_delete=models.CASCADE,
                                blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Advert category"
        verbose_name_plural = "Advert categories" 

class AdvertResponse(models.Model):
    title = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Advert response"
        verbose_name_plural = "Advert responses"

class AdvertFeature(models.Model):
    text = models.CharField(max_length=100)
    advert = models.ForeignKey(Advert, on_delete=models.CASCADE,
                                blank=True, null=True)
    def __str__(self):
        return self.text

    class Meta:
        verbose_name = "Advert feature"
        verbose_name_plural = "Advert features"
