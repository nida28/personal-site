import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable React apps that can grow with your team and user base.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "React",
      content: `
        <h2>Introduction</h2>
        <p>Building scalable React applications requires careful planning and adherence to best practices. In this post, we'll explore the key principles that will help you create maintainable and performant React applications.</p>
        
        <h2>Component Architecture</h2>
        <p>One of the most important aspects of scalable React applications is having a well-thought-out component architecture. This means creating reusable components, maintaining a clear separation of concerns, and following consistent naming conventions.</p>
        
        <h2>State Management</h2>
        <p>As your application grows, managing state becomes increasingly complex. Consider using tools like Redux, Zustand, or React Query to handle state management effectively.</p>
        
        <h2>Performance Optimization</h2>
        <p>Performance is crucial for user experience. Implement lazy loading, memoization, and proper code splitting to ensure your application remains fast as it scales.</p>
        
        <h2>Conclusion</h2>
        <p>Building scalable React applications is an ongoing process that requires attention to architecture, performance, and maintainability. By following these best practices, you'll be well on your way to creating applications that can grow with your needs.</p>
      `
    },
    {
      id: 2,
      title: "The Art of Clean Code",
      excerpt: "Exploring principles and techniques that make code more readable, maintainable, and enjoyable to work with.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Best Practices",
      content: `
        <h2>What is Clean Code?</h2>
        <p>Clean code is code that is easy to read, understand, and maintain. It follows consistent patterns and naming conventions, making it accessible to other developers (and your future self).</p>
        
        <h2>Key Principles</h2>
        <p>The foundation of clean code rests on several key principles: meaningful names, small functions, clear comments, and consistent formatting.</p>
        
        <h2>Practical Examples</h2>
        <p>Let's look at some practical examples of how to transform messy code into clean, readable code that communicates its intent clearly.</p>
        
        <h2>Benefits</h2>
        <p>Writing clean code pays dividends in the long run. It reduces bugs, speeds up development, and makes collaboration much more enjoyable.</p>
      `
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "Dive into the latest CSS features and how they can improve your web development workflow and user experience.",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      category: "CSS",
      content: `
        <h2>CSS Grid and Flexbox</h2>
        <p>Modern CSS layout techniques like Grid and Flexbox have revolutionized how we approach web layouts. These tools provide powerful and flexible ways to create responsive designs.</p>
        
        <h2>Custom Properties</h2>
        <p>CSS custom properties (variables) allow for more maintainable and dynamic stylesheets. They're particularly useful for theming and creating consistent design systems.</p>
        
        <h2>Container Queries</h2>
        <p>Container queries represent the next evolution in responsive design, allowing components to respond to their container's size rather than just the viewport.</p>
        
        <h2>Future of CSS</h2>
        <p>The future of CSS is bright, with new features like subgrid, cascade layers, and improved color functions making development more powerful and enjoyable.</p>
      `
    }
  ];

  const post = blogPosts.find(post => post.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-pink-900/10 dark:to-blue-900/10"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 pt-32">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">Post Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">The blog post you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      {/* Background gradient that covers the entire viewport */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-pink-900/10 dark:to-blue-900/10"></div>

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <article className="flex-1 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-10">
          <header className="mb-8 space-y-8">
            <div className="flex items-center gap-4">
              <span className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-pink-900/50 dark:to-blue-900/50 text-cyan-800 dark:text-pink-200 text-sm font-medium px-4 py-2 rounded-full tracking-wide">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 font-light tracking-wide">
              <span>{post.date}</span>
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <span>{post.readTime}</span>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/30 to-transparent"></div>
          </header>

          <div
            className="prose prose-xl max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-light prose-headings:tracking-wide prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-light prose-p:text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
