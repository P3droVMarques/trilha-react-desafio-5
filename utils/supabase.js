import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbrltmreniazxgkqdvxi.supabase.co'; // Substitua pelo URL do seu Supabase
const supabaseKey = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicmx0bXJlbmlhenhna3FkdnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTM2MTgsImV4cCI6MjA2NjMyOTYxOH0.TbWKeB779FLFw_CO_Czj6jToBlBS_f2YbdofTnEKF5A'; // Substitua pela sua chave API
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;