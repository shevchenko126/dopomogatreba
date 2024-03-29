from gettext import lngettext
from pyexpat import model
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.exceptions import ObjectDoesNotExist


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE, related_name='profile')
    phone = models.CharField(verbose_name='Телефон', max_length=20)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    try:
        instance.profile.save()
    except ObjectDoesNotExist:
        Profile.objects.create(user=instance)

@receiver(post_save,sender=User)
def seve_user_profile(sender, instance, created, **kwargs):
    instance.profile.save()

class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='address', blank=True, null=True)
    text = models.CharField(verbose_name='text', max_length=150)
    lat = models.FloatField(verbose_name='lat', blank=True, null=True)
    lng = models.FloatField(verbose_name='lng', blank=True, null=True)


