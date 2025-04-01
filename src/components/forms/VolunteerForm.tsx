'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '@/components/ui/Button';
import { submitVolunteer } from '@/lib/supabase';

const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  availability: z.string().min(1, 'Please select your availability'),
  message: z.string().optional(),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

const interests = [
  'Digital Campaign Ambassador',
  'Phone Banking',
  'Event Organization',
  'Veteran Outreach',
  'Tech Advisory Committee',
];

const availabilityOptions = [
  'Weekdays',
  'Weekends',
  'Evenings',
  'Flexible',
];

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [responseData, setResponseData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setResponseData(null);
    
    console.log('Form data to submit:', data);

    try {
      // Submit to Supabase
      const { data: responseData, error } = await submitVolunteer({
        name: data.name,
        email: data.email,
        phone: data.phone,
        interests: data.interests.join(', '),
        availability: data.availability,
        message: data.message || '',
      });

      console.log('Supabase submission response:', responseData, error);
      
      if (error) {
        setResponseData(error);
        setErrorMessage(error.message || 'Failed to submit form. Please try again later.');
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred');
      setResponseData(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Interests Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Areas of Interest
          </label>
          <div className="mt-2 space-y-2">
            {interests.map((interest) => (
              <div key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  id={interest}
                  value={interest}
                  {...register('interests')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={interest} className="ml-2 block text-sm text-gray-700">
                  {interest}
                </label>
              </div>
            ))}
          </div>
          {errors.interests && (
            <p className="mt-1 text-sm text-red-600">{errors.interests.message}</p>
          )}
        </div>

        {/* Availability Field */}
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
            Availability
          </label>
          <select
            id="availability"
            {...register('availability')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">Select availability</option>
            {availabilityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.availability && (
            <p className="mt-1 text-sm text-red-600">{errors.availability.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
        </Button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-sm text-green-600 font-medium">
            Thank you for your interest! We'll be in touch soon.
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
          <p className="text-sm text-red-600 font-medium">
            There was an error submitting your application:
          </p>
          <p className="text-sm text-red-600">{errorMessage || 'Please try again'}</p>
          
          {responseData && (
            <details className="mt-2">
              <summary className="text-sm text-red-600 cursor-pointer">View technical details</summary>
              <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-40">
                {JSON.stringify(responseData, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}
    </form>
  );
} 