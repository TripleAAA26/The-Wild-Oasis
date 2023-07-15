import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bntxjmmlxtbymojlxjkv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJudHhqbW1seHRieW1vamx4amt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDI0NzIsImV4cCI6MjAwNDkxODQ3Mn0.VivqiltizenlkVJmYzzBVSiuH81aokWdkCWChcSOwuo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase