// src/components/layout/MainLayout.tsx

"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden"> {/* This div now controls overall layout */}
      {/* Sidebar Component */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out
          ${isSidebarCollapsed ? 'ml-0' : 'ml-64'}`} 
      >
        {/* The actual page content will render here */}
        {/* We keep the inner div for styling of the content area itself */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {children} {/* This will render your page content (e.g., dashboard/page.tsx) */}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;