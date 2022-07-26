from re import L
from turtle import title
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from adverts.models import Advert
from rest_framework.authtoken.models import Token
from adverts.serializers import AdvertSerializer, FullAdvertSerializer


class GetAdverts(viewsets.ModelViewSet):

    serializer_class = AdvertSerializer
    
    def list(self, request):
        adverts = Advert.objects.all()
        adverts_serialized = self.serializer_class(adverts, many=True).data

        return Response({
            "success":1,
            "adverts":adverts_serialized
        })

    def get_object(self):
        slug = int(self.kwargs['pk'])
        print(slug)
        advert = Advert.objects.filter(id=slug)
        obj = get_object_or_404(advert)
        return obj
    