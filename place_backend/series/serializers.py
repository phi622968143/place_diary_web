from rest_framework import serializers
from .models import Serie

class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serie
        fields = '__all__'
