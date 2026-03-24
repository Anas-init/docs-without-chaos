"""
ASGI config for src project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/
"""
# src/asgi.py
import os
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
import apps.document.routing  # your app's websocket routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "src.settings")

django_asgi_app = get_asgi_application()

application = ProtocolTypeRouter({
    "http": django_asgi_app,  # normal HTTP requests
    "websocket": AuthMiddlewareStack(
        URLRouter(
            apps.document.routing.websocket_urlpatterns
        )
    ),
})