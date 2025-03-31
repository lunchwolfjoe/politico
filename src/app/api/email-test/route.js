import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function GET() {
  console.log('======== TESTING EMAIL SERVICE ========');
  console.log('Environment check:');
  console.log('SENDGRID_API_KEY exists:', !!process.env.SENDGRID_API_KEY);
  console.log('ADMIN_EMAIL exists:', !!process.env.ADMIN_EMAIL);
  console.log('EMAIL_FROM exists:', !!process.env.EMAIL_FROM);
  
  if (!process.env.SENDGRID_API_KEY) {
    return NextResponse.json({
      success: false,
      message: 'SendGrid API key not found in environment variables',
      environmentCheck: {
        sendgridApiKey: false,
        adminEmail: !!process.env.ADMIN_EMAIL,
        emailFrom: !!process.env.EMAIL_FROM
      }
    }, { status: 500 });
  }
  
  if (!process.env.EMAIL_FROM) {
    return NextResponse.json({
      success: false,
      message: 'Sender email not found in environment variables',
      environmentCheck: {
        sendgridApiKey: true,
        adminEmail: !!process.env.ADMIN_EMAIL,
        emailFrom: false
      }
    }, { status: 500 });
  }
  
  try {
    // Prepare a test email
    const msg = {
      to: process.env.ADMIN_EMAIL || 'info@nleeplumb.com',
      from: process.env.EMAIL_FROM || 'info@nleeplumb.com',
      subject: 'Email Service Test',
      text: 'This is a test email from your website API.',
      html: '<p>This is a test email from your website API.</p>',
    };
    
    console.log('Attempting to send test email to:', msg.to);
    console.log('From:', msg.from);
    
    // Send the email
    const response = await sgMail.send(msg);
    console.log('Email sent successfully, status code:', response[0]?.statusCode);
    
    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      statusCode: response[0]?.statusCode,
      to: msg.to,
      from: msg.from,
      environmentCheck: {
        sendgridApiKey: true,
        adminEmail: !!process.env.ADMIN_EMAIL,
        emailFrom: true
      }
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    
    // Log detailed error info if available
    if (error.response) {
      console.error('SendGrid response error:', {
        statusCode: error.response.statusCode,
        body: error.response.body,
        headers: error.response.headers
      });
    }
    
    return NextResponse.json({
      success: false,
      message: 'Failed to send test email',
      error: error.message,
      details: error.response ? error.response.body : null,
      environmentCheck: {
        sendgridApiKey: true,
        adminEmail: !!process.env.ADMIN_EMAIL,
        emailFrom: true
      }
    }, { status: 500 });
  }
} 