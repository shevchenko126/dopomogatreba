from django.db import models

# Create your models here.
class Advert(models.Model):
    title = models.CharField(max_length=200)
    image = models.FileField(blank=True, null=True)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return self.title