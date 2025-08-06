# My Personal Blog

A minimalist personal blog built with [Hugo](https://gohugo.io) and the [hugo-bearblog](https://github.com/janraasch/hugo-bearblog) theme.

🌐 **Live site**: https://kky42.github.io

## Adding New Blog Posts

### Method 1: Using Hugo CLI (Recommended)

1. Create a new blog post:
   ```bash
   hugo new blog/your-post-title.md
   ```

2. Edit the generated file in `content/blog/your-post-title.md`:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2025-08-06T10:00:00+08:00
   draft: false
   ---

   # Your Post Title

   Write your content here...
   ```

### Method 2: Manual Creation

1. Create a new file in `content/blog/` directory
2. Add the front matter (metadata) at the top:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2025-08-06T10:00:00+08:00
   draft: false
   ---
   ```
3. Write your content below the `---`

## Preview Website Locally

1. **Start the development server**:
   ```bash
   hugo server
   ```
   
2. **Open your browser** and visit: http://localhost:1313

3. **Live reload**: The site will automatically refresh when you make changes to your content or configuration.

4. **Include draft posts** (optional):
   ```bash
   hugo server --buildDrafts
   ```

5. **Stop the server**: Press `Ctrl+C` in the terminal

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