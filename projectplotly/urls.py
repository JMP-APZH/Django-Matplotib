from django.urls import path
from .views import index

urlpatterns = [
    path('plotly1', index, name='plotly1'),
]