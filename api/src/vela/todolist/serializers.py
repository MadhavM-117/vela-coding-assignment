from vela.todolist.models import TodoItem
from rest_framework import serializers


class TodoItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TodoItem
        fields = [
            "id",
            "description",
            "completed",
            "created",
            "updated",
            "assigned_users",
        ]
