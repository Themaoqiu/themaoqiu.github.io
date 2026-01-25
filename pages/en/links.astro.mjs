import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, e as addAttribute, f as renderScript } from '../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { c as config } from '../../chunks/server_Cz41rmUb.mjs';
import { $ as $$CommonPage } from '../../chunks/CommonPage_C4EopBNr.mjs';
import { $ as $$Comment } from '../../chunks/ManualTOC_DD9Lavxq.mjs';
import { $ as $$FriendList, f as friendsData } from '../../chunks/links_BK7ZqdJw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { links } = config.integ;
  const linksConf = links || { applyTip: [] };
  const headings = [
    { depth: 2, slug: "common-links", text: "Common Links" },
    { depth: 2, slug: "apply-links", text: "Apply Links" },
    ...config.personal?.domains?.friendCircle ? [{ depth: 2, slug: "small-circle", text: "Small Circle" }] : []
  ];
  const { friends } = friendsData;
  return renderTemplate`${renderComponent($$result, "CommonPage", $$CommonPage, { "title": "Links", "headings": headings, "info": "/links" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "slot": "bottom" })}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-12"> <section class="space-y-6"> <div class="flex items-center gap-3 pb-3 border-b border-border/30"> <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15,3 21,3 21,9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </div> <div> <h2 id="common-links" class="text-2xl font-semibold m-0">Common Links</h2> <p class="text-sm text-muted-foreground m-0">Curated blogroll<span class="mx-2 align-middle">·</span>Explore an interesting world together</p> </div> </div> <div class="bg-gradient-to-br from-background to-muted/30 rounded-2xl p-6 border border-border/30"> ${renderComponent($$result2, "FriendList", $$FriendList, { "list": friends[0] })} </div> </section> <!-- Apply Links 区域 --> <section class="space-y-6"> <div class="flex items-center gap-3 pb-3 border-b border-border/30"> <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path> <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect> </svg> </div> <div> <h2 id="apply-links" class="text-2xl font-semibold m-0">Apply Links</h2> <p class="text-sm text-muted-foreground m-0">Apply for Blogroll<span class="mx-2 align-middle">·</span>Submit your site here</p> </div> </div> <div class="bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-6 border border-border/30 space-y-6"> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"> <span class="text-xs font-medium text-primary">ℹ️</span> </div> <p class="text-sm text-muted-foreground m-0">My blog info (click to copy):</p> </div> <div class="bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 p-5"> <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 break-words"> ${(linksConf.applyTip || []).map(({ name, val }) => {
    const safeVal = JSON.stringify(String(val ?? ""));
    const script = `navigator.clipboard.writeText(${safeVal});document.dispatchEvent(new CustomEvent('toast',{detail:{message:'Copied ' + ${safeVal} + ' to clipboard!'}}))`;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span class="text-sm font-medium text-muted-foreground text-end">${name}:</span> <samp class="text-sm font-mono bg-muted/30 px-2 py-1 rounded-md cursor-pointer hover:bg-muted/50 transition-colors"${addAttribute(script, "onclick")}> ${val} </samp> ` })}`;
  })} </div> </div> </div> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center"> <span class="text-xs">📝</span> </div> <p class="text-sm text-muted-foreground m-0">
Please follow the requirements when applying.
</p> </div> <div class="bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 p-5"> <div class="space-y-3"> <h4 class="text-sm font-medium text-foreground m-0 flex items-center gap-2"> <span class="text-green-500">✅</span>
Application Notes
</h4> <ul class="space-y-2 text-sm text-muted-foreground m-0 list-none"> <li class="flex items-center gap-2"> <span class="text-blue-500 text-lg leading-none">•</span> <span>You’ve added my blog to your site</span> </li> <li class="flex items-center gap-2"> <span class="text-blue-500 text-lg leading-none">•</span> <span>Your site is online and accessible</span> </li> <li class="flex items-center gap-2"> <span class="text-blue-500 text-lg leading-none">•</span> <span>Your content complies with regulations</span> </li> </ul> </div> </div> </div> </div> </section> <!-- 朋友圈区域 --> ${config.personal?.domains?.friendCircle && renderTemplate`<section class="space-y-6"> <div class="flex items-center gap-3 pb-3 border-b border-border/30"> <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="3"></circle> <path d="M12 1v6m0 6v6"></path> <path d="m21 12-6 0-6 0-6 0"></path> </svg> </div> <div> <h2 id="small-circle" class="text-2xl font-semibold m-0">Friend Circle</h2> <p class="text-sm text-muted-foreground m-0">Latest updates<span class="mx-2 align-middle">·</span>See what everyone is writing</p> </div> </div> <div class="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-6 border border-border/30 space-y-4"> <div class="flex items-center gap-3"> <div class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center"> <span class="text-xs">💡</span> </div> <p class="text-sm text-muted-foreground m-0">Linked but your posts don't show up? Try adding an RSS feed to your blog~</p> </div> <div id="friend-circle-lite-root" class="not-prose"> <div class="flex flex-col items-center gap-3 py-8 text-muted-foreground"> <div class="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div> <span class="text-sm">Loading...</span> </div> </div> </div> </section>`} </div> ${config.personal?.domains?.friendCircle && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderScript($$result3, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/links/index.astro?astro&type=script&index=0&lang.ts")} <meta name="fc-domain"${addAttribute(config.personal.domains.friendCircle, "content")}> ` })}`} ` })}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/links/index.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/links/index.astro";
const $$url = "/en/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
