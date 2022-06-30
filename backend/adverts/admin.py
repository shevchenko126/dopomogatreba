from django.contrib import admin
from .models import Advert, AdvertCategory, AdvertResponse

# Register your models here.
admin.site.register(Advert)
admin.site.register(AdvertCategory)
admin.site.register(AdvertResponse)