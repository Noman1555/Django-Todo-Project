'''Schema file for graphene'''
import graphene
from graphene_django.types import DjangoObjectType
from django.core.exceptions import ObjectDoesNotExist

from .models import TodoItem


class TodoItemType(DjangoObjectType):
    class Meta:
        model = TodoItem
        fields = ("id", "title", "description", "completed", "created_at")


class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoItemType)
    todo = graphene.Field(TodoItemType, id=graphene.Int())

    def resolve_all_todos(self, info, **kwargs):
        """Return all todo items available in the database."""
        return TodoItem.objects.all().order_by('-created_at')

    def resolve_todo(self, info, id, **kwargs):
        """Attempt to return a single todo item based on its ID."""
        try:
            return TodoItem.objects.get(pk=id)
        except ObjectDoesNotExist:
            return None


class CreateTodoMutation(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String()

    todo = graphene.Field(TodoItemType)

    @staticmethod
    def mutate(root, info, title, description):
        todo = TodoItem(title=title, description=description, completed=False)
        todo.save()
        return CreateTodoMutation(todo=todo)
    

class UpdateTodoMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        completed = graphene.Boolean(required=True)

    todo = graphene.Field(TodoItemType)

    @staticmethod
    def mutate(root, info, id, completed):
        try:
            todo = TodoItem.objects.get(pk=id)
            todo.completed = completed
            todo.save()
            return UpdateTodoMutation(todo=todo)
        except TodoItem.DoesNotExist:
            raise ValueError("TodoItem not found with given ID")


class Mutation(graphene.ObjectType):
    update_todo = UpdateTodoMutation.Field()
    add_todo = CreateTodoMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
