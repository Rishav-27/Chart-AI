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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Component - will be styled separately below */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out`}
      >
        {/* The actual page content will render here */}
        {/* Softer background for the main content wrapper */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;