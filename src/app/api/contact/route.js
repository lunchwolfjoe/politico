import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { sendContactFormNotification } from '@/lib/email';

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    console.log('======== CONTACT FORM SUBMISSION - START ========');
    console.log('Environment check:');
    console.log('SENDGRID_API_KEY exists:', !!process.env.SENDGRID_API_KEY);
    console.log('ADMIN_EMAIL exists:', !!process.env.ADMIN_EMAIL);
    console.log('EMAIL_FROM exists:', !!process.env.EMAIL_FROM);
    
    // Get form data from request
    console.log('Parsing request body...');
    const formData = await request.json();
    console.log('Form data:', JSON.stringify(formData, null, 2));
    
    const { firstName, lastName, email, phoneNumber, message } = formData;

    // Validate form data
    if (!firstName || !lastName || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email notification...');
    
    // Send email notification using the utility function
    const emailSent = await sendContactFormNotification({
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    });

    if (!emailSent) {
      console.error('Failed to send email notification');
      throw new Error('Failed to send email notification');
    }

    console.log('Email notification sent successfully');
    console.log('======== CONTACT FORM SUBMISSION - SUCCESS ========');

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Your message has been sent. We will contact you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('======== CONTACT FORM SUBMISSION - ERROR ========');
    console.error('Contact form error:', error);
    
    // Log detailed error info
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error sending your message. Please try again later.',
        error: error.message
      },
      { status: 500 }
    );
  }
} 