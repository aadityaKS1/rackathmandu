from rest_framework import serializers
from .models import Event, Gallery
from datetime import date
from django.utils import timezone

class EventSerializer(serializers.ModelSerializer):
    formatted_date = serializers.SerializerMethodField()
    actionType = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()  # Use SerializerMethodField for clarity

    class Meta:
        model = Event
        fields = [
            "id",
            "title",
            "description",
            "location",
            "event_date",
            "weekday",
            "start_time",
            "end_time",
            "image",
            "formatted_date",
            "actionType",
            "status",
        ]

    def get_image(self, obj):
        if obj.image:
            return obj.image.url  # This will be the full Cloudinary URL
        return None

    def get_formatted_date(self, obj):
        if obj.event_date:
            return obj.event_date.strftime("%B %d, %Y")
        return None

    def get_actionType(self, obj):
        if obj.event_date:
            today = timezone.now().date()
            return "join" if obj.event_date >= today else "view"
        return "view"

    def get_status(self, obj):
        if obj.event_date:
            today = timezone.now().date()
            return "Upcoming" if obj.event_date >= today else "Completed"
        return "Completed"

# api/serializers.py
from rest_framework import serializers
from .models import Gallery

class GallerySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Gallery
        fields = ['id', 'title', 'category', 'image', 'created_at']

    def get_image(self, obj):
        if obj.image:
            return obj.image.url  # Cloudinary URL
        return None


    from rest_framework import serializers
from .models import TeamMember

class TeamMemberSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'role', 'image', 'category', 'order']

    def get_image(self, obj):
        # Returns the full Cloudinary URL
        return obj.image.url if obj.image else None