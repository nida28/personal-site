
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Python', 'PostgreSQL', 'MongoDB', 'AWS',
    'Docker', 'Git', 'Figma', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through clean, efficient code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm a full-stack developer with a passion for building scalable web applications 
              and solving complex problems. With several years of experience in the industry, 
              I've worked with startups and established companies to bring ideas to life.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or sharing my knowledge through blog posts and community engagement.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white rounded-lg px-4 py-2 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
