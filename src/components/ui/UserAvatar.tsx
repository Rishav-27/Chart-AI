// src/components/ui/UserAvatar.tsx
import React from 'react';

interface UserAvatarProps {
  username: string | null | undefined;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ username }) => {
  const firstLetter = username ? username.charAt(0).toUpperCase() : 'U';

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg shadow-sm"> {/* Smaller size, smaller text, less shadow */}
      {firstLetter}
    </div>
  );
};

export default UserAvatar;