import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    console.log('Testing database connection...');
    
    // Test tables
    const tables = [
      { name: 'contact_messages', exists: false, error: null },
      { name: 'contact_submissions', exists: false, error: null },
      { name: 'volunteers', exists: false, error: null }
    ];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table.name)
          .select('count', { count: 'exact', head: true });
          
        if (error) {
          table.error = error;
        } else {
          table.exists = true;
        }
      } catch (err) {
        table.error = err;
      }
    }
    
    // Get Supabase info
    const supabaseInfo = {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Default URL',
      timestamp: new Date().toISOString()
    };
    
    return NextResponse.json({
      status: 'success',
      message: 'Database connection test',
      tables,
      supabaseInfo
    }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    
    return NextResponse.json({
      status: 'error',
      message: 'API error occurred',
      error: error.message
    }, { status: 500 });
  }
} 