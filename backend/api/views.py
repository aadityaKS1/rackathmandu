from rest_framework import viewsets
from rest_framework.response import Response
from .models import Event, Gallery
from .serializer import EventSerializer, GallerySerializer

from rest_framework import viewsets
from .models import Event
from .serializer import EventSerializer

class EventListViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class GalleryListViewSet(viewsets.ViewSet):
    queryset = Gallery.objects.all()  # Keep your original style

    def list(self, request):
        photos = self.queryset

        category = request.query_params.get('category')
        if category:
            photos = photos.filter(category=category)

        serializer = GallerySerializer(photos, many=True, context={'request': request})
        return Response(serializer.data)