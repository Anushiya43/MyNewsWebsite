from django.contrib import admin
from .models import News
# Register your models here.

class NewsAdmin(admin.ModelAdmin):
    list = ('id','name','description','url', 'category', 'language','country')

    admin.site.register(News)