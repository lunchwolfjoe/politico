-- Drop existing tables if needed (danger!)
-- DROP TABLE IF EXISTS public.volunteers;
-- DROP TABLE IF EXISTS public.contact_messages;

-- Recreate volunteers table with the correct structure
CREATE TABLE IF NOT EXISTS public.volunteers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  interests TEXT[] NOT NULL,
  availability TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

-- Create policy for volunteers
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_policies 
    WHERE tablename = 'volunteers' AND policyname = 'Allow anonymous insert to volunteers'
  ) THEN
    CREATE POLICY "Allow anonymous insert to volunteers" 
    ON public.volunteers 
    FOR INSERT 
    TO anon 
    WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_policies 
    WHERE tablename = 'volunteers' AND policyname = 'Allow authenticated read access to volunteers'
  ) THEN
    CREATE POLICY "Allow authenticated read access to volunteers" 
    ON public.volunteers 
    FOR SELECT 
    TO authenticated 
    USING (true);
  END IF;
END $$; 