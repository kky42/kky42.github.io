const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  layout: "post.njk",
  tags: ["post"],
  eleventyComputed: {
    permalink: (data) => {
      if (isProduction && data.draft) {
        return false;
      }

      return `/posts/${data.page.fileSlug}/index.html`;
    },
    canonicalPath: (data) => `/posts/${data.page.fileSlug}/`,
  },
};
