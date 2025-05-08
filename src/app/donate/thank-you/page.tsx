'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'success' | 'processing' | 'error'>('processing');

  useEffect(() => {
    const payment_intent = searchParams.get('payment_intent');
    const payment_intent_client_secret = searchParams.get('payment_intent_client_secret');
    const redirect_status = searchParams.get('redirect_status');

    if (redirect_status === 'succeeded') {
      setStatus('success');
    } else if (redirect_status === 'processing') {
      setStatus('processing');
    } else {
      setStatus('error');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/thank-you-hero.jpg"
            alt="Thank you"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-red-900/70" />
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {status === 'success' && (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Thank You for Your Support!
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-100">
                  Your contribution will help us make a difference in our community. We appreciate your support!
                </p>
              </>
            )}
            {status === 'processing' && (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Processing Your Donation
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-100">
                  Please wait while we process your donation. This may take a few moments.
                </p>
              </>
            )}
            {status === 'error' && (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Something Went Wrong
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-100">
                  We encountered an issue processing your donation. Please try again or contact us for assistance.
                </p>
              </>
            )}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-white px-5 py-3 text-base font-semibold text-red-700 shadow-sm hover:bg-gray-100"
              >
                Return Home
              </Link>
              {status === 'error' && (
                <Link
                  href="/donate"
                  className="rounded-md border border-white px-5 py-3 text-base font-semibold text-white hover:bg-white/10"
                >
                  Try Again
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 