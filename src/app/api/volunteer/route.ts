import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { sendVolunteerNotification, sendVolunteerConfirmation } from '@/lib/email';

const prisma = new PrismaClient();

const volunteerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  interests: z.array(z.string()).min(1),
  availability: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  console.log('======== VOLUNTEER FORM SUBMISSION - START ========');
  console.log('Environment check:');
  console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
  console.log('SENDGRID_API_KEY exists:', !!process.env.SENDGRID_API_KEY);
  console.log('ADMIN_EMAIL exists:', !!process.env.ADMIN_EMAIL);
  console.log('EMAIL_FROM exists:', !!process.env.EMAIL_FROM);
  
  try {
    console.log('Parsing request body...');
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));
    
    console.log('Validating data with Zod...');
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
    const volunteer = await prisma.volunteer.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        interests: validatedData.interests.join(', '),
        availability: validatedData.availability,
        message: validatedData.message,
      },
    });
    console.log('Volunteer record created successfully:', volunteer.id);

    console.log('Sending email notifications...');
    try {
      const notificationResult = await sendVolunteerNotification({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        interests: validatedData.interests.join(', '),
        availability: validatedData.availability,
        message: validatedData.message,
      });
      
      console.log('Admin notification email result:', notificationResult);
      
      const confirmationResult = await sendVolunteerConfirmation({
        name: validatedData.name,
        email: validatedData.email,
      });
      
      console.log('Confirmation email result:', confirmationResult);
      
      if (!notificationResult || !confirmationResult) {
        console.warn('One or both emails failed to send');
      }
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Don't throw here - we still want to return success since the DB record was created
    }

    console.log('======== VOLUNTEER FORM SUBMISSION - SUCCESS ========');
    return NextResponse.json(
      { message: 'Volunteer application submitted successfully', volunteer },
      { status: 201 }
    );
  } catch (error) {
    console.error('======== VOLUNTEER FORM SUBMISSION - ERROR ========');
    
    if (error instanceof z.ZodError) {
      console.error('Validation error:', JSON.stringify(error.errors, null, 2));
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { 
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