from rest_framework import serializers
from .models import TeamMember, Event, Gallery
from datetime import date

class TeamMemberSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'role', 'image', 'category', 'committee_title', 'order']

    def get_image(self, obj):
        return obj.image.url if obj.image else None


class EventSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    actionType = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = [
            'id', 'title', 'description', 'location',
            'event_date', 'weekday', 'start_time', 'end_time',
            'category', 'image', 'formatted_date', 'status', 'actionType'
        ]

    def get_image(self, obj):
        return obj.image.url if obj.image else None

    def get_formatted_date(self, obj):
        return obj.event_date.strftime("%B %d, %Y") if obj.event_date else None

    def get_status(self, obj):
        return "Upcoming" if obj.event_date >= date.today() else "Completed"

    def get_actionType(self, obj):
        return "register" if obj.event_date >= date.today() else "view"


class GallerySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Gallery
        fields = ['id', 'title', 'category', 'image', 'created_at']

    def get_image(self, obj):
        return obj.image.url if obj.image else None