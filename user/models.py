from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    type = models.IntegerField(default=1, verbose_name="User Type")
    phone = models.CharField(default='', max_length=255, blank=True, verbose_name="Phone")
    error_login = models.IntegerField(default=0, verbose_name="Error Login Time")
    is_delete = models.BooleanField(default=False, verbose_name="Delete Label")
    update_time = models.DateTimeField(auto_now=True, blank=True, null=True, verbose_name="Update Time")

    class Meta(AbstractUser.Meta):
        pass
