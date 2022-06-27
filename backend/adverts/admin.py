# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
# pylint: disable=missing-class-docstring
# pylint: disable=trailing-whitespace

from django.contrib import admin
#from dopomogatreba.adverts import models
from adverts.models import Advert, AdvertCategory,AdvertResponse

admin.site.register(Advert)
admin.site.register(AdvertCategory)
admin.site.register(AdvertResponse)

