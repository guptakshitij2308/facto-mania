import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hujyfiwdgpqggvpflxox.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1anlmaXdkZ3BxZ2d2cGZseG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODM0MjgsImV4cCI6MTk5NjQ1OTQyOH0.2akEOsZP6nXqEflNlS9-vR49h-SJo6zobixqHzIKxm4";
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
