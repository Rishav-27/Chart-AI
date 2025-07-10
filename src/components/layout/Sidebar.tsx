// src/components/layout/Sidebar.tsx

import React from 'react';
import Link from 'next/link';
// Import specific icons from lucide-react
import {
  Menu, // For expand button
  ChevronLeft, // For collapse button
  PlusSquare, // A good option for "New Chat" (document with plus)
  Search, // For Search (can be on button or placeholder)
  LogOut, // For Logout
  Sun, // For Theme Toggle (light mode)
  Moon, // For Theme Toggle (dark mode)
  MessageSquareText, // A good option for chat history items
} from 'lucide-react'; // Import from lucide-react

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleCollapse }) => {
  return (
    <aside
      className={`bg-gradient-to-br from-indigo-800 to-purple-900 text-white
        ${isCollapsed ? 'w-16' : 'w-64'}
        flex flex-col h-full shadow-2xl transition-all duration-300 ease-in-out`}
    >
      {/* Top Section: App Name & Collapse Button */}
      <div className="p-4 flex items-center justify-between h-16">
        {!isCollapsed && (
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            ChartsAI
          </h1>
        )}
        <button
          onClick={toggleCollapse}
          className={`p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-200
            ${isCollapsed ? 'mx-auto' : ''}`}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <Menu className="w-6 h-6" /> // Lucide Menu icon for expand
          ) : (
            <ChevronLeft className="w-6 h-6" /> // Lucide ChevronLeft icon for collapse
          )}
        </button>
      </div>

      {/* NEW CHAT BUTTON */}
      <div className="px-4 py-2">
        <button
          className={`flex items-center w-full py-2 px-3 rounded-md
            bg-white/10 hover:bg-white/20 text-white font-semibold transition duration-200
            focus:outline-none focus:ring-2 focus:ring-white/50
            ${isCollapsed ? 'justify-center h-10 w-10 mx-auto p-0' : 'space-x-2'}`}
          aria-label="Start a new chat"
        >
          <PlusSquare className="w-6 h-6" /> {/* Lucide PlusSquare for New Chat */}
          {!isCollapsed && <span>New Chat</span>}
        </button>
      </div>

      {/* Search Box (Placeholder) - HIDDEN WHEN COLLAPSED */}
      <div className={`p-4 ${isCollapsed ? 'hidden' : 'block'}`}>
        <input
          type="text"
          placeholder="Search history..."
          className="w-full p-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>

      {/* Navigation/Search History (Placeholder) */}
      <nav className={`flex-1 overflow-y-auto px-4 py-2 custom-scrollbar ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="text-gray-300 text-sm mb-2">Search History (Scrollable)</div>
        {Array.from({ length: 5 }).map((_, i) => (
          <Link href="#" key={i} className="flex items-center space-x-2 py-2 px-3 mb-1 rounded-md text-gray-200 hover:bg-white/20 transition duration-150">
            <MessageSquareText className="w-5 h-5" /> {/* Lucide MessageSquareText for chat history item */}
            {!isCollapsed && `Chat #${i + 1}: Data analysis query...`}
          </Link>
        ))}
      </nav>

      {/* Bottom Section: Logout & Theme Toggle */}
      <div className="p-4 border-t border-white/20 flex flex-col space-y-2">
        {/* Logout Button */}
        <div className="flex items-center justify-between">
          <Link href="/auth/login" className={`flex items-center space-x-2 text-red-300 hover:text-red-100 transition duration-200
            ${isCollapsed ? 'justify-center w-full' : ''}`}>
            <LogOut className="w-6 h-6" /> {/* Lucide LogOut for Logout */}
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && <span className="text-gray-300">Theme</span>}
          <button className="p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50">
            <Sun className="w-6 h-6 hidden dark:block" /> {/* Lucide Sun icon */}
            <Moon className="w-6 h-6 block dark:hidden" /> {/* Lucide Moon icon */}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;