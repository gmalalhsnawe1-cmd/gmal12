import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lmoaxfyrpmryoxbtbmfy.supabase.co';
const supabaseAnonKey = 'sb_publishable_6S_EsRoP7GDSkYP94RPOmQ_9_3pnb-Q';

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
