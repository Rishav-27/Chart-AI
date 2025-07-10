// src/app/auth/signout/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'; 
import { redirect } from 'next/navigation'; 

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const supabase = createRouteHandlerClient({ cookies: () => cookies() });

  await supabase.auth.signOut();

  redirect(`${requestUrl.origin}/auth/login`);
  
}