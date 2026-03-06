
from django.contrib import admin
from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from api.views import EventListViewSet, GalleryListViewSet
from formsubmitted.views import FormSubmittedViewSet
from django.conf import settings
from django.conf.urls.static import static 

router=DefaultRouter()
router.register("api/events",EventListViewSet)
router.register("api/gallery",GalleryListViewSet)
router.register("formsubmitted/form",FormSubmittedViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/faq/', include('faq.urls')),
] + router.urls 


# Serve media files during development
# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
