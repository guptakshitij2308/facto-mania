import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hujyfiwdgpqggvpflxox.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1anlmaXdkZ3BxZ2d2cGZseG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1ODU0NTEsImV4cCI6MTk5NjE2MTQ1MX0.qbMRKXx8K2UmI-GRJHIMl82HRRA_kA0Vo3APlnwpj_8";
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
