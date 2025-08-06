---
title: "Hugo Features Demo: Images, Code, Math & More"
date: 2025-08-06T12:15:44+08:00
draft: false
description: "A comprehensive guide showing how to use images, code blocks, JSON, math formulas, internal links, and YouTube embeds in Hugo blog posts."
---

# Hugo Features Demo: Images, Code, Math & More

This post demonstrates various features available in Hugo blog posts, including images, code blocks, math formulas, and media embeds.

## 1. Inserting Local Images

To add local images to your blog posts:

### Step 1: Create the image directory
```bash
mkdir -p static/images
```

### Step 2: Add your image file
Place your image in `/static/images/your-image.jpg`

**Example with actual image:**
![Sample Image](/images/sample-image.png "Sample Image from Lorem Picsum")

This image was downloaded from Lorem Picsum and placed in `/static/images/sample-image.png`.

### Image Styling Options

You can also control image size and alignment with HTML:

```html
<!-- Centered image -->
<div style="text-align: center;">
  <img src="/images/sample-image.png" alt="Sample Image" width="100" height="100">
</div>

<!-- Image with caption -->
<figure>
  <img src="/images/sample-image.png" alt="Sample Image" width="75">
  <figcaption>Sample image from Lorem Picsum</figcaption>
</figure>
```

**Rendered examples:**

<div style="text-align: center;">
  <img src="/images/sample-image.png" alt="Sample Image Centered" width="100" height="100">
</div>

<figure>
  <img src="/images/sample-image.png" alt="Sample Image" width="75">
  <figcaption><em>Sample image from Lorem Picsum (75px)</em></figcaption>
</figure>

## 2. Code Blocks

Hugo supports syntax highlighting for many programming languages:

### Python Example
```python
def fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Example usage
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

### JavaScript Example
```javascript
// Modern JavaScript with async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Usage
fetchData('/api/users')
    .then(users => console.log(users))
    .catch(err => console.error(err));
```

### Bash/Shell Commands
```bash
# Create a new Hugo site
hugo new site my-blog
cd my-blog

# Add a theme
git submodule add https://github.com/janraasch/hugo-bearblog.git themes/hugo-bearblog

# Create a new post
hugo new blog/my-first-post.md

# Start development server
hugo server --buildDrafts
```

## 3. JSON Data Examples

JSON is commonly used for configuration and data exchange:

### Configuration Example
```json
{
  "name": "KKY Blog",
  "version": "1.0.0",
  "description": "A personal blog built with Hugo",
  "author": {
    "name": "KKY",
    "email": "kky@example.com",
    "website": "https://kky42.github.io"
  },
  "dependencies": {
    "hugo": "^0.148.2",
    "theme": "hugo-bearblog"
  },
  "build": {
    "commands": [
      "hugo --minify",
      "hugo server"
    ]
  },
  "seo": {
    "keywords": ["blog", "hugo", "static-site"],
    "social": {
      "twitter": "@kky42",
      "github": "kky42"
    }
  }
}
```

### API Response Example
```json
{
  "status": "success",
  "data": {
    "posts": [
      {
        "id": 1,
        "title": "Getting Started with Hugo",
        "slug": "getting-started-hugo",
        "published_at": "2025-08-06T10:00:00Z",
        "tags": ["hugo", "tutorial", "beginner"],
        "excerpt": "Learn how to create your first Hugo website..."
      },
      {
        "id": 2,
        "title": "Advanced Hugo Features",
        "slug": "advanced-hugo-features",
        "published_at": "2025-08-05T15:30:00Z",
        "tags": ["hugo", "advanced", "features"],
        "excerpt": "Explore advanced Hugo features like shortcodes..."
      }
    ]
  },
  "meta": {
    "total": 2,
    "page": 1,
    "per_page": 10
  }
}
```

## 4. Math Formulas

**Note:** Math rendering requires additional setup with MathJax or KaTeX. Here's how the syntax would look:

### Inline Math
The quadratic formula is \\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\\).

### Block Math Equations
The Pythagorean theorem:
$$a^2 + b^2 = c^2$$

Machine Learning Loss Function:
$$L(\theta) = \frac{1}{m} \sum_{i=1}^{m} \left( h_\theta(x^{(i)}) - y^{(i)} \right)^2$$

Euler's Identity:
$$e^{i\pi} + 1 = 0$$

*To enable math rendering, add MathJax or KaTeX to your Hugo theme's head section.*

## 5. Internal References

Hugo makes it easy to link to other posts and pages:

### Link to Other Posts
- Check out my [first blog post]({{< relref "my-first-post.md" >}})
- Read about [Test Post]({{< relref "test.md" >}})

### Link to Pages
- Visit the [About page]({{< relref "/about.md" >}})

### Manual Internal Links
- [My First Blog Post](/my-first-blog-post/)
- [Test Post](/test/)
- [About Page](/about/)

### Anchor Links (within this post)
- Jump to [Code Blocks](#2-code-blocks)
- Go to [Math Formulas](#4-math-formulas)

## 6. Embedding YouTube Videos

### Method 1: Hugo Shortcode
{{< youtube "XDYilxy1dn8" >}}

### Method 2: HTML Embed
Here's how to embed the specific YouTube video you requested:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/XDYilxy1dn8" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

**Example Embed:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/XDYilxy1dn8" 
        title="YouTube Video Embed Example" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>

### Method 3: Responsive Embed
For responsive design, wrap in a container:

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/XDYilxy1dn8" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0" allowfullscreen>
  </iframe>
</div>
```

**Responsive Example:**
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/XDYilxy1dn8" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0" allowfullscreen>
  </iframe>
</div>

## Summary

This post covered:

1. **Local Images**: Store in `/static/images/` and reference with `/images/filename`
2. **Code Blocks**: Use triple backticks with language specification
3. **JSON**: Great for configuration examples and API responses
4. **Math Formulas**: Requires MathJax/KaTeX setup for rendering
5. **Internal Links**: Use `relref` shortcodes or manual paths
6. **YouTube Embeds**: Multiple methods from shortcodes to responsive iframes

These features make Hugo a powerful platform for technical blogging and documentation!

---

*Want to see the source of this post? Check out the markdown file in the repository.*
