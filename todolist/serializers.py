'''Serializer for Todo'''
from rest_framework import serializers
from .models import TodoItem

class TodoItemSerializer(serializers.ModelSerializer):
    '''Model Serializer'''
    class Meta:
        '''MetaData'''
        model = TodoItem
        fields = ['id', 'title', 'description', 'completed', 'created_at']
