import { ExternalLink, Github } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { textConfig } from '../config/text';
import { Helmet } from 'react-helmet-async';
import { getProjectBySlug } from '../utils/projects';
import NotFound from './NotFound';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-slate-900 dark:via-gray-900 dark:to-black overflow-x-hidden">
      <Helmet>
        <title>{project.title} | Nidaa Mungloo</title>
        <meta name="description" content={project.summary} />
      </Helmet>
      <Header />

      <div className="fixed inset-0 bg-gradient-to-br from-pink-900/20 via-blue-900/30 to-purple-900/20 dark:block hidden pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-blue-200/40 dark:hidden block pointer-events-none"></div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-6`}>
              {project.title}
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto mb-8"></div>
            <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} max-w-3xl mx-auto`}>
              {project.summary}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-shrink-0 relative z-20">
                <div className="group relative">
                  <div className="w-64 h-64 overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 dark:from-pink-500/40 dark:to-blue-500/40 rounded-3xl blur opacity-30"></div>
                </div>
              </div>

              <div className="flex-grow space-y-8">
                <div className="space-y-6">
                  <p className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color}`}>
                    {project.body.intro}
                  </p>
                  <p className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color}`}>
                    {project.body.details}
                  </p>
                  <ul className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color} list-disc pl-12 space-y-2 mt-2`}>
                    {project.body.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                {project.status === 'wip' ? (
                  <div className="inline-flex items-center rounded-xl bg-gray-100 dark:bg-slate-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    {project.body.note ?? 'Work in Progress'}
                  </div>
                ) : (
                  <div className="flex gap-4 pt-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-xl"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-800 dark:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl border border-gray-200 dark:border-white/10 text-xl"
                      >
                        <Github className="w-5 h-5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
