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


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TeamMember
from .serializer import TeamMemberSerializer
from itertools import groupby

@api_view(['GET'])
def executive_board(request):
    members = TeamMember.objects.filter(category='executive')
    serializer = TeamMemberSerializer(members, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def committees(request):
    members = TeamMember.objects.filter(category='committee').order_by('committee_title', 'order')
    
    # Group by committee_title
    grouped = {}
    for member in members:
        title = member.committee_title
        if title not in grouped:
            grouped[title] = []
        grouped[title].append(TeamMemberSerializer(member).data)
    
    result = [{"title": title, "members": members} for title, members in grouped.items()]
    return Response(result)

@api_view(['GET'])
def general_members(request):
    members = TeamMember.objects.filter(category='general')
    serializer = TeamMemberSerializer(members, many=True)
    return Response(serializer.data)