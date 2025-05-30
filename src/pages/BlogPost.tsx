
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
