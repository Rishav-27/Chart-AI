// src/components/AuthSessionProvider.tsx
"use client"; // This component needs client-side interactivity

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { supabase } from '../utils/supabaseClient'; // Our client-side supabase instance

interface AuthSessionProviderProps {
  children: React.ReactNode;
}

const AuthSessionProvider: React.FC<AuthSessionProviderProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Client-side Auth State Change:', event, session);
      if (event === 'SIGNED_IN' && session) {
        // User signed in or session revived
        router.push('/dashboard'); // Client-side redirect
      } else if (event === 'SIGNED_OUT') {
        // User signed out or session expired
        router.push('/auth/login'); // Redirect to login
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [router]); // Depend on router to ensure effect re-runs if router instance changes (rare, but good practice)

  return <>{children}</>;
};

export default AuthSessionProvider;