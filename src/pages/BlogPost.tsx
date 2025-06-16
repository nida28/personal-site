import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPostComponent from '../components/BlogPost';
import { getPostBySlug, BlogPost } from '../utils/blog';
import { textConfig } from '../config/text';
import { Helmet } from 'react-helmet-async';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        navigate('/blog');
        return;
      }

      try {
        const postData = await getPostBySlug(slug);
        if (!postData) {
          navigate('/blog');
          return;
        }
        setPost(postData);
      } catch (error) {
        console.error('Error loading blog post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Helmet>
          <title>Loading... | Nidaa Mungloo</title>
        </Helmet>
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2 mx-auto mb-2"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Helmet>
          <title>Post Not Found | Nidaa Mungloo</title>
        </Helmet>
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className={`${textConfig.sectionTitle.base} ${textConfig.sectionTitle.size} ${textConfig.sectionTitle.color} mb-4`}>
            Post Not Found
          </h1>
          <p className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color}`}>
            The blog post you're looking for doesn't exist.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Helmet>
        <title>{post.frontmatter.title} | Nidaa Mungloo</title>
        <meta name="description" content={post.frontmatter.excerpt || `Read ${post.frontmatter.title} on Nidaa's blog.`} />
      </Helmet>
      <Header />
      <main className="pt-24">
        <BlogPostComponent post={{ default: post.Component, frontmatter: post.frontmatter }} slug={slug} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
