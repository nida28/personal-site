import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  return (
    <footer className={`py-12 ${
      isAboutPage 
        ? 'bg-gradient-to-br from-gray-50 via-gray-100/30 to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900' 
        : isMainPage 
        ? 'bg-gray-50 dark:bg-slate-800 border-t border-gray-200/50 dark:border-slate-700/50' 
        : 'bg-white dark:bg-slate-900 border-t border-gray-200/50 dark:border-slate-700/50'
    }`}>
      {/* Gradient background elements for About page */}
      {isAboutPage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-blue-100/10 to-blue-200/20 dark:from-pink-900/20 dark:via-blue-900/30 dark:to-purple-900/20 pointer-events-none"></div>
          <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-cyan-200/15 to-blue-300/15 dark:from-pink-500/10 dark:to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-gradient-to-r from-blue-300/15 to-blue-400/15 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Social media icons */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
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

          {/* Copyright with balanced spacing */}
          <div className={`pt-4 w-full text-center ${
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
