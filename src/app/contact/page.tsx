'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { supabase, submitContactForm } from '@/lib/supabase';

const contactInfo = [
  {
    name: 'Email',
    description: 'info@nleeplumb.com',
    icon: EnvelopeIcon,
    href: 'mailto:info@nleeplumb.com',
  },
  {
    name: 'Phone',
    description: '(555) 123-4567',
    icon: PhoneIcon,
    href: 'tel:+15551234567',
  },
  {
    name: 'Office',
    description: '123 Campaign Street, City, State 12345',
    icon: MapPinIcon,
    href: 'https://maps.google.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
    details?: any;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({});
    
    console.log('Submitting contact form with data:', formData);

    try {
      // Test connection first
      let connected = false;
      let connectionError = null;
      
      try {
        const result = await supabase.from('contact_messages').select('count', { count: 'exact', head: true });
        connected = !result.error;
        connectionError = result.error;
      } catch (error) {
        connected = false;
        connectionError = error;
      }
      
      if (!connected) {
        setFormStatus({
          success: false,
          message: 'Could not connect to the database. Please try again later.',
          error: connectionError?.message || 'Connection failed',
          details: connectionError
        });
        setIsSubmitting(false);
        return;
      }
      
      // Use the helper function to submit the form
      const { data, error } = await submitContactForm(formData);
      
      if (error) {
        console.error('Error submitting contact form:', error);
        setFormStatus({
          success: false,
          message: 'Failed to send message. Please try again.',
          error: error.message || 'Form submission failed',
          details: error
        });
        setIsSubmitting(false);
        return;
      }

      // Send email notification (optional fallback)
      try {
        await fetch('/api/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            subject: 'New Contact Form Submission',
            text: `New message from: ${formData.firstName} ${formData.lastName} (${formData.email})\nPhone: ${formData.phoneNumber || 'Not provided'}\nMessage: ${formData.message}`,
          }),
        });
      } catch (emailError) {
        console.warn('Email notification failed, but data was saved:', emailError);
      }

      // Reset form and show success message
      setFormStatus({
        success: true,
        message: 'Your message has been sent!'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
        error: error.message || 'Unknown error',
        details: { message: error.message, stack: error.stack }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Campaign office"
            className="h-full w-full object-cover brightness-75"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/50 mix-blend-multiply" />
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              We're here to answer your questions and hear your ideas. Join us in building a stronger America.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Connect With Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you want to volunteer, donate, or just learn more about our campaign, we have multiple ways to reach us.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {contactInfo.map((item) => (
            <div key={item.name} className="flex flex-col items-start bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
              <div className="rounded-lg bg-red-700 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-8 text-gray-900">{item.name}</h3>
              <a
                href={item.href}
                className="mt-4 text-lg leading-8 text-gray-600 hover:text-red-700"
              >
                {item.description}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Send Us a Message</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll get back to you as soon as possible. Your voice matters to us.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-2xl bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
          {formStatus.message && (
            <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              <p className="font-medium">{formStatus.message}</p>
              
              {formStatus.error && (
                <p className="mt-1 text-sm">{formStatus.error}</p>
              )}
              
              {!formStatus.success && formStatus.details && (
                <details className="mt-2">
                  <summary className="text-sm cursor-pointer">View technical details</summary>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-40">
                    {JSON.stringify(formStatus.details, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 disabled:opacity-75"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 