from rest_framework import serializers
from .models import FeedbackEntry

class FeedbackEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackEntry
        fields = '__all__'
