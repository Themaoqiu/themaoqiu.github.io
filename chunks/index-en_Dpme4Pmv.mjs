import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_6pLgD4hd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Waline Comments: Deploy & Integrate",
  "publishDate": "2026-01-11T00:00:00.000Z",
  "updatedDate": "2026-01-11T00:00:00.000Z",
  "description": "Deploy the Waline server and enable comments/pageview in Axi Theme.",
  "category": "tech",
  "tags": ["waline", "comments", "deployment"],
  "language": "en",
  "minutesRead": "1 min read",
  "words": 60
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-deploy-waline-server",
    "text": "1. Deploy Waline Server"
  }, {
    "depth": 2,
    "slug": "2-enable-waline-in-the-theme",
    "text": "2. Enable Waline in the Theme"
  }, {
    "depth": 2,
    "slug": "3-notes",
    "text": "3. Notes"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"1-deploy-waline-server\">1. Deploy Waline Server<a class=\"anchor\" href=\"#1-deploy-waline-server\">#</a></h2>\n<p>Follow the full walkthrough (server deployment + config explanation):</p>\n<ul>\n<li><a href=\"https://axi404.top/blog/waline-install\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Waline Comments: Deploy &#x26; Integrate<span> ↗</span></a></li>\n</ul>\n<p>After deployment, you should get a server URL, e.g.:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"txt\"><pre><code><span class=\"line\"><span>https://waline.example.com/</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">txt</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"https://waline.example.com/\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"2-enable-waline-in-the-theme\">2. Enable Waline in the Theme<a class=\"anchor\" href=\"#2-enable-waline-in-the-theme\">#</a></h2>\n<p>Edit <code>src/site.config.ts</code>:</p>\n<ul>\n<li><code>integ.waline.enable</code>: set to <code>true</code></li>\n<li><code>integ.waline.server</code>: your Waline Server URL</li>\n</ul>\n<p>Example:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">waline</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: {</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  enable</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  server</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://waline.example.com/'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span></code></pre><span class=\"language transition-opacity duration-300 absolute top-3 right-0 ps-1 pe-3 text-sm bg-muted text-muted-foreground select-none\">ts</span><button class=\"copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground\" data-code=\"waline: {\n  enable: true,\n  server: &#x27;https://waline.example.com/&#x27;,\n}\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"3-notes\">3. Notes<a class=\"anchor\" href=\"#3-notes\">#</a></h2>\n<ul>\n<li>Comment component: <code>src/components/advanced/Comment.astro</code></li>\n<li>Pageview/comment count: some pages load Waline <code>pageview</code> stats (see <code>src/pages/*</code>)</li>\n<li>Per-post toggle: frontmatter <code>comment</code> (default <code>true</code>)</li>\n</ul>"
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
const url = "src/content/blogs/waline/index-en.mdx";
const file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/waline/index-en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/content/blogs/waline/index-en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
