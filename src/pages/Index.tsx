import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Helmet>
        <title>Home | Nidaa Mungloo</title>
        <meta name="description" content="Welcome to my thinking space — where I document what I'm learning, building, and figuring out in real time." />
      </Helmet>
      <Header />
      <Hero />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
