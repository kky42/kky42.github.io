---
title: Blog Features Examples
published: 2024-12-01
description: A comprehensive showcase of all available blog features including markdown, code highlighting, admonitions, and more.
tags: [Demo, Example, Markdown, Features]
category: Examples
draft: false
---

This post demonstrates all the key features available in this blog template. Use this as a reference when creating your own posts.

## Basic Markdown Features

### Text Formatting

Regular text with _italic_, **bold**, and `monospace` formatting. You can also use ~~strikethrough~~ text.

### Headings

# H1 Heading
## H2 Heading  
### H3 Heading
#### H4 Heading

### Lists

**Unordered lists:**
- First item
- Second item
- Third item
  - Nested item
  - Another nested item

**Ordered lists:**
1. First item
2. Second item
3. Third item
   - Mixed nested item
   - Another mixed item

### Links and References

Here's a link to [an external website](https://astro.build), to a [local page](#headings), and here's a footnote reference[^1].

[^1]: This is the footnote text that appears at the bottom.

### Blockquotes

> This is a blockquote. It can contain multiple paragraphs and other formatting.
>
> Second paragraph in the blockquote with **bold text** and _italics_.

### Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Markdown | ✅ | Full CommonMark support |
| Math | ✅ | KaTeX rendering |
| Code highlighting | ✅ | Expressive Code |
| Dark mode | ❌ | Light theme only |

### Math Equations

Inline math: $E = mc^2$ and display math:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

### Horizontal Rules

---

## Advanced Features

### GitHub Repository Cards

You can embed GitHub repository cards that fetch live data:

::github{repo="withastro/astro"}

```markdown
::github{repo="owner/repository"}
```

### Admonitions

Different types of callout boxes for highlighting important information:

:::note
This is a note admonition. Use it to highlight information users should notice.
:::

:::tip
This is a tip admonition. Use it for helpful suggestions or best practices.
:::

:::important
This is an important admonition. Use it for crucial information.
:::

:::warning
This is a warning admonition. Use it for potential issues or cautions.
:::

:::caution
This is a caution admonition. Use it for dangerous or risky actions.
:::

**Custom titles are supported:**

:::note[Custom Title Here]
You can customize the title of any admonition type.
:::

**GitHub-style syntax is also supported:**

> [!TIP]
> This uses GitHub's alert syntax and works the same way.

### Code Highlighting

#### Basic Syntax Highlighting

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome, ${name}`;
}
```

#### Code with Titles

```python title="example.py"
import math

def calculate_circle_area(radius):
    return math.pi * radius ** 2

print(f"Area: {calculate_circle_area(5)}")
```

#### Line Highlighting

```js {2, 4-6}
function demo() {
  console.log('This line is highlighted');
  console.log('This line is normal');
  console.log('This line is highlighted');
  console.log('This line is highlighted');  
  console.log('This line is highlighted');
}
```

#### Diff-style Highlighting

```js del={2} ins={3-4}
function updateFunction() {
  console.log('Old implementation');
  console.log('New implementation');
  console.log('Added feature');
}
```

#### Terminal Examples

```bash
npm install
npm run dev
```

```powershell title="PowerShell Example"
Get-Process | Where-Object {$_.CPU -gt 100}
```

#### ANSI Color Support

```ansi
ANSI colors:
- [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m
- [1;35mBold Magenta[0m [2;36mDim Cyan[0m
```

### Collapsible Code Sections

```js collapse={1-3, 8-10}
// This boilerplate will be collapsed
import { something } from 'somewhere';
const config = { setting: true };

// This main logic stays visible
function mainLogic() {
  return 'This is the important part';
}

// This cleanup code will be collapsed  
cleanup();
process.exit(0);
```

### Video Embedding

You can embed videos from various platforms:

**YouTube:**
```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video" frameborder="0" allowfullscreen></iframe>
```

### Draft Posts

Posts with `draft: true` in frontmatter won't be published:

```yaml
---
title: My Draft Post
published: 2024-01-01
draft: true
---
```

## Frontmatter Reference

```yaml
---
title: "Your Post Title"
published: 2024-01-01
updated: 2024-01-02  # Optional
description: "Brief description for SEO and previews"
image: "./cover.jpg"  # Relative to post file
tags: [Tag1, Tag2, Tag3]
category: "Category Name" 
draft: false  # Set to true to hide from publication
lang: "en"  # Optional, defaults to site language
---
```

## File Organization

You can organize posts in subfolders:

```
src/content/posts/
├── simple-post.md
├── post-with-assets/
│   ├── index.md
│   ├── cover.jpg
│   └── diagram.png
└── examples/
    └── index.md  # This post!
```

## Best Practices

1. **Use descriptive titles** that clearly indicate the post content
2. **Add meaningful descriptions** for better SEO and previews  
3. **Tag appropriately** to help with organization and discovery
4. **Include cover images** when relevant to make posts more engaging
5. **Use admonitions** to highlight important information
6. **Leverage code highlighting** for technical content
7. **Test locally** before publishing with `pnpm dev`

---

This covers all the major features available in this blog template. Feel free to reference this post when creating your own content!