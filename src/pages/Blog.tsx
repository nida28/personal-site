
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable React apps that can grow with your team and user base.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "React"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-pink-900/10 dark:to-blue-900/10"></div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back to Home */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium transition-all duration-300 hover:scale-[1.02] tracking-wide"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Latest Insights
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Thoughts, tutorials, and insights from my journey as a developer.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20 transition-all duration-500 cursor-pointer h-full border border-gray-100/50 dark:border-white/10 hover:border-cyan-200/50 dark:hover:border-pink-400/30 hover:scale-[1.02] group">
                  <div className="mb-6">
                    <span className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-pink-900/50 dark:to-blue-900/50 text-cyan-800 dark:text-pink-200 text-sm font-medium px-4 py-2 rounded-full tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-pink-400 transition-colors duration-300 leading-tight tracking-wide">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-pink-500/10 dark:to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
