from rest_framework import generics
from .models import Serie
from .serializers import SeriesSerializer

class SeriesListCreateView(generics.ListCreateAPIView):
    queryset=Serie.objects.all()
    serializer_class = SeriesSerializer
