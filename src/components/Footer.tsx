import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { socialConfig } from '../config/social';
import SocialButton from './common/SocialButton';

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
              <SocialButton
                href={socialConfig.linkedin.url}
                label={socialConfig.linkedin.label}
                icon={Linkedin}
                size="sm"
              />
              <SocialButton
                href={socialConfig.github.url}
                label={socialConfig.github.label}
                icon={Github}
                size="sm"
              />
              <SocialButton
                href={`mailto:${socialConfig.email.address}`}
                label={socialConfig.email.label}
                icon={Mail}
                size="sm"
              />
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
