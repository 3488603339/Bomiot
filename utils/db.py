from django.db import models
from django.conf import settings


class BaseModel(models.Model):
    is_delete = models.BooleanField(default=False, help_text="Is Delete", verbose_name="Is Delete")
    update_time = models.DateTimeField(auto_now=True, null=True, blank=True, help_text="Update Time",
                                       verbose_name="Update Time")
    create_time = models.DateTimeField(auto_now_add=True, null=True, blank=True, help_text="Create Time",
                                       verbose_name="Create Time")

    class Meta:
        abstract = True
        verbose_name = settings.BASE_DB_TABLE + ' Base Model'
        verbose_name_plural = verbose_name
