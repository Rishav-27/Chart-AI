// src/app/page.tsx
import Link from 'next/link'; 
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'; 
import { cookies } from 'next/headers'; 
import { redirect } from 'next/navigation'; 

export default async function WelcomePage() {
 
  const supabase = createServerComponentClient({ cookies: () => cookies() });
  const {
    data: { session },
  } = await supabase.auth.getSession();
   console.log('WelcomePage Server Component Session:', session);

  if (session) {
    redirect('/dashboard');
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white p-4">
      <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-fade-in-down">
          Welcome to ChartsAI
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed animate-fade-in-up">
          Unleash the power of AI to generate stunning charts, insightful infographics, and engage in intelligent conversations. Visualize your data effortlessly and bring your ideas to life.
        </p>
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Login
          </Link>
          
          <Link
            href="/auth/signup"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-purple-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}