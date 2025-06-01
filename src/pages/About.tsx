import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden flex flex-col">
      <Header />

      <main className="flex-1 pt-32 bg-gradient-to-br from-gray-50 via-gray-100/30 to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white relative">
        {/* Gradient background elements positioned to not interfere with image */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-blue-100/10 to-blue-200/20 dark:from-pink-900/20 dark:via-blue-900/30 dark:to-purple-900/20 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 max-w-[300px] w-full h-[300px] bg-gradient-to-r from-cyan-200/15 to-blue-300/15 dark:from-pink-500/10 dark:to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/4 max-w-[250px] w-full h-[250px] bg-gradient-to-r from-blue-300/15 to-blue-400/15 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-gray-500 dark:text-white">About Me</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/60 dark:via-white/30 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Passionate about creating meaningful digital experiences through clean, efficient code.
            </p>
          </div>

          {/* Newspaper-style layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-start pb-10">
            {/* Profile Photo Section - Left aligned with higher z-index */}
            <div className="flex-shrink-0 relative z-20">
              <div className="w-64 h-64 rounded-3xl overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-800">
                <img
                  src="/lovable-uploads/a3a6eabd-1e64-410d-b301-5b26869cd2bb.png"
                  alt="Nidaa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content flowing around image */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">My Story</h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
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
                  <p className="text-lg font-light">
                    My approach to development focuses on understanding user needs and translating
                    them into elegant solutions. I enjoy the challenge of solving complex problems
                    while maintaining simplicity in design and functionality.
                  </p>
                  <p className="text-lg font-light">
                    Through my work, I aim to bridge the gap between technical possibility and
                    user experience, creating applications that not only work well but feel
                    intuitive and enjoyable to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
