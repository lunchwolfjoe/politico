import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ysljpqtpbpugekhrdocq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzbGpwcXRwYnB1Z2VraHJkb2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMDkzODQsImV4cCI6MjAzMjU4NTM4NH0.d9vT1HXbxUlG6QA0BbsY1yjyoTeXkbmSnqr1YBNDA5k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to submit volunteer data
export async function submitVolunteer(formData) {
  const { data, error } = await supabase
    .from('volunteers')
    .insert([
      { 
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interests: formData.interests,
        availability: formData.availability,
        message: formData.message || '',
        created_at: new Date().toISOString(),
      }
    ])
    .select();

  return { data, error };
}

// Helper function to submit contact form data
export async function submitContactForm(formData) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([
      { 
        name: formData.name,
        email: formData.email,
        message: formData.message,
        created_at: new Date().toISOString(),
      }
    ])
    .select();

  return { data, error };
}

// Helper function to check if Supabase is connected
export async function testSupabaseConnection() {
  const { data, error } = await supabase
    .from('_test_connection')
    .select('*')
    .limit(1)
    .catch(() => ({ data: null, error: 'Failed to connect to Supabase' }));
  
  // Even if the query fails because table doesn't exist, we'll get a response from Supabase
  return { connected: !error || error.code !== 'NETWORK_ERROR', error };
} 