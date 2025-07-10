// src/app/dashboard/page.tsx

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
//import UserDashboardContent from '@/components/UserDashboardContent'; // We'll create this next

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies: () => cookies() });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log('Dashboard Server Component Session:', session);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="flex flex-col h-full">
      {/* <UserDashboardContent user={session.user} /> */}
    </div>
  );
}