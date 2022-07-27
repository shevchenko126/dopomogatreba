from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from adverts.models import Advert

def my_view(request):
    if request.method == 'get':
        return HttpResponse('result')

class ViewAllAdverts(View):
    def get(self, request):

        title = request.GET.get('title', False)
        adverts = Advert.objects.all()
        if title:
            adverts = adverts.filter(title=title)

        adverts_data = []
        for advert in adverts:
            adverts_data.append({
                "title":advert.title
            })
        return render(request, 'adverts/adverts.html', {"adverts":adverts_data, "show":False })
        # return JsonResponse({"data":adverts_data})

    def post(self, request):
        name = request.POST.get('name', '')

        print(name)
        print(request.__dict__)
        return HttpResponse(name)
