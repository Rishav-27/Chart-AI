// src/components/layout/Sidebar.tsx

import React from 'react';
import Link from 'next/link';
import {
  Menu, ChevronLeft, PlusSquare, LogOut, Sun, Moon, MessageSquareText,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleCollapse }) => {
  const commonButtonClasses = `p-2 rounded-lg flex items-center justify-center transition duration-200
                                 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-teal-400`; // Softer focus ring

  return (
    <aside
      className={`bg-gradient-to-br from-blue-700 to-indigo-800 text-white dark:from-gray-800 dark:to-gray-900
        ${isCollapsed ? 'w-16' : 'w-64'}
        flex flex-col h-full shadow-xl transition-all duration-300 ease-in-out border-r border-gray-700 dark:border-gray-800`} 
    >
      {/* Top Section: App Name & Collapse Button */}
      <div className="p-4 flex items-center justify-between h-16 border-b border-blue-600 dark:border-gray-700"> {/* Subtle separator */}
        {!isCollapsed && (
          <h1 className="text-2xl font-extrabold text-white tracking-wide opacity-90"> {/* Slightly less opaque */}
            ChartsAI
          </h1>
        )}
        <button
          onClick={toggleCollapse}
          className={`${commonButtonClasses} hover:bg-blue-600/50 dark:hover:bg-gray-700/50 ${isCollapsed ? 'mx-auto' : ''}`}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <Menu className="w-6 h-6 opacity-90" />
          ) : (
            <ChevronLeft className="w-6 h-6 opacity-90" />
          )}
        </button>
      </div>

      {/* NEW CHAT BUTTON */}
      <div className="px-4 py-2">
        <button
          className={`w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md
            dark:bg-teal-600 dark:hover:bg-teal-700 ${commonButtonClasses}
            ${isCollapsed ? 'justify-center h-10 w-10 mx-auto p-0' : 'space-x-2'}`}
          aria-label="Start a new chat"
        >
          <PlusSquare className="w-6 h-6 opacity-90" />
          {!isCollapsed && <span className="opacity-90">New Chat</span>}
        </button>
      </div>

      {/* Search Box (Placeholder) - HIDDEN WHEN COLLAPSED */}
      <div className={`p-4 ${isCollapsed ? 'hidden' : 'block'}`}>
        <input
          type="text"
          placeholder="Search history..."
          className="w-full p-2 rounded-lg bg-blue-900/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-teal-400"
        /> {/* Softer background, blue-centric placeholder */}
      </div>

      {/* Navigation/Search History (Placeholder) */}
      <nav className={`flex-1 overflow-y-auto px-4 py-2 custom-scrollbar ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="text-blue-200 text-sm mb-2 opacity-80">Search History</div> {/* Softer text color */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Link href="#" key={i} className="flex items-center space-x-2 py-2 px-3 mb-1 rounded-lg text-blue-100 hover:bg-blue-600/50 transition duration-150 opacity-90">
            <MessageSquareText className="w-5 h-5" />
            {!isCollapsed && `Chat #${i + 1}: Data analysis query...`}
          </Link>
        ))}
      </nav>

      {/* Bottom Section: Logout & Theme Toggle */}
      <div className="p-4 border-t border-blue-600 dark:border-gray-700 flex flex-col space-y-2"> {/* Subtle separator */}
        {/* Logout Button */}
        <div className="flex items-center justify-between">
          <Link href="/auth/login" className={`flex items-center space-x-2 text-blue-100 hover:text-red-300 transition duration-200 ${commonButtonClasses}
            ${isCollapsed ? 'justify-center w-full' : ''}`}> {/* Adjusted text color, using common button classes */}
            <LogOut className="w-6 h-6 opacity-90" />
            {!isCollapsed && <span className="font-medium opacity-90">Logout</span>}
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && <span className="text-blue-200 opacity-80">Theme</span>} {/* Softer text color */}
          <button className={`${commonButtonClasses} hover:bg-blue-600/50 dark:hover:bg-gray-700/50`}>
            <Sun className="w-6 h-6 hidden dark:block opacity-90" />
            <Moon className="w-6 h-6 block dark:hidden opacity-90" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;