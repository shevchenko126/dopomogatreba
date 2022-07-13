# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
# pylint: disable=missing-class-docstring
# pylint: disable=trailing-whitespace
from django.contrib import admin
from django.urls import path
from adverts.views import ViewAllAdverts

urlpatterns = [
    path('viewAdverts/', ViewAllAdverts.as_view()), # /viewAdverts/ return all adverts in DB
]
