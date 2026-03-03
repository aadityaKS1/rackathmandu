from rest_framework import serializers
from .models import FormSubmitted

class FormSubmittedSerializer(serializers.ModelSerializer):
    class Meta:
        model=FormSubmitted
        fields="__all__"