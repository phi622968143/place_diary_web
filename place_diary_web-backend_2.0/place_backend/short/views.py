from rest_framework import generics
from .models import short
from .serializers import ShortSerializer

class ShortListCreateView(generics.ListCreateAPIView):
    serializer_class = ShortSerializer
    
    def get_queryset(self):
        queryset = short.objects.all()
        series_id = self.request.query_params.get('series', None)
        if series_id is not None:
            queryset = queryset.filter(series_id=series_id)
        return queryset
