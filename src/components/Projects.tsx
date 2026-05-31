import { useNavigate } from 'react-router-dom';
import { textConfig } from '../config/text';
import { getAllProjects } from '../utils/projects';

const Projects = () => {
  const navigate = useNavigate();
  const projects = getAllProjects();

  return (
    <section id="projects" className={`${textConfig.spacing.section.home.full} bg-gray-50 dark:bg-slate-900 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`text-center ${textConfig.spacing.title.home}`}>
          <h2 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-6`}>
            Projects
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/30 to-transparent mx-auto mb-8"></div>
          <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} max-w-4xl lg:max-w-5xl mx-auto`}>
            A look at what I’m currently building and what I’ve completed so far.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="block cursor-pointer"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div
                className="group relative h-full flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-2xl border border-gray-100 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]"
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

                <div className="p-8 flex flex-col flex-1">
                  <h3 className={`${textConfig.sectionTitle.base} ${textConfig.sectionTitle.size} ${textConfig.sectionTitle.color} mb-4`}>
                    {project.title}
                  </h3>
                  <p className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color} mb-6`}>
                    {project.summary}
                  </p>

                  <div className="inline-flex self-start items-center rounded-xl bg-gray-100 dark:bg-slate-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 mt-auto">
                    {project.status === 'wip' ? 'Work in Progress' : 'Live Project'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
