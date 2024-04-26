'''Urls for Todo'''
from django.urls import path
from .views import TodoItemListCreate, TodoItemDetail

urlpatterns = [
    path('todos/', TodoItemListCreate.as_view(), name='todo-list'),
    path('todos/<int:pk>/', TodoItemDetail.as_view(), name='todo-detail'),
]
