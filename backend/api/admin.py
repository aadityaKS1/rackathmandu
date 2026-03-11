from django.contrib import admin
from .models import TeamMember, Event, Gallery

admin.site.register(Event)
admin.site.register(Gallery)
@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'category', 'committee_title', 'order']
    list_filter = ['category', 'committee_title']
    ordering = ['category', 'order']