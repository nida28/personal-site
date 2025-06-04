import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts, BlogPost } from '../utils/blog';
import { textConfig } from '../config/text';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden">
      <Helmet>
        <title>Blog | Nidaa Mungloo</title>
        <meta name="description" content="Dev, Law & Life in Progress." />
      </Helmet>
      <Header />

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-pink-900/10 dark:to-blue-900/10"></div>

      <main className="relative z-10 pt-32 pb-11">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-6`}>
              Latest Insights
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent mx-auto mb-8"></div>
            <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} max-w-3xl mx-auto`}>
              Thoughts, tutorials, and insights from my journey as a developer.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-700 h-4 w-20 mb-6 rounded-full"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-8 w-3/4 mb-4 rounded-lg"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-4 w-full mb-2 rounded"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-4 w-2/3 mb-6 rounded"></div>
                  <div className="flex justify-between">
                    <div className="bg-gray-200 dark:bg-gray-700 h-3 w-20 rounded"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-3 w-16 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
                  <article className="relative bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-pink-500/20 transition-all duration-500 cursor-pointer h-full border border-gray-100/50 dark:border-white/10 hover:border-cyan-200/50 dark:hover:border-pink-400/30 hover:scale-[1.02] group">
                    {post.frontmatter.coverImage ? (
                      <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden">
                        <img
                          src={post.frontmatter.coverImage}
                          alt={post.frontmatter.title}
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-pink-900/50 dark:to-blue-900/50">
                        <div className="absolute inset-0 flex items-center justify-center text-cyan-800 dark:text-pink-200">
                          <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    <h3 className={`${textConfig.sectionTitle.base} ${textConfig.sectionTitle.size} ${textConfig.sectionTitle.color} mb-4 group-hover:text-cyan-600 dark:group-hover:text-pink-400 transition-colors duration-300 leading-tight`}>
                      {post.frontmatter.title}
                    </h3>

                    <p className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color} mb-6`}>
                      {post.frontmatter.excerpt}
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-300 font-light tracking-wide">
                      <span>{new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-pink-500/10 dark:to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
