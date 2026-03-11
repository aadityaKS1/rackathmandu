from django.db import models
from cloudinary.models import CloudinaryField

CATEGORY_CHOICES = [
    ('all','All Photos'),
    ('fellowship', 'Fellowship'),
    ('service', 'Service'),
    ('leadership', 'Leadership'),
    ('international', 'International'),
]

class Gallery(models.Model):
    title = models.CharField(max_length=255)
    image = CloudinaryField('image', blank=True, null=True)   # <--- CloudinaryField
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='all')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



from django.db import models
from cloudinary.models import CloudinaryField

EVENT_CATEGORY_CHOICES = [
    ('all', 'All Events'),
    ('fellowship', 'Fellowship'),
    ('service', 'Service'),
    ('leadership', 'Leadership'),
    ('international', 'International'),
]

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    event_date = models.DateField()
    weekday = models.CharField(max_length=20)
    start_time = models.TimeField()
    end_time = models.TimeField()
    
    category = models.CharField(max_length=50, choices=EVENT_CATEGORY_CHOICES, default='all')
    image = CloudinaryField('image', blank=True, null=True)  # <--- CloudinaryField

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.event_date} ({self.weekday})"





from django.db import models
from cloudinary.models import CloudinaryField

class TeamMember(models.Model):
    ROLE_CATEGORY = [
        ('executive', 'Executive Board'),
        ('committee', 'Committee'),
        ('general', 'General Member'),
    ]

    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, blank=True)
    image = CloudinaryField('image', blank=True, null=True)
    category = models.CharField(max_length=20, choices=ROLE_CATEGORY, default='executive')
    committee_title = models.CharField(max_length=100, blank=True)  # only for committee members
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} - {self.role}"