'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { ChevronLeftIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface ContactMessage {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setMessages(data || []);
      } catch (error: any) {
        console.error('Error fetching messages:', error);
        setError(error.message || 'Failed to load contact messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
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
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 flex-col items-center justify-center text-center">
        <ExclamationCircleIcon className="h-12 w-12 text-blue-600" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">Error Loading Messages</h3>
        <p className="mt-1 text-sm text-gray-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
          <p className="mt-1 text-sm text-gray-600">
            View all contact form submissions
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

      {messages.length === 0 ? (
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium text-gray-900">No contact messages yet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Contact messages will appear here when people use the contact form.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {messages.map((message) => (
            <div key={message.id} className="overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-200">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      {message.first_name} {message.last_name}
                    </h3>
                    <div className="mt-1 flex text-sm text-gray-500">
                      <a href={`mailto:${message.email}`} className="truncate text-blue-600 hover:underline">
                        {message.email}
                      </a>
                      {message.phone && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{message.phone}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(message.created_at)}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="whitespace-pre-wrap text-sm text-gray-700">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 