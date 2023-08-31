from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from vela.todolist.models import TodoItem


class TodoItemTests(APITestCase):
    @classmethod
    def setUpTestData(cls):
        TodoItem.objects.create(description="Water the plants")

    def test_create_todo_item(self):
        url = reverse("todo-list")
        data = {"description": "Walk the dog"}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TodoItem.objects.count(), 2)
        self.assertEqual(TodoItem.objects.get(id=2).description, "Walk the dog")
        self.assertEqual(TodoItem.objects.get(id=2).completed, False)

    def test_list_todo_items(self):
        url = reverse("todo-list")
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data.get("results")), 1)
        self.assertEqual(response.data["results"][0]["description"], "Water the plants")
        self.assertEqual(response.data["results"][0]["completed"], False)

    def test_get_todo_item(self):
        url = reverse("todo-detail", args=[1])
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["description"], "Water the plants")
        self.assertEqual(response.data["completed"], False)

    def test_update_todo_item(self):
        url = reverse("todo-detail", args=[1])
        data = {"description": "Water the plant", "completed": True}
        response = self.client.put(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(TodoItem.objects.get(id=1).description, "Water the plant")
        self.assertEqual(TodoItem.objects.get(id=1).completed, True)
