
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-slate-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Ambient background elements - Dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-blue-600/5 to-cyan-600/5 dark:block hidden"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl dark:block hidden"></div>
      
      {/* Ambient background elements - Light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/70 via-blue-50/60 to-blue-100/40 dark:hidden block"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100/50 to-blue-200/40 rounded-full blur-3xl dark:hidden block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-blue-400/30 rounded-full blur-3xl dark:hidden block"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
              <span className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 dark:from-white dark:via-pink-100 dark:to-white bg-clip-text text-transparent block mb-3">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent font-normal block">
                Nidaa
              </span>
            </h1>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400/60 dark:via-white/30 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
            Welcome to my corner of the internet where I share my thoughts, 
            projects, and journey as a developer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="group relative px-8 py-4 bg-cyan-600/10 hover:bg-cyan-600/20 dark:bg-white/10 dark:hover:bg-white/15 backdrop-blur-sm border border-cyan-600/30 hover:border-cyan-600/50 dark:border-white/20 dark:hover:border-white/30 text-cyan-800 dark:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-pink-500/20"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-700/20 dark:from-pink-600/20 dark:to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('blog')} 
              className="group relative px-8 py-4 border border-cyan-600/40 hover:border-cyan-600/60 dark:border-white/20 dark:hover:border-white/40 text-cyan-800 hover:text-cyan-900 dark:text-white dark:hover:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm hover:bg-cyan-600/10 dark:hover:bg-white/5"
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
