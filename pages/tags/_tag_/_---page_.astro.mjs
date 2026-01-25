import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { $ as $$PostPreview, a as $$Paginator } from '../../../chunks/PFSearch_BuEHxxBW.mjs';
import { g as getBlogCollection, s as sortMDByDate, f as getUniqueTags, c as config } from '../../../chunks/server_Cz41rmUb.mjs';
import { $ as $$Button } from '../../../chunks/i18n_B1lOdjZF.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_kcMkkxqZ.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getBlogCollection();
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPostsByDate);
  return uniqueTags.flatMap((tag) => {
    const filterPosts = allPostsByDate.filter((post) => post.data.tags.includes(tag));
    return paginate(filterPosts, {
      pageSize: config.content?.blogPageSize || 8,
      params: { tag }
    });
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  const meta = {
    description: `View all posts with the tag - ${tag}`,
    title: `Tag: ${tag}`
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 flex items-end gap-x-2 text-3xl font-medium">
Tags:
<span class="text-2xl">#${tag}</span> </h1> </div> <section id="content" class="animate" aria-label="Blog post list"> <ul class="flex flex-col gap-y-3 text-start"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "as": "h2", "post": post, "detailed": true })}`)} </ul> ${renderComponent($$result2, "Paginator", $$Paginator, { "currentPage": page.currentPage, "lastPage": page.lastPage, "url": page.url })} </section> </main> ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/tags/[tag]/[...page].astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

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
