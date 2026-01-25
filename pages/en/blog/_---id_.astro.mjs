import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { r as renderEntry, s as sortMDByDate, j as getBlogCollectionEn } from '../../../chunks/server_Cz41rmUb.mjs';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_EfsTbSWA.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const prerender = true;
async function getStaticPaths() {
  const posts = sortMDByDate(await getBlogCollectionEn());
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post, posts }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post, posts } = Astro2.props;
  const { Content, headings, remarkPluginFrontmatter } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "PostLayout", $$BlogPost, { "post": post, "posts": posts, "headings": headings, "remarkPluginFrontmatter": remarkPluginFrontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/blog/[...id].astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/blog/[...id].astro";
const $$url = "/en/blog/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
