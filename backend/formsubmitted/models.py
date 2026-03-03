from django.db import models

class FormSubmitted(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.EmailField()
    SUBJECT_CHOICES=[
        ('compliment','Compliment'),
        ('complain','Complain'),
        ('suggestion','Suggestion'),
    ]
    subject=models.CharField(max_length=150, choices=SUBJECT_CHOICES)
    message=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.subject}"  