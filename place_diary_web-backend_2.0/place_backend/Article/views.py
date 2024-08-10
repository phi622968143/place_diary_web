from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer

class ArticleListCreateView(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    def get_queryset(self):
        queryset = Article.objects.all()
        series_id = self.request.query_params.get('series', None)
        if series_id is not None:
            queryset = queryset.filter(series_id=series_id)
        return queryset