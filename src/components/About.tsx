
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Python', 'PostgreSQL', 'MongoDB', 'AWS',
    'Docker', 'Git', 'Figma', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Passionate about creating meaningful digital experiences through clean, efficient code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">My Story</h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg font-light">
                  I'm a full-stack developer with a passion for building scalable web applications 
                  and solving complex problems. With several years of experience in the industry, 
                  I've worked with startups and established companies to bring ideas to life.
                </p>
                <p className="text-lg font-light">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open source projects, or sharing my knowledge through blog posts and community engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-8 tracking-wide">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-blue-200/50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-800 font-medium tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                      {skill}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
