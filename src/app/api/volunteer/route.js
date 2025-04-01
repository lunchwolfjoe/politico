import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase, submitVolunteer } from '@/lib/supabase';
import { sendVolunteerNotification, sendVolunteerConfirmation } from '@/lib/email';

const volunteerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  interests: z.array(z.string()).min(1),
  availability: z.string().min(1),
  message: z.string().optional(),
});

// Enhanced CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...corsHeaders,
    }
  });
}

// GET method - public access
export async function GET() {
  try {
    // Test Supabase connection
    const { data, error } = await supabase
      .from('volunteers')
      .select('count', { count: 'exact', head: true });

    if (error) throw error;

    return new NextResponse(
      JSON.stringify({
        status: 'success',
        message: 'API is working properly',
        timestamp: new Date().toISOString(),
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
    console.error('API error:', error);
    
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: 'API error occurred',
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

// POST method to create a new volunteer
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate the data using Zod schema
    try {
      const validatedData = volunteerSchema.parse(body);
      
      // Create volunteer record using helper function
      const { data: volunteer, error } = await submitVolunteer(validatedData);

      if (error) throw error;

      return new NextResponse(
        JSON.stringify({
          status: 'success',
          message: 'Volunteer created successfully',
          data: volunteer,
        }),
        {
          status: 201,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    } catch (validationError) {
      return new NextResponse(
        JSON.stringify({
          status: 'error',
          message: 'Validation failed',
          errors: validationError.errors,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }
  } catch (error) {
    console.error('Failed to create volunteer:', error);
    
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: 'Failed to create volunteer',
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