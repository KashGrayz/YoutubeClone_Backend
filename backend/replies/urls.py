from django.urls import path, include
from . import views

urlpatterns = [
    path('<cpk>/', views.user_replies),
]