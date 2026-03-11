from django.urls import path
from . import views

urlpatterns = [
    path('team/executive-board/', views.executive_board),
    path('team/committees/', views.committees),
    path('team/general-members/', views.general_members),
]