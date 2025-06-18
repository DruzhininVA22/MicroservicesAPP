# Прототип сериализатора

from rest_framework import serializers

class ExampleSerializer(serializers.Serializer):
    name = serializers.CharField()
