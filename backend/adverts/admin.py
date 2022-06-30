<<<<<<< HEAD
# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
# pylint: disable=missing-class-docstring
# pylint: disable=trailing-whitespace

from django.contrib import admin
#from dopomogatreba.adverts import models
from adverts.models import Advert, AdvertCategory,AdvertResponse
=======
from django.contrib import admin
from .models import Advert, AdvertCategory, AdvertResponse

>>>>>>> 1ebbf31daafbc5ee37967331a558b96b76b8e28c

admin.site.register(Advert)
admin.site.register(AdvertCategory)
admin.site.register(AdvertResponse)
<<<<<<< HEAD

=======
>>>>>>> 1ebbf31daafbc5ee37967331a558b96b76b8e28c
