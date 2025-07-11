# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a blog built with Astro. Use pnpm as the package manager.

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build for production (includes Pagefind search indexing)
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run Astro checks for errors
- `pnpm type-check` - Run TypeScript type checking
- `pnpm lint` - Lint and fix code using Biome
- `pnpm format` - Format code using Biome
- `pnpm new-post <filename>` - Create a new blog post using the script

## Architecture Overview

This is a static blog template built with:

- **Astro 5.x** - Static site generator with hybrid rendering
- **Svelte** - Component framework for interactive elements
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Biome** - Linter and formatter (replaces ESLint/Prettier)

### Key Configuration Files

- `src/config.ts` - Main blog configuration (site info, navigation, profile, theme)
- `astro.config.mjs` - Astro configuration with plugins and markdown processing
- `src/content/config.ts` - Content collection schema definitions
- `biome.json` - Biome linting and formatting rules

### Content Structure

- **Posts**: Located in `src/content/posts/` as Markdown files
- **Pages**: Special pages in `src/content/spec/` (e.g., about.md)
- **Frontmatter Schema**: Posts require `title`, `published` date, and optional `description`, `image`, `tags`, `category`, `draft`, `lang`

### Architecture Patterns

- **Content Collections**: Astro's type-safe content system with Zod schemas
- **Component Architecture**: Mix of Astro components (.astro) and Svelte components (.svelte)
- **Styling**: Tailwind utilities with custom CSS variables for theming
- **Internationalization**: Built-in i18n support in `src/i18n/`
- **Markdown Processing**: Extensive pipeline with remark/rehype plugins for enhanced syntax

### Key Features

- **Search**: Pagefind integration for static search functionality
- **Theming**: Dynamic color theming with CSS custom properties
- **Code Highlighting**: Expressive Code with custom plugins
- **Page Transitions**: Swup.js for smooth page transitions
- **Responsive Design**: Mobile-first approach with Tailwind

### Plugin System

The blog uses custom plugins in `src/plugins/`:
- **Expressive Code plugins**: Custom copy button, language badges
- **Remark plugins**: Reading time, excerpts, directive processing
- **Rehype plugins**: Component rendering, admonitions, GitHub cards

### Deployment

- Builds to `dist/` directory
- Includes Pagefind search index generation
- Configured for GitHub Pages deployment with proper base paths
- Uses `vercel.json` for Vercel deployment configuration

## Development Notes

- Use `pnpm new-post` to create new posts with proper frontmatter
- Customize theme colors and site info in `src/config.ts`
- Images should be placed in `src/assets/images/` or `public/`
- The build process automatically generates search indices and optimizes assets

## Repository Information

- The blog site is "kky42.github.io" deployed by github pages

## Deployment Guides

- @https://docs.astro.build/en/guides/deploy/github/