from re import L
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from adverts.models import Advert
from rest_framework.authtoken.models import Token
from adverts.serializers import AdvertSerializer, FullAdvertSerializer


class GetAdverts(viewsets.ModelViewSet):

    serializer_class = AdvertSerializer
    queryset = Advert.objects.all()
    permissions = (permissions.IsAuthenticatedOrReadOnly(), )

    # def get_serializer_class(self, *args, **kwargs):
    #     token = self.request.headers.get('token', 'u')
    #     print(token)
        # try:
        #     user = Token.objects.get(key=token).user
        #     print(user)
        #     return FullAdvertSerializer(*args, **kwargs)
        # except Token.DoesNotExist:
        #     return AdvertSerializer(*args, **kwargs)

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

    def patch(self, request):
    
        title = request.data.get('title', 'u')
        token = request.headers.get('token', 'u')
        print(token)
        user = Token.objects.get(key=token).user
        advert = Advert(
            title=title
        )
        advert.save()

        return Response({
            "success":1
        })
    
