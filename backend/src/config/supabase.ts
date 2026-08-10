import { createClient } from "@supabase/supabase-js";
import type { Database } from "@ecommerce/shared/supabase";

const supabaseUrl = process.env.SUPABASE_URL || "";
const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY || "";

export const supabase = createClient<Database>(supabaseUrl, publishableKey);
