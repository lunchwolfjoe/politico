'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { 
  UserGroupIcon, 
  EnvelopeIcon,
  CalendarDaysIcon, 
  ExclamationCircleIcon 
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalVolunteers: 0,
    totalMessages: 0,
    recentVolunteers: 0,
    recentMessages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get current date minus 7 days for "recent" stats
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentDate = sevenDaysAgo.toISOString();

        // Get total volunteers count
        const { count: totalVolunteers, error: volunteersError } = await supabase
          .from('volunteers')
          .select('*', { count: 'exact', head: true });

        if (volunteersError) throw volunteersError;

        // Get total messages count
        const { count: totalMessages, error: messagesError } = await supabase
          .from('contact_messages')
          .select('*', { count: 'exact', head: true });

        if (messagesError) throw messagesError;

        // Get recent volunteers (last 7 days)
        const { count: recentVolunteers, error: recentVolunteersError } = await supabase
          .from('volunteers')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', recentDate);

        if (recentVolunteersError) throw recentVolunteersError;

        // Get recent messages (last 7 days)
        const { count: recentMessages, error: recentMessagesError } = await supabase
          .from('contact_messages')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', recentDate);

        if (recentMessagesError) throw recentMessagesError;

        setStats({
          totalVolunteers: totalVolunteers || 0,
          totalMessages: totalMessages || 0,
          recentVolunteers: recentVolunteers || 0,
          recentMessages: recentMessages || 0,
        });
      } catch (error: any) {
        console.error('Error fetching dashboard stats:', error);
        setError(error.message || 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [supabase]);

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
        <h3 className="mt-2 text-lg font-medium text-gray-900">Error Loading Dashboard</h3>
        <p className="mt-1 text-sm text-gray-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          View and manage campaign submissions
        </p>
      </div>

      {/* Stats Section */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Volunteers */}
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-red-100 p-3">
              <UserGroupIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500">Total Volunteers</dt>
                <dd className="text-3xl font-semibold text-gray-900">{stats.totalVolunteers}</dd>
              </dl>
            </div>
          </div>
        </div>

        {/* Total Messages */}
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-blue-100 p-3">
              <EnvelopeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500">Total Messages</dt>
                <dd className="text-3xl font-semibold text-gray-900">{stats.totalMessages}</dd>
              </dl>
            </div>
          </div>
        </div>

        {/* Recent Volunteers */}
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-green-100 p-3">
              <CalendarDaysIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500">New Volunteers (7d)</dt>
                <dd className="text-3xl font-semibold text-gray-900">{stats.recentVolunteers}</dd>
              </dl>
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-purple-100 p-3">
              <CalendarDaysIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-sm font-medium text-gray-500">New Messages (7d)</dt>
                <dd className="text-3xl font-semibold text-gray-900">{stats.recentMessages}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Submissions Navigation */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Volunteer Submissions */}
        <Link 
          href="/dashboard/volunteers"
          className="group flex flex-col rounded-lg border border-gray-300 bg-white p-6 shadow-sm transition duration-150 ease-in-out hover:border-red-500 hover:ring-1 hover:ring-red-500"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-100 group-hover:bg-red-200">
            <UserGroupIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Volunteer Submissions</h3>
          <p className="mt-1 text-sm text-gray-500">
            View and manage people who have volunteered to help with the campaign
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-red-600">
            View submissions
            <span className="ml-1">→</span>
          </div>
        </Link>

        {/* Contact Messages */}
        <Link 
          href="/dashboard/messages"
          className="group flex flex-col rounded-lg border border-gray-300 bg-white p-6 shadow-sm transition duration-150 ease-in-out hover:border-blue-500 hover:ring-1 hover:ring-blue-500"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 group-hover:bg-blue-200">
            <EnvelopeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Contact Messages</h3>
          <p className="mt-1 text-sm text-gray-500">
            View messages and inquiries sent through the contact form
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
            View messages
            <span className="ml-1">→</span>
          </div>
        </Link>
      </div>
    </div>
  );
} 