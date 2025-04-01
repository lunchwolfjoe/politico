import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    console.log('Checking database schema...');
    
    // Get list of tables
    const { data: tableList, error: tableError } = await supabase
      .from('_tables')
      .select('*');
    
    if (tableError) {
      throw new Error(`Failed to get table list: ${tableError.message}`);
    }
    
    // Check specific tables
    const tablesToCheck = ['contact_messages', 'volunteers'];
    const result = {};
    
    for (const tableName of tablesToCheck) {
      try {
        // Get column information using a test query
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .limit(1);
        
        if (error) {
          result[tableName] = {
            exists: false,
            error: error.message,
            columns: null
          };
        } else {
          // Get column names and types from a sample row
          let columns = {};
          if (data && data.length > 0) {
            const sampleRow = data[0];
            for (const column in sampleRow) {
              columns[column] = typeof sampleRow[column];
            }
          } else {
            // If no data, try to get column info from Postgres
            const { data: columnData, error: columnError } = await supabase
              .rpc('get_table_columns', { table_name: tableName });
            
            if (!columnError && columnData) {
              columns = columnData.reduce((acc, col) => {
                acc[col.column_name] = col.data_type;
                return acc;
              }, {});
            }
          }
          
          result[tableName] = {
            exists: true,
            error: null,
            columns
          };
        }
      } catch (tableError) {
        result[tableName] = {
          exists: false,
          error: tableError.message,
          columns: null
        };
      }
    }
    
    // Create a custom function to check columns
    const { data: funcResult, error: funcError } = await supabase
      .rpc('pg_catalog_tables', {});
    
    // Return the schema information
    return NextResponse.json({
      status: 'success',
      message: 'Database schema check',
      tableList,
      tables: result,
      pg_tables: funcResult || [],
      funcError: funcError ? funcError.message : null,
      supabaseInfo: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Default URL',
        timestamp: new Date().toISOString()
      }
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