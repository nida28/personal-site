
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/40 to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-gray-700 dark:text-white relative overflow-hidden">
      {/* Dark mode background - very dark to match toolbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:block hidden"></div>
      
      {/* Subtle fuchsia ambient lighting for dark mode */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-fuchsia-600/20 to-purple-600/25 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/25 to-fuchsia-600/20 rounded-full blur-3xl dark:block hidden"></div>
      
      {/* Light mode gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/40 to-blue-50/40 dark:hidden block"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/20 to-cyan-200/25 rounded-full blur-3xl dark:hidden block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/25 to-cyan-200/30 rounded-full blur-3xl dark:hidden block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-100/15 to-blue-100/20 rounded-full blur-3xl dark:hidden block"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="animate-fade-in space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.85]">
              <span className="text-gray-800 dark:text-white block mb-4">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-normal block">
                Nidaa
              </span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
            Welcome to my corner of the internet where I share my thoughts, 
            projects, and journey as a developer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <Link
              to="/about"
              className="group relative px-10 py-5 bg-white/30 hover:bg-gradient-to-r hover:from-cyan-200/40 hover:via-blue-200/40 hover:to-blue-300/50 dark:bg-white/8 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/25 dark:hover:via-purple-500/30 dark:hover:to-fuchsia-500/40 backdrop-blur-sm border border-gray-300/60 hover:border-blue-300/60 dark:border-white/15 dark:hover:border-fuchsia-400/50 text-gray-700 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
            >
              <span className="relative z-10">Learn More</span>
            </Link>
            
            <Link 
              to="/blog"
              className="group relative px-10 py-5 bg-white/15 hover:bg-gradient-to-r hover:from-cyan-200/25 hover:via-blue-200/25 hover:to-blue-300/35 dark:bg-white/3 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/15 dark:hover:via-purple-500/20 dark:hover:to-fuchsia-500/30 backdrop-blur-sm border border-gray-300/40 hover:border-blue-300/40 dark:border-white/8 dark:hover:border-fuchsia-400/35 text-gray-700 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
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
