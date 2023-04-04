import os
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.static import serve
from django.conf import settings
from django.contrib.staticfiles.views import serve
from django.views.static import serve as static_serve
from . import views
from django.views.generic.base import TemplateView


def return_static(request, path, insecure=True, **kwargs):
    return serve(request, path, insecure, **kwargs)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.logins, name='login'),
    path('logout/', views.logouts, name='logout'),
    path('register/', views.registers, name='register'),
    path('checktoken/', views.check_token, name='checktoken'),
    path('', TemplateView.as_view(template_name='dist/spa/index.html')),
]

urlpatterns += [
    path('favicon.ico', views.favicon, name='favicon'),
    re_path('^css/.*$', views.statics, name='css'),
    re_path('^js/.*$', views.statics, name='js'),
    re_path('^assets/.*$', views.statics, name='assets'),
    re_path('^statics/.*$', views.statics, name='statics'),
    re_path('^fonts/.*$', views.statics, name='fonts'),
    re_path('^icons/.*$', views.statics, name='assets'),
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

views.create_super_user()