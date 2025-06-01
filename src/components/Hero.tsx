
import React from 'react';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-slate-900 dark:via-gray-900 dark:to-black light:from-white light:via-blue-50 light:to-blue-100 text-white dark:text-white light:text-gray-900 relative overflow-hidden">
      {/* Ambient background elements - Dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-blue-600/5 to-cyan-600/5 dark:block hidden"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl dark:block hidden"></div>
      
      {/* Ambient background elements - Light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-blue-200/30 to-blue-300/40 dark:hidden block"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-blue-500/20 rounded-full blur-3xl dark:hidden block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-600/25 rounded-full blur-3xl dark:hidden block"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="animate-fade-in space-y-10">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-pink-100 dark:to-white light:from-gray-800 light:via-gray-600 light:to-gray-800 bg-clip-text text-transparent block mb-4">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 dark:from-pink-400 dark:via-blue-400 dark:to-cyan-400 light:from-blue-600 light:via-blue-500 light:to-blue-700 bg-clip-text text-transparent font-normal block">
                Nidaa
              </span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400/50 dark:via-white/30 light:via-blue-400/50 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
            Welcome to my corner of the internet where I share my thoughts, 
            projects, and journey as a developer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <button 
              onClick={() => scrollToSection('about')} 
              className="group relative px-8 py-4 bg-gray-900/10 hover:bg-gray-900/15 dark:bg-white/10 dark:hover:bg-white/15 light:bg-blue-600/10 light:hover:bg-blue-600/20 backdrop-blur-sm border border-gray-900/20 hover:border-gray-900/30 dark:border-white/20 dark:hover:border-white/30 light:border-blue-600/20 light:hover:border-blue-600/30 text-gray-900 dark:text-white light:text-blue-800 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20 light:hover:shadow-blue-500/20"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-blue-600/20 dark:from-pink-600/20 dark:to-blue-600/20 light:from-blue-500/20 light:to-blue-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('blog')} 
              className="group relative px-8 py-4 border border-gray-900/20 hover:border-gray-900/40 dark:border-white/20 dark:hover:border-white/40 light:border-blue-600/30 light:hover:border-blue-600/50 text-gray-900 hover:text-gray-900 dark:text-white dark:hover:text-white light:text-blue-800 light:hover:text-blue-900 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm hover:bg-gray-900/5 dark:hover:bg-white/5 light:hover:bg-blue-600/10"
            >
              <span className="relative z-10">Read My Blog</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
