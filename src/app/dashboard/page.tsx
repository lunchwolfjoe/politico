'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type ContactSubmission = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
};

type VolunteerSubmission = {
  id: number;
  name: string;
  email: string;
  phone: string;
  interests: string[];
  availability: string;
  message: string;
  created_at: string;
};

export default function DashboardPage() {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [volunteerSubmissions, setVolunteerSubmissions] = useState<VolunteerSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Specifically check for any cached references to the old table name
    if (window && window.location) {
      console.log('Dashboard URL:', window.location.href);
      console.log('Application version:', new Date().toISOString());
    }

    async function fetchSubmissions() {
      try {
        console.log('Starting to fetch submissions...');
        console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL || 'Using default URL');
        
        // Test Supabase connection first
        console.log('Testing Supabase connection...');
        const { data: testData, error: testError } = await supabase
          .from('contact_messages')
          .select('count', { count: 'exact', head: true });
        
        if (testError) {
          console.error('Supabase connection test failed:', testError);
          throw new Error(`Database connection failed: ${testError.message}`);
        }
        
        console.log('Supabase connection successful');

        // Fetch contact submissions from contact_messages table
        console.log('Fetching contact submissions from contact_messages table...');
        const { data: contactData, error: contactError } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });

        if (contactError) {
          console.error('Error fetching contact submissions from contact_messages:', contactError);
        }
        
        // Also try to fetch from the old table name (contact_submissions)
        console.log('Attempting to fetch from old contact_submissions table...');
        let oldContactData = [];
        try {
          const { data: oldData, error: oldError } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false });
          
          if (!oldError && oldData) {
            console.log('Found data in old contact_submissions table:', oldData.length);
            // Map the old data to match the new format if needed
            oldContactData = oldData.map(item => ({
              id: item.id,
              first_name: item.first_name || item.name?.split(' ')[0] || '',
              last_name: item.last_name || (item.name?.split(' ').slice(1).join(' ') || ''),
              email: item.email,
              phone: item.phone,
              message: item.message,
              created_at: item.created_at
            }));
          }
        } catch (oldTableError) {
          console.error('Error fetching from old table:', oldTableError);
        }
        
        // Combine data from both tables
        const allContactData = [...(contactData || []), ...oldContactData];
        console.log('Total contact submissions found:', allContactData.length);
        
        // Fetch volunteer submissions
        console.log('Fetching volunteer submissions from volunteers table...');
        const { data: volunteerData, error: volunteerError } = await supabase
          .from('volunteers')
          .select('*')
          .order('created_at', { ascending: false });

        if (volunteerError) {
          console.error('Error fetching volunteer submissions:', volunteerError);
        }
        
        console.log('Volunteer submissions fetched:', volunteerData?.length || 0);

        setContactSubmissions(allContactData || []);
        setVolunteerSubmissions(volunteerData || []);
        setLoading(false);
      } catch (err) {
        console.error('Error in fetchSubmissions:', err);
        setError(err instanceof Error ? err.message : 'Failed to load submissions');
        setLoading(false);
      }
    }

    fetchSubmissions();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Loading submissions...
            </h2>
            <p className="mt-4 text-gray-500">Please check the browser console for detailed logs.</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-red-600 sm:text-4xl">
              Error Loading Submissions
            </h2>
            <p className="mt-4 text-gray-500">{error}</p>
            <p className="mt-2 text-sm text-gray-400">Please check the browser console for more details.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Form Submissions Dashboard
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Showing {contactSubmissions.length} contact submissions and {volunteerSubmissions.length} volunteer submissions
          </p>
        </div>

        {/* Contact Form Submissions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Form Submissions</h3>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contactSubmissions.map((submission) => (
                  <tr key={submission.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {submission.first_name} {submission.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.phone || 'Not provided'}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{submission.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(submission.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Volunteer Form Submissions */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Form Submissions</h3>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interests and Availability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {volunteerSubmissions.map((submission) => (
                  <tr key={submission.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div>Interests: {Array.isArray(submission.interests) ? submission.interests.join(', ') : submission.interests}</div>
                      <div>Availability: {submission.availability}</div>
                      {submission.message && <div>Message: {submission.message}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(submission.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 