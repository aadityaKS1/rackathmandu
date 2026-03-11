from django.contrib import admin
from .models import Question


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display  = ('text','is_featured', 'created_at')
    list_editable = ('is_featured',)
    search_fields = ('text', 'answer')
    prepopulated_fields = {'slug': ('text',)}
    filter_horizontal = ('related_questions',)