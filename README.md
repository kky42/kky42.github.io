# My Personal Blog

A minimalist personal blog built with [Hugo](https://gohugo.io) and the [hugo-bearblog](https://github.com/janraasch/hugo-bearblog) theme.

🌐 **Live site**: https://kky42.github.io

## Quick Start

### 1. Add New Post
```bash
hugo new blog/your-post-title.md
```

### 2. Remove Post
```bash
rm content/blog/your-post-title.md
```

### 3. Preview Locally
```bash
hugo server
```
Open: http://localhost:1313

## Publishing Changes

1. **Add and commit your changes**:
   ```bash
   git add .
   git commit -m "Add new blog post: Your Post Title"
   ```

2. **Push to GitHub**:
   ```bash
   git push
   ```

3. **Automatic deployment**: GitHub Actions will automatically build and deploy your site to https://kky42.github.io (takes 1-2 minutes)

## Site Structure

```
├── content/
│   ├── _index.md          # Homepage content
│   ├── about.md           # About page
│   └── blog/              # Blog posts directory
│       ├── post1.md
│       └── post2.md
├── layouts/
│   └── index.html         # Custom homepage layout
├── themes/
│   └── hugo-bearblog/     # Theme files (git submodule)
└── hugo.toml              # Site configuration
```

## Customization

- **Site title/description**: Edit `hugo.toml`
- **About page**: Edit `content/about.md`
- **Homepage intro**: Edit `content/_index.md`
- **Navigation menu**: Add items to `hugo.toml` under `[[menu.main]]`

## Theme Features

- ⚡ Super fast and lightweight
- 🌙 Automatic dark/light mode
- 📱 Mobile responsive
- 🔍 SEO optimized
- 📝 Clean, readable typography

## Useful Commands

```bash
# Create new post
hugo new blog/my-new-post.md

# Start development server
hugo server

# Build site for production
hugo --minify

# View site structure
hugo list all
```

For more Hugo documentation, visit: https://gohugo.io/documentation/