from django.db import models
from utils.db import BaseModel
from django.conf import settings


class ThrottleModel(BaseModel):
    ip = models.CharField(max_length=32, verbose_name="IP")
    method = models.CharField(max_length=18, verbose_name="Method")
    t_code = models.CharField(max_length=255, verbose_name="Transaction Code")

    class Meta:
        db_table = settings.BASE_DB_TABLE + ' throttle'
        verbose_name = settings.BASE_DB_TABLE + ' Throttle'
        verbose_name_plural = verbose_name
        ordering = ['-id']
        permissions = ()
