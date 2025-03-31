import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { sendVolunteerNotification, sendVolunteerConfirmation } from '@/lib/email';

const volunteerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  interests: z.array(z.string()).min(1),
  availability: z.string().min(1),
  message: z.string().optional(),
});

const prisma = new PrismaClient();

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// GET method to test database connectivity
export async function GET() {
  try {
    // Test database connection
    await prisma.$connect();
    
    return new NextResponse(
      JSON.stringify({
        status: 'ok',
        message: 'Database connection successful',
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
    console.error('Database connection error:', error);
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: 'Database connection failed',
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
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return new NextResponse(
        JSON.stringify({
          status: 'error',
          message: 'Missing required fields',
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

    // Create volunteer record
    const volunteer = await prisma.volunteer.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        interests: body.interests || [],
        availability: body.availability || '',
        message: body.message || '',
      },
    });

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
  } catch (error) {
    console.error('Error creating volunteer:', error);
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