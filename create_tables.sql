-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for contact_messages
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_policies 
    WHERE tablename = 'contact_messages' AND policyname = 'Allow anonymous insert to contact_messages'
  ) THEN
    CREATE POLICY "Allow anonymous insert to contact_messages" 
    ON public.contact_messages 
    FOR INSERT 
    TO anon 
    WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_policies 
    WHERE tablename = 'contact_messages' AND policyname = 'Allow authenticated read access to contact_messages'
  ) THEN
    CREATE POLICY "Allow authenticated read access to contact_messages" 
    ON public.contact_messages 
    FOR SELECT 
    TO authenticated 
    USING (true);
  END IF;
END $$;

-- Create volunteers table
CREATE TABLE IF NOT EXISTS public.volunteers (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
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