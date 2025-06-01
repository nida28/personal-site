
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToHome = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200/40 dark:border-slate-700/30">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 group cursor-pointer" onClick={scrollToHome}>
            <img 
              src={theme === 'dark' ? '/lovable-uploads/8e5d5b3b-7430-4ac6-8fa6-2c0c657a8cea.png' : '/lovable-uploads/52ee9a92-ee9b-4ee5-96a0-1f65c76586c6.png'}
              alt="Nidaa Logo"
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Link
                to="/projects"
                className="relative px-6 py-3 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white text-base font-normal tracking-wide transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5 group"
              >
                Projects
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-fuchsia-400 dark:to-purple-400 group-hover:w-4 transition-all duration-300"></div>
              </Link>
              
              <Link
                to="/blog"
                className="relative px-6 py-3 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white text-base font-normal tracking-wide transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5 group"
              >
                Blog
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-fuchsia-400 dark:to-purple-400 group-hover:w-4 transition-all duration-300"></div>
              </Link>
              
              <Link
                to="/about"
                className="relative px-6 py-3 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white text-base font-normal tracking-wide transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5 group"
              >
                About
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-fuchsia-400 dark:to-purple-400 group-hover:w-4 transition-all duration-300"></div>
              </Link>
              
              <div className="ml-4 pl-4 border-l border-gray-300/50 dark:border-slate-600/40 flex items-center">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white p-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-300/50 dark:border-slate-600/40 bg-gray-50/95 dark:bg-slate-900/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-2">
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white text-base font-normal tracking-wide transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5"
              >
                Projects
              </Link>
              
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white text-base font-normal tracking-wide transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5"
              >
                Blog
              </Link>
              
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white text-base font-normal tracking-wide transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
