'use client';

import { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions, Appearance, StripeElement, StripePaymentElement, StripeError } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Image from 'next/image';

// Initialize Stripe with debug logging
const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
console.log('Stripe Public Key:', stripePublicKey ? 'Available' : 'Missing');
const stripePromise = loadStripe(stripePublicKey!, {
  apiVersion: '2023-10-16',
  stripeAccount: process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID,
});

// FEC contribution limits
const MAX_CONTRIBUTION = 3300; // $3,300 per election
const presetAmounts = [25, 50, 100, 250, 500, 1000, 3300];

function DonationForm({ clientSecret, amount, setAmount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [employer, setEmployer] = useState<string>('');
  const [occupation, setOccupation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [isPaymentElementReady, setIsPaymentElementReady] = useState(false);
  const [isApplePayAvailable, setIsApplePayAvailable] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    // Check if Apple Pay is available
    const checkApplePaySupport = async () => {
      try {
        const paymentRequest = stripe.paymentRequest({
          country: 'US',
          currency: 'usd',
          total: {
            label: 'Donation',
            amount: amount * 100,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });

        const result = await paymentRequest.canMakePayment();
        setIsApplePayAvailable(result?.applePay === true);
      } catch (err) {
        console.error('Error checking Apple Pay support:', err);
        setIsApplePayAvailable(false);
      }
    };

    checkApplePaySupport();
  }, [stripe, amount]);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    // Listen for changes in the PaymentElement and handle errors
    const paymentElement = elements.getElement(PaymentElement) as StripePaymentElement;
    if (paymentElement) {
      console.log('Payment Element found in the DOM');
      
      // Use the correct Stripe Elements event handling
      const handleReady = () => {
        console.log('Payment Element is ready');
        setIsPaymentElementReady(true);
      };

      const handleChange = (event: any) => {
        if (event.error) {
          console.error('Payment Element error:', event.error);
          setErrorMessage(event.error.message || 'An error occurred with the payment form');
        } else {
          setErrorMessage('');
        }
      };

      // Add event listeners using Stripe's event handling
      paymentElement.on('ready', handleReady);
      paymentElement.on('change', handleChange);

      // Cleanup function
      return () => {
        paymentElement.off('ready', handleReady);
        paymentElement.off('change', handleChange);
      };
    } else {
      console.log('Payment Element NOT found in the DOM');
      setIsPaymentElementReady(false);
    }
  }, [stripe, elements, clientSecret]);

  const handleLoadError = (event: { error: StripeError }) => {
    console.error('Payment Element onLoadError:', event.error);
    setErrorMessage(event.error.message || 'The payment form failed to load. Please try refreshing the page.');
    setIsPaymentElementReady(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage('Stripe is still loading. Please try again in a moment.');
      return;
    }

    if (!isPaymentElementReady) {
      setErrorMessage('Payment form is not ready. Please wait a moment and try again.');
      return;
    }

    if (!employer || !occupation || !name || !email || !address || !city || !state || !zip) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/donate/thank-you`,
          payment_method_data: {
            billing_details: {
              name: name,
              email: email,
              address: {
                line1: address,
                city: city,
                state: state,
                postal_code: zip,
                country: 'US',
              },
            },
          },
        },
      });

      if (error) {
        console.error('Payment confirmation error:', error);
        setErrorMessage(error.message || 'An error occurred during payment processing');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setErrorMessage('An unexpected error occurred');
    }

    setIsProcessing(false);
  };

  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      const numValue = parseFloat(value);
      if (numValue > MAX_CONTRIBUTION) {
        setErrorMessage(`Contributions cannot exceed $${MAX_CONTRIBUTION.toLocaleString()}`);
        setAmount(MAX_CONTRIBUTION);
      } else {
        setAmount(numValue);
        setErrorMessage('');
      }
    }
  };

  const handleApplePayPayment = async () => {
    if (!stripe || !elements) {
      setErrorMessage('Stripe is still loading. Please try again in a moment.');
      return;
    }

    if (!employer || !occupation || !name || !email || !address || !city || !state || !zip) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/donate/thank-you`,
          payment_method_data: {
            billing_details: {
              name: name,
              email: email,
              address: {
                line1: address,
                city: city,
                state: state,
                postal_code: zip,
                country: 'US',
              },
            },
          },
        },
      });

      if (error) {
        console.error('Payment error:', error);
        setErrorMessage(error.message || 'An error occurred during payment processing');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setErrorMessage('An unexpected error occurred');
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Select Donation Amount</h3>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {presetAmounts.map((presetAmount) => (
            <button
              key={presetAmount}
              type="button"
              onClick={() => handleAmountSelect(presetAmount)}
              className={`rounded-md border p-4 text-center ${
                amount === presetAmount && !customAmount
                  ? 'border-red-700 bg-red-50 text-red-700'
                  : 'border-gray-300 hover:border-red-700'
              }`}
            >
              ${presetAmount}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700">
            Custom Amount
          </label>
          <div className="mt-1">
            <input
              type="number"
              id="custom-amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount"
              max={MAX_CONTRIBUTION}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Maximum contribution: ${MAX_CONTRIBUTION.toLocaleString()} per election
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Required Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="employer" className="block text-sm font-medium text-gray-700">
              Employer
            </label>
            <input
              type="text"
              id="employer"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Payment Details</h3>
        
        {isApplePayAvailable && (
          <div className="mb-4">
            <button
              type="button"
              onClick={handleApplePayPayment}
              disabled={isProcessing}
              className="w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
            >
              {isProcessing ? 'Processing...' : 'Pay with Apple Pay'}
            </button>
          </div>
        )}

        <div id="payment-element">
          <PaymentElement
            options={{
              layout: {
                type: 'tabs',
                defaultCollapsed: false,
              },
              paymentMethodOrder: ['apple_pay', 'card'],
            }}
            onLoadError={handleLoadError}
          />
        </div>
      </div>

      {errorMessage && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{errorMessage}</div>
        </div>
      )}

      <div className="rounded-md bg-gray-50 p-4 text-sm text-gray-700">
        <h4 className="font-medium text-gray-900">Important Notice</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Contributions to N. Lee Plumb for Congress are not tax deductible.</li>
          <li>Federal law requires us to use our best efforts to collect and report the name, mailing address, occupation, and name of employer of individuals whose contributions exceed $200 in an election cycle.</li>
          <li>Contributions from corporations, labor organization treasury funds, foreign nationals without green cards, and federal government contractors are prohibited.</li>
          <li>Contributions must be made from the donor's own funds, not those provided by another person or entity for the purpose of making the contribution.</li>
          <li>Contributions are limited to $3,300 per election.</li>
          <li>By law, the maximum amount an individual may contribute is $3,300 per election. Your contribution (up to $3,300) will be designated for the 2026 primary election, unless otherwise directed.</li>
        </ul>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing || !isPaymentElementReady}
        className="w-full rounded-md bg-red-700 px-4 py-2 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : `Donate $${amount}`}
      </button>
    </form>
  );
}

