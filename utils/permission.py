from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated

User = get_user_model()


class NormalPermission(IsAuthenticated):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated)
