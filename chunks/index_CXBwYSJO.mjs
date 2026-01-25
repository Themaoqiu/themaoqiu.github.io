import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Axi Theme 基础使用与配置",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "从本地启动到站点配置：了解内容结构、配置入口与常见改动点。",
  "category": "tech",
  "tags": ["axi-theme", "astro", "config"],
  "language": "zh",
  "minutesRead": "2 min read",
  "words": 260
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-前置条件",
    "text": "1. 前置条件"
  }, {
    "depth": 2,
    "slug": "2-目录结构最常用",
    "text": "2. 目录结构（最常用）"
  }, {
    "depth": 2,
    "slug": "3-配置站点信息srcsiteconfigts",
    "text": "3. 配置站点信息（src/site.config.ts）"
  }, {
    "depth": 2,
    "slug": "4-写一篇文章中英双语",
    "text": "4. 写一篇文章（中英双语）"
  }, {
    "depth": 2,
    "slug": "5-构建与产物",
    "text": "5. 构建与产物"
  }, {
    "depth": 2,
    "slug": "6-部署推荐github--vercel",
    "text": "6. 部署推荐（GitHub + Vercel）"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-前置条件\">1. 前置条件<a class=\"anchor\" href=\"#1-前置条件\">#</a></h2>\n<ul>\n<li>Node.js 18+（建议 20+）</li>\n<li>包管理器：<code>pnpm</code></li>\n</ul>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> install</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> dev</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">bash</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm install\npnpm dev\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"2-目录结构最常用\">2. 目录结构（最常用）<a class=\"anchor\" href=\"#2-目录结构最常用\">#</a></h2>\n<ul>\n<li><code>src/site.config.ts</code>：主题配置入口（站点信息、导航、集成配置等）</li>\n<li><code>src/content/blogs/&#x3C;slug>/index.mdx</code>：中文文章</li>\n<li><code>src/content/blogs/&#x3C;slug>/index-en.mdx</code>：英文文章（可选，没有则英文列表会回退到中文）</li>\n<li><code>public/</code>：静态资源（<code>/images/*</code>、<code>/avatar/*</code> 等）</li>\n</ul>\n<h2 id=\"3-配置站点信息srcsiteconfigts\">3. 配置站点信息（<code>src/site.config.ts</code>）<a class=\"anchor\" href=\"#3-配置站点信息srcsiteconfigts\">#</a></h2>\n<p>常改字段：</p>\n<ul>\n<li><code>theme.title</code> / <code>theme.description</code>：站点标题/描述</li>\n<li><code>theme.personal.domains.main</code>：主域名（用于生成绝对链接、RSS 等）</li>\n<li><code>theme.header.menu</code>：导航菜单</li>\n<li><code>integ.pagefind</code>：站内搜索（Pagefind）</li>\n<li><code>integ.waline</code>：评论系统（见 Waline 文档）</li>\n</ul>\n<h2 id=\"4-写一篇文章中英双语\">4. 写一篇文章（中英双语）<a class=\"anchor\" href=\"#4-写一篇文章中英双语\">#</a></h2>\n<ol>\n<li>新建文件夹：<code>src/content/blogs/my-first-post/</code></li>\n<li>写中文：<code>src/content/blogs/my-first-post/index.mdx</code></li>\n<li>写英文：<code>src/content/blogs/my-first-post/index-en.mdx</code>（可选）</li>\n</ol>\n<p>最小 Frontmatter（两种语言都要有）：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"md\"><pre><code><span class=\"line\"><span style=\"color:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold\">---</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">title: My Title</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">publishDate: 2026-01-11</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">description: Short summary.</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">tags: [</span><span style=\"color:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline\">'docs'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold\">---</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">md</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"---\ntitle: My Title\npublishDate: 2026-01-11\ndescription: Short summary.\ntags: [&#x27;docs&#x27;]\n---\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"5-构建与产物\">5. 构建与产物<a class=\"anchor\" href=\"#5-构建与产物\">#</a></h2>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> build</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> preview</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">bash</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"pnpm build\npnpm preview\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<ul>\n<li>构建产物默认在 <code>dist/</code></li>\n<li><code>astro.config.mjs</code> 会根据 <code>DEPLOYMENT_PLATFORM</code> 选择适配器与输出模式（详见部署文档）</li>\n</ul>\n<h2 id=\"6-部署推荐github--vercel\">6. 部署推荐（GitHub + Vercel）<a class=\"anchor\" href=\"#6-部署推荐github--vercel\">#</a></h2>\n<p>建议使用 GitHub 托管代码 + Vercel 自动部署（PR 预览、回滚、CDN、HTTPS 都更省心）。</p>\n<ul>\n<li>部署思路与注意事项：<a href=\"https://axi404.top/blog/website-vercel\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Website on Vercel<span> ↗</span></a></li>\n</ul>"
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
const url = "src/content/blogs/axi-theme-basics/index.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/axi-theme-basics/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/axi-theme-basics/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
