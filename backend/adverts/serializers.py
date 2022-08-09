from email.headerregistry import Group
from rest_framework import serializers
from adverts.models import Advert

class AdvertSerializer(serializers.ModelSerializer):
    #is_full = serializers.SerializerMethodField()
    class Meta:
        model = Advert
        fields = ['title', 'image', 'description']

class FullAdvertSerializer(AdvertSerializer):
    group_title = AdvertSerializer(source='title')
    class Meta:
        model = Advert
        fields = AdvertSerializer.Meta.fields + ['author']
        depth = 1
