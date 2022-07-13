from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from adverts.models import Advert

# return all adverts data as list
class ViewAllAdverts(View):
    def get(self, request):
        return JsonResponse(list(Advert.objects.all().values()), safe=False)
    def post(self, request):
        return HttpResponse()