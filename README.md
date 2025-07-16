# Personal Blog

A personal blog built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), forked from the [Fuwari](https://github.com/saicaca/fuwari) template.

## ✨ Features

- [x] Built with Astro and Tailwind CSS
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [x] Search functionality with [Pagefind](https://pagefind.app/)
- [x] Markdown extended features
- [x] Table of contents
- [x] RSS feed

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Edit the config file `src/config.ts` to customize your blog
4. Create new posts with folder structure (recommended for images):
   ```bash
   pnpm new-post <filename> --folder
   ```
5. Start development server: `pnpm dev`

### Post Frontmatter
```yaml
---
title: My Blog Post
published: 2023-09-09
description: A description of my blog post
image: ./cover.jpg
tags: [tag1, tag2]
category: Category
draft: false
lang: en
---
```

## ⚡ Commands

| Command                    | Action                                              |
|:---------------------------|:----------------------------------------------------|
| `pnpm install`             | Installs dependencies                               |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`         |
| `pnpm build`               | Build your production site to `./dist/`             |
| `pnpm preview`             | Preview your build locally, before deploying        |
| `pnpm check`               | Run checks for errors in your code                  |
| `pnpm format`              | Format your code using Biome                        |
| `pnpm new-post <filename>` | Create a new post                                   |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check`    |

## 🚀 Deployment

This blog is configured for GitHub Pages deployment. After building with `pnpm build`, the site will be ready to deploy to GitHub Pages.

## 📄 License

This project is licensed under the MIT License.