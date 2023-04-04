from django.urls import path, re_path
from . import views


urlpatterns = [
    path('list/', views.UserViewSet.as_view({"get": "list"}), name="userlist")
]
