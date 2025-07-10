// src/components/AuthSessionProvider.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

interface AuthSessionProviderProps {
  children: React.ReactNode;
}

const AuthSessionProvider: React.FC<AuthSessionProviderProps> = ({
  children,
}) => {
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Client-side Auth State Change:", event, session);
      if (event === "SIGNED_IN" && session) {
        router.push("/dashboard");
      } else if (event === "SIGNED_OUT") {
        router.push("/auth/login");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return <>{children}</>;
};

export default AuthSessionProvider;
