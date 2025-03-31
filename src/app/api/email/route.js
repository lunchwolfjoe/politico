import { NextResponse } from 'next/server';

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// Simple email notification endpoint - doesn't actually require email functionality
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Just log the email content (no actual sending required since Supabase is handling data)
    console.log('Email notification requested:', {
      subject: body.subject,
      text: body.text,
    });

    // Return success (we're not actually sending emails, just logging)
    return new NextResponse(
      JSON.stringify({
        status: 'success',
        message: 'Email notification logged (not sent)',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error('Email API error:', error);
    
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: 'Failed to process email notification',
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
} 