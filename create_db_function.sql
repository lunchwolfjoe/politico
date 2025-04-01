-- Create a function to get table info
CREATE OR REPLACE FUNCTION get_table_info()
RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    WITH table_info AS (
        SELECT 
            table_name,
            json_agg(
                json_build_object(
                    'column_name', column_name,
                    'data_type', data_type,
                    'is_nullable', is_nullable
                )
            ) AS columns
        FROM information_schema.columns
        WHERE table_schema = 'public'
        AND table_name IN ('contact_messages', 'volunteers')
        GROUP BY table_name
    )
    SELECT json_agg(json_build_object(
        'table_name', table_name,
        'columns', columns
    ))
    INTO result
    FROM table_info;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql; 