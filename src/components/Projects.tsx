import React from 'react';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialConfig } from '../config/social';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BGB Bot",
      description:
        "An intelligent bot solution built with modern technologies. Features automated responses, smart integrations, and seamless user interactions.",
      image: `${import.meta.env.BASE_URL}58aa78a2-4988-4ff6-a51a-fdfeafa16e35.png`,
      demoUrl: socialConfig.bgbBot.demo.url,
      sourceUrl: socialConfig.bgbBot.sourceCode.url,
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6 tracking-tight text-blue-900 dark:text-white md:text-6xl">
            Featured Project
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/30 to-transparent mx-auto mb-8"></div>
          <p className="text-2xl text-black dark:text-white max-w-3xl mx-auto font-light leading-relaxed">
            My latest work and creative solution
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {projects.map((project, index) => <div key={project.id} className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-2xl border border-gray-100 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]" style={{
              animationDelay: `${index * 100}ms`
            }}>
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-light text-blue-900 dark:text-white mb-4 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-2xl text-black dark:text-white leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialConfig.bgbBot.demo.label}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-300 text-xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialConfig.bgbBot.sourceCode.label}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-white rounded-xl font-medium transition-colors duration-300 text-xl"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
