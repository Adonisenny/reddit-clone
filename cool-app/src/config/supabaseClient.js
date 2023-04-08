import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mcyythgrclzzdjiqbzmd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jeXl0aGdyY2x6emRqaXFiem1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1ODExMTEsImV4cCI6MTk5MzE1NzExMX0.tucX1drqEl4rtl5tBBCGH5kSK0Jmvk6BYedcsl_nWYs'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase