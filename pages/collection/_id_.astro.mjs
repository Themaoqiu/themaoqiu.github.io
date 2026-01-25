import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { h as getPostsForCollection, i as getCollection } from '../../chunks/server_Cz41rmUb.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_kcMkkxqZ.mjs';
import { c as $$CollectionHeader, $ as $$PostPreview } from '../../chunks/PFSearch_BuEHxxBW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const prerender = true;
async function getStaticPaths() {
  const collections = await getCollection("postCollections");
  return collections.map((collection) => ({
    params: { id: collection.id },
    props: { collection }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { collection } = Astro2.props;
  const posts = await getPostsForCollection(collection);
  const isEn = Astro2.currentLocale === "en";
  const title = isEn && collection.data.title_en ? collection.data.title_en : collection.data.title;
  const description = isEn && collection.data.description_en ? collection.data.description_en : collection.data.description;
  const meta = {
    title,
    description
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> ${renderComponent($$result2, "CollectionHeader", $$CollectionHeader, { "collection": collection })} <section aria-label="Collection posts list" class="animate"> ${posts.length > 0 ? renderTemplate`<ul class="flex flex-col gap-y-4 text-start"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "detailed": true })}`)} </ul>` : renderTemplate`<p>No posts found in this collection.</p>`} </section> </main> ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/collection/[id].astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/collection/[id].astro";
const $$url = "/collection/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
