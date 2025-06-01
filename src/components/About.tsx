
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Python', 'PostgreSQL', 'MongoDB', 'AWS',
    'Docker', 'Git', 'Figma', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-32 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/30 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto font-light leading-relaxed">
            Passionate about creating meaningful digital experiences through clean, efficient code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Profile Photo Section */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 dark:from-pink-500/30 dark:to-blue-500/30 flex items-center justify-center border border-gray-200 dark:border-white/10">
                  <div className="text-gray-400 dark:text-gray-500 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="text-sm font-light">Your Photo Here</p>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-blue-500/30 rounded-3xl blur opacity-30"></div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">My Story</h3>
              <div className="space-y-6 text-gray-700 dark:text-white leading-relaxed">
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
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-8 tracking-wide">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group relative bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl px-6 py-4 text-center shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl hover:shadow-pink-500/10 dark:hover:shadow-pink-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-pink-200/50 dark:hover:border-pink-400/30"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-800 dark:text-white font-medium tracking-wide group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 dark:from-pink-500/10 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
