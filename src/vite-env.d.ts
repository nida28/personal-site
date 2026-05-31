/// <reference types="vite/client" />

declare module '*.md' {
    const content: string;
    export default content;
}

declare module 'front-matter' {
    function frontMatter<T = unknown>(str: string): { attributes: T; body: string };
    export default frontMatter;
}
