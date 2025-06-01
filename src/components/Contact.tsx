
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-slate-900 dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-blue-900/20 to-slate-900"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">Let's Connect</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            I'm always interested in connecting with fellow developers and hearing your thoughts. 
            Feel free to reach out if you'd like to chat!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href="mailto:your.email@example.com"
              className="group relative px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20 tracking-wide"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 text-white hover:text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm hover:bg-white/5 tracking-wide"
            >
              <span className="relative z-10">View My GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10">
          <p className="text-gray-400 font-light tracking-wide">
            © 2024 Nidaa. Built with React and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
