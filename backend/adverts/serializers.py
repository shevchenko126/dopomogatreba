from rest_framework import serializers
from adverts.models import Advert

class AdvertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advert
        fields = ['title', 'image', 'description']

class FullAdvertSerializer(AdvertSerializer):

    class Meta:
        model = Advert
        fields = AdvertSerializer.Meta.fields + ['author']
        depth = 1
