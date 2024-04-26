'''Tests for Todo'''
from django.test import TestCase
from rest_framework.test import APIClient
from .models import TodoItem


class TodoItemTests(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Create some TodoItems for testing
        self.todo1 = TodoItem.objects.create(title='Test Todo 1', description='Description 1', completed=False)
        self.todo2 = TodoItem.objects.create(title='Test Todo 2', description='Description 2', completed=True)

        self.valid_payload = {
            'title': 'New Todo',
            'description': 'New Todo Description',
            'completed': True
        }
        self.invalid_payload = {
            'title': '',
            'description': 'New Todo Description',
            'completed': False
        }

    def test_todo_list(self):
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)

    def test_create_todo_valid_payload(self):
        response = self.client.post('/api/todos/', data=self.valid_payload, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(TodoItem.objects.count(), 3)

    def test_create_todo_invalid_payload(self):
        response = self.client.post('/api/todos/', data=self.invalid_payload, format='json')
        self.assertEqual(response.status_code, 400)

    def test_retrieve_todo_detail(self):
        response = self.client.get(f'/api/todos/{self.todo1.id}/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['title'], 'Test Todo 1')

    def test_update_todo_detail(self):
        updated_data = {'title': 'Updated Todo', 'completed': True}
        response = self.client.put(f'/api/todos/{self.todo1.id}/', data=updated_data, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['title'], 'Updated Todo')
        self.assertEqual(response.data['completed'], True)

    def test_delete_todo_item(self):
        response = self.client.delete(f'/api/todos/{self.todo2.id}/')
        self.assertEqual(response.status_code, 204)
        self.assertEqual(TodoItem.objects.count(), 1)

    def test_todo_item_creation(self):
        """Test if TodoItem objects are created correctly."""
        self.assertEqual(self.todo1.title, 'Test Todo 1')
        self.assertEqual(self.todo1.description, 'Description 1')
        self.assertEqual(self.todo1.completed, False)

        self.assertEqual(self.todo2.title, 'Test Todo 2')
        self.assertEqual(self.todo2.description, 'Description 2')
        self.assertEqual(self.todo2.completed, True)

    def test_str_representation(self):
        """Test the __str__ method of TodoItem model."""
        self.assertEqual(str(self.todo1), 'Test Todo 1')
        self.assertEqual(str(self.todo2), 'Test Todo 2')

if __name__ == '__main__':
    unittest.main()
