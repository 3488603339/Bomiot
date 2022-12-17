from django.core.management.base import BaseCommand
from django.conf import settings
import os

class Command(BaseCommand):
    help = "It will create bomiot APP"

    def add_arguments(self, parser):
        parser.add_argument('bomiotapp', nargs='+')

    def handle(self, *args, **options):
        for plugin in options.get('bomiotapp'):
            plugin_dir = os.path.join(settings.BASE_DIR, plugin)
            if os.path.exists(plugin_dir):
                raise NotImplementedError()
            else:
                os.mkdir(plugin_dir)
                database_dir = os.path.join(plugin_dir, 'migrations')
                os.mkdir(database_dir)
                database_init_py = os.path.join(database_dir, "__init__.py")
                with open(database_init_py, "w") as f:
                    f.write("\n")
                init_py = os.path.join(plugin_dir, "__init__.py")
                with open(init_py, "w") as f:
                    f.write("\n")
                admin_py = os.path.join(plugin_dir, "admin.py")
                with open(admin_py, "w") as f:
                    f.write("from django.contrib import admin\n")
                    f.write("\n")
                    f.write("# Register your models here.\n")
                apps_py = os.path.join(plugin_dir, "apps.py")
                with open(apps_py, "w") as f:
                    f.write("from django.apps import AppConfig\n")
                    f.write("\n")
                    f.write(f"class {plugin.capitalize()}Config(AppConfig):\n")
                    f.write(f"    name = '{plugin}'\n")
                models_py = os.path.join(plugin_dir, "throttle.py")
                with open(models_py, "w") as f:
                    f.write("from django.db import models\n")
                    f.write("\n")
                    f.write("# Create your models here.\n")
                test_py = os.path.join(plugin_dir, "test.py")
                with open(test_py, "w") as f:
                    f.write("from django.test import TestCase\n")
                    f.write("\n")
                    f.write("# Create your tests here.\n")
                urls_py = os.path.join(plugin_dir, "urls.py")
                with open(urls_py, "w") as f:
                    f.write("from django.urls import path, re_path, include\n")
                    f.write("\n")
                    f.write("urlpatterns = [\n")
                    f.write("]\n")
                views_py = os.path.join(plugin_dir, "views.py")
                with open(views_py, "w") as f:
                    f.write("\n")
                config_ini = os.path.join(plugin_dir, "config.ini")
                with open(config_ini, "w") as f:
                    f.write("\n")

