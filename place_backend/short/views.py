from django.shortcuts import render
from .models import short
# Create your views here.

def short_demo(request):
    content_list=short.objects.all()
    return render(request,'short_demo.html',{'content_list': content_list})