import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { g as getBlogCollection, k as getUniqueTagsWithCount } from '../chunks/server_Cz41rmUb.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_kcMkkxqZ.mjs';
import { $ as $$Button, f as cn } from '../chunks/i18n_B1lOdjZF.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getBlogCollection();
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    description: "A list of all the topics I've written about in my posts",
    title: "All Tags"
  };
  return renderTemplate(_a || (_a = __template(["", "  <script>\n  function animateNumber(element, target, duration) {\n    if (!element || target == null || isNaN(target) || target <= 0) {\n      return\n    }\n\n    duration = duration || 2000\n\n    const targetLength = target.toString().length\n    element.style.minWidth = `${Math.max(targetLength, 2)}ch`\n\n    const start = 0\n    const increment = target / (duration / 50)\n    let current = start\n\n    const timer = setInterval(() => {\n      current += increment\n\n      if (current >= target) {\n        current = target\n        clearInterval(timer)\n        element.classList.add('counting')\n        setTimeout(() => element.classList.remove('counting'), 300)\n      }\n\n      element.textContent = Math.floor(current).toString()\n\n      if (current < target && Math.floor(current) % 3 === 0) {\n        element.classList.add('counting')\n        setTimeout(() => element.classList.remove('counting'), 200)\n      }\n    }, 50)\n  }\n\n  document.addEventListener('DOMContentLoaded', () => {\n    setTimeout(() => {\n      const topicsElement = document.getElementById('topics-count')\n      const articlesElement = document.getElementById('articles-count')\n\n      if (topicsElement) {\n        const targetValue = topicsElement.getAttribute('data-target')\n        const topicsTarget = parseInt(targetValue, 10)\n\n        if (!isNaN(topicsTarget) && topicsTarget > 0) {\n          animateNumber(topicsElement, topicsTarget, 1500)\n        }\n      }\n\n      if (articlesElement) {\n        const targetValue = articlesElement.getAttribute('data-target')\n        const articlesTarget = parseInt(targetValue, 10)\n\n        if (!isNaN(articlesTarget) && articlesTarget > 0) {\n          setTimeout(() => {\n            animateNumber(articlesElement, articlesTarget, 1500)\n          }, 200)\n        }\n      }\n    }, 600)\n  })\n<\/script>"], ["", "  <script>\n  function animateNumber(element, target, duration) {\n    if (!element || target == null || isNaN(target) || target <= 0) {\n      return\n    }\n\n    duration = duration || 2000\n\n    const targetLength = target.toString().length\n    element.style.minWidth = \\`\\${Math.max(targetLength, 2)}ch\\`\n\n    const start = 0\n    const increment = target / (duration / 50)\n    let current = start\n\n    const timer = setInterval(() => {\n      current += increment\n\n      if (current >= target) {\n        current = target\n        clearInterval(timer)\n        element.classList.add('counting')\n        setTimeout(() => element.classList.remove('counting'), 300)\n      }\n\n      element.textContent = Math.floor(current).toString()\n\n      if (current < target && Math.floor(current) % 3 === 0) {\n        element.classList.add('counting')\n        setTimeout(() => element.classList.remove('counting'), 200)\n      }\n    }, 50)\n  }\n\n  document.addEventListener('DOMContentLoaded', () => {\n    setTimeout(() => {\n      const topicsElement = document.getElementById('topics-count')\n      const articlesElement = document.getElementById('articles-count')\n\n      if (topicsElement) {\n        const targetValue = topicsElement.getAttribute('data-target')\n        const topicsTarget = parseInt(targetValue, 10)\n\n        if (!isNaN(topicsTarget) && topicsTarget > 0) {\n          animateNumber(topicsElement, topicsTarget, 1500)\n        }\n      }\n\n      if (articlesElement) {\n        const targetValue = articlesElement.getAttribute('data-target')\n        const articlesTarget = parseInt(targetValue, 10)\n\n        if (!isNaN(articlesTarget) && articlesTarget > 0) {\n          setTimeout(() => {\n            animateNumber(articlesElement, articlesTarget, 1500)\n          }, 200)\n        }\n      }\n    }, 600)\n  })\n<\/script>"])), renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta, "class": "astro-os4i7owy" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back", "class": "astro-os4i7owy" })} ${maybeRenderHead()}<main class="relative mt-6 lg:mt-10 astro-os4i7owy"> <div id="content-header" class="animate mb-12 text-center astro-os4i7owy"> <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-opacity-90 bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg backdrop-blur-sm astro-os4i7owy"> <svg class="h-8 w-8 text-white astro-os4i7owy" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" class="astro-os4i7owy"></path> </svg> </div> <h1 class="mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:via-gray-200 dark:to-white lg:text-5xl astro-os4i7owy">
Explore Topics
</h1> <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 astro-os4i7owy">
Discover all the fascinating topics I've explored in my blog posts. Click on any tag to dive
        deeper into that subject.
</p> <div class="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-white/70 px-4 py-2 text-sm text-gray-600 backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/70 dark:text-gray-400 astro-os4i7owy"> <svg class="h-4 w-4 astro-os4i7owy" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" class="astro-os4i7owy"></path> </svg> <span id="topics-count"${addAttribute(allTags.length, "data-target")} class="inline-block text-center font-mono astro-os4i7owy">0</span> topics • <span id="articles-count"${addAttribute(allPosts.length, "data-target")} class="inline-block text-center font-mono astro-os4i7owy">0</span> articles
</div> </div> <div id="content" class="animate astro-os4i7owy"> ${allTags.length > 0 ? renderTemplate`<div class="mx-auto max-w-6xl astro-os4i7owy"> <div class="astro-os4i7owy"> <h2 class="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 astro-os4i7owy"> <svg class="h-5 w-5 text-blue-500 astro-os4i7owy" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" class="astro-os4i7owy"></path> </svg>
All Topics
</h2> <div class="flex flex-wrap justify-center gap-3 astro-os4i7owy"> ${allTags.map(([tag, val]) => renderTemplate`<div class="group astro-os4i7owy"> ${renderComponent($$result2, "Button", $$Button, { "href": `/tags/${tag}`, "style": "pill", "class": (cn(
    "relative overflow-hidden border border-gray-200/60 bg-white/80 backdrop-blur-md transition-all duration-200 ease-out hover:border-blue-300/80 hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800/80 dark:hover:border-blue-600/80",
    "flex items-center gap-2 px-4 py-2",
    val > 2 ? "text-lg" : val > 1 ? "text-base font-medium" : "text-sm"
  ) ?? "") + " astro-os4i7owy" }, { "default": async ($$result3) => renderTemplate` <span class="relative z-10 text-gray-700 transition-colors group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white astro-os4i7owy"> ${tag} </span> <span${addAttribute((cn(
    "relative z-10 rounded-full bg-gray-100/80 px-2 py-1 font-medium text-gray-600 backdrop-blur-sm transition-colors group-hover:bg-blue-100/90 group-hover:text-blue-700 dark:bg-gray-700/80 dark:text-gray-400 dark:group-hover:bg-blue-900/80 dark:group-hover:text-blue-300",
    val > 2 ? "text-sm" : "text-xs"
  ) ?? "") + " astro-os4i7owy", "class")}> ${val} </span> ` })} </div>`)} </div> </div> </div>` : renderTemplate`<div class="py-16 text-center astro-os4i7owy"> <div class="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-gray-200/50 bg-gray-100/70 backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/70 astro-os4i7owy"> <svg class="h-10 w-10 text-gray-400 astro-os4i7owy" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" class="astro-os4i7owy"></path> </svg> </div> <h3 class="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300 astro-os4i7owy">
No topics yet
</h3> <p class="text-gray-500 dark:text-gray-400 astro-os4i7owy">
Check back later as I publish more content!
</p> </div>`} </div> </main> ` }));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/tags/index.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
