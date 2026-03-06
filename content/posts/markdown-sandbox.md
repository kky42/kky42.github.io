---
title: "Markdown Sandbox"
date: "2026-03-06"
summary: "A single post that exercises the core Markdown features this blog should support from day one."
tags:
  - markdown
  - demo
  - eleventy
draft: false
mermaid: true
---

This post exists to verify the first version of the blog stack. It should render
cleanly, stay readable, and cover the Markdown features we care about most.

## What should work

- headings and body copy
- links like [GitHub Pages](https://pages.github.com/)
- blockquotes
- code blocks
- tables
- Mermaid diagrams
- inline math like $E = mc^2$
- display math

> Good defaults matter. They remove friction from publishing.

## Table

| Feature | Status | Notes |
| --- | --- | --- |
| Tables | Ready | Standard Markdown tables render without extra work. |
| Mermaid | Ready | Rendered progressively on the client only when needed. |
| Math | Ready | KaTeX renders on the client after the page loads. |
| Drafts | Ready | Hidden from production, visible in development. |

## Mermaid

```mermaid
flowchart LR
    A[Write in Markdown] --> B[Commit to GitHub]
    B --> C[GitHub Pages build]
    C --> D[Publish static site]
```

## Math

When a model predicts outcomes with a linear hypothesis, we often write:

$$
\hat{y} = \beta_0 + \beta_1 x_1 + \beta_2 x_2
$$

And a simple loss term can be written as:

$$
L(\theta) = \frac{1}{n} \sum_{i=1}^{n}(y_i - \hat{y_i})^2
$$

## Code

```js
const publish = async (post) => {
  const status = post.draft ? "preview" : "production";
  return `${post.title} -> ${status}`;
};
```

## Closing note

If this page looks correct on the final site, the first version of the content
pipeline is in good shape.
