import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { c as config, $ as $$Image } from '../chunks/server_Cz41rmUb.mjs';
import { h as $$Label, b as $$Icon, $ as $$Button, i as $$Card } from '../chunks/i18n_B1lOdjZF.mjs';
import { a as avatar, $ as $$Section, b as $$BlogStats, c as $$GitHubActivityCalendar } from '../chunks/GitHubActivityCalendar_DsQe6zDR.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_kcMkkxqZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" }, "highlightColor": "#659EB966" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex w-full flex-col items-center"> <section class="animate mb-10 flex flex-col items-center gap-y-7" id="content-header"> <div class="flex flex-row items-center gap-x-6"> ${renderComponent($$result2, "Image", $$Image, { "src": avatar, "alt": "profile", "class": "h-36 w-auto rounded-lg border p-1", "loading": "eager" })} <div class="flex flex-col gap-y-4"> <h1 class="text-3xl font-bold">${config.author}</h1> <div class="flex flex-wrap gap-x-1 gap-y-1"> ${config.personal?.location && renderTemplate`${renderComponent($$result2, "Label", $$Label, { "title": config.personal.location }, { "icon": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "location", "class": "size-4", "slot": "icon" })}` })}`} ${config.personal?.githubUsername && renderTemplate`${renderComponent($$result2, "Label", $$Label, { "title": "Github", "as": "a", "href": `https://github.com/${config.personal.githubUsername}`, "target": "_blank" }, { "icon": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "github", "class": "size-4", "slot": "icon" })}` })}`} ${config.personal?.email && renderTemplate`${renderComponent($$result2, "Label", $$Label, { "title": "Email", "as": "a", "href": `mailto:${config.personal.email}` }, { "icon": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "email", "class": "size-4", "slot": "icon" })}` })}`} ${config.personal?.googleScholar && renderTemplate`${renderComponent($$result2, "Label", $$Label, { "title": "Scholar", "as": "a", "href": config.personal.googleScholar }, { "icon": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "earth", "class": "size-4", "slot": "icon" })}` })}`} </div> </div> </div> <div id="content" class="animate flex flex-col gap-y-10 md:w-4/5 lg:w-5/6"> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">我是来自上海电力大学的23级信息管理与信息系统的本科生。正在蒙纳士大学的MMAI Lab进行科研实习，进行data-centric AI和视频理解多模态大模型的研究。持续努力中...
</p> ${renderComponent($$result3, "Button", $$Button, { "title": "More about me", "class": "w-fit self-end", "href": "/academic", "style": "ahead" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "\u4E0A\u6D77\u7535\u529B\u5927\u5B66", "subheading": "\u4FE1\u606F\u7BA1\u7406\u4E0E\u4FE1\u606F\u7CFB\u7EDF, \u672C\u79D1", "date": "2023 - 2027", "href": "https://www.shiep.edu.cn/" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Statistics" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BlogStats", $$BlogStats, { "blogStartDate": config.personal?.blogStartDate ? new Date(config.personal.blogStartDate) : /* @__PURE__ */ new Date("2025-05-06") })} ` })} ${config.personal?.githubUsername && renderTemplate`${renderComponent($$result2, "GitHubActivityCalendar", $$GitHubActivityCalendar, { "username": config.personal.githubUsername })}`} </div> </section></main> ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/index.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
