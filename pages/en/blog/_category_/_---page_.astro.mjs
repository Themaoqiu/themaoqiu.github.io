import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { $ as $$PostPreview, a as $$Paginator, b as $$CollectionPreview } from '../../../../chunks/PFSearch_BuEHxxBW.mjs';
import { b as getPostCollections, j as getBlogCollectionEn, d as getUniqueCategories, s as sortMDByDate, e as getCollectionsByCategory, f as getUniqueTags, c as config } from '../../../../chunks/server_Cz41rmUb.mjs';
import { b as $$Icon, $ as $$Button } from '../../../../chunks/i18n_B1lOdjZF.mjs';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_kcMkkxqZ.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const prerender = true;
const getStaticPaths = (async ({ paginate }) => {
  const categoryMap = {
    "tech": "Technical",
    "daily": "Daily Life",
    "research": "Research",
    "journal": "Month Journal"
  };
  const categoryOrder = ["research", "tech", "daily", "journal"];
  const allCollections = await getBlogCollectionEn();
  const allUniqueCategories = getUniqueCategories(allCollections);
  const uniqueCategories = categoryOrder.filter((cat) => allUniqueCategories.includes(cat));
  return uniqueCategories.flatMap((category, index) => {
    const collections = sortMDByDate(getCollectionsByCategory(allCollections, category));
    const uniqueTags = getUniqueTags(collections);
    const collectionsCount = collections.length;
    const prevIndex = index === 0 ? uniqueCategories.length - 1 : index - 1;
    const nextIndex = index === uniqueCategories.length - 1 ? 0 : index + 1;
    const prevCategory = uniqueCategories[prevIndex];
    const nextCategory = uniqueCategories[nextIndex];
    return paginate(collections, {
      params: { category },
      pageSize: config.content?.blogPageSize || 8,
      props: { uniqueTags, collectionsCount, category, prevCategory, nextCategory, categoryMap }
    });
  });
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, uniqueTags, collectionsCount, category, prevCategory, nextCategory, categoryMap: categoryMapProp } = Astro2.props;
  const categoryDisplayName = categoryMapProp[category] || category;
  const postCollections = await getPostCollections();
  const meta = {
    description: `Posts in category: ${categoryDisplayName}`,
    title: `${categoryDisplayName} - Blog`
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <div class="category-nav-wrapper mb-6 mt-6 sm:mt-10"> <h1 class="inline-block text-3xl font-medium">${categoryDisplayName}</h1> <div class="category-nav-arrows ml-3 inline-flex gap-1 align-middle"> <a${addAttribute(`/en/blog/${prevCategory}`, "href")} class="flex h-8 w-8 items-center justify-center transition-colors hover:text-primary"${addAttribute(`Previous: ${categoryMapProp[prevCategory]}`, "title")}${addAttribute(`Go to ${categoryMapProp[prevCategory]}`, "aria-label")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "up", "class": "size-5" })} </a> <a${addAttribute(`/en/blog/${nextCategory}`, "href")} class="flex h-8 w-8 items-center justify-center transition-colors hover:text-primary"${addAttribute(`Next: ${categoryMapProp[nextCategory]}`, "title")}${addAttribute(`Go to ${categoryMapProp[nextCategory]}`, "aria-label")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-down", "class": "size-5" })} </a> </div> </div> </div> ${page.data.length === 0 ? renderTemplate`<p>No posts yet.</p>` : renderTemplate`<div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8"> <section aria-label="Blog posts list" class="animate" id="content">  <div class="mb-3 flex flex-col justify-between text-sm sm:mb-5 sm:flex-row"> <span class="text-muted-foreground">
Page ${page.currentPage} - Showing ${page.data.length} of ${collectionsCount} posts
</span> <a aria-label="View all blog by years" href="/en/archives" data-astro-prefetch>
View all posts by years →
</a> </div>  <ul class="flex flex-col gap-y-4 text-start"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "detailed": true })}`)} </ul> ${renderComponent($$result2, "Paginator", $$Paginator, { "currentPage": page.currentPage, "lastPage": page.lastPage, "url": page.url })} </section>  ${(!!uniqueTags.length || !!postCollections.length) && renderTemplate`<aside class="animate" id="sidebar"> ${!!postCollections.length && renderTemplate`<div class="mb-8"> <h2 class="mb-4 flex items-center text-lg font-semibold"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "package", "class": "me-2" })}
Collections
</h2> <ul class="flex flex-col gap-2"> ${postCollections.slice(0, 5).map((collection) => renderTemplate`${renderComponent($$result2, "CollectionPreview", $$CollectionPreview, { "collection": collection, "minimal": true })}`)} </ul> <span class="mt-4 block sm:text-end"> <a aria-label="View all collections" href="/en/collection" data-astro-prefetch>
View all →
</a> </span> </div>`} ${!!uniqueTags.length && renderTemplate`<div> <h2 class="mb-4 flex items-center text-lg font-semibold"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tag-2", "class": "me-2" })}
Tags
</h2> <ul class="text-bgColor flex flex-wrap gap-2"> ${uniqueTags.map((tag) => renderTemplate`<li> ${renderComponent($$result2, "Button", $$Button, { "title": tag, "href": `/en/tags/${tag}`, "style": "pill" })} </li>`)} </ul> <span class="mt-4 block sm:text-end"> <a aria-label="View all blog categories" href="/en/tags" data-astro-prefetch>
View all →
</a> </span> </div>`} </aside>`} </div>`} </main> ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/blog/[category]/[...page].astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/blog/[category]/[...page].astro";
const $$url = "/en/blog/[category]/[...page]";

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
