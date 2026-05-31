# Nidaa's Personal Website

A modern, responsive personal website and portfolio built with React, TypeScript, and TailwindCSS. Visit the live site at [www.nidaamungloo.com](https://www.nidaamungloo.com).

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Modern UI with gradient effects
- 🚀 Fast performance
- 📊 Google Analytics integration
- 🔍 SEO optimized
- 🎯 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 📝 Blog support with MDX

## Tech Stack

- React
- TypeScript
- TailwindCSS
- Vite
- MDX for blog posts
- GitHub Pages for hosting

## Project Structure

```
personal-site/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   └── common/    # Reusable components
│   ├── config/        # Configuration files
│   ├── contexts/      # React contexts
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   └── types/         # TypeScript types
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nida28/personal-site.git
   cd personal-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Customization

### Adding Blog Posts

1. Create a new MDX file in `src/content/blog/`
2. Add frontmatter with title, date, and excerpt
3. Write your content using MDX

### Modifying Theme

- Colors can be customized in `tailwind.config.ts`
- Dark mode styles use the `dark:` prefix in TailwindCSS classes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
