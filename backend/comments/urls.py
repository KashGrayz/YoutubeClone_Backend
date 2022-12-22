from django.urls import path, include
from . import views

urlpatterns = [
    path('<vpk>/all/', views.getAllComments),
    path('<vpk>/', views.addComment),
    path('update/<int:cpk>/', views.updateComment),
]

