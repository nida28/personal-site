import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { socialConfig } from '../config/social';

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <footer className={`${isMainPage
      ? 'bg-gray-50 dark:bg-slate-800'
      : 'bg-white dark:bg-slate-900'
      }`}>
      <div className="pt-8 border-t border-gray-200/30 dark:border-white/10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col items-center space-y-6">
            {/* Social media icons */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href={socialConfig.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialConfig.linkedin.label}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href={socialConfig.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialConfig.github.label}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href={`mailto:${socialConfig.email.address}`}
                aria-label={socialConfig.email.label}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright text */}
            <div className="w-full text-center pb-4">
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm">
                © 2025 Nidaa Fatimah Mungloo
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
