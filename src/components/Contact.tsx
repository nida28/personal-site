
import React from 'react';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
          >
            Get In Touch
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
          >
            <Github size={20} />
            View My GitHub
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 DevName. Built with React and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
