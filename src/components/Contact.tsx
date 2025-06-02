import { Github, Linkedin, Mail } from 'lucide-react';
import { socialConfig } from '../config/social';
import SocialButton from './common/SocialButton';
import { textConfig } from '../config/text';

const Contact = () => {
  return (
    <section id="contact" className={`${textConfig.spacing.section.home.full} bg-gradient-to-br from-gray-50/98 via-blue-50/20 to-blue-50/15 dark:from-slate-900/98 dark:via-slate-900/95 dark:to-slate-800/90 text-gray-700 dark:text-white relative overflow-hidden`}>
      {/* Dark mode ambient lighting */}
      <div className="absolute -top-1/2 right-0 w-[900px] h-[900px] bg-gradient-to-r from-blue-600/5 via-cyan-600/8 to-blue-600/10 rounded-full blur-[180px] dark:from-purple-600/10 dark:via-fuchsia-600/15 dark:to-pink-600/20"></div>
      <div className="absolute -bottom-1/2 left-0 w-[900px] h-[900px] bg-gradient-to-r from-blue-600/10 via-cyan-600/8 to-blue-600/5 rounded-full blur-[180px] dark:from-pink-600/20 dark:via-fuchsia-600/15 dark:to-purple-600/10"></div>

      {/* Light mode subtle patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent dark:from-purple-900/15 dark:via-transparent dark:to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-50/30 via-transparent to-transparent dark:from-pink-900/15 dark:via-transparent dark:to-transparent"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="space-y-12">
          <div className={`space-y-8 text-center ${textConfig.spacing.title.home}`}>
            <h2 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-8`}>
              Let's Connect
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 dark:via-white/20 to-transparent mx-auto"></div>
          </div>

          <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} max-w-4xl mx-auto text-center`}>
            I'm always interested in connecting with fellow developers and hearing your thoughts.
            Feel free to reach out if you'd like to chat!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <SocialButton
              href={socialConfig.linkedin.url}
              label={socialConfig.linkedin.label}
              icon={Linkedin}
              size="lg"
            />
            <SocialButton
              href={socialConfig.github.url}
              label={socialConfig.github.label}
              icon={Github}
              size="lg"
            />
            <SocialButton
              href={`mailto:${socialConfig.email.address}`}
              label={socialConfig.email.label}
              icon={Mail}
              size="lg"
            />
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-200/30 dark:border-white/10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className={`${textConfig.text.base} text-sm ${textConfig.text.color} text-center`}>
              © 2025 Nidaa Fatimah Mungloo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
