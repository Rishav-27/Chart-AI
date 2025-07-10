// src/app/layout.tsx (Updated)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import AuthSessionProvider from "@/components/AuthSessionProvider"; // Import AuthSessionProvider

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
        <AuthSessionProvider> {/* Wrap MainLayout with AuthSessionProvider */}
          <MainLayout>
            {children}
          </MainLayout>
        </AuthSessionProvider>
      </body>
    </html>
  );
}