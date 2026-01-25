# Your Site

This is your website. You own it completely.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:8080` to see your site.

## Structure

```
src/
├── content/          # Your pages and posts
│   ├── index.md      # Homepage
│   └── posts/        # Blog posts (add .md files here)
│
├── styles/           # CSS files
│   ├── root.css      # Design tokens (colors, fonts)
│   ├── page.css      # Page layout
│   └── content.css   # Content area styles
│
├── fonts/            # Font files (.woff2)
│
├── contexts/         # Page templates
│   ├── root.webc     # HTML document shell
│   └── page.webc     # Standard page wrapper
│
├── components/       # Reusable components
│   ├── site-header.webc
│   └── site-footer.webc
│
└── data/
    └── site.js       # Site configuration
```

## Adding Content

Create markdown files in `src/content/posts/`:

```markdown
---
title: My First Post
date: 2025-01-24
---

Your content here.
```

## Customizing Styles

Edit the CSS files in `src/styles/`:

- **root.css** - Global design tokens (colors, fonts, spacing)
- **page.css** - Page layout and body styles
- **content.css** - Main content area

## Deploying

Build your site:

```bash
npm run build
```

The `dist/` folder contains your static site. Deploy it anywhere:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## Next Steps

- Edit `src/data/site.js` to set your site name
- Add posts to `src/content/posts/`
- Customize styles in `src/styles/`
- Modify templates in `src/contexts/` and `src/components/`

You own this code. Change anything you want.
