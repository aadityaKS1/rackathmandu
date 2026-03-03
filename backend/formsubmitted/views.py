from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import FormSubmitted
from .serializer import FormSubmittedSerializer

# import ssl

# try:
#     _create_unverified_https_context = ssl._create_unverified_context
# except AttributeError:
#     pass
# else:
#     ssl._create_default_https_context = _create_unverified_https_context


class FormSubmittedViewSet(viewsets.ModelViewSet):
    queryset = FormSubmitted.objects.all()
    serializer_class = FormSubmittedSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Save the form to the database
            form_instance = serializer.save()

            # Prepare email content
            subject = f"New Message: {form_instance.subject}"
            message = f"""
You have received a new message from your website contact form:

Name: {form_instance.full_name}
Email: {form_instance.email}
Subject: {form_instance.subject}
Message: {form_instance.message}
            """
            recipient_list = ['anishks494@gmail.com']  

            try:
                # Send the email
                send_mail(
                    subject,
                    message,
                    settings.DEFAULT_FROM_EMAIL,
                    recipient_list,
                    fail_silently=False,
                )
            except Exception as e:
                print("Email sending failed:", e)

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
