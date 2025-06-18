from rest_framework import generics
from .models import FeedbackEntry
from .serializers import FeedbackEntrySerializer

class FeedbackEntryCreateView(generics.CreateAPIView):
    queryset = FeedbackEntry.objects.all()
    serializer_class = FeedbackEntrySerializer
