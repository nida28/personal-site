
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Separator } from './ui/separator';

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  return (
    <footer className={`${
      isAboutPage 
        ? 'bg-blue-100/80 dark:bg-blue-900/50' 
        : isMainPage 
        ? 'bg-gray-50 dark:bg-slate-800 border-t border-gray-200/50 dark:border-slate-700/50' 
        : 'bg-white dark:bg-slate-900 border-t border-gray-200/50 dark:border-slate-700/50'
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center space-y-4 pt-8">
          {/* Social media icons */}
          <div className="flex flex-col sm:flex-row items-center gap-8 pb-4">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Separator for About page */}
          {isAboutPage && (
            <div className="w-full">
              <Separator className="bg-gray-200/50 dark:bg-slate-600/50" />
            </div>
          )}

          {/* Copyright with reduced bottom padding */}
          <div className={`pt-8 pb-4 w-full text-center ${
            isAboutPage 
              ? '' 
              : 'border-t border-gray-200/50 dark:border-slate-600/50'
          }`}>
            <p className="text-gray-600 dark:text-gray-400 font-light text-sm">
              © 2025 Nidaa Fatimah Mungloo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
