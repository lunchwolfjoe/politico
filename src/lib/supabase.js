import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://lskhrdxqtpswyhkisael.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxza2hyZHhxdHBzd3loeGthZWwiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcxNzAwOTM4NCwiZXhwIjoyMDMyNTg1Mzg0fQ.d9vT1HXbxUlG6QA0BbsY1yjyoTeXkbmSnqr1YBNDA5k';

// Initialize the Supabase client with the URL and anon key
export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to submit volunteer data using REST API
export async function submitVolunteer(formData) {
  try {
    console.log('Submitting volunteer data:', formData);
    
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

    if (error) {
      console.error('Supabase error in submitVolunteer:', error);
      throw error;
    }

    console.log('Volunteer data submitted successfully:', data);
    return { data, error: null };
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
    console.log('Starting contact form submission...');
    console.log('Supabase URL:', supabaseUrl);
    console.log('Form data to submit:', formData);
    
    // First test the connection
    const { data: testData, error: testError } = await supabase
      .from('contact_messages')
      .select('count', { count: 'exact', head: true });
    
    if (testError) {
      console.error('Connection test failed:', testError);
      throw new Error(`Database connection failed: ${testError.message}`);
    }
    
    console.log('Connection test successful');
    
    // Now try to insert the data
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
        status: error.status,
        name: error.name
      });
      return { data: null, error };
    }

    console.log('Contact form submitted successfully:', data);
    return { data, error: null };
  } catch (error) {
    console.error('Error in submitContactForm:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status: error.status,
      code: error.code
    });
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