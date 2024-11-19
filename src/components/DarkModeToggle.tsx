import React from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';
import Image from 'next/image';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="w-12 h-12 flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[var(--sidebar-hover-background)] mx-auto"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <Image
          src="/images/icons/light-darkmode.ico"
          alt="Light Mode"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src="/images/icons/dark-darkmode.ico"
          alt="Dark Mode"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
