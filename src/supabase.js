import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://kcyczipsttklbmcoirxo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjeWN6aXBzdHRrbGJtY29pcnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTc0NjksImV4cCI6MjA5MzgzMzQ2OX0.FS55EaDFuIi0wgMIv50Am9UrxXX4TFf1NMgUsCztko0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);