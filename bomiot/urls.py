import os
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.static import serve
from django.conf import settings
from django.contrib.staticfiles.views import serve
from django.views.static import serve as static_serve
from . import views

def return_static(request, path, insecure=True, **kwargs):
  return serve(request, path, insecure, **kwargs)

app_name = 'bomiot'

urlpatterns = [
    path('admin/', admin.site.urls),
]

if 'rosetta' in settings.INSTALLED_APPS:
    urlpatterns += [
        re_path(r'^rosetta/', include('rosetta.urls'))
    ]

urlpatterns += [
    path('favicon.ico', views.favicon, name='favicon'),
    re_path(r'^static/(?P<path>.*)$', return_static, name='static'),
    re_path(r'^media/(?P<path>.*)$', static_serve, {'document_root': settings.MEDIA_ROOT}),
    path('silk/', include('silk.urls', namespace='silk'))
]

handler404 = views.page_not_found
handler403 = views.permission_denied

APP_LIST = os.listdir(settings.BASE_DIR)
for APP in APP_LIST:
    ADD_APP_DIR = os.path.join(os.path.join(settings.BASE_DIR, APP), 'config.ini')
    if APP != 'config' and os.path.exists(ADD_APP_DIR):
        urlpatterns += [
            path(APP + '/', include(APP + '.urls'))
        ]
