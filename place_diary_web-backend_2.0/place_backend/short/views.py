from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import short
from .serializers import ShortSerializer

@api_view(['GET'])
def short_demo(request):
    queryset = short.objects.all()
    serializer_class = ShortSerializer
