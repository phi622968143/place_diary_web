from rest_framework import serializers
from .models import short

class ShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = short
        fields = '__all__'