# AGENTS.md

This file describes how coding agents should work in this repository.

## Purpose

This repo powers a lightweight personal blog.

Current goals:

- keep the stack simple
- optimize for readable long-form writing
- support Markdown-first publishing
- deploy to GitHub Pages first
- keep room for Cloudflare deployment later

## Current Stack

- Eleventy static site
- GitHub Pages deployment via GitHub Actions
- Markdown content under `content/`
- site templates and assets under `src/`

Key files:

- `.eleventy.js`
- `.github/workflows/pages.yml`
- `content/posts/posts.11tydata.js`
- `src/data/site.js`

## Content Model

- `content/posts/` is for blog posts
- `content/pages/` is for standalone pages
- `templates/post.md` is the starting template for new posts

Do not introduce new top-level content types unless there is a clear user
request. Keep the structure small.

## Draft Behavior

Draft posts use `draft: true`.

Current behavior:

- drafts are visible in local development
- drafts are excluded from production builds
- drafts do not get public permalinks in production

Important:

This is a public repository. Draft content pushed to the public repo is still
visible in GitHub source history even if it is hidden from the rendered site.

## Authoring Rules

When agents create or update posts:

- keep frontmatter minimal and consistent
- preserve `title`, `date`, `summary`, `tags`, `draft`, and `mermaid`
- use clean file slugs
- prefer plain Markdown over custom embedded HTML

## Design Rules

- preserve the clean editorial style already started in this repo
- keep the homepage simple
- prefer readable typography and whitespace over decorative UI
- avoid unnecessary client-side JavaScript
- do not introduce heavy frameworks without explicit approval

Specifically:

- do not migrate this repo to Astro, Next.js, or a CMS unless explicitly asked
- do not add a database or server-side runtime for normal blog content
- do not over-engineer tagging, search, or analytics in early iterations

## Markdown Features

Current supported features:

- tables
- syntax-highlighted code blocks
- Mermaid diagrams
- math formulas via KaTeX

Implementation notes:

- Mermaid rendering depends on `src/assets/js/mermaid.js`
- math rendering depends on `src/assets/js/math.js`
- Markdown parsing and collections are configured in `.eleventy.js`

If agents touch these features, they should verify the sample post:

- `content/posts/markdown-sandbox.md`

## Local Workflow

Install:

```bash
npm install
```

Preview locally:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

The generated output is written to `_site/`.

On this machine, Node may come from `nvm` in `~/.zshrc`, so agents may need to
source shell config before running `node` or `npm`.

## Deployment Rules

GitHub Pages is the active deployment target.

Expected GitHub configuration:

- Pages source set to `GitHub Actions`

Workflow:

- pushes to `main` trigger deployment

Agents should keep the GitHub Pages workflow working unless the user explicitly
requests a deployment change.

## Repo Hygiene

- do not commit `_site/`
- do not commit `node_modules/`
- do not commit temporary legacy archives or extracted reference folders
- remove obsolete scaffolding when replacing stack pieces
- keep README instructions accurate when workflows change

## SEO Expectations

Agents should preserve or improve:

- canonical URLs
- RSS feed
- sitemap
- robots.txt
- page titles and descriptions
- Open Graph and Twitter metadata

Do not remove these basics for convenience.
