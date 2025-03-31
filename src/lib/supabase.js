import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ysljpqtpbpugekhrdocq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzbGpwcXRwYnB1Z2VraHJkb2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMDkzODQsImV4cCI6MjAzMjU4NTM4NH0.d9vT1HXbxUlG6QA0BbsY1yjyoTeXkbmSnqr1YBNDA5k';

// Initialize the Supabase client with only the URL and anon key
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to submit volunteer data using REST API
export async function submitVolunteer(formData) {
  try {
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
  } catch (error) {
    console.error('Error submitting volunteer data:', error);
    return { 
      data: null, 
      error: {
        message: error.message || 'Failed to submit volunteer data',
        details: error
      }
    };
  }
}

// Helper function to submit contact form data using REST API
export async function submitContactForm(formData) {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        { 
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phoneNumber || null,
          message: formData.message,
          created_at: new Date().toISOString(),
        }
      ])
      .select();

    return { data, error };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { 
      data: null, 
      error: {
        message: error.message || 'Failed to submit contact form',
        details: error
      }
    };
  }
}

// Helper function to check if Supabase is connected
export async function testSupabaseConnection() {
  try {
    const { error } = await supabase.from('volunteers').select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      return { 
        connected: false, 
        error: error.message || 'Failed to connect to Supabase' 
      };
    }
    
    return { connected: true, error: null };
  } catch (error) {
    console.error('Supabase connection error:', error);
    return { 
      connected: false, 
      error: error.message || 'Failed to connect to Supabase'
    };
  }
} 