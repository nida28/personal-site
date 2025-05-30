
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
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable React apps that can grow with your team and user base.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "React"
    },
    {
      id: 2,
      title: "The Art of Clean Code",
      excerpt: "Exploring principles and techniques that make code more readable, maintainable, and enjoyable to work with.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Best Practices"
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "Dive into the latest CSS features and how they can improve your web development workflow and user experience.",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      category: "CSS"
    }
  ];

  return (
    <section id="blog" className="py-32 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Latest Insights
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Thoughts, tutorials, and insights from my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer h-full border border-gray-100/50 hover:border-blue-200/50 hover:scale-[1.02] group">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full tracking-wide">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight tracking-wide">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 font-light tracking-wide">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 tracking-wide">
            <span className="relative z-10">View All Posts</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
