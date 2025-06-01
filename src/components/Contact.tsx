
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-gradient-to-br from-gray-50 via-blue-50/40 to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-gray-700 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Dark mode background - matching hero exactly */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:block hidden"></div>
      
      {/* Subtle fuchsia ambient lighting for dark mode - matching hero */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-fuchsia-600/20 to-purple-600/25 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/25 to-fuchsia-600/20 rounded-full blur-3xl dark:block hidden"></div>
      
      {/* Light mode gradient background - matching hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/40 to-blue-50/40 dark:hidden block"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/20 to-cyan-200/25 rounded-full blur-3xl dark:hidden block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/25 to-cyan-200/30 rounded-full blur-3xl dark:hidden block"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-7xl font-light mb-8 tracking-tight text-gray-500 dark:text-white">Let's Connect</h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-white max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            I'm always interested in connecting with fellow developers and hearing your thoughts. 
            Feel free to reach out if you'd like to chat!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <a
              href="mailto:your.email@example.com"
              className="group relative px-10 py-5 bg-white/20 hover:bg-gradient-to-r hover:from-cyan-100/30 hover:via-blue-100/30 hover:to-purple-100/40 dark:bg-white/8 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:via-purple-500/25 dark:hover:to-fuchsia-500/30 backdrop-blur-sm border border-gray-300/50 hover:border-gray-400/60 dark:border-white/15 dark:hover:border-white/25 text-gray-800 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white/20 hover:bg-gradient-to-r hover:from-cyan-100/30 hover:via-blue-100/30 hover:to-purple-100/40 dark:bg-white/8 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:via-purple-500/25 dark:hover:to-fuchsia-500/30 backdrop-blur-sm border border-gray-300/50 hover:border-gray-400/60 dark:border-white/15 dark:hover:border-white/25 text-gray-800 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white/20 hover:bg-gradient-to-r hover:from-cyan-100/30 hover:via-blue-100/30 hover:to-purple-100/40 dark:bg-white/8 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:via-purple-500/25 dark:hover:to-fuchsia-500/30 backdrop-blur-sm border border-gray-300/50 hover:border-gray-400/60 dark:border-white/15 dark:hover:border-white/25 text-gray-800 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-gray-300 dark:border-white/10">
          <p className="text-gray-600 dark:text-white font-light tracking-wide text-lg">
            © 2024 Nidaa. Built with React and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
