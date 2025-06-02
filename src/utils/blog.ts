import { ComponentType } from 'react';

export interface BlogPost {
    slug: string;
    Component: ComponentType;
    frontmatter: {
        title: string;
        date: string;
        author: string;
        excerpt: string;
        coverImage?: string;
    };
    readingTime: string;
}

function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    try {
        const mdxModules = import.meta.glob<{
            default: ComponentType;
            frontmatter: BlogPost['frontmatter'];
        }>('../posts/*.mdx', { eager: true });

        const rawModules = import.meta.glob<string>('../posts/*.mdx', {
            eager: true,
            as: 'raw'
        });

        const posts = Object.entries(mdxModules).map(([path, module]) => {
            const slug = path.replace('../posts/', '').replace('.mdx', '');
            const rawContent = rawModules[path];

            if (!module.frontmatter) {
                return null;
            }

            const frontmatter = {
                title: module.frontmatter.title || '',
                date: module.frontmatter.date || new Date().toISOString(),
                author: module.frontmatter.author || 'Anonymous',
                excerpt: module.frontmatter.excerpt || '',
                coverImage: module.frontmatter.coverImage,
            };

            return {
                slug,
                Component: module.default,
                frontmatter,
                readingTime: calculateReadingTime(rawContent),
            } as BlogPost;
        });

        return posts.filter((post): post is BlogPost => post !== null)
            .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
    } catch {
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await getAllPosts();
    return posts.find(post => post.slug === slug) || null;
}