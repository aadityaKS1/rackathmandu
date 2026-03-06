from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.search_questions, name='faq-search'),
    path('questions/<slug:slug>/', views.get_question, name='faq-question'),
]