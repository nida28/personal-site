import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { textConfig } from '../config/text';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50/90 via-blue-50/30 to-blue-50/20 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800/90 text-gray-700 dark:text-white relative overflow-hidden">
      {/* Dark mode background - very dark to match toolbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85 dark:block hidden"></div>

      {/* Subtle fuchsia ambient lighting for dark mode */}
      <div className="absolute top-1/4 left-1/4 max-w-[500px] w-full h-[500px] bg-gradient-to-r from-fuchsia-600/10 to-purple-600/15 rounded-full blur-[100px] dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 max-w-[500px] w-full h-[500px] bg-gradient-to-r from-purple-600/15 to-fuchsia-600/10 rounded-full blur-[100px] dark:block hidden"></div>

      {/* Light mode gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-blue-50/30 to-blue-50/25 dark:hidden block"></div>
      <div className="absolute top-1/4 left-1/4 max-w-[600px] w-full h-[600px] bg-gradient-to-r from-blue-200/15 to-cyan-200/20 rounded-full blur-[120px] dark:hidden block"></div>
      <div className="absolute bottom-1/4 right-1/4 max-w-[600px] w-full h-[600px] bg-gradient-to-r from-blue-200/20 to-cyan-200/25 rounded-full blur-[120px] dark:hidden block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[800px] w-full h-[800px] bg-gradient-to-r from-cyan-100/10 to-blue-100/15 rounded-full blur-[150px] dark:hidden block"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in space-y-12 duration-1000">
          <div className="space-y-8 pt-32">
            <h1 className="leading-[1.1]">
              <span className={`${textConfig.heroTitlePrefix.base} ${textConfig.heroTitlePrefix.size} ${textConfig.heroTitlePrefix.color}`}>Hi, I'm </span>
              <span className={`${textConfig.heroTitleName.base} ${textConfig.heroTitleName.size} ${textConfig.heroTitleName.color}`} style={{
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}>
                Nidaa
              </span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto"></div>
          </div>

          <p className={`${textConfig.heroSubtitle.base} ${textConfig.heroSubtitle.size} ${textConfig.heroSubtitle.color} max-w-4xl mx-auto`}>
            Welcome to my corner of the internet where I share my thoughts,
            projects, and journey as a developer.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <Link to="/about" className="group relative px-10 py-5 bg-white/30 hover:bg-gradient-to-r hover:from-cyan-200/40 hover:via-blue-200/40 hover:to-blue-300/50 dark:bg-white/8 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/25 dark:hover:via-purple-500/30 dark:hover:to-fuchsia-500/40 backdrop-blur-sm border border-gray-300/60 hover:border-blue-300/60 dark:border-white/15 dark:hover:border-fuchsia-400/50 text-gray-700 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg">
              <span className="relative z-10">Learn More</span>
            </Link>

            <Link to="/blog" className="group relative px-10 py-5 bg-white/15 hover:bg-gradient-to-r hover:from-cyan-200/25 hover:via-blue-200/25 hover:to-blue-300/35 dark:bg-white/3 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/15 dark:hover:via-purple-500/20 dark:hover:to-fuchsia-500/30 backdrop-blur-sm border border-gray-300/40 hover:border-blue-300/40 dark:border-white/8 dark:hover:border-fuchsia-400/35 text-gray-700 dark:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl tracking-wide text-lg">
              <span className="relative z-10">Read My Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
