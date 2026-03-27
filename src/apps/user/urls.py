from django.urls import path
from .views import test_view

urlpatterns = [
    path("register/", name="register"),
    path("login/",name="login")
]