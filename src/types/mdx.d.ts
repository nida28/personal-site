declare module '*.mdx' {
    import type { ComponentType } from 'react';

    export const frontmatter: {
        title: string;
        date: string;
        author: string;
        excerpt: string;
        coverImage?: string;
        tags: string[];
    };

    const MDXComponent: ComponentType;
    export default MDXComponent;
} 