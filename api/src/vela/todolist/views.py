from django.shortcuts import render

# Create your views here.
from vela.todolist.models import TodoItem
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions, generics, mixins
from vela.todolist.serializers import TodoItemSerializer


class TodoItemList(
    mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView
):
    """
    List all TodoItems, or create a new TodoItem.
    """

    queryset = TodoItem.objects.all().order_by("-created")
    serializer_class = TodoItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class TodoItemDetail(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, generics.GenericAPIView
):
    """
    Retrieve, or update a TodoItem instance.
    """

    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
