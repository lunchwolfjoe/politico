import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Debug stripe configuration
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
console.log('Stripe Secret Key:', stripeSecretKey ? 'Available' : 'Missing');

if (!stripeSecretKey) {
  console.error('STRIPE_SECRET_KEY is not defined in the environment variables');
}

let stripe: Stripe | null = null;
try {
  stripe = new Stripe(stripeSecretKey!, {
    apiVersion: '2023-10-16',
  });
} catch (error) {
  console.error('Failed to initialize Stripe:', error);
}

export async function POST(req: Request) {
  if (!stripe) {
    console.error('Stripe not initialized, cannot process payment intent');
    return NextResponse.json(
      { error: 'Payment system not configured properly' },
      { status: 500 }
    );
  }

  try {
    console.log('Creating payment intent...');
    const body = await req.json();
    const { 
      amount, 
      employer, 
      occupation,
      name,
      email,
      address,
      city,
      state,
      zip
    } = body;
    
    console.log('Request data:', { 
      amount, 
      employer, 
      occupation,
      name,
      email,
      address,
      city,
      state,
      zip
    });

    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      console.error('Invalid amount:', amount);
      return NextResponse.json(
        { error: 'Invalid contribution amount' },
        { status: 400 }
      );
    }

    if (amount > 3300) {
      console.error('Amount exceeds limit:', amount);
      return NextResponse.json(
        { error: 'Contribution amount exceeds FEC limit' },
        { status: 400 }
      );
    }

    // Only validate donor information if it's provided
    const hasDonorInfo = name && email && address && city && state && zip && employer && occupation;
    
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Amount should already be in cents from the client
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true
      },
      metadata: {
        employer: employer || '',
        occupation: occupation || '',
        name: name || '',
        email: email || '',
        address: address || '',
        city: city || '',
        state: state || '',
        zip: zip || ''
      },
      receipt_email: email || undefined,
      shipping: name && address && city && state && zip ? {
        name: name,
        address: {
          line1: address,
          city: city,
          state: state,
          postal_code: zip,
          country: 'US'
        }
      } : undefined
    });

    console.log('Payment intent created successfully:', paymentIntent.id);
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error('Error creating payment intent:', err);
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    );
  }
} 