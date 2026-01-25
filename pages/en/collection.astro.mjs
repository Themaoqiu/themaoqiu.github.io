import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { b as getPostCollections } from '../../chunks/server_Cz41rmUb.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_kcMkkxqZ.mjs';
import { $ as $$Button } from '../../chunks/i18n_B1lOdjZF.mjs';
import { b as $$CollectionPreview } from '../../chunks/PFSearch_BuEHxxBW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const collections = await getPostCollections();
  const meta = {
    title: "All Collections",
    description: "View all post collections"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="text-3xl font-bold mb-6">Collections</h1> <p class="text-muted-foreground mb-10 text-lg">
Curated sets of posts on specific topics or themes.
</p> </div> <section id="content" class="animate"> ${collections.length > 0 ? renderTemplate`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${collections.map((collection) => renderTemplate`${renderComponent($$result2, "CollectionPreview", $$CollectionPreview, { "collection": collection })}`)} </div>` : renderTemplate`<div class="py-12 text-center text-muted-foreground"> <p>No collections found.</p> </div>`} </section> </main> ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/collection/index.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/collection/index.astro";
const $$url = "/en/collection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
