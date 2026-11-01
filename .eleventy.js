const pluginRss = require("@11ty/eleventy-plugin-rss");
const hljs = require("highlight.js");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const isProduction = process.env.NODE_ENV === "production";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isPublishable(item) {
  return !isProduction || !item.data.draft;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "assets/vendor/katex.min.css",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.js": "assets/vendor/katex.min.js",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/contrib/auto-render.min.js":
      "assets/vendor/katex-auto-render.min.js",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/highlight.js/styles/github-dark.css":
      "assets/vendor/highlight.css",
  });

  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  eleventyConfig.addFilter("readableDate", (value) => {
    const date = new Date(value);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(date);
  });

  eleventyConfig.addFilter("shortDate", (value) => {
    const date = new Date(value);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    }).format(date);
  });

  eleventyConfig.addFilter("htmlDateString", (value) => {
    return new Date(value).toISOString();
  });

  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    return new URL(url, base).toString();
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("post")
      .filter(isPublishable)
      .sort((left, right) => right.date - left.date);
  });

  eleventyConfig.addCollection("sitemap", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => item.url)
      .filter((item) => !item.data.excludeFromSitemap)
      .filter((item) => !item.inputPath.includes("/src/_includes/"))
      .filter(isPublishable)
      .sort((left, right) => left.url.localeCompare(right.url));
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  const markdownLibrary = markdownIt({
    html: false,
    linkify: true,
    typographer: true,
    highlight(content, language) {
      if (language === "mermaid") {
        return `<pre class="mermaid-source"><code>${escapeHtml(content)}</code></pre>`;
      }

      if (language && hljs.getLanguage(language)) {
        const highlighted = hljs.highlight(content, {
          language,
          ignoreIllegals: true,
        }).value;
        return `<pre class="code-block"><code class="hljs language-${language}">${highlighted}</code></pre>`;
      }

      return `<pre class="code-block"><code class="hljs">${escapeHtml(content)}</code></pre>`;
    },
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
    });

  // Wrap tables so a wide one scrolls instead of stretching the page.
  const defaultTableOpen =
    markdownLibrary.renderer.rules.table_open ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
  const defaultTableClose =
    markdownLibrary.renderer.rules.table_close ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

  markdownLibrary.renderer.rules.table_open = (tokens, idx, options, env, self) =>
    `<div class="table-wrap">${defaultTableOpen(tokens, idx, options, env, self)}`;
  markdownLibrary.renderer.rules.table_close = (tokens, idx, options, env, self) =>
    `${defaultTableClose(tokens, idx, options, env, self)}</div>`;

  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      layouts: "src/_includes/layouts",
      data: "src/data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
