'''Models for Todo'''
from django.db import models

class TodoItem(models.Model):
    """Model representing a TodoItem."""
    title = models.CharField(max_length=200, blank=False, null=False)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """String representation of the TodoItem."""
        return str(self.title)
