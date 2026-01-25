import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { $ as $$Button, f as cn, g as $$CardList } from '../../chunks/i18n_B1lOdjZF.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_kcMkkxqZ.mjs';
import { l as integ, t as terms } from '../../chunks/server_Cz41rmUb.mjs';
export { renderers } from '../../renderers.mjs';

const $$List = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Site policy",
    description: "Site policy documentation"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Site Policy</h1> </div> <div id="content"${addAttribute(cn("animate mt-8 max-w-none md:min-w-[45ch]", integ.typography.class), "class")}> <h2 class="text-xl font-medium">Site policy documentation</h2> ${renderComponent($$result2, "CardList", $$CardList, { ...terms })} </div> </main> ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/terms/list.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/terms/list.astro";
const $$url = "/terms/list";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$List,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
