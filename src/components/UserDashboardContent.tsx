// src/components/UserDashboardContent.tsx
"use client";

import React, { useState } from 'react';
import { User } from '@supabase/supabase-js';
import UserAvatar from './ui/UserAvatar';
import { Send, Mic } from 'lucide-react';

interface UserDashboardContentProps {
  user: User | null;
}

type ModelOption = 'auto' | 'chat' | 'infographic' | 'charts';

const UserDashboardContent: React.FC<UserDashboardContentProps> = ({ user }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState<ModelOption>('auto');

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    console.log(`Prompt: ${prompt}, Model: ${selectedModel}`);
    setPrompt('');
  };

  const handleMicButtonClick = () => {
    console.log("Mic button clicked. Voice input functionality TBD.");
  };

  const username = user?.email?.split('@')[0] || 'User';

  const getModelDisplayName = (model: ModelOption) => {
    switch (model) {
      case 'auto': return 'Auto-Detect AI';
      case 'chat': return 'Chat AI';
      case 'infographic': return 'Infographic AI';
      case 'charts': return 'Charts AI';
      default: return 'AI';
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Top Header / User Profile Section */}
      <header className="flex justify-end items-center px-6 py-3 bg-white dark:bg-gray-800 shadow-lg rounded-b-2xl mb-6 mx-3 border-b border-gray-100 dark:border-gray-700"> {/* Smaller padding, less round, smaller margin */}
        <div className="flex items-center space-x-3"> {/* Smaller space-x */}
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200"> {/* Smaller text */}
            Hello, {username.charAt(0).toUpperCase() + username.slice(1)}!
          </span>
          <UserAvatar username={username} />
        </div>
      </header>

      {/* Main Message/Content Display Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col justify-center items-center text-center"> {/* Smaller padding */}
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-100 leading-tight"> {/* Smaller text */}
          Welcome to <span className="text-blue-600 dark:text-teal-400">ChartsAI</span>!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"> {/* Smaller text, smaller max-width */}
          Your intelligent assistant for generating insightful data visualizations and engaging content.
          Start by crafting a detailed prompt below to unleash the magic.
        </p>
      </div>

      {/* Fixed Prompt Input Area at the bottom */}
      <div className="p-4 pt-0"> {/* Smaller padding */}
        <form onSubmit={handlePromptSubmit} className="max-w-3xl mx-auto"> {/* Decreased max-width for the form */}
          <div className="relative flex flex-col bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"> {/* Less shadow, smaller round */}
            {/* Textarea for the prompt - on top */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`Type your prompt for ${getModelDisplayName(selectedModel)}...`}
              rows={3} // Decreased height
              className="flex-1 w-full p-3 resize-none bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-0 border-b border-gray-200 dark:border-gray-700 text-base" /* Decreased padding, explicit text-base */
              required
            />

            {/* Buttons row - below textarea, inside the same box */}
            <div className="flex justify-between items-center px-3 py-2.5"> {/* Decreased padding */}
              {/* Left group: Model Selection Dropdown */}
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value as ModelOption)}
                  className="p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-teal-400 transition duration-200 cursor-pointer text-sm shadow-sm" /* Smaller padding, text-sm */
                >
                  <option value="auto">Auto-Detect AI</option>
                  <option value="chat">Chat AI</option>
                  <option value="infographic">Infographic AI</option>
                  <option value="charts">Charts AI</option>
                </select>
              </div>

              {/* Right group: Mic and Send Buttons */}
              <div className="flex items-center space-x-2"> {/* Smaller space-x */}
                {/* Mic Button */}
                <button
                  type="button"
                  onClick={handleMicButtonClick}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 flex items-center justify-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-teal-400 shadow-sm" /* Smaller padding */
                  aria-label="Voice input"
                >
                  <Mic className="w-4 h-4" /> {/* Smaller icon */}
                </button>

                {/* Send Button */}
                <button
                  type="submit"
                  className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold flex items-center justify-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-teal-400 shadow-md" /* Smaller padding */
                  aria-label="Send prompt"
                >
                  <Send className="w-4 h-4" /> {/* Smaller icon */}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDashboardContent;