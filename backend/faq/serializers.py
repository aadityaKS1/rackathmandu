from rest_framework import serializers
from .models import Question


class QuestionListSerializer(serializers.ModelSerializer):
    """Used for search results — lightweight, no answer"""
    class Meta:
        model  = Question
        fields = ['id', 'text', 'slug']


class QuestionDetailSerializer(serializers.ModelSerializer):
    """Used for full question view — includes answer and related questions"""
    related_questions = QuestionListSerializer(many=True, read_only=True)

    class Meta:
        model  = Question
        fields = ['id', 'text', 'slug', 'answer', 'related_questions']