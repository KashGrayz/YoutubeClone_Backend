from django.urls import path, include
from . import views

urlpatterns = [
    path('<cpk>/all/', views.get_all_replies),
    path('<cpk>/', views.user_replies),
]