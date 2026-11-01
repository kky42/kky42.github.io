// Lightweight post-build check for _site. No dependencies.
// Run: node scripts/check.mjs   (after npm run build)
import fs from "node:fs";
import path from "node:path";

const SITE = path.resolve("_site");
const errors = [];

// 1. Required files must exist and be non-empty.
const required = [
  "index.html",
  "about/index.html",
  "posts/index.html",
  "404.html",
  "feed.xml",
  "sitemap.xml",
  "robots.txt",
];
for (const rel of required) {
  const p = path.join(SITE, rel);
  if (!fs.existsSync(p)) errors.push(`missing ${rel}`);
  else if (fs.statSync(p).size === 0) errors.push(`empty ${rel}`);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const all = fs.existsSync(SITE) ? walk(SITE) : [];
const html = all.filter((f) => f.endsWith(".html"));

// 2. No personal data leaks into the public output.
const PII = [/Zhirui/i, /Trexquant/i, /evilpsycho42@gmail\.com/i, /linkedin\.com\/in/i];
for (const file of all) {
  if (!/\.(html|xml|txt|json)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const re of PII) {
    if (re.test(text)) errors.push(`${path.relative(SITE, file)}: matches ${re}`);
  }
}

// 3. Every page has a non-empty <title>.
for (const file of html) {
  const text = fs.readFileSync(file, "utf8");
  const m = text.match(/<title>([\s\S]*?)<\/title>/i);
  if (!m || !m[1].trim()) errors.push(`${path.relative(SITE, file)}: empty <title>`);
}

// 4. Internal links and assets resolve to a built file.
for (const file of html) {
  const text = fs.readFileSync(file, "utf8");
  const refs = [...text.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
  for (const ref of new Set(refs)) {
    const clean = ref.split("#")[0].split("?")[0];
    if (!clean) continue;
    let target = path.join(SITE, decodeURIComponent(clean));
    if (clean.endsWith("/")) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) {
      errors.push(`${path.relative(SITE, file)}: broken link ${ref}`);
    }
  }
}

if (errors.length) {
  console.error(`check failed (${errors.length}):`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log(`check passed: ${html.length} pages, ${all.length} files`);
