import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialConfig } from '../config/social';
import { textConfig } from '../config/text';

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
          <h2 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-6`}>
            Featured Project
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/30 to-transparent mx-auto mb-8"></div>
          <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} max-w-3xl mx-auto`}>
            My latest work and creative solution
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-2xl border border-gray-100 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className={`${textConfig.sectionTitle.base} ${textConfig.sectionTitle.size} ${textConfig.sectionTitle.color} mb-4`}>
                    {project.title}
                  </h3>
                  <p className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color} mb-6`}>
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
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-pink-500/25 tracking-wide"
          >
            <span>View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
