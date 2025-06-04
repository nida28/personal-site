import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialConfig } from '../config/social';
import { textConfig } from '../config/text';

const Projects = () => {
  const projects = [
    {
      id: 1,
      slug: "bgb-bot",
      title: "BGB Bot",
      description:
        "An AI-powered legal assistant trained on the Bürgerliches Gesetzbuch (BGB) — helping immigrants navigate German civil law through natural, easy-to-understand English.",
      image: `${import.meta.env.BASE_URL}58aa78a2-4988-4ff6-a51a-fdfeafa16e35.png`,
      demoUrl: socialConfig.bgbBot.demo.url,
      sourceUrl: socialConfig.bgbBot.sourceCode.url,
    },
  ];

  return (
    <section id="projects" className={`${textConfig.spacing.section.home.full} bg-gray-50 dark:bg-slate-900 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center ${textConfig.spacing.title.home}`}>
          <h2 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-6`}>
            Project Spotlight
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/30 to-transparent mx-auto mb-8"></div>
          <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} max-w-4xl lg:max-w-5xl mx-auto`}>
            A friendly legal chatbot helping people understand their rights in Germany.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to="/projects"
                className="block"
              >
                <div
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
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-300 text-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialConfig.bgbBot.sourceCode.label}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-white rounded-xl font-medium transition-colors duration-300 text-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
