import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Deploy with GitHub + Vercel (Recommended)",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "Use GitHub for source control and Vercel for automated build & deploy (env vars + common pitfalls).",
  "category": "tech",
  "tags": ["deployment", "vercel", "github"],
  "language": "en",
  "minutesRead": "1 min read",
  "words": 92
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-why-github--vercel",
    "text": "1. Why GitHub + Vercel"
  }, {
    "depth": 2,
    "slug": "2-preflight-checklist",
    "text": "2. Preflight Checklist"
  }, {
    "depth": 2,
    "slug": "3-vercel-notes",
    "text": "3. Vercel Notes"
  }, {
    "depth": 2,
    "slug": "4-static-output-optional",
    "text": "4. Static Output (Optional)"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-why-github--vercel\">1. Why GitHub + Vercel<a class=\"anchor\" href=\"#1-why-github--vercel\">#</a></h2>\n<ul>\n<li>Preview deployments for every PR</li>\n<li>Push-to-deploy</li>\n<li>HTTPS + CDN out of the box</li>\n</ul>\n<p>Reference walkthrough: <a href=\"https://axi404.top/blog/website-vercel\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Website on Vercel<span> ↗</span></a></p>\n<h2 id=\"2-preflight-checklist\">2. Preflight Checklist<a class=\"anchor\" href=\"#2-preflight-checklist\">#</a></h2>\n<p>Make sure it builds locally:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> install</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> build</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">bash</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm install\npnpm build\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Set your domain (at least the main domain):</p>\n<ul>\n<li><code>src/site.config.ts</code> → <code>theme.personal.domains.main</code></li>\n</ul>\n<h2 id=\"3-vercel-notes\">3. Vercel Notes<a class=\"anchor\" href=\"#3-vercel-notes\">#</a></h2>\n<p>This theme reads <code>DEPLOYMENT_PLATFORM</code> to pick adapter/output:</p>\n<ul>\n<li><code>vercel</code> (default): Vercel adapter, usually <code>server</code> output</li>\n<li><code>github</code>: GitHub Pages, <code>static</code> output</li>\n<li><code>cloudflare</code>: Cloudflare Pages, <code>static</code> output</li>\n</ul>\n<p>On Vercel, set:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>DEPLOYMENT_PLATFORM=vercel</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"DEPLOYMENT_PLATFORM=vercel\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Build command:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>pnpm build</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm build\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Keep the output directory setting as default (Astro is handled by the adapter).</p>\n<h2 id=\"4-static-output-optional\">4. Static Output (Optional)<a class=\"anchor\" href=\"#4-static-output-optional\">#</a></h2>\n<p>If you need a fully static site (e.g. GitHub Pages), set:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>DEPLOYMENT_PLATFORM=github</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"DEPLOYMENT_PLATFORM=github\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>and deploy the <code>dist/</code> output.</p>"
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
const url = "src/content/blogs/deploy-vercel/index-en.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/deploy-vercel/index-en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/deploy-vercel/index-en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
