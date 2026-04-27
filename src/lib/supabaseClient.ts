import { createClient } from "@supabase/supabase-js";

console.log("✅ supabaseClient.ts LOADED");

export const supabase = createClient(
  "https://rgwknimuspoobbznskxi.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

console.log("✅ supabase REST URL:", supabase.restUrl);