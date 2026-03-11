from django.urls import path
from . import views

urlpatterns = [
    # Team
    path('team/executive-board/', views.executive_board),
    path('team/committees/', views.committees),
    path('team/general-members/', views.general_members),

    # Events
    path('events/', views.events),

    # Gallery
    path('gallery/', views.gallery),
]