import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { sendContactFormNotification } from '@/lib/email';

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    // Get form data from request
    const formData = await request.json();
    const { firstName, lastName, email, phoneNumber, message } = formData;

    // Validate form data
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification using the utility function
    const emailSent = await sendContactFormNotification({
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    });

    if (!emailSent) {
      throw new Error('Failed to send email notification');
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Your message has been sent. We will contact you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
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