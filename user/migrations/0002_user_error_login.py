# Generated by Django 4.1.4 on 2023-04-01 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='error_login',
            field=models.IntegerField(default=0, verbose_name='Error Login Time'),
        ),
    ]
