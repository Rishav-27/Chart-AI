// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import MainLayout from "@/components/layout/MainLayout"; // REMOVE THIS IMPORT!
import AuthSessionProvider from "@/components/AuthSessionProvider";
import { Toaster } from 'react-hot-toast'; // Import Toaster here

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChartsAI App",
  description: "AI-powered chat, chart, and infographic generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider>
          {children} {/* Children directly here, MainLayout will be in a route group */}
        </AuthSessionProvider>
        {/* Toaster for app-wide notifications */}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: { background: '#363636', color: '#fff' },
            success: {
              style: { background: '#22C55E', color: '#fff' },
              iconTheme: { primary: '#fff', secondary: '#22C55E' },
            },
            error: {
              style: { background: '#EF4444', color: '#fff' },
              iconTheme: { primary: '#fff', secondary: '#EF4444' },
            },
          }}
        />
      </body>
    </html>
  );
}