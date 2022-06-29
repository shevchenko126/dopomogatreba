from django.db import models

class Advert(models.Model):
    titel = models.CharField(verbose_name = 'title', max_length=150, db_index=True, blank=True, null=True)
    image = models.FieldFile(upload_to='uploads/', max_length=254, default="images/default.jpg", blank=True, null=True)
    description  = models.TextField(blank = True, null= True, db_index=True)

    def __str__(self):
        return self.titel

    class Mena:
        verbose_name = 'Title'
        verbose_name_plural = 'Titles'
