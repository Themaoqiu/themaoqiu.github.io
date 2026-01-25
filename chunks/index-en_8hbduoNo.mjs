import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Axi Theme: Quick Start & Configuration",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "Start locally, understand content structure, and configure your site via a single entry file.",
  "category": "tech",
  "tags": ["axi-theme", "astro", "config"],
  "language": "en",
  "minutesRead": "1 min read",
  "words": 123
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-prerequisites",
    "text": "1. Prerequisites"
  }, {
    "depth": 2,
    "slug": "2-key-paths",
    "text": "2. Key Paths"
  }, {
    "depth": 2,
    "slug": "3-configure-your-site-srcsiteconfigts",
    "text": "3. Configure Your Site (src/site.config.ts)"
  }, {
    "depth": 2,
    "slug": "4-create-a-post-bilingual",
    "text": "4. Create a Post (Bilingual)"
  }, {
    "depth": 2,
    "slug": "5-build-output",
    "text": "5. Build Output"
  }, {
    "depth": 2,
    "slug": "6-recommended-deployment-github--vercel",
    "text": "6. Recommended Deployment (GitHub + Vercel)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-prerequisites\">1. Prerequisites<a class=\"anchor\" href=\"#1-prerequisites\">#</a></h2>\n<ul>\n<li>Node.js 18+ (recommended 20+)</li>\n<li>Package manager: <code>pnpm</code></li>\n</ul>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> install</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> dev</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">bash</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm install\npnpm dev\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"2-key-paths\">2. Key Paths<a class=\"anchor\" href=\"#2-key-paths\">#</a></h2>\n<ul>\n<li><code>src/site.config.ts</code>: the main configuration entry (site info, nav, integrations)</li>\n<li><code>src/content/blogs/&#x3C;slug>/index.mdx</code>: Chinese post</li>\n<li><code>src/content/blogs/&#x3C;slug>/index-en.mdx</code>: English post (optional; if missing, English listing falls back to Chinese)</li>\n<li><code>public/</code>: static assets (<code>/images/*</code>, <code>/avatar/*</code>, etc.)</li>\n</ul>\n<h2 id=\"3-configure-your-site-srcsiteconfigts\">3. Configure Your Site (<code>src/site.config.ts</code>)<a class=\"anchor\" href=\"#3-configure-your-site-srcsiteconfigts\">#</a></h2>\n<p>Common edits:</p>\n<ul>\n<li><code>theme.title</code> / <code>theme.description</code></li>\n<li><code>theme.personal.domains.main</code> (used for absolute URLs, RSS, etc.)</li>\n<li><code>theme.header.menu</code></li>\n<li><code>integ.pagefind</code> (search via Pagefind)</li>\n<li><code>integ.waline</code> (comments; see Waline doc)</li>\n</ul>\n<h2 id=\"4-create-a-post-bilingual\">4. Create a Post (Bilingual)<a class=\"anchor\" href=\"#4-create-a-post-bilingual\">#</a></h2>\n<ol>\n<li>Create a folder: <code>src/content/blogs/my-first-post/</code></li>\n<li>Write Chinese: <code>src/content/blogs/my-first-post/index.mdx</code></li>\n<li>Write English: <code>src/content/blogs/my-first-post/index-en.mdx</code> (optional)</li>\n</ol>\n<p>Minimal frontmatter:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"md\"><pre><code><span class=\"line\"><span style=\"color:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold\">---</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">title: My Title</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">publishDate: 2026-01-11</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">description: Short summary.</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">tags: [</span><span style=\"color:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline\">'docs'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold\">---</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">md</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"---\ntitle: My Title\npublishDate: 2026-01-11\ndescription: Short summary.\ntags: [&#x27;docs&#x27;]\n---\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"5-build-output\">5. Build Output<a class=\"anchor\" href=\"#5-build-output\">#</a></h2>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> build</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> preview</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">bash</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm build\npnpm preview\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<ul>\n<li>Output is generated into <code>dist/</code></li>\n<li><code>astro.config.mjs</code> picks adapter/output based on <code>DEPLOYMENT_PLATFORM</code> (see deployment doc)</li>\n</ul>\n<h2 id=\"6-recommended-deployment-github--vercel\">6. Recommended Deployment (GitHub + Vercel)<a class=\"anchor\" href=\"#6-recommended-deployment-github--vercel\">#</a></h2>\n<p>GitHub for source control + Vercel for CI/CD is the easiest path (previews, rollback, CDN, HTTPS).</p>\n<ul>\n<li>Reference guide: <a href=\"https://axi404.top/blog/website-vercel\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Website on Vercel<span> ↗</span></a></li>\n</ul>"
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
const url = "src/content/blogs/axi-theme-basics/index-en.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/axi-theme-basics/index-en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/axi-theme-basics/index-en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
