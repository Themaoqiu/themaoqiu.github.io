import { c as createComponent, a as renderTemplate } from '../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- <PageLayout title='Projects' {headings} info={{ slug: '/projects', hideComment: true }}> --><!-- Sponsorship section removed --><!-- <h2 id='projects'>Projects</h2>\n  <ProjectSection\n    project={[\n      {\n        name: 'Project 1',\n        description: 'Project description 1. You can introduce the main features here.',\n        image: 'lumina.webp',\n        links: [{ type: 'site', href: '#' }]\n      },\n      {\n        name: 'Project 2',\n        description: 'Project description 2. You can introduce the main features here.',\n        image: 'byddl.webp',\n        links: [\n          { type: 'site', href: '#' },\n          { type: 'github', href: '#' }\n        ]\n      }\n    ]}\n  /> --><!-- Sponsorship section removed --><!-- </PageLayout>\n\n<script\n  is:inline\n  type='module'\n  data-astro-rerun\n  define:vars={{ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }}\n>\n  const normalizePath = (path) => {\n    if (path === '/') return path\n    return path.endsWith('/') ? path.slice(0, -1) : path\n  }\n\n  const loadPageviewCount = async () => {\n    const pageview = await import(`${npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: normalizePath(window.location.pathname)\n    })\n  }\n\n  await loadPageviewCount()\n<\/script> -->"], ["<!-- <PageLayout title='Projects' {headings} info={{ slug: '/projects', hideComment: true }}> --><!-- Sponsorship section removed --><!-- <h2 id='projects'>Projects</h2>\n  <ProjectSection\n    project={[\n      {\n        name: 'Project 1',\n        description: 'Project description 1. You can introduce the main features here.',\n        image: 'lumina.webp',\n        links: [{ type: 'site', href: '#' }]\n      },\n      {\n        name: 'Project 2',\n        description: 'Project description 2. You can introduce the main features here.',\n        image: 'byddl.webp',\n        links: [\n          { type: 'site', href: '#' },\n          { type: 'github', href: '#' }\n        ]\n      }\n    ]}\n  /> --><!-- Sponsorship section removed --><!-- </PageLayout>\n\n<script\n  is:inline\n  type='module'\n  data-astro-rerun\n  define:vars={{ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }}\n>\n  const normalizePath = (path) => {\n    if (path === '/') return path\n    return path.endsWith('/') ? path.slice(0, -1) : path\n  }\n\n  const loadPageviewCount = async () => {\n    const pageview = await import(\\`\\${npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: normalizePath(window.location.pathname)\n    })\n  }\n\n  await loadPageviewCount()\n<\/script> -->"])));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/projects/index.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/projects/index.astro";
const $$url = "/en/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
