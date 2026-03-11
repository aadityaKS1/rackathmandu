from django.contrib import admin
from django.urls import path, include
from formsubmitted.views import FormSubmittedViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("formsubmitted/form", FormSubmittedViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/faq/', include('faq.urls')),
    path('api/', include('api.urls')),
] + router.urls