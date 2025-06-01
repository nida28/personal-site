
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BGB Bot",
      description: "An intelligent bot solution built with modern technologies. Features automated responses, smart integrations, and seamless user interactions.",
      image: "/lovable-uploads/58aa78a2-4988-4ff6-a51a-fdfeafa16e35.png",
      liveUrl: "https://example.com",
      technologies: ["React", "TypeScript", "Node.js", "AI/ML"],
      category: "Bot Development"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      image: "/lovable-uploads/a3a6eabd-1e64-410d-b301-5b26869cd2bb.png",
      liveUrl: "https://example.com",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      category: "Web Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      <Header />
      
      {/* Enhanced ambient background elements - Dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-blue-900/30 to-purple-900/20 dark:block hidden"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/15 to-blue-500/15 rounded-full blur-3xl dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl dark:block hidden"></div>
      
      {/* Enhanced ambient background elements - Light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-blue-200/40 dark:hidden block"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl dark:hidden block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300/30 to-blue-400/30 rounded-full blur-3xl dark:hidden block"></div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back to Home */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium transition-all duration-300 hover:scale-[1.02] tracking-wide"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              My Projects
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              A collection of my latest work and creative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm dark:shadow-2xl border border-gray-200/50 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-pink-900/50 dark:to-blue-900/50 text-cyan-800 dark:text-pink-200 text-sm font-medium px-4 py-2 rounded-full tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4 tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
