import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Waline 评论系统：部署与接入",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "部署 Waline 服务端，并在 Axi Theme 中启用评论与访问量统计。",
  "category": "tech",
  "tags": ["waline", "comments", "deployment"],
  "language": "zh",
  "minutesRead": "1 min read",
  "words": 135
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-部署-waline-服务端",
    "text": "1. 部署 Waline 服务端"
  }, {
    "depth": 2,
    "slug": "2-在主题中启用-waline",
    "text": "2. 在主题中启用 Waline"
  }, {
    "depth": 2,
    "slug": "3-常见说明",
    "text": "3. 常见说明"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-部署-waline-服务端\">1. 部署 Waline 服务端<a class=\"anchor\" href=\"#1-部署-waline-服务端\">#</a></h2>\n<p>请参考这篇完整教程（包含服务端部署与配置项说明）：</p>\n<ul>\n<li><a href=\"https://axi404.top/blog/waline-install\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Waline Comments: Deploy &#x26; Integrate<span> ↗</span></a></li>\n</ul>\n<p>部署完成后你会得到一个服务端地址，例如：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>https://waline.example.com/</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"https://waline.example.com/\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"2-在主题中启用-waline\">2. 在主题中启用 Waline<a class=\"anchor\" href=\"#2-在主题中启用-waline\">#</a></h2>\n<p>编辑 <code>src/site.config.ts</code>：</p>\n<ul>\n<li><code>integ.waline.enable</code>: 设为 <code>true</code></li>\n<li><code>integ.waline.server</code>: 填你的 Waline Server URL</li>\n</ul>\n<p>示例：</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">waline</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: {</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  enable</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  server</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://waline.example.com/'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">ts</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"waline: {\n  enable: true,\n  server: &#x27;https://waline.example.com/&#x27;,\n}\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"3-常见说明\">3. 常见说明<a class=\"anchor\" href=\"#3-常见说明\">#</a></h2>\n<ul>\n<li>评论区组件：<code>src/components/advanced/Comment.astro</code></li>\n<li>页面访问量/评论数：部分页面会加载 Waline 的 <code>pageview</code> 统计（见 <code>src/pages/*</code>）</li>\n<li>单篇文章是否显示评论：由文章 Frontmatter 的 <code>comment</code> 控制（默认 <code>true</code>）</li>\n</ul>"
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
const url = "src/content/blogs/waline/index.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/waline/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/waline/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
