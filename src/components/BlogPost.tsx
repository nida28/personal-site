import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { MDXProvider } from '@mdx-js/react';
import 'highlight.js/styles/github-dark.css';
import { textConfig } from '../config/text';

// Types for MDX components
interface MDXProps {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}

interface MDXWrapperProps {
    children: React.ReactElement;
}

// Types for MDX frontmatter and components
interface Frontmatter {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    coverImage?: string;
}

interface MDXPost {
    default: React.ComponentType;
    frontmatter: Frontmatter;
}

interface BlogPostProps {
    post: MDXPost;
}

interface MDXElementProps {
    children: string;
}

// Wrapper component to skip frontmatter content
const MDXWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (React.isValidElement(children)) {
        const element = children as React.ReactElement<MDXElementProps>;
        if (typeof element.props.children === 'string' && element.props.children.startsWith('title:')) {
            return null;
        }
    }
    return children;
};

// MDX components with Tailwind styling
const mdxComponents = {
    wrapper: MDXWrapper,
    h1: (props: MDXProps) => (
        <h1 {...props} className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} my-6`} />
    ),
    h2: (props: MDXProps) => (
        <h2 {...props} className={`${textConfig.sectionTitle.base} ${textConfig.sectionTitle.size} ${textConfig.sectionTitle.color} my-6 pb-4 border-b border-gray-200 dark:border-gray-800`} />
    ),
    h3: (props: MDXProps) => (
        <h3 {...props} className={`${textConfig.sectionTitle.base} ${textConfig.sectionTitle.size} ${textConfig.sectionTitle.color} my-6`} />
    ),
    p: (props: MDXProps) => {
        // Skip rendering if the content looks like frontmatter
        if (typeof props.children === 'string' && props.children.startsWith('title:')) {
            return null;
        }
        return (
            <p {...props} className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color} mb-4`} />
        );
    },
    a: (props: MDXProps) => (
        <a {...props} className="text-xl text-cyan-600 dark:text-cyan-400 font-normal hover:underline" />
    ),
    ul: (props: MDXProps) => (
        <ul {...props} className="list-disc pl-8 my-4 space-y-2" />
    ),
    ol: (props: MDXProps) => (
        <ol {...props} className="list-decimal pl-8 my-4 space-y-2" />
    ),
    li: (props: MDXProps) => (
        <li {...props} className={`${textConfig.text.base} ${textConfig.text.size} ${textConfig.text.color}`} />
    ),
    blockquote: (props: MDXProps) => (
        <blockquote {...props} className="border-l-4 border-cyan-500 dark:border-pink-500 pl-8 py-4 my-6 italic text-xl font-light bg-gradient-to-r from-cyan-50 to-transparent dark:from-pink-900/10 dark:to-transparent" />
    ),
    pre: (props: any) => (
        <pre {...props} className="bg-gray-900 dark:bg-gray-800 p-8 rounded-lg text-gray-100 my-12 text-lg shadow-xl leading-relaxed font-normal" />
    ),
    code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
        return className ? (
            <code className={`${className} text-lg`}>{children}</code>
        ) : (
            <code className="text-lg text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded-md font-normal">{children}</code>
        );
    },
};

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    const { frontmatter } = post;
    const MDXContent = post.default;
    const formattedDate = format(new Date(frontmatter.date), 'MMMM dd, yyyy');
    const location = useLocation();

    // Get the full URL for sharing
    const currentUrl = window.location.origin + location.pathname;

    const handleShare = (platform: 'linkedin' | 'x') => {
        const title = encodeURIComponent(frontmatter.title);
        const url = encodeURIComponent(currentUrl);

        const shareUrls = {
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            x: `https://twitter.com/intent/tweet?text=${title}&url=${url}`
        };

        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    };

    return (
        <article className="max-w-5xl mx-auto px-6 py-16">
            {/* Header */}
            <header className="mb-8">
                <div>
                    <h1 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-6`}>
                        {frontmatter.title}
                    </h1>

                    <div className="flex items-center gap-8 text-gray-600 dark:text-gray-400 text-base font-light mb-6">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>{frontmatter.author}</span>
                        </div>
                    </div>

                    <p className={`${textConfig.subtitle.base} ${textConfig.subtitle.size} ${textConfig.subtitle.color} border-l-4 border-cyan-500 dark:border-pink-500 pl-8 py-4 bg-gradient-to-r from-cyan-50 to-transparent dark:from-pink-900/10 dark:to-transparent`}>
                        {frontmatter.excerpt}
                    </p>
                </div>
            </header>

            {/* Main content */}
            <article className="prose prose-lg max-w-none dark:prose-invert">
                {frontmatter.coverImage && (
                    <div className="float-left mr-6 mb-2 mt-[0.8em] w-[180px] md:w-[280px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={frontmatter.coverImage}
                            alt={frontmatter.title}
                            className="w-full h-auto"
                        />
                    </div>
                )}
                <MDXProvider components={mdxComponents}>
                    <MDXContent />
                </MDXProvider>
            </article>

            {/* Share and Navigation */}
            <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-center">
                    <Link
                        to="/blog"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-light group"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        See All Posts
                    </Link>

                    <div className="flex gap-3">
                        <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-300 font-medium border border-cyan-200/50 dark:border-cyan-800/50 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5 group"
                            aria-label="Share on LinkedIn"
                        >
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Share
                        </button>
                        <button
                            onClick={() => handleShare('x')}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-all duration-300 font-medium border border-pink-200/50 dark:border-pink-800/50 hover:border-pink-300 dark:hover:border-pink-700 hover:shadow-lg hover:shadow-pink-500/10 dark:hover:shadow-pink-500/5 group"
                            aria-label="Share on X"
                        >
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            Share
                        </button>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default BlogPost; 