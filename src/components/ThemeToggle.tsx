
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-lg bg-cyan-100/80 hover:bg-cyan-200/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm border border-cyan-200/60 dark:border-white/20 text-cyan-700 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
