import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { socialConfig } from '../config/social';
import { textConfig } from '../config/text';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-slate-900 dark:via-gray-900 dark:to-black overflow-x-hidden">
      <Header />

      {/* Enhanced ambient background elements - Dark mode - Positioned to avoid cutoff */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-900/20 via-blue-900/30 to-purple-900/20 dark:block hidden pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/4 max-w-[400px] w-full h-[400px] bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl dark:block hidden pointer-events-none"></div>
      <div className="fixed bottom-1/3 right-1/4 max-w-[400px] w-full h-[400px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl dark:block hidden pointer-events-none"></div>

      {/* Enhanced ambient background elements - Light mode - Positioned to avoid cutoff */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-blue-200/40 dark:hidden block pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/4 max-w-[400px] w-full h-[400px] bg-gradient-to-r from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl dark:hidden block pointer-events-none"></div>
      <div className="fixed bottom-1/3 right-1/4 max-w-[400px] w-full h-[400px] bg-gradient-to-r from-blue-300/20 to-blue-400/20 rounded-full blur-3xl dark:hidden block pointer-events-none"></div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-6`}>
              Featured Project
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto mb-8"></div>
            <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} max-w-3xl mx-auto`}>
              Showcasing my latest work and creative solution.
            </p>
          </div>

          {/* BGB Bot Project Details */}
          <div className="max-w-6xl mx-auto">
            {/* Layout similar to About page - Image on left, content on right */}
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Project Image Section - Left side */}
              <div className="flex-shrink-0 relative z-20">
                <div className="group relative">
                  <div className="w-64 h-64 overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={`${import.meta.env.BASE_URL}58aa78a2-4988-4ff6-a51a-fdfeafa16e35.png`}
                      alt="BGB Bot"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 dark:from-pink-500/40 dark:to-blue-500/40 rounded-3xl blur opacity-30"></div>
                </div>
              </div>

              {/* Project Information - Right side */}
              <div className="flex-grow space-y-8">
                <div>
                  <h2 className={`${textConfig.sectionTitle.base} ${textConfig.sectionTitle.size} ${textConfig.sectionTitle.color} mb-6`}>
                    BGB Bot
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color}`}>
                    BGB Bot is an intelligent automation solution built with cutting-edge technologies.
                    This project represents a sophisticated approach to bot development, combining
                    artificial intelligence with seamless user interactions.
                  </p>
                  <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color}`}>
                    The bot features automated response systems, smart integrations with various
                    platforms, and advanced natural language processing capabilities. It's designed
                    to handle complex queries while maintaining a conversational and intuitive interface.
                  </p>
                  <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color}`}>
                    Built with scalability in mind, the architecture supports real-time processing,
                    machine learning adaptations, and seamless deployment across multiple environments.
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={socialConfig.bgbBot.demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialConfig.bgbBot.demo.label}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={socialConfig.bgbBot.sourceCode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialConfig.bgbBot.sourceCode.label}
                    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-800 dark:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl border border-gray-200 dark:border-white/10 text-xl"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
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

export default Projects;
