import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead, g as renderSlot } from './astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { d as $$TOC, i as $$PageInfo } from './PFSearch_BuEHxxBW.mjs';
import { $ as $$ContentLayout } from './ContentLayout_BauGTpzp.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$CommonPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CommonPage;
  const { title, headings, info, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$ContentLayout, { "meta": { title }, ...props }, { "bottom": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom"])}`, "bottom-sidebar": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom-sidebar"])}`, "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl"> ${title} </h1> ${info && renderTemplate`${renderComponent($$result3, "PageInfo", $$PageInfo, { "path": typeof info === "string" ? info : info.slug, "hideComment": typeof info === "object" && info.hideComment ? info.hideComment : false, "class": "italic" })}`}` })}`, "sidebar": ($$result2) => renderTemplate`${headings?.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings, "slot": "sidebar" })}`}` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/layouts/CommonPage.astro", void 0);

export { $$CommonPage as $ };
