'''Views for Todo'''
from rest_framework import generics
from .models import TodoItem
from .serializers import TodoItemSerializer

class TodoItemListCreate(generics.ListCreateAPIView):
    """View for listing and creating TodoItems."""
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer

class TodoItemDetail(generics.RetrieveUpdateDestroyAPIView):
    """View for retrieving, updating, and deleting a TodoItem."""
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer
