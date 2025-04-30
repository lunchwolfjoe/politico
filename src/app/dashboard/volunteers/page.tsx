'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { ChevronLeftIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface Volunteer {
  id: number;
  name: string;
  email: string;
  phone: string;
  interests: string;
  availability: string;
  message: string;
  created_at: string;
}

export default function VolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const { data, error } = await supabase
          .from('volunteers')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setVolunteers(data || []);
      } catch (error: any) {
        console.error('Error fetching volunteers:', error);
        setError(error.message || 'Failed to load volunteer data');
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, [supabase]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 flex-col items-center justify-center text-center">
        <ExclamationCircleIcon className="h-12 w-12 text-red-600" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">Error Loading Volunteers</h3>
        <p className="mt-1 text-sm text-gray-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Volunteer Submissions</h1>
          <p className="mt-1 text-sm text-gray-600">
            View all volunteer submissions
          </p>
        </div>
        <Link 
          href="/dashboard"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <ChevronLeftIcon className="-ml-0.5 mr-1 h-5 w-5" />
          Back to Dashboard
        </Link>
      </div>

      {volunteers.length === 0 ? (
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium text-gray-900">No volunteer submissions yet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Volunteer submissions will appear here when people sign up.
          </p>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Contact Info
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Interests
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Availability
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {volunteers.map((volunteer) => (
                <tr key={volunteer.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{volunteer.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{volunteer.email}</div>
                    <div className="text-sm text-gray-500">{volunteer.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{volunteer.interests}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{volunteer.availability}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {formatDate(volunteer.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {volunteers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Volunteer Messages</h2>
          <div className="mt-4 space-y-6">
            {volunteers.map((volunteer) => (
              volunteer.message ? (
                <div key={`${volunteer.id}-message`} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <div className="mb-2 flex items-center">
                    <div className="text-sm font-medium text-gray-900">{volunteer.name}</div>
                    <span className="mx-2 text-gray-300">|</span>
                    <div className="text-sm text-gray-500">{formatDate(volunteer.created_at)}</div>
                  </div>
                  <p className="text-sm text-gray-700">{volunteer.message}</p>
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 