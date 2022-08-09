from django.db import models
from django.conf import settings

class Advert(models.Model):
    title=models.CharField(max_length=100)
    image=models.FileField(null= True,blank=True)
    description=models.TextField()

    class Meta:
        db_table='Advert'
        verbose_name="Advert"
        verbose_name_plural="Adverts"



    def __str__(self):
        return self.title




class AdvertCategoty(models.Model):
    name = models.CharField(max_length=100,db_index=True)
    category = models.ForeignKey(Advert, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Advert Category'
        verbose_name = "Advert Category"
        verbose_name_plural = "Advert Categories"



class AddvertResponse(models.Model):
    title=models.CharField(max_length=100)
    user=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name='Addvert Response'
        verbose_name_plural = 'Addvert Responses'