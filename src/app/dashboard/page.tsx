// src/app/dashboard/page.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard, {session.user.email}!</h1>
      <p className="text-lg text-gray-600">This is where your AI magic happens.</p>
      
      <form action="/auth/signout" method="post" className="mt-8">
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200">
          Logout
        </button>
      </form>
    </div>
  );
}