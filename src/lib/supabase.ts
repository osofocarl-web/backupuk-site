import { createClient } from '@supabase/supabase-js';

// Get env variables from either Astro/Vite import.meta.env or Node process.env (for SSR)
const supabaseUrl = import.meta.env?.PUBLIC_SUPABASE_URL || process.env?.PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env?.PUBLIC_SUPABASE_ANON_KEY || process.env?.PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key';

// Only initialize if we have a valid URL format to prevent build errors
export const supabase = createClient(
    supabaseUrl.startsWith('http') ? supabaseUrl : 'https://placeholder.supabase.co',
    supabaseAnonKey
);
