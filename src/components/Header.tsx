
import React from 'react';
import { Circle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 group">
            <h1 className="text-xl font-light text-white tracking-wide flex items-center gap-2">
              <Circle className="w-2 h-2 fill-blue-400 text-blue-400" />
              DevName
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {['home', 'about', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative px-6 py-3 text-gray-300 hover:text-white text-sm font-light tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5 group"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-4 transition-all duration-300"></div>
                </button>
              ))}
              
              <div className="ml-4 pl-4 border-l border-white/10">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-gray-300 hover:text-white text-sm font-light tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5 flex items-center gap-2"
                >
                  <Circle className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-2">
              {['home', 'about', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white text-base font-light tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white text-base font-light tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5"
                >
                  <Circle className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
