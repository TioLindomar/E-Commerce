import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY || "";

export const supabase = createClient(supabaseUrl, publishableKey);
