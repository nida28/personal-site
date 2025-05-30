
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
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block"
            >
              <article className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-full">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
