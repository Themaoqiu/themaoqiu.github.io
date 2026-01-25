import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Friend Circle: Setup & Configuration",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "Use Friend-Circle-Lite as the data source and render the feed on the Links page.",
  "category": "tech",
  "tags": ["links", "friend-circle", "rss"],
  "language": "en",
  "minutesRead": "1 min read",
  "words": 91
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-what-is-friend-circle",
    "text": "1. What is Friend Circle"
  }, {
    "depth": 2,
    "slug": "2-prepare-the-data-source-friend-circle-lite",
    "text": "2. Prepare the Data Source (Friend-Circle-Lite)"
  }, {
    "depth": 2,
    "slug": "3-enable-in-the-theme",
    "text": "3. Enable in the Theme"
  }, {
    "depth": 2,
    "slug": "4-rss-reminder",
    "text": "4. RSS Reminder"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-what-is-friend-circle\">1. What is Friend Circle<a class=\"anchor\" href=\"#1-what-is-friend-circle\">#</a></h2>\n<p>Friend Circle shows an aggregated feed from your blogroll. In this theme it appears on the Links page:</p>\n<ul>\n<li><code>src/pages/links/index.astro</code></li>\n</ul>\n<h2 id=\"2-prepare-the-data-source-friend-circle-lite\">2. Prepare the Data Source (Friend-Circle-Lite)<a class=\"anchor\" href=\"#2-prepare-the-data-source-friend-circle-lite\">#</a></h2>\n<p>This theme consumes Friend-Circle-Lite data (like <code>all.json</code>). Reference setup guide:</p>\n<ul>\n<li><a href=\"https://blog.liushen.fun/posts/4dc716ec/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Friend Circle: Setup &#x26; Configuration<span> ↗</span></a></li>\n</ul>\n<p>You should end up with a domain like:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>fc.example.com</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"fc.example.com\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>and ensure this is accessible:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>https://fc.example.com/all.json</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"https://fc.example.com/all.json\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"3-enable-in-the-theme\">3. Enable in the Theme<a class=\"anchor\" href=\"#3-enable-in-the-theme\">#</a></h2>\n<p>Edit <code>src/site.config.ts</code>:</p>\n<ul>\n<li><code>theme.personal.domains.friendCircle = 'fc.example.com'</code></li>\n</ul>\n<p>After that, <code>/links</code> will automatically render the “Small Circle” section.</p>\n<h2 id=\"4-rss-reminder\">4. RSS Reminder<a class=\"anchor\" href=\"#4-rss-reminder\">#</a></h2>\n<p>If a site is in your links but never shows up in the feed, it usually means its RSS is missing or unreachable.</p>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/blogs/friend-circle/index-en.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/friend-circle/index-en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/friend-circle/index-en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
