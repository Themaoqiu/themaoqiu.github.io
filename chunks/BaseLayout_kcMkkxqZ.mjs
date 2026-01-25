import { b as createAstro, c as createComponent, a as renderTemplate, f as renderScript, e as addAttribute, r as renderComponent, F as Fragment, m as maybeRenderHead, k as defineStyleVars, g as renderSlot, n as renderHead } from './astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { c as config, g as getBlogCollection, d as getUniqueCategories } from './server_Cz41rmUb.mjs';
import { b as $$Icon, j as getRelativeLocaleUrl } from './i18n_B1lOdjZF.mjs';
/* empty css                        */
import 'clsx';

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$4 = createAstro("https://xingjianwang.github.io/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const siteTitle = `${title} ${config.titleDelimiter} ${config.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/images/social-card.webp", Astro2.url).href;
  return renderTemplate(
    _a$3 || (_a$3 = __template$3(['<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>', '</title><link rel="icon" href="/favicon/bluecat.svg" type="image/svg+xml"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.ico"><link rel="manifest" href="/favicon/site.webmanifest"><link rel="preload" href="/fonts/Satoshi-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/Satoshi-VariableItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="canonical"', "><meta", ' name="title"><meta', ' name="description"><meta', ' name="author"><meta content="" name="theme-color"><meta', ' property="og:type"><meta', ' property="og:title"><meta', ' property="og:description"><meta', ' property="og:url"><meta', ' property="og:site_name"><meta', ' property="og:locale"><meta', ' property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">', '<meta content="summary_large_image" property="twitter:card"><meta', ' property="twitter:url"><meta', ' property="twitter:title"><meta', ' property="twitter:description"><meta', ' property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link rel="alternate" type="application/rss+xml"', "", "><meta", " name=\"generator\"><!-- <ClientRouter /> --><!-- <script is:inline>\n  const style = document.createElement('style')\n  style.textContent = `* { transition: none !important; }`\n  document.addEventListener('astro:after-swap', () => {\n    document.head.appendChild(style)\n    setTimeout(() => {\n      style.remove()\n    }, 100)\n  })\n<\/script> -->", ""], ['<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>', '</title><link rel="icon" href="/favicon/bluecat.svg" type="image/svg+xml"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.ico"><link rel="manifest" href="/favicon/site.webmanifest"><link rel="preload" href="/fonts/Satoshi-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/Satoshi-VariableItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="canonical"', "><meta", ' name="title"><meta', ' name="description"><meta', ' name="author"><meta content="" name="theme-color"><meta', ' property="og:type"><meta', ' property="og:title"><meta', ' property="og:description"><meta', ' property="og:url"><meta', ' property="og:site_name"><meta', ' property="og:locale"><meta', ' property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">', '<meta content="summary_large_image" property="twitter:card"><meta', ' property="twitter:url"><meta', ' property="twitter:title"><meta', ' property="twitter:description"><meta', ' property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link rel="alternate" type="application/rss+xml"', "", "><meta", " name=\"generator\"><!-- <ClientRouter /> --><!-- <script is:inline>\n  const style = document.createElement('style')\n  style.textContent = \\`* { transition: none !important; }\\`\n  document.addEventListener('astro:after-swap', () => {\n    document.head.appendChild(style)\n    setTimeout(() => {\n      style.remove()\n    }, 100)\n  })\n<\/script> -->", ""])),
    siteTitle,
    addAttribute(canonicalURL, "href"),
    addAttribute(siteTitle, "content"),
    addAttribute(description, "content"),
    addAttribute(config.author, "content"),
    addAttribute(articleDate ? "article" : "website", "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(config.title, "content"),
    addAttribute(config.locale.attrs, "content"),
    addAttribute(socialImageURL, "content"),
    articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(config.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`,
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    addAttribute(config.title, "title"),
    addAttribute(`${Astro2.site}rss.xml`, "href"),
    addAttribute(Astro2.generator, "content"),
    /* User script*/
    renderTemplate`${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}`
  );
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/BaseHead.astro", void 0);

const $$Astro$3 = createAstro("https://xingjianwang.github.io/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const footerConf = config.footer || {};
  const socialLinks = {
    ...footerConf.social || {},
    rss: "/rss.xml"
  };
  return renderTemplate`${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/basic/Footer.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<footer class="mx-auto mb-5 mt-16"> <div class="border-t border-border pt-5"> <div class="flex items-center gap-y-3 max-sm:flex-col sm:justify-between sm:gap-y-0"> <div class="flex items-center gap-x-4 gap-y-2 text-muted-foreground max-sm:flex-col [&_a:hover]:text-primary [&_a]:text-foreground"> ${footerConf.registration && footerConf.registration.website && renderTemplate`<a id="icp-registration" class="hidden text-xs"${addAttribute(footerConf.registration.website, "data-website")} style="color:hsl(var(--muted-foreground)/var(--tw-text-opacity,1))"${addAttribute(footerConf.registration.url, "href")} target="_blank"> ${footerConf.registration.text} </a>`} <span>
© ${year} ${config.author} &
<a href="/terms/list">Site policy</a> </span> ${footerConf.credits && renderTemplate`<span class="text-muted-foreground [&_a:hover]:text-primary [&_a]:text-foreground"> <a href="https://github.com/withastro/astro" target="_blank">
Astro
</a> 
theme powered
</span>`} </div>  <div class="flex items-center gap-x-4"> ${Object.entries(socialLinks).map(([platform, url]) => renderTemplate`<a class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"${addAttribute(url, "href")}${addAttribute(platform, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": platform })} </a>`)} </div> </div> </div> </footer>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/basic/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://xingjianwang.github.io/");
const $$LanguageSwitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageSwitch;
  const currentLocale = Astro2.currentLocale || "zh";
  const languages = {
    zh: "\u4E2D\u6587",
    en: "English"
  };
  const safeCurrentLocale = currentLocale === "zh" || currentLocale === "en" ? currentLocale : "zh";
  const targetLocale = safeCurrentLocale === "zh" ? "en" : "zh";
  const currentPath = Astro2.url.pathname;
  let pagePath = "";
  if (safeCurrentLocale === "en") {
    if (currentPath === "/en") {
      pagePath = "/";
    } else if (currentPath.startsWith("/en/")) {
      pagePath = currentPath.slice(3) || "/";
    } else {
      pagePath = currentPath;
    }
  } else if (safeCurrentLocale === "zh") {
    pagePath = currentPath;
  } else {
    pagePath = currentPath;
  }
  let targetUrl = getRelativeLocaleUrl(targetLocale, pagePath);
  if (targetUrl !== "/" && targetUrl.endsWith("/")) {
    targetUrl = targetUrl.slice(0, -1);
  }
  return renderTemplate`${maybeRenderHead()}<button id="language-switch-btn" class="box-content rounded-md border p-1.5 transition-colors hover:bg-border md:group-[.not-top]:rounded-xl"${addAttribute(`\u5207\u6362\u5230${languages[targetLocale]}`, "title")}${addAttribute(targetUrl, "data-target-url")}> <span class="sr-only">${`\u5207\u6362\u5230${languages[targetLocale]}`}</span> <div class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "earth", "class": "size-4" })} <span class="text-xs font-medium">${languages[safeCurrentLocale]}</span> </div> </button> ${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/user/LanguageSwitch.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/user/LanguageSwitch.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$1 = createAstro("https://xingjianwang.github.io/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const allCollections = await getBlogCollection();
  const allCategories = getUniqueCategories(allCollections);
  const categoryMap = {
    "tech": "Technical",
    "daily": "Daily Life",
    "research": "Research",
    "journal": "Month Journal"
  };
  const categoryOrder = ["research", "tech", "daily", "journal"];
  const categories = categoryOrder.filter((cat) => allCategories.includes(cat)).map((cat) => ({ slug: cat, name: categoryMap[cat] }));
  function getLocalizedUrl(locale, path) {
    let url = getRelativeLocaleUrl(locale || "zh", path);
    if (url !== "/" && url.endsWith("/")) {
      url = url.slice(0, -1);
    }
    return url;
  }
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n  const toggleDarkModeElement = document.getElementById('toggleDarkMode')\n  if (toggleDarkModeElement) {\n    toggleDarkModeElement.dataset.theme = localStorage.getItem('theme') || 'system'\n  }\n<\/script> ", " "])), renderComponent($$result, "header-component", "header-component", { "class": "group sticky top-4 z-30 mb-12 flex items-center justify-between rounded-xl border border-transparent max-sm:py-1 sm:rounded-2xl [&.not-top]:border-border [&.not-top]:bg-background/60 [&.not-top]:px-1.5 [&.not-top]:backdrop-blur-md dark:[&.not-top]:bg-muted/60 astro-dpuuw7tv" }, { "default": () => renderTemplate` <!-- <div
      class='absolute -left-4 -top-8 -z-10 box-content hidden h-20 w-[calc(100%+2rem)] !duration-0 max-sm:group-[.expanded]:block max-sm:group-[.expanded.not-top]:hidden max-sm:group-[.expanded]:bg-white dark:max-sm:group-[.expanded]:bg-muted'
    >
    </div> --> ${maybeRenderHead()}<a class="z-30 text-xl font-semibold group-[.not-top]:ms-2 sm:group-[.not-top]:ms-3 astro-dpuuw7tv" style="transition:margin-inline 0.3s"${addAttribute(getLocalizedUrl(Astro2.currentLocale, "/"), "href")} aria-label="Brand">${config.title}</a> <div class="flex items-center gap-x-2 astro-dpuuw7tv">  <div id="headerExpandConetent" class="end-0 start-0 top-12 grid border border-transparent group-[.not-top]:rounded-xl group-[.expanded]:opacity-100 dark:group-[.expanded.not-top]:bg-muted/60 max-md:absolute max-md:opacity-0 max-md:pointer-events-none max-md:group-[.expanded]:pointer-events-auto max-md:group-[.not-top]:border-border max-md:group-[.expanded.not-top]:bg-background/60 max-md:group-[.expanded.not-top]:backdrop-blur-md max-md:group-[.not-top]:px-4 max-md:group-[.not-top]:py-2 md:grid-rows-1 astro-dpuuw7tv"> <div class="flex flex-col items-center justify-center md:flex-row astro-dpuuw7tv"> ${(config.header?.menu || []).map((item) => {
    const isBlogMenu = item.link === "/blog/research" || item.title === "Blog";
    if (isBlogMenu && categories.length > 0) {
      return renderTemplate`<div class="menu-item-with-dropdown relative w-full md:w-fit astro-dpuuw7tv" style="position: relative;"> <a${addAttribute(getLocalizedUrl(Astro2.currentLocale, item.link), "href")} class="blog-menu-link flex w-full flex-none items-center justify-end py-2 font-medium transition-none hover:text-primary md:px-3 md:justify-center astro-dpuuw7tv" aria-label="Nav menu item"> ${item.title} ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-down", "class": "chevron-icon ml-1 size-4 transition-transform astro-dpuuw7tv" })} </a>  <div class="dropdown-menu absolute right-0 top-full mt-0 w-48 rounded-xl border border-border bg-background/80 shadow-lg backdrop-blur-md dark:bg-muted/80 md:left-0 md:right-auto astro-dpuuw7tv" style="z-index: 9999;"> <div class="py-1 astro-dpuuw7tv"> ${categories.map((category) => renderTemplate`<a${addAttribute(getLocalizedUrl(Astro2.currentLocale, `/blog/${category.slug}`), "href")} class="category-link block px-4 py-2 text-sm transition-colors hover:bg-background/60 hover:text-primary dark:hover:bg-muted/60 astro-dpuuw7tv"> ${category.name} </a>`)} </div> </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(getLocalizedUrl(Astro2.currentLocale, item.link), "href")} class="w-full flex-none grow py-2 text-right font-medium transition-none hover:text-primary md:w-fit md:px-3 astro-dpuuw7tv" aria-label="Nav menu item"> ${item.title} </a>`;
  })} <!-- <a class='w-full flex-none grow py-2 text-right font-medium transition-none hover:text-primary md:w-fit md:px-3' href='https://www.travellings.cn/go.html' title='Travellings' target='_blank' rel='noopener noreferrer'>
          <span class='sr-only'>Travellings</span>
          <span class='text-xl'>🚇</span>
        </a> --> <div class="flex w-full grow flex-row justify-end gap-x-3 md:w-fit md:gap-x-5 astro-dpuuw7tv"> <a class="px-1 py-2 transition-none md:px-2 astro-dpuuw7tv"${addAttribute(getLocalizedUrl(Astro2.currentLocale, "/search"), "href")} title="Search"> <span class="sr-only astro-dpuuw7tv">Search</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "size-5 astro-dpuuw7tv" })} </a> </div> </div> </div> <!-- buttons --> <div class="z-30 flex gap-x-4 group-[.not-top]:gap-x-2 astro-dpuuw7tv" style="transition:gap 0.3s"> ${renderComponent($$result, "LanguageSwitch", $$LanguageSwitch, { "class": "astro-dpuuw7tv" })} <button id="toggleDarkMode" class="group/dark box-content size-5 rounded-md border p-1.5 transition-colors hover:bg-border md:group-[.not-top]:rounded-xl astro-dpuuw7tv"> <span class="sr-only astro-dpuuw7tv">Dark Theme</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "system size-5 group-hover/dark:text-primary astro-dpuuw7tv", "name": "computer" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "light hidden size-5 group-hover/dark:text-primary astro-dpuuw7tv", "name": "sun" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "dark hidden size-5 group-hover/dark:text-primary astro-dpuuw7tv", "name": "moon" })} </button> <button id="toggleMenu" class="rounded-md border p-1.5 transition-colors hover:bg-border md:hidden md:group-[.not-top]:rounded-xl astro-dpuuw7tv"> <span class="sr-only astro-dpuuw7tv">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5 astro-dpuuw7tv", "name": "menu" })} </button> </div> </div> ` }), renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/basic/Header.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/basic/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
  function simpleSetTheme() {
    let theme = localStorage.getItem('theme')
    // If undefined or 'system', get from system
    if (!theme || theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0B0B10' : '#FCFCFD')
  }
  simpleSetTheme()
  document.addEventListener('astro:page-load', () => simpleSetTheme())
<\/script>`, ""])), renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/basic/ThemeProvider.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/basic/ThemeProvider.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { articleDate, description = config.description, ogImage, title },
    highlightColor
  } = Astro2.props;
  const currentLocale = Astro2.currentLocale || "zh";
  const langAttr = currentLocale === "en" ? "en" : "zh";
  const $$definedVars = defineStyleVars([{ highlightColor }]);
  return renderTemplate(_a || (_a = __template(["<html", ' class="astro-37fxchfa"', "> <head>", "", `<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-23SWRT8LTH"><\/script><script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'G-23SWRT8LTH')
    <\/script>`, '</head> <body class="flex justify-center bg-background astro-37fxchfa"', "> <!-- <div\n      id='gradient-background'\n      class='pointer-events-none fixed h-screen w-screen blur-2xl transition-opacity duration-1000'\n    >\n      <div\n        class='absolute right-[25%] top-[-90%] h-full w-[75%] rounded-full bg-gradient-to-b from-blue-300 via-pink-300 to-transparent opacity-40 dark:opacity-25'\n      >\n      </div>\n      <div\n        class='absolute left-[25%] top-[-90%] h-full w-[75%] rounded-full bg-gradient-to-b from-blue-300 via-pink-300 to-transparent opacity-40 dark:opacity-25'\n      >\n      </div>\n      <div\n        class='absolute right-[25%] top-[-85%] h-full w-[55%] rounded-full bg-gradient-to-b from-purple-300 via-blue-300 to-transparent opacity-40 dark:opacity-25'\n      >\n      </div>\n      <div\n        class='absolute left-[25%] top-[-85%] h-full w-[55%] rounded-full bg-gradient-to-b from-indigo-300 via-orange-300 to-transparent opacity-40 dark:opacity-25'\n      >\n      </div>\n      <div\n        class='absolute left-[-25%] top-[-75%] h-full w-[65%] rounded-full bg-gradient-to-b from-blue-300 via-pink-300 to-transparent opacity-30 dark:opacity-20'\n      >\n      </div>\n      <div\n        class='absolute right-[-25%] top-[-75%] h-full w-[65%] rounded-full bg-gradient-to-b from-purple-300 via-blue-300 to-transparent opacity-30 dark:opacity-20'\n      >\n      </div>\n      <div\n        class='absolute left-[-30%] top-[-85%] h-full w-[85%] rounded-full bg-gradient-to-b from-indigo-300 via-orange-300 to-transparent opacity-60 dark:opacity-30'\n      >\n      </div>\n      <div\n        class='absolute right-[-30%] top-[-85%] h-full w-[85%] rounded-full bg-gradient-to-b from-orange-300 via-indigo-300 to-transparent opacity-60 dark:opacity-30'\n      >\n      </div>\n    </div> --> ", ' <div class="w-full max-w-[70rem] px-4 sm:px-7 lg:px-10 astro-37fxchfa"', "> ", " ", " ", " </div>   ", " <!-- <script>\n      document.addEventListener('DOMContentLoaded', () => {\n        const originalTitle = document.title\n        document.addEventListener('visibilitychange', () => {\n          if (document.hidden) {\n            document.title = '\u0E05^\u2022\uFECC\u2022^\u0E05 \u4E3B\u4EBA\u5FEB\u56DE\u6765\u5427~'\n          } else {\n            document.title = originalTitle\n          }\n        })\n        window.addEventListener('blur', () => {\n          document.title = '\u0E05^\u2022\uFECC\u2022^\u0E05 \u4E3B\u4EBA\u5FEB\u56DE\u6765\u5427~'\n        })\n        window.addEventListener('focus', () => {\n          document.title = originalTitle\n        })\n      })\n    <\/script> --> ", " ", " </body> </html>"])), addAttribute(langAttr, "lang"), addAttribute($$definedVars, "style"), renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title, "class": "astro-37fxchfa" }), renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-37fxchfa" }), renderHead(), addAttribute($$definedVars, "style"), highlightColor && renderTemplate`<div id="highlight-gradient" class="pointer-events-none absolute start-0 top-0 z-0 h-screen w-full opacity-25 astro-37fxchfa"${addAttribute(`${`background-image:linear-gradient(${highlightColor},transparent)`}; ${$$definedVars}`, "style")}></div>`, addAttribute($$definedVars, "style"), renderComponent($$result, "Header", $$Header, { "class": "astro-37fxchfa" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "class": "astro-37fxchfa" }), renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/layouts/BaseLayout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/layouts/BaseLayout.astro?astro&type=script&index=2&lang.ts"));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
