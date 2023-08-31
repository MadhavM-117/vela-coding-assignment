from django.db import models


# Create your models here.
class TodoItem(models.Model):
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    assigned_users = models.ManyToManyField(
        "auth.User", related_name="todo_items", blank=True
    )
