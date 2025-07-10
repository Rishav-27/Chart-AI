// src/components/layout/MainLayout.tsx

"use client";

import React from 'react';
import { Toaster } from 'react-hot-toast'; 

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {children} 

      
      <Toaster
        position="top-right" 
        reverseOrder={false} 
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#22C55E', 
              color: '#fff',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#22C55E',
            },
          },
          error: {
            style: {
              background: '#EF4444', 
              color: '#fff',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#EF4444',
            },
          },
        }}
      />
    </div>
  );
};

export default MainLayout;