import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ncyggcjrkxoieirubswr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jeWdnY2pya3hvaWVpcnVic3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNDYwNzMsImV4cCI6MTk5NjcyMjA3M30.MhC-icUj5p2vCoErLX6aBUfPo30lGWgaWyCdPvPFRnc";
export const supabase = createClient(supabaseUrl, supabaseKey);
