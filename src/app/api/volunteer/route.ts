import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

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
  try {
    const body = await request.json();
    const validatedData = volunteerSchema.parse(body);

    // Create volunteer record
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

    // TODO: Send email notification to campaign staff
    // TODO: Send confirmation email to volunteer

    return NextResponse.json(
      { message: 'Volunteer application submitted successfully', volunteer },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Error processing volunteer application:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 