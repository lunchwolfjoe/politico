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

// Create a simple test route that only tests database connectivity
export async function GET() {
  try {
    console.log('======== TESTING DATABASE CONNECTION ========');
    console.log('Environment check:');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('SENDGRID_API_KEY exists:', !!process.env.SENDGRID_API_KEY);
    console.log('ADMIN_EMAIL exists:', !!process.env.ADMIN_EMAIL);
    console.log('EMAIL_FROM exists:', !!process.env.EMAIL_FROM);
    
    const prisma = new PrismaClient();
    
    try {
      console.log('Connecting to database...');
      await prisma.$connect();
      console.log('Database connected successfully');
      
      // Try a simple query
      const count = await prisma.volunteer.count();
      console.log('Volunteer count:', count);
      
      await prisma.$disconnect();
      console.log('Database disconnected');
      
      return new NextResponse(
        JSON.stringify({ 
          success: true, 
          message: 'Database connection successful',
          count: count,
          environmentCheck: {
            databaseUrl: process.env.DATABASE_URL ? 'Set (hidden for security)' : 'Not set',
            sendgridApiKey: process.env.SENDGRID_API_KEY ? 'Set' : 'Not set',
            adminEmail: process.env.ADMIN_EMAIL ? 'Set' : 'Not set',
            emailFrom: process.env.EMAIL_FROM ? 'Set' : 'Not set'
          }
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
    } catch (error) {
      console.error('Database connection error:', error);
      
      return new NextResponse(
        JSON.stringify({ 
          success: false, 
          message: 'Database connection failed',
          error: error.message,
          environmentCheck: {
            databaseUrl: process.env.DATABASE_URL ? 'Set (hidden for security)' : 'Not set',
            sendgridApiKey: process.env.SENDGRID_API_KEY ? 'Set' : 'Not set',
            adminEmail: process.env.ADMIN_EMAIL ? 'Set' : 'Not set',
            emailFrom: process.env.EMAIL_FROM ? 'Set' : 'Not set'
          }
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
    }
  } catch (error) {
    console.error('Unexpected error in GET handler:', error);
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        message: 'Internal server error',
        error: error.message 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  console.log('======== VOLUNTEER FORM SUBMISSION - START ========');
  console.log('Environment check:');
  console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
  console.log('SENDGRID_API_KEY exists:', !!process.env.SENDGRID_API_KEY);
  console.log('ADMIN_EMAIL exists:', !!process.env.ADMIN_EMAIL);
  console.log('EMAIL_FROM exists:', !!process.env.EMAIL_FROM);
  
  const prisma = new PrismaClient();
  
  try {
    console.log('Parsing request body...');
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));
    
    // Validate the data
    console.log('Validating data...');
    const validatedData = volunteerSchema.parse(body);
    console.log('Data validated successfully');
    
    console.log('Connecting to database...');
    try {
      await prisma.$connect();
      console.log('Database connected successfully');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      throw new Error(`Failed to connect to database: ${dbError.message}`);
    }
    
    console.log('Creating volunteer record...');
    try {
      const volunteer = await prisma.volunteer.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          interests: Array.isArray(validatedData.interests) ? validatedData.interests.join(', ') : validatedData.interests,
          availability: validatedData.availability,
          message: validatedData.message || '',
        },
      });
      console.log('Volunteer record created successfully:', volunteer.id);
      
      // Send email notifications
      if (process.env.SENDGRID_API_KEY) {
        console.log('Sending email notifications...');
        try {
          const notificationResult = await sendVolunteerNotification({
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            interests: Array.isArray(validatedData.interests) ? validatedData.interests.join(', ') : validatedData.interests,
            availability: validatedData.availability,
            message: validatedData.message || '',
          });
          
          console.log('Admin notification email result:', notificationResult);
          
          const confirmationResult = await sendVolunteerConfirmation({
            name: validatedData.name,
            email: validatedData.email,
          });
          
          console.log('Confirmation email result:', confirmationResult);
        } catch (emailError) {
          console.error('Error sending emails:', emailError);
          // Don't throw here - we still want to return success since the DB record was created
        }
      } else {
        console.log('Skipping email notifications - SENDGRID_API_KEY not set');
      }
      
      return NextResponse.json(
        { 
          success: true,
          message: 'Volunteer application submitted successfully',
          volunteer: volunteer
        },
        { status: 201 }
      );
    } catch (createError) {
      console.error('Error creating volunteer record:', createError);
      throw new Error(`Failed to create volunteer record: ${createError.message}`);
    }
    
  } catch (error) {
    console.error('======== VOLUNTEER FORM SUBMISSION - ERROR ========');
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Invalid form data',
          error: 'Validation failed',
          details: error.errors
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Internal server error',
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    try {
      await prisma.$disconnect();
      console.log('Database disconnected');
    } catch (disconnectError) {
      console.error('Error disconnecting from database:', disconnectError);
    }
  }
} 