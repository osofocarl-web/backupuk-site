-- Run this in your Supabase SQL Editor to set up the app tables

-- 1. Create a table for user profiles
CREATE TABLE public.profiles (
  id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  day_streak int4 DEFAULT 0,
  chapters_read int4 DEFAULT 0,
  modules_done int4 DEFAULT 0,
  join_date timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (id)
);

-- Turn on RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view and update own profile" ON public.profiles FOR ALL USING (auth.uid() = id);

-- Trigger to create a profile automatically when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 2. Create the notes table
CREATE TABLE public.notes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on RLS for notes
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can fully manage their own notes" ON public.notes FOR ALL USING (auth.uid() = user_id);

-- 3. Create the completed_days table
CREATE TABLE public.completed_days (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  day_id text NOT NULL, -- e.g. "day-1"
  completed_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, day_id)
);

ALTER TABLE public.completed_days ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can track their own read days" ON public.completed_days FOR ALL USING (auth.uid() = user_id);

-- 4. Create the completed_modules table
CREATE TABLE public.completed_modules (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  module_id text NOT NULL, -- e.g. "module-1"
  completed_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, module_id)
);

ALTER TABLE public.completed_modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can track their own completed modules" ON public.completed_modules FOR ALL USING (auth.uid() = user_id);
