from django.urls import path
from .views import FeedbackEntryCreateView

urlpatterns = [
    path('feedback/', FeedbackEntryCreateView.as_view(), name='feedback-create'),
]
