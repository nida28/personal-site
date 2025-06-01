
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Enhanced ambient background elements - Dark mode with more fuschia */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-fuchsia-900/25 to-purple-900/20 dark:block hidden"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/15 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-500/15 to-fuchsia-500/15 rounded-full blur-3xl dark:block hidden"></div>
      
      {/* Simplified light mode background - no interfering gradients */}
      <div className="absolute inset-0 bg-white dark:hidden block"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="animate-fade-in space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.85]">
              <span className="text-gray-800 dark:bg-gradient-to-r dark:from-white dark:via-pink-100 dark:to-white dark:bg-clip-text dark:text-transparent block mb-4">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-cyan-600 via-blue-700 to-blue-800 dark:from-pink-400 dark:via-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent font-normal block">
                Nidaa
              </span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
            Welcome to my corner of the internet where I share my thoughts, 
            projects, and journey as a developer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <Link
              to="/about"
              className="group relative px-10 py-5 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 backdrop-blur-sm border border-gray-300 hover:border-gray-400 dark:border-white/20 dark:hover:border-white/30 text-gray-800 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
            >
              <span className="relative z-10">Learn More</span>
            </Link>
            
            <Link 
              to="/blog"
              className="group relative px-10 py-5 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 backdrop-blur-sm border border-gray-300 hover:border-gray-400 dark:border-white/20 dark:hover:border-white/30 text-gray-800 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
            >
              <span className="relative z-10">Read My Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
