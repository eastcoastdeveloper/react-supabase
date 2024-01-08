import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "supbase url";
const supabaseKey = "supabase key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
