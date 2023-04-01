from django.conf import settings
from .extends import admin, apps
import os


def create_config_ini(path):
    config_ini = os.path.join(path, "config.ini")
    with open(config_ini, "w") as f:
        f.write("\n")
    f.close()


def create_views_py(path):
    views_py = os.path.join(path, "views.py")
    with open(views_py, "w") as f:
        f.write("\n")
    f.close()


def create_urls_py(path):
    urls_py = os.path.join(path, "urls.py")
    with open(urls_py, "w") as f:
        f.write("from django.urls import path, re_path, include\n")
        f.write("\n")
        f.write("urlpatterns = [\n")
        f.write("]\n")
    f.close()


def create_test_py(path):
    test_py = os.path.join(path, "test.py")
    with open(test_py, "w") as f:
        f.write("from django.test import TestCase\n")
        f.write("\n")
        f.write("# Create your tests here.\n")
    f.close()


def create_models_py(path):
    models_py = os.path.join(path, "models.py")
    with open(models_py, "w") as f:
        f.write("from django.db import models\n")
        f.write("\n")
        f.write("# Create your models here.\n")
    f.close()


def get_app_name(name):
    for app in name:
        app_dir = os.path.join(settings.BASE_DIR, app)
        if os.path.exists(app_dir):
            return 'APP has been exists'
        else:
            os.mkdir(app_dir)
            database_dir = os.path.join(app_dir, 'migrations')
            os.mkdir(database_dir)
            database_init_py = os.path.join(database_dir, "__init__.py")
            with open(database_init_py, "w") as f:
                f.write("\n")
            init_py = os.path.join(app_dir, "__init__.py")
            with open(init_py, "w") as f:
                f.write("\n")
            admin.create_admin_py(app_dir)
            apps.create_apps_py(app_dir, app)
            create_models_py(app_dir)
            create_urls_py(app_dir)
            create_test_py(app_dir)
            create_views_py(app_dir)
            create_config_ini(app_dir)
            return f'Success create app {app}'
