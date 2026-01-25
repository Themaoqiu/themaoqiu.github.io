import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Friend Circle（朋友圈）：接入与配置",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "使用 Friend-Circle-Lite 生成数据源，并在 Links 页面展示朋友圈动态。",
  "category": "tech",
  "tags": ["links", "friend-circle", "rss"],
  "language": "zh",
  "minutesRead": "2 min read",
  "words": 210
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-friend-circle-是什么",
    "text": "1. Friend Circle 是什么"
  }, {
    "depth": 2,
    "slug": "2-先准备数据源friend-circle-lite",
    "text": "2. 先准备数据源（Friend-Circle-Lite）"
  }, {
    "depth": 2,
    "slug": "3-在主题中启用",
    "text": "3. 在主题中启用"
  }, {
    "depth": 2,
    "slug": "4-友链-rss-建议",
    "text": "4. 友链 RSS 建议"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-friend-circle-是什么\">1. Friend Circle 是什么<a class=\"anchor\" href=\"#1-friend-circle-是什么\">#</a></h2>\n<p>“朋友圈”页面会展示友链站点的最新文章聚合，适合在 Links 页让访问者快速看到朋友们的新内容。</p>\n<p>本主题的 Links 页集成入口在：</p>\n<ul>\n<li><code>src/pages/links/index.astro</code></li>\n</ul>\n<h2 id=\"2-先准备数据源friend-circle-lite\">2. 先准备数据源（Friend-Circle-Lite）<a class=\"anchor\" href=\"#2-先准备数据源friend-circle-lite\">#</a></h2>\n<p>本主题使用 Friend-Circle-Lite 的接口数据（<code>all.json</code> 等）。搭建与使用方式建议参考：</p>\n<ul>\n<li><a href=\"https://blog.liushen.fun/posts/4dc716ec/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Friend Circle 参考文档<span> ↗</span></a></li>\n</ul>\n<p>你需要得到一个可访问的域名，例如：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>fc.example.com</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"fc.example.com\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>并确保以下地址可访问：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>https://fc.example.com/all.json</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"https://fc.example.com/all.json\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"3-在主题中启用\">3. 在主题中启用<a class=\"anchor\" href=\"#3-在主题中启用\">#</a></h2>\n<p>编辑 <code>src/site.config.ts</code>，设置：</p>\n<ul>\n<li><code>theme.personal.domains.friendCircle = 'fc.example.com'</code></li>\n</ul>\n<p>配置完成后，<code>/links</code> 页面会自动显示 “Small Circle / 朋友圈” 区块。</p>\n<h2 id=\"4-友链-rss-建议\">4. 友链 RSS 建议<a class=\"anchor\" href=\"#4-友链-rss-建议\">#</a></h2>\n<p>如果某个站点在友链里但朋友圈里没有内容，通常是该站点未提供 RSS 或 RSS 不可访问。建议为友链站点补全 RSS。</p>"
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
const url = "src/content/blogs/friend-circle/index.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/friend-circle/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/friend-circle/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
