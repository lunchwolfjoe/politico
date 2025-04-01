import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Check contact_messages table
    const contactMessagesQuery = await supabase
      .from('contact_messages')
      .select('*')
      .limit(1);
    
    // Check volunteers table  
    const volunteersQuery = await supabase
      .from('volunteers')
      .select('*')
      .limit(1);
    
    // Direct SQL query to get table information
    const tableQuery = await supabase.rpc('get_table_info');
    
    return NextResponse.json({
      status: 'success',
      contactMessages: {
        exists: !contactMessagesQuery.error,
        error: contactMessagesQuery.error ? contactMessagesQuery.error.message : null,
        sample: contactMessagesQuery.data,
        columnNames: contactMessagesQuery.data && contactMessagesQuery.data.length > 0 ? 
          Object.keys(contactMessagesQuery.data[0]) : []
      },
      volunteers: {
        exists: !volunteersQuery.error,
        error: volunteersQuery.error ? volunteersQuery.error.message : null,
        sample: volunteersQuery.data,
        columnNames: volunteersQuery.data && volunteersQuery.data.length > 0 ? 
          Object.keys(volunteersQuery.data[0]) : []
      },
      tableInfo: tableQuery.data || null,
      tableError: tableQuery.error ? tableQuery.error.message : null,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: error.message
    }, { status: 500 });
  }
} 