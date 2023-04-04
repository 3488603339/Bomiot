from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=False, required=False)
    password = serializers.CharField(read_only=False, required=False)
    update_time = serializers.DateTimeField(read_only=False, required=False, format='%Y-%m-%d %H:%M:%S')

    class Meta:
        model = User
        exclude = []
        read_only_fields = ['id']
