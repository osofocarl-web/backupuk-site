import { createClient } from '@supabase/supabase-js';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SUPABASE_ANON_KEY": "sb_publishable_kjUWU1sQkMXARDlm-jpD5w_2l_RXEfN", "PUBLIC_SUPABASE_URL": "https://lnwzhrhnshcsreuuwrwu.supabase.co", "SITE": undefined, "SSR": true};
const supabaseUrl = Object.assign(__vite_import_meta_env__, { PUBLIC: process.env.PUBLIC })?.PUBLIC_SUPABASE_URL || process.env?.PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = Object.assign(__vite_import_meta_env__, { PUBLIC: process.env.PUBLIC })?.PUBLIC_SUPABASE_ANON_KEY || process.env?.PUBLIC_SUPABASE_ANON_KEY || "placeholder_key";
const supabase = createClient(
  supabaseUrl.startsWith("http") ? supabaseUrl : "https://placeholder.supabase.co",
  supabaseAnonKey
);

export { supabase as s };
