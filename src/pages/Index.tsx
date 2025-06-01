
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Projects />
      <Blog />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
