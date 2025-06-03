import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { textConfig } from '../config/text';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-[60vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50/90 via-blue-50/30 to-blue-50/20 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800/90 text-gray-700 dark:text-white relative overflow-hidden">
      {/* Dark mode background - very dark to match toolbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85 dark:block hidden"></div>

      {/* Subtle fuchsia ambient lighting for dark mode */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-fuchsia-600/10 to-purple-600/15 rounded-full blur-[60px] sm:blur-[100px] dark:block hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-purple-600/15 to-fuchsia-600/10 rounded-full blur-[60px] sm:blur-[100px] dark:block hidden"></div>

      {/* Light mode gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-blue-50/30 to-blue-50/25 dark:hidden block"></div>
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-r from-blue-200/15 to-cyan-200/20 rounded-full blur-[80px] sm:blur-[120px] dark:hidden block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-r from-blue-200/20 to-cyan-200/25 rounded-full blur-[80px] sm:blur-[120px] dark:hidden block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-to-r from-cyan-100/10 to-blue-100/15 rounded-full blur-[100px] sm:blur-[150px] dark:hidden block"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in space-y-8 duration-1000">
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

          <div className="flex flex-row justify-center pt-2 pb-8 sm:pt-12 sm:pb-0">
            <Link to="/about" className="group relative w-[9rem] sm:w-auto px-0 sm:px-10 py-5 text-center 
              bg-gradient-to-r from-blue-300/50 via-blue-400/40 to-cyan-300/50 
              hover:from-blue-300/60 hover:via-blue-400/50 hover:to-cyan-300/60
              dark:bg-gradient-to-r dark:from-blue-500/25 dark:via-purple-500/30 dark:to-fuchsia-500/40 
              dark:hover:from-blue-500/35 dark:hover:via-purple-500/40 dark:hover:to-fuchsia-500/50
              backdrop-blur-sm border border-gray-300/60 hover:border-blue-300/60 dark:border-white/15 dark:hover:border-fuchsia-400/50
              rounded-2xl font-medium shadow-lg hover:shadow-xl
              transition-all duration-500 transform hover:scale-[1.02] tracking-wide text-lg">
              <span className={`${textConfig.heroButton.base} ${textConfig.heroButton.size} ${textConfig.heroButton.color}`}>Learn More</span>
            </Link>

            <Link to="/blog" className="group relative w-[9rem] sm:w-auto px-0 sm:px-10 py-5 text-center
              bg-gradient-to-r from-blue-300/35 via-blue-400/30 to-cyan-300/35
              hover:from-blue-300/45 hover:via-blue-400/40 hover:to-cyan-300/45
              dark:bg-gradient-to-r dark:from-blue-500/15 dark:via-purple-500/20 dark:to-fuchsia-500/30
              dark:hover:from-blue-500/25 dark:hover:via-purple-500/30 dark:hover:to-fuchsia-500/40
              backdrop-blur-sm border border-gray-300/40 hover:border-blue-300/40 dark:border-white/8 dark:hover:border-fuchsia-400/35
              rounded-2xl font-medium shadow-lg hover:shadow-xl
              transition-all duration-500 transform hover:scale-[1.02] tracking-wide text-lg
              ml-6">
              <span className={`${textConfig.heroButtonSecondary.base} ${textConfig.heroButtonSecondary.size} ${textConfig.heroButtonSecondary.color}`}>Read My Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
