from rest_framework import serializers
from .models import Docs

class DocsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docs
        fields = '__all__'
