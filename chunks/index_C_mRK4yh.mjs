import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "GitHub + Vercel 部署（推荐）",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "使用 GitHub 管理代码，并用 Vercel 自动构建与部署（含环境变量与常见坑）。",
  "category": "tech",
  "tags": ["deployment", "vercel", "github"],
  "language": "zh",
  "minutesRead": "2 min read",
  "words": 213
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-为什么推荐-github--vercel",
    "text": "1. 为什么推荐 GitHub + Vercel"
  }, {
    "depth": 2,
    "slug": "2-部署前检查",
    "text": "2. 部署前检查"
  }, {
    "depth": 2,
    "slug": "3-vercel-部署要点",
    "text": "3. Vercel 部署要点"
  }, {
    "depth": 2,
    "slug": "4-静态站点可选",
    "text": "4. 静态站点（可选）"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-为什么推荐-github--vercel\">1. 为什么推荐 GitHub + Vercel<a class=\"anchor\" href=\"#1-为什么推荐-github--vercel\">#</a></h2>\n<ul>\n<li>PR 预览：每个分支/PR 都能拿到可访问的预览链接</li>\n<li>自动构建：push 即部署</li>\n<li>HTTPS / CDN：默认就有</li>\n</ul>\n<p>详细流程与说明：<a href=\"https://axi404.top/blog/website-vercel\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Website on Vercel<span> ↗</span></a></p>\n<h2 id=\"2-部署前检查\">2. 部署前检查<a class=\"anchor\" href=\"#2-部署前检查\">#</a></h2>\n<p>本地先跑通：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> install</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> build</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">bash</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm install\npnpm build\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>配置域名（建议至少填主域名）：</p>\n<ul>\n<li><code>src/site.config.ts</code> → <code>theme.personal.domains.main</code></li>\n</ul>\n<h2 id=\"3-vercel-部署要点\">3. Vercel 部署要点<a class=\"anchor\" href=\"#3-vercel-部署要点\">#</a></h2>\n<p>主题会读取 <code>DEPLOYMENT_PLATFORM</code> 来选择适配器与输出：</p>\n<ul>\n<li><code>vercel</code>（默认）：Vercel adapter，输出通常为 <code>server</code></li>\n<li><code>github</code>：用于 GitHub Pages，输出为 <code>static</code></li>\n<li><code>cloudflare</code>：用于 Cloudflare Pages，输出为 <code>static</code></li>\n</ul>\n<p>在 Vercel 项目里设置环境变量：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>DEPLOYMENT_PLATFORM=vercel</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"DEPLOYMENT_PLATFORM=vercel\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>构建命令建议使用：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>pnpm build</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm build\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>输出目录（Output Directory）保持默认即可（Astro 会由适配器处理）。</p>\n<h2 id=\"4-静态站点可选\">4. 静态站点（可选）<a class=\"anchor\" href=\"#4-静态站点可选\">#</a></h2>\n<p>如果你希望生成纯静态站点（例如 GitHub Pages），使用：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>DEPLOYMENT_PLATFORM=github</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"DEPLOYMENT_PLATFORM=github\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>并确保你的部署平台支持静态产物 <code>dist/</code>。</p>"
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
const url = "src/content/blogs/deploy-vercel/index.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/deploy-vercel/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/deploy-vercel/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
