import { b as createAstro, c as createComponent, s as spreadAttributes, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_6pLgD4hd.mjs';
import { $ as $$Image } from './server_Cz41rmUb.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$FriendList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FriendList;
  function shuffle(arr) {
    return arr.sort(function() {
      return Math.random() - 0.5;
    });
  }
  const { title, list: friendlist, ...props } = Astro2.props;
  return renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2${addAttribute(friendlist.id_name, "id")}>${title}</h2>`}<div class="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"${spreadAttributes(props)}>${friendlist.link_list.length > 0 ? shuffle(friendlist.link_list).map((frd) => renderTemplate`<a${addAttribute(frd.link, "href")} target="_blank" class="no-underline"><div class="group relative h-full overflow-hidden rounded-2xl border border-border bg-background px-4 py-2 transition-colors hover:bg-muted sm:py-3"><div class="relative z-10 flex h-full items-center gap-3"><div class="relative h-16 w-16 min-w-16 overflow-hidden rounded-full">${renderComponent($$result, "Image", $$Image, { "class": "my-0 bg-white", "src": frd.avatar, "height": 80, "width": 80, "alt": "avatar", "loading": "lazy" })}<div class="absolute start-0 top-0 h-full w-full"><div class="flex h-full w-full items-center justify-center rounded-full bg-foreground opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="me-2 stroke-background"><line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline></svg></div></div></div><div class="flex flex-col gap-y-2"><p class="my-0 line-clamp-1 text-sm">${frd.name}</p><p class="my-0 line-clamp-1 text-xs text-muted-foreground sm:line-clamp-2">${frd.intro}</p></div></div>${renderComponent($$result, "Image", $$Image, { "class": "absolute -start-2 top-0 z-0 my-0 h-full w-2/3 bg-white object-cover opacity-15", "src": frd.avatar, "height": 80, "width": 80, "alt": "avatar bg", "loading": "lazy", "style": {
    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
    msMaskImage: "-ms-linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
    WebkitMaskImage: "-webkit-linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
  } })}</div></a>`) : renderTemplate`<p>Nothing here.</p>`}</div>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/links/FriendList.astro", void 0);

const friends = [{"id_name":"cf-links","desc":"Common links included in circle friends","link_list":[{"name":"Arthals' ink","intro":"所见高山远木，阔云流风；所幸岁月盈余，了无拘束","link":"https://arthals.ink/","avatar":"https://cdn.arthals.ink/Arthals.png"}]},{"id_name":"inactive-links","desc":"Inactive or rule-breaking friends","link_list":[]},{"id_name":"special-links","desc":"Other special links","link_list":[{"name":"Astro","intro":"The web framework for content-driven websites","link":"https://astro.build/","avatar":"https://avatars.githubusercontent.com/u/44914786?s=200&v=4"}]}];
const friendsData = {
  friends,
};

export { $$FriendList as $, friendsData as f };
