# kky42.github.io

This repository contains a lightweight personal blog built with Eleventy and
deployed to Cloudflare Pages.

## About This Site

This section is for visitors and readers.

Placeholder copy for now:

- this site will host personal writing, essays, notes, and selected technical posts
- some posts may later be adapted for other platforms
- the primary home of the content should remain this site

Update this section later with the real positioning, author bio, and the themes
you want to write about most.

## How To Use This Repo

This section is for the site owner and anyone maintaining the blog.

### Requirements

- Node.js 22+
- npm 10+
- `node` and `npm` available in your shell

On this machine, `node` is currently provided through `nvm` in `~/.zshrc`.

### Install Dependencies

```bash
npm install
```

### Preview Locally

```bash
npm run dev
```

Then open:

- `http://localhost:8080/`
- `http://localhost:8080/posts/markdown-sandbox/`

Local development includes draft posts.

### Production Build

```bash
npm run build
```

The generated site is written to `_site/`.

## Repo Structure

```text
content/
  posts/      blog posts
  pages/      standalone pages like About
src/
  _includes/  layouts and reusable templates
  assets/     CSS and small client-side scripts
  data/       site-level metadata
public/       static assets copied as-is
templates/    content templates for new writing
```

## Where To Put Content

- Put blog posts in `content/posts/`
- Put standalone pages in `content/pages/`
- Use `templates/post.md` when starting a new post

Current example post:

- `content/posts/markdown-sandbox.md`

That sample exists to verify:

- tables
- Mermaid diagrams
- math formulas
- syntax-highlighted code blocks

## How To Create A New Post

1. Copy `templates/post.md`
2. Save it into `content/posts/`
3. Rename the file to a clean slug, for example:
   `content/posts/my-first-post.md`
4. Fill in the frontmatter
5. Write the body in Markdown
6. Run `npm run dev` and preview it in the browser

Recommended frontmatter:

```yaml
---
title: "New Post Title"
date: "2026-03-06"
summary: "One-sentence summary for listings and social previews."
tags:
  - writing
draft: true
mermaid: false
---
```

Field meanings:

- `title`: article title
- `date`: publish date used for sorting
- `summary`: short description used in listings and metadata
- `tags`: simple labels for the article
- `draft`: hide from production builds when `true`
- `mermaid`: set to `true` only if the post contains Mermaid diagrams

## Draft Posts

Draft handling is simple:

- `draft: true` means the post is visible locally during development
- `draft: true` means the post is excluded from the production site build
- when production builds run, draft posts do not get public pages

Important warning:

This repository is public. If you push a draft post to `main`, the draft will
still be visible in the GitHub repository source code even though it does not
appear on the website.

So:

- use `draft: true` for "not published on the site yet"
- do not push sensitive or private draft content to the public `main` branch

## Deployment

Cloudflare Pages is the deployment target: a push to `main` triggers the
Cloudflare build (`npm run build`, output `_site`) and publishes to
`www.kky42.com`.

`.github/workflows/ci.yml` is CI only. It builds the site and runs
`npm run check` (required files, no personal data in the output, page titles,
internal links) on every push and pull request. It does not deploy.

A failed Cloudflare deployment sends an email alert; the previously deployed
site stays live until a new build succeeds.

## Markdown Features

The current site supports:

- standard Markdown
- tables
- syntax-highlighted code blocks
- Mermaid diagrams
- inline and block math via KaTeX

For Mermaid:

- add `mermaid: true` in frontmatter when the post contains Mermaid code fences

For math:

- add `math: true` in frontmatter to load KaTeX on that page; pages without it
  do not download KaTeX at all

## Notes For Future Maintenance

- keep the site lightweight
- prefer static generation over heavy app frameworks
- avoid introducing complexity unless there is a clear need
- keep SEO basics working: canonical URLs, sitemap, RSS, robots, metadata
