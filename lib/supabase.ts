import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lmoaxfypmryoxbtbmfy.supabase.co';
const supabaseAnonKey = 'انسخ_مفتاح_الـ_anon_هنا';

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
