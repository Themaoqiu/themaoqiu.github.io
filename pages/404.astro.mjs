import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { $ as $$Button } from '../chunks/i18n_B1lOdjZF.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_kcMkkxqZ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    description: "Not found",
    title: "404"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-10 text-center sm:px-6 lg:px-8"> <h1 class="block text-7xl font-bold sm:text-9xl">404</h1> <p class="mt-3 text-muted-foreground">Oops, something went wrong.</p> <p class="text-lg">Sorry, we couldn't find your page.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Back to home", "href": "/", "style": "ahead", "class": "mt-5" })} </div> ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/404.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
