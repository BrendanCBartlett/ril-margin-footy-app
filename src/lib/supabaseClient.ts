import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rgwkniumspoobbznskxi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnd2tuaXVtc3Bvb2Jiem5za3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMjM0MjgsImV4cCI6MjA5MDU5OTQyOH0.klpE3WREYv7GpI3YvIQBYQ08Gfv9MAA6kAwHUhgjWAk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
