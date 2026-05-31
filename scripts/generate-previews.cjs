const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../src/posts');
const TEMPLATE_PATH = path.join(__dirname, '../public/preview-template.html');
const OUTPUT_DIR = path.join(__dirname, '../public/preview');
const BLOG_BASE_URL = 'https://www.nidaamungloo.com/#/blog/';

// Helper to extract frontmatter from MDX
function extractFrontmatter(content) {
    const match = content.match(/^---([\s\S]*?)---/);
    if (!match) return {};
    const fm = {};
    match[1].split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        if (key && rest.length) {
            fm[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
        }
    });
    return fm;
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

fs.readdirSync(POSTS_DIR).forEach(file => {
    if (!file.endsWith('.mdx')) return;
    const slug = file.replace(/\.mdx$/, '');
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const fm = extractFrontmatter(content);
    if (!fm.title || !fm.excerpt) {
        console.warn(`Skipping ${file}: missing title or excerpt.`);
        return;
    }
    const html = template
        .replace(/{{title}}/g, fm.title)
        .replace(/{{description}}/g, fm.excerpt)
        .replace(/{{imageUrl}}/g, fm.coverImage ? 'https://www.nidaamungloo.com' + fm.coverImage : '')
        .replace(/{{targetUrl}}/g, BLOG_BASE_URL + slug);
    fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.html`), html, 'utf8');
    console.log(`Generated preview for ${slug}`);
}); 