export default function DonatePage() {
  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState(50);
  const [pageError, setPageError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    setIsLoading(true);
    console.log('Fetching payment intent...');
    
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 50 }), // Default amount
    })
      .then((res) => {
        console.log('Response status:', res.status);
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Payment intent created:', data.clientSecret ? 'Success' : 'Missing client secret');
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else if (data.error) {
          setPageError(data.error || 'Failed to initialize payment');
        }
      })
      .catch((err) => {
        console.error('Error creating payment intent:', err);
        setPageError('Failed to initialize payment system. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const appearance: Appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#be123c',
    },
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full overflow-hidden">
            <img
              src="/images/personal/merica.jpg"
              alt="Support our campaign"
              className="h-full w-full object-cover"
              style={{ 
                maxHeight: "100%", 
                objectPosition: "center 10%"
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-800/70 mix-blend-multiply" />
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Support Our Campaign
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              Your contribution helps us fight for conservative values and make a difference in our community.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {isLoading && (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>
            </div>
          )}
          
          {pageError && (
            <div className="rounded-md bg-red-50 p-4 my-4">
              <div className="text-sm text-red-700">{pageError}</div>
            </div>
          )}
          
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <DonationForm 
                clientSecret={clientSecret}
                amount={amount}
                setAmount={setAmount}
              />
            </Elements>
          )}
          
          {!isLoading && !clientSecret && !pageError && (
            <div className="rounded-md bg-yellow-50 p-4 my-4">
              <div className="text-sm text-yellow-700">
                Unable to initialize the donation form. Please ensure you have correct API keys configured.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 