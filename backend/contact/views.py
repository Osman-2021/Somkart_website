from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer


@api_view(['POST'])
def contact_submission(request):
    """
    Handle contact form submissions.
    Saves to database and sends email notification.
    """
    serializer = ContactSubmissionSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save to database
        contact = serializer.save()
        
        # Send email notification
        try:
            subject = f'New Contact Form Submission from {contact.name}'
            message = f"""
New contact form submission received from Somkart website:

Name: {contact.name}
Email: {contact.email}
Reply To: {contact.email}

Message:
{contact.message}

---
This email was sent from the Somkart website contact form.
Submission ID: {contact.id}
Timestamp: {contact.created_at}
"""
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['somkartapp@gmail.com'],
                fail_silently=False,
            )
        except Exception as e:
            # Log error but don't fail the request
            print(f"Email sending failed: {str(e)}")
        
        return Response(
            {
                'success': True,
                'message': 'Your message has been sent successfully. We will get back to you soon.'
            },
            status=status.HTTP_201_CREATED
        )
    
    return Response(
        {
            'success': False,
            'errors': serializer.errors
        },
        status=status.HTTP_400_BAD_REQUEST
    )

