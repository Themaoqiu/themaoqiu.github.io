import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, r as renderComponent, a as renderTemplate, d as defineScriptVars } from '../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { $ as $$CommonPage } from '../chunks/CommonPage_C4EopBNr.mjs';
import { $ as $$Image, c as config } from '../chunks/server_Cz41rmUb.mjs';
import { b as $$Icon } from '../chunks/i18n_B1lOdjZF.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, project, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({

});
  const projectIconSet = {
    github: "github-circle",
    site: "earth",
    doc: "document",
    release: "package"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((className ?? "") + " astro-terhackg", "class")}${spreadAttributes(props)}> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 astro-terhackg"> ${project.map((project2, index) => {
    var imagePath = null;
    if (project2.image) {
      imagePath = "/src/assets/projects/" + project2.image;
      if (!images[imagePath])
        throw new Error(
          `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif,webp}"`
        );
    }
    return renderTemplate`<div class="project-card group relative overflow-hidden rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-border hover:bg-card/50 hover:shadow-xl hover:shadow-primary/5 astro-terhackg"${addAttribute(`animation-delay: ${index * 100}ms`, "style")}>  <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 astro-terhackg"></div>  ${imagePath && renderTemplate`<div class="absolute inset-0 overflow-hidden astro-terhackg"> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover opacity-0 blur-sm transition-all duration-700 group-hover:opacity-10 group-hover:blur-none group-hover:scale-110 astro-terhackg", "src": images[imagePath](), "alt": project2.name, "loading": "lazy" })} </div>`}  <div class="relative z-10 flex h-full min-h-[200px] flex-col justify-between p-5 sm:p-6 astro-terhackg">  <div class="flex-1 space-y-3 astro-terhackg"> <div class="flex items-start justify-between gap-4 astro-terhackg"> <a${addAttribute(project2.links.find((link) => link.type === "site")?.href || project2.links[0].href, "href")} target="_blank" class="group/title no-underline astro-terhackg"> <h3 class="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover/title:text-primary astro-terhackg"> ${project2.name} </h3> </a> ${imagePath && renderTemplate`<div class="flex-shrink-0 overflow-hidden rounded-lg border border-border/30 bg-background/60 p-1.5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-background/80 astro-terhackg"> ${renderComponent($$result, "Image", $$Image, { "class": "h-10 w-10 object-cover opacity-80 transition-opacity group-hover:opacity-100 astro-terhackg", "src": images[imagePath](), "alt": project2.name, "loading": "lazy" })} </div>`} </div> <p class="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80 astro-terhackg"> ${project2.description} </p> </div>  <div class="mt-4 flex items-center gap-2 border-t border-border/30 pt-3 astro-terhackg"> ${project2.links.map((link) => {
      const icon = projectIconSet[link.type];
      return renderTemplate`<a${addAttribute(link.href, "href")} class="group/link flex items-center gap-1.5 rounded-full border border-border/40 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/20 astro-terhackg"${addAttribute(link.type, "aria-label")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-3.5 transition-transform group-hover/link:scale-110 astro-terhackg", "name": icon })} <span class="capitalize astro-terhackg">${link.type}</span> </a>`;
    })} </div> </div>  <div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 astro-terhackg"></div> </div>`;
  })} </div> </div> `;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/projects/ProjectSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const headings = [
    { depth: 2, slug: "projects", text: "Projects" }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" data-astro-rerun>', "\n  const normalizePath = (path) => {\n    if (path === '/') return path\n    return path.endsWith('/') ? path.slice(0, -1) : path\n  }\n\n  const loadPageviewCount = async () => {\n    const pageview = await import(`${npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: normalizePath(window.location.pathname)\n    })\n  }\n\n  await loadPageviewCount()\n<\/script>"], ["", ' <script type="module" data-astro-rerun>', "\n  const normalizePath = (path) => {\n    if (path === '/') return path\n    return path.endsWith('/') ? path.slice(0, -1) : path\n  }\n\n  const loadPageviewCount = async () => {\n    const pageview = await import(\\`\\${npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: normalizePath(window.location.pathname)\n    })\n  }\n\n  await loadPageviewCount()\n<\/script>"])), renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "info": { slug: "/projects", hideComment: true } }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<h2 id="projects" class="mb-8 text-2xl font-semibold">Projects</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "\u9879\u76EE 1",
      description: "\u9879\u76EE\u63CF\u8FF0 1\u3002\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u4ECB\u7ECD\u9879\u76EE\u7684\u4E3B\u8981\u529F\u80FD\u3002",
      image: "lumina.webp",
      links: [{ type: "site", href: "#" }]
    },
    {
      name: "\u9879\u76EE 2",
      description: "\u9879\u76EE\u63CF\u8FF0 2\u3002\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u4ECB\u7ECD\u9879\u76EE\u7684\u4E3B\u8981\u529F\u80FD\u3002",
      image: "byddl.webp",
      links: [
        { type: "site", href: "#" },
        { type: "github", href: "#" }
      ]
    }
  ] })}  ` }), defineScriptVars({ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/projects/index.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
