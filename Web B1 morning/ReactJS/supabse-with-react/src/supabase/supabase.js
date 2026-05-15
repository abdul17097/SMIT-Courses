import { createClient } from "@supabase/supabase-js";

const project_url = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const anon_key = import.meta.env.VITE_SUPABASE_ANON_PUBLIC_KEY;

export const supabase = createClient(project_url, anon_key);
