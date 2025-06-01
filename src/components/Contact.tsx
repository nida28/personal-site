
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Enhanced ambient background elements - Dark mode with more fuchsia */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/35 via-fuchsia-900/30 to-purple-900/25 dark:block hidden"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 to-fuchsia-500/25 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/15 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-500/12 to-fuchsia-500/18 rounded-full blur-3xl dark:block hidden"></div>
      
      {/* Light mode gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/10 dark:hidden block"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-7xl font-light mb-8 tracking-tight text-gray-700 dark:text-white">Let's Connect</h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            I'm always interested in connecting with fellow developers and hearing your thoughts. 
            Feel free to reach out if you'd like to chat!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <a
              href="mailto:your.email@example.com"
              className="group relative px-10 py-5 bg-white/20 hover:bg-gradient-to-r hover:from-cyan-100/30 hover:via-blue-100/30 hover:to-purple-100/40 dark:bg-white/8 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:via-purple-500/25 dark:hover:to-fuchsia-500/30 backdrop-blur-sm border border-gray-300/50 hover:border-gray-400/60 dark:border-white/15 dark:hover:border-white/25 text-gray-800 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
            >
              <span className="relative z-10">Get In Touch</span>
            </a>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-gray-300 dark:border-white/10">
          <p className="text-gray-600 dark:text-gray-400 font-light tracking-wide text-lg">
            © 2024 Nidaa. Built with React and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
