import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'ضع_رابط_مشروع_سوبابيس_هنا';
const supabaseAnonKey = 'ضع_anon_key_هنا';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
