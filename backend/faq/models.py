from django.db import models
from django.contrib.postgres.search import SearchVectorField, SearchVector
from django.contrib.postgres.indexes import GinIndex
from django.utils.text import slugify


class Question(models.Model):
    text       = models.CharField(max_length=500)
    answer     = models.TextField()
    slug       = models.SlugField(max_length=500, unique=True, blank=True)
    is_featured = models.BooleanField(default=False) 
    created_at = models.DateTimeField(auto_now_add=True)

    related_questions = models.ManyToManyField(
        'self',
        symmetrical=True,
        blank=True
    )

    search_vector = SearchVectorField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.text)
        super().save(*args, **kwargs)
        # Update search vector after saving
        Question.objects.filter(pk=self.pk).update(
            search_vector=SearchVector('text', 'answer', config='english')
        )

    def __str__(self):
        return self.text

    class Meta:
        indexes = [
            GinIndex(fields=['search_vector'])
        ]