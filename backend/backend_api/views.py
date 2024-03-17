from django.shortcuts import render
from .models import News
from .serializers import NewsSerializer
from rest_framework import viewsets
from newsapi import NewsApiClient
newsapi = NewsApiClient(api_key='8c9139739a7d47f28d7c50fc4a78f401')
# Create your views here.
a=101;
if a<=100:
    sources = newsapi.get_sources()
    print(".............................")
    for s in newsapi.get_sources().values():
        if type(s)!=type('hi'):
            count=0
            for i in s:
                print(i['name'])
                newNews=News(i['id'],i['name'],i['description'],i['url'],i['category'],i['language'],i['country']);
                newNews.save()               

    print(".............................")
class NewsViewSet(viewsets.ModelViewSet):    
    serializer_class = NewsSerializer
    queryset = News.objects.all();
    
    






