import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, g as renderSlot, e as addAttribute } from './astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { j as $$BackToTop } from './PFSearch_BuEHxxBW.mjs';
import { f as cn } from './i18n_B1lOdjZF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_kcMkkxqZ.mjs';
import { l as integ } from './server_Cz41rmUb.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { meta, highlightColor, back = "/", ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta, "highlightColor": highlightColor, ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-6 items-start gap-x-10 md:flex">  <aside class="animate top-24 min-w-48 basis-60 overflow-y-scroll max-md:hidden md:sticky md:order-2 lg:shrink-0" style="height:calc(100vh - 8rem);" id="sidebar"> ${renderSlot($$result2, $$slots["sidebar"])} </aside> <article class="min-w-0 grow">  <div id="content-header" class="animate"> ${renderSlot($$result2, $$slots["header"])} </div>  <div id="content"${addAttribute(cn("max-w-none animate mt-8 md:min-w-[45ch]", integ.typography.class), "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </main> <div class="mt-6 items-start gap-x-10 md:flex">  <div class="mt-8 flex-1 text-muted-foreground md:min-w-[50ch]"> ${renderSlot($$result2, $$slots["bottom"])} </div> <div class="min-w-48 basis-60"> ${renderSlot($$result2, $$slots["bottom-sidebar"])} </div> </div> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "header": "content-header", "content": "content" })} ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/layouts/ContentLayout.astro", void 0);

export { $$ContentLayout as $ };
