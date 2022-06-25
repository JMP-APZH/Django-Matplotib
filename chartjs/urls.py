from django.urls import path
from .views import studentsView, studentsView2

urlpatterns = [
    path('chartjs1', studentsView, name='chartjs1'),
    path('chartjs2', studentsView2, name='chartjs2'),
]