
import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-blue-100 dark:from-slate-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
        {/* Enhanced ambient background elements - Dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-blue-900/40 to-purple-900/30 dark:block hidden"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl dark:block hidden"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl dark:block hidden"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl dark:block hidden"></div>
        
        {/* Enhanced ambient background elements - Light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 via-blue-100/60 to-blue-200/50 dark:hidden block"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-300/40 to-blue-400/40 rounded-full blur-3xl dark:hidden block"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/40 to-blue-500/40 rounded-full blur-3xl dark:hidden block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl dark:hidden block"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">About Me</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/60 dark:via-white/30 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Passionate about creating meaningful digital experiences through clean, efficient code.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Profile Photo Section */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-64 h-64 rounded-3xl overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
                    <img
                      src="/lovable-uploads/a3a6eabd-1e64-410d-b301-5b26869cd2bb.png"
                      alt="Nidaa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 dark:from-pink-500/40 dark:via-blue-500/40 dark:to-purple-500/40 rounded-3xl blur-xl opacity-70"></div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">My Story</h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg font-light">
                    I'm a developer with a passion for building innovative web applications 
                    and sharing my thoughts through writing. This is my personal space where 
                    I document my journey, share insights, and showcase my side projects.
                  </p>
                  <p className="text-lg font-light">
                    When I'm not coding, you can find me exploring new technologies, 
                    writing about my experiences, or working on creative projects that 
                    push the boundaries of what's possible on the web.
                  </p>
                  <p className="text-lg font-light">
                    I believe in writing clean, efficient code and creating digital experiences 
                    that are not only functional but also beautiful and user-friendly. 
                    Welcome to my corner of the internet!
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8 tracking-wide">What I Do</h2>
                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20 transition-all duration-500">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Web Development</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      Creating modern, responsive web applications with a focus on performance and user experience.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20 transition-all duration-500">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Technical Writing</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      Sharing knowledge and insights through blog posts and technical documentation.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20 transition-all duration-500">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      Exploring new technologies and pushing the boundaries of what's possible on the web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
