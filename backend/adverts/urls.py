# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
# pylint: disable=missing-class-docstring
# pylint: disable=trailing-whitespace
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from adverts.views import ViewAllAdverts
from adverts.api import GetAdverts


router = routers.DefaultRouter()
router.register('api', GetAdverts, 'api')

urlpatterns = router.urls + [
     path('viewAdverts/', ViewAllAdverts.as_view()), # /viewAdverts/ return all adverts in DB
]
