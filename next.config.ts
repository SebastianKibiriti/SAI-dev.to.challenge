import type { NextConfig } from "next";

const config: NextConfig = {
  // Add the env object here
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://qfyzaahwniuqqfsbylmb.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmeXphYWh3bml1cXFmc2J5bG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MjQ4NzMsImV4cCI6MjA2NjIwMDg3M30.F1uYWWv1SzttMStcekB9Ao2PEdopQl_24XuQ1BBqlT4',
  },
  // ... possibly other options here
};

export default config;