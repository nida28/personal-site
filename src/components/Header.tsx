import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import { textConfig } from '../config/text';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-200/40 dark:border-slate-700/30 shadow-sm dark:shadow-slate-900/20">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 group cursor-pointer relative" onClick={scrollToHome}>
            <div className="relative">
              <img
                src={
                  theme === 'dark'
                    ? `${import.meta.env.BASE_URL}8e5d5b3b-7430-4ac6-8fa6-2c0c657a8cea.png`
                    : `${import.meta.env.BASE_URL}52ee9a92-ee9b-4ee5-96a0-1f65c76586c6.png`
                }
                alt="Nidaa Logo - Click to go home"
                className="h-20 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 relative z-10"
              />

              {/* Enhanced glowy border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/50 to-blue-500/50 dark:from-pink-500/60 dark:to-blue-500/60 blur-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/40 to-blue-400/40 dark:from-pink-400/50 dark:to-blue-400/50 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300/30 to-blue-300/30 dark:from-pink-300/40 dark:to-blue-300/40 blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Link
                to="/blog"
                className={`${textConfig.toolbar.base} ${textConfig.toolbar.size} ${textConfig.toolbar.color} relative px-8 py-4 hover:text-gray-700 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 group hover:shadow-lg dark:hover:shadow-white/5 border border-transparent hover:border-cyan-200/30 dark:hover:border-pink-400/30 hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20`}
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = theme === 'dark'
                    ? '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2), 0 0 60px rgba(236, 72, 153, 0.1)'
                    : '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Blog
              </Link>

              <Link
                to="/projects"
                className={`${textConfig.toolbar.base} ${textConfig.toolbar.size} ${textConfig.toolbar.color} relative px-8 py-4 hover:text-gray-700 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 group hover:shadow-lg dark:hover:shadow-white/5 border border-transparent hover:border-cyan-200/30 dark:hover:border-pink-400/30 hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20`}
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = theme === 'dark'
                    ? '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2), 0 0 60px rgba(236, 72, 153, 0.1)'
                    : '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Projects
              </Link>

              <Link
                to="/about"
                className={`${textConfig.toolbar.base} ${textConfig.toolbar.size} ${textConfig.toolbar.color} relative px-8 py-4 hover:text-gray-700 dark:hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 group hover:shadow-lg dark:hover:shadow-white/5 border border-transparent hover:border-cyan-200/30 dark:hover:border-pink-400/30 hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20`}
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = theme === 'dark'
                    ? '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.2), 0 0 60px rgba(236, 72, 153, 0.1)'
                    : '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                About
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
              className="text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-white p-3 rounded-lg hover:bg-gray-100/70 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-md dark:hover:shadow-white/5"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-300/50 dark:border-slate-600/40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-2">
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-6 py-4 text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-white text-xl font-light tracking-wide transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 hover:shadow-md dark:hover:shadow-white/5"
              >
                Blog
              </Link>

              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-6 py-4 text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-white text-xl font-light tracking-wide transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 hover:shadow-md dark:hover:shadow-white/5"
              >
                Projects
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-6 py-4 text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-white text-xl font-light tracking-wide transition-all duration-300 rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 hover:shadow-md dark:hover:shadow-white/5"
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
