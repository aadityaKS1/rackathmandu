from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TeamMember, Event, Gallery
from .serializer import TeamMemberSerializer, EventSerializer, GallerySerializer


# ── Team Views ──────────────────────────────────────────────

@api_view(['GET'])
def executive_board(request):
    members = TeamMember.objects.filter(category='executive')
    serializer = TeamMemberSerializer(members, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def committees(request):
    members = TeamMember.objects.filter(category='committee').order_by('committee_title', 'order')

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


# ── Event Views ──────────────────────────────────────────────

@api_view(['GET'])
def events(request):
    all_events = Event.objects.all().order_by('-event_date')
    serializer = EventSerializer(all_events, many=True)
    return Response(serializer.data)


# ── Gallery Views ──────────────────────────────────────────────

@api_view(['GET'])
def gallery(request):
    category = request.query_params.get('category', None)
    if category and category != 'all':
        photos = Gallery.objects.filter(category=category).order_by('-created_at')
    else:
        photos = Gallery.objects.all().order_by('-created_at')
    serializer = GallerySerializer(photos, many=True)
    return Response(serializer.data)