import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vqnehxgeebmdettnflmp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxbmVoeGdlZWJtZGV0dG5mbG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyNjAxOTAsImV4cCI6MTk5ODgzNjE5MH0.1zZtK-aTbEs6srw4U038QkdObP5QxT8FNesEB_0X9Hg"
);

export default supabase;
