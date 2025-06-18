from django.db import models
from django.contrib.auth.models import User

class FeedbackEntry(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    usability_score = models.IntegerField(null=True, blank=True)
    speed_score = models.IntegerField(null=True, blank=True)
    satisfaction = models.BooleanField(null=True)
    effort_score = models.IntegerField(null=True, blank=True)
    suggestion = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
