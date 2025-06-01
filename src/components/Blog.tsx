import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [{
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating maintainable React apps that can grow with your team and user base.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "React"
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/95 via-blue-50/20 to-blue-50/15 dark:from-slate-900/98 dark:via-slate-900/95 dark:to-slate-800/90 text-gray-700 dark:text-white relative overflow-x-hidden">
      {/* Dark mode ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85 dark:block hidden"></div>

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 max-w-[500px] w-full h-[500px] bg-gradient-to-r from-blue-600/5 to-cyan-600/10 rounded-full blur-[120px] dark:from-fuchsia-600/20 dark:to-purple-600/25"></div>
      <div className="absolute bottom-1/4 right-1/4 max-w-[500px] w-full h-[500px] bg-gradient-to-r from-cyan-600/10 to-blue-600/5 rounded-full blur-[120px] dark:from-purple-600/25 dark:to-fuchsia-600/20"></div>

      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-blue-50/30 to-blue-50/25 dark:hidden block"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6 tracking-tight text-gray-500 dark:text-white md:text-6xl">
            Latest Insights
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto font-light leading-relaxed">
            Thoughts, tutorials, and insights from my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group">
              <article className="relative bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20 transition-all duration-500 cursor-pointer h-full border border-gray-100/50 dark:border-white/10 hover:border-cyan-200/50 dark:hover:border-pink-400/30 hover:scale-[1.02] group">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-pink-900/50 dark:to-blue-900/50 text-cyan-800 dark:text-pink-200 text-sm font-medium px-4 py-2 rounded-full tracking-wide">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-pink-400 transition-colors duration-300 leading-tight tracking-wide">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-white mb-6 leading-relaxed font-light">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-300 font-light tracking-wide">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-pink-500/10 dark:to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 dark:from-pink-600 dark:to-blue-600 dark:hover:from-pink-700 dark:hover:to-blue-700 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-pink-500/25 tracking-wide">
            <span className="relative z-10">View All Posts</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
