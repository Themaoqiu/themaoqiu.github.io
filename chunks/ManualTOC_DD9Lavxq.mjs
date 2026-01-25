import { b as createAstro, c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute, d as defineScriptVars, s as spreadAttributes, g as renderSlot } from './astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { f as cn, b as $$Icon, k as clsx, j as getRelativeLocaleUrl } from './i18n_B1lOdjZF.mjs';
/* empty css                                                                  */
import { $ as $$Image, c as config } from './server_Cz41rmUb.mjs';
import { parse } from 'node-html-parser';
/* empty css                                                                   */
import 'clsx';
import sharp from 'sharp';
/* empty css                                                                  */
/* empty css                          */
/* empty css                                                               */
import './ManualTOC_astro_astro_type_style_index_0_lang.3084df31_l0sNRNKZ.mjs';

const $$Astro$a = createAstro("https://xingjianwang.github.io/");
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Quote;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "quote-component", "quote-component", { "class": cn("not-prose inline-block", className) }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row items-center gap-x-3 rounded-full border border-border px-4 py-2 text-sm shadow-sm"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p id="quote-sentence" class="font-medium text-muted-foreground">Loading...</p> </div> ` })} ${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/Quote.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/Quote.astro", void 0);

const $$Astro$9 = createAstro("https://xingjianwang.github.io/");
const $$GithubCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GithubCard;
  const { repo: repoRaw } = Astro2.props;
  const repo = repoRaw.replace(/^https:\/\/github\.com\//, "");
  const [owner, repoName] = repo.split("/");
  return renderTemplate`${renderComponent($$result, "github-card", "github-card", { "class": "not-prose loading astro-c2irgjnt", "data-repo": repo }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`https://github.com/${repo}`, "href")} target="_blank" class="group block flex flex-col gap-y-2 rounded-xl border border-border px-5 py-4 transition-colors hover:bg-muted hover:text-muted-foreground astro-c2irgjnt"> <div class="flex items-center justify-between astro-c2irgjnt"> <div class="flex items-center gap-x-2 text-foreground group-hover:text-primary astro-c2irgjnt"> <div id="gh-avatar" class="gh-text me-2 size-8 bg-cover astro-c2irgjnt" style="border-radius:999px"></div> <span class="text-lg transition-colors astro-c2irgjnt">${owner}</span> <span class="text-muted-foreground astro-c2irgjnt">/</span> <span class="text-lg font-bold transition-colors astro-c2irgjnt">${repoName}</span> </div> <div class="rounded-full bg-primary-foreground p-1 astro-c2irgjnt"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "astro-c2irgjnt" })} </div> </div> <p id="gh-description" class="gh-text astro-c2irgjnt">Waiting for api.github.com...</p> <div class="flex items-center justify-between astro-c2irgjnt"> <div class="gh-text flex flex-wrap items-center gap-x-5 astro-c2irgjnt"> <div class="flex items-center gap-x-2 astro-c2irgjnt">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-c2irgjnt"><g fill="none" fill-rule="evenodd" class="astro-c2irgjnt"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-c2irgjnt"></path><path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176zM12 4.987L9.687 8.959a1.25 1.25 0 0 1-.816.592l-4.492.973l3.062 3.427c.234.262.347.61.312.959l-.463 4.573l4.206-1.854a1.25 1.25 0 0 1 1.008 0l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .311-.959l3.063-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592z" class="astro-c2irgjnt"></path></g></svg> <span id="gh-stars" class="leading-tight astro-c2irgjnt">???</span> </div> <div class="flex items-center gap-x-2 astro-c2irgjnt">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-c2irgjnt"><g fill="none" class="astro-c2irgjnt"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-c2irgjnt"></path><path fill="currentColor" d="M18 3a3 3 0 0 1 1 5.83V9a4 4 0 0 1-4 4H9a2 2 0 0 0-2 2v.17a3.001 3.001 0 1 1-2 0V8.83a3.001 3.001 0 1 1 2 0v2.705A4 4 0 0 1 9 11h6a2 2 0 0 0 2-2v-.17A3.001 3.001 0 0 1 18 3M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" class="astro-c2irgjnt"></path></g></svg> <span id="gh-forks" class="leading-tight astro-c2irgjnt">???</span> </div> <div class="flex items-center gap-x-2 astro-c2irgjnt">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-c2irgjnt"><g fill="none" fill-rule="evenodd" class="astro-c2irgjnt"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-c2irgjnt"></path><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v1h.764a2 2 0 0 1 .894.211L16.236 6H20a1 1 0 1 1 0 2h-.382l2.276 4.553c.07.139.106.292.106.447a4 4 0 0 1-8 0c0-.155.036-.308.106-.447L16.382 8h-.146a2 2 0 0 1-.894-.211L13.764 7H13v12h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V7h-.764l-1.578.789A2 2 0 0 1 7.764 8h-.146l2.276 4.553A1 1 0 0 1 10 13a4 4 0 0 1-8 0a1 1 0 0 1 .106-.447L4.382 8H4a1 1 0 0 1 0-2h3.764l1.578-.789A2 2 0 0 1 10.236 5H11V4a1 1 0 0 1 1-1M6 9.236l-1.989 3.977a2 2 0 0 0 3.978 0zm12 0l-1.989 3.977a2 2 0 0 0 3.955.157l.023-.156z" class="astro-c2irgjnt"></path></g></svg> <span id="gh-license" class="leading-tight astro-c2irgjnt">???</span> </div> </div> <span id="gh-language" class="gh-text leading-tight astro-c2irgjnt">?????</span> </div> </a> ` })}  ${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/GithubCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/GithubCard.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey !== void 0) this.delete(firstKey);
    }
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(async (res) => parse.parse(await res.text()));
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(`Failed to fetch ${url}`, `Error ${response.status}: ${response.statusText}`)
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error] astro-embed`, e?.message ?? e, `URL: ${url}`));
      return void 0;
    }
  };
}
const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro$8 = createAstro("https://xingjianwang.github.io/");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { href, hideMedia = false, zoomable = true } = Astro2.props;
  const meta = await parseOpenGraph(href);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<div class="not-prose link-preview-container my-2 flex justify-center sm:my-4 astro-wi47756d"><article${addAttribute([[
    "link-preview flex flex-col overflow-hidden rounded-lg border max-sm:max-w-sm sm:flex-row",
    {
      "link-preview--has-video max-sm:max-w-none sm:flex-col": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "astro-wi47756d"], "class:list")}>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" class="astro-wi47756d"><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} class="astro-wi47756d"></video>` : meta.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": (cn("m-0 sm:max-w-60", zoomable && "zoomable") ?? "") + " astro-wi47756d", "src": meta.image, "alt": meta.imageAlt || "", "width": "1200", "height": "630" })}` : null}<a class="group font-normal text-muted-foreground no-underline hover:text-muted-foreground astro-wi47756d"${addAttribute(href, "href")} target="_blank"><div class="link-preview__content flex h-full flex-col gap-y-1 px-3 py-2 transition-colors group-hover:bg-muted sm:px-5 sm:py-4 astro-wi47756d"><header class="line-clamp-1 font-medium text-foreground transition-colors group-hover:text-primary astro-wi47756d">${meta.title}</header><p class="link-preview__description line-clamp-2 astro-wi47756d">${meta.description}${" "}${domain && renderTemplate`<small class="link-preview__domain ml-1 astro-wi47756d">(${domain})</small>`}</p></div></a></article></div>` : renderTemplate`<div class="link-preview link-preview--no-metadata astro-wi47756d"><a${addAttribute(href, "href")} target="_blank" class="astro-wi47756d">${href}</a></div>`}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/LinkPreview.astro", void 0);

const $$Astro$7 = createAstro("https://xingjianwang.github.io/");
const $$ImageGroup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ImageGroup;
  const { images, gap = 12, aspectRatio: commonAR } = Astro2.props;
  const items = await Promise.all(
    images.map(async (img) => {
      const isString = typeof img === "string";
      const src = isString ? img : img.src;
      const alt = isString ? "" : img.alt;
      let ar = isString ? commonAR : img.aspectRatio || commonAR;
      if (!ar && src.startsWith("http")) {
        try {
          const response = await fetch(src);
          const buffer = await response.arrayBuffer();
          const metadata = await sharp(Buffer.from(buffer)).metadata();
          if (metadata.width && metadata.height) {
            ar = metadata.width / metadata.height;
          }
        } catch (e) {
          console.warn(`[ImageGroup] Failed to detect aspect ratio for ${src}`, e);
        }
      }
      return {
        src,
        alt,
        aspectRatio: ar || 1
        // Fallback to 1 (square) if detection fails
      };
    })
  );
  return renderTemplate`${maybeRenderHead()}<div class="image-group flex w-full"${addAttribute(`gap: ${gap}px`, "style")}> ${items.map((img) => {
    const flexStyle = `flex: ${img.aspectRatio} 1 0%`;
    return renderTemplate`<div${addAttribute(flexStyle, "style")} class="relative flex items-center justify-center overflow-hidden"> <img${addAttribute(img.src, "src")}${addAttribute(img.alt || "", "alt")} class="block w-full h-auto"${addAttribute({ aspectRatio: img.aspectRatio }, "style")}> </div>`;
  })} </div>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/ImageGroup.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://xingjianwang.github.io/");
const $$QRCode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$QRCode;
  const { content, class: className, ...props } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="qrcode-container"', "", "></div> <script", "><\/script> <script>(function(){", "\n  const renderContent = content ?? window.location.href\n  // Load qrcode\n  function loadqrcode(qrcodeContainer) {\n    if (!qrcodeContainer) throw new Error('qrcode container not found')\n    if (qrcodeContainer.innerHTML !== '') return\n    new QRCode(qrcodeContainer, renderContent)\n  }\n  const qrcodeContainer = document.getElementById('qrcode-container')\n  if (!qrcodeContainer) throw new Error('qrcode container not found')\n  loadqrcode(qrcodeContainer)\n})();<\/script>"])), maybeRenderHead(), addAttribute(className, "class"), spreadAttributes(props), addAttribute(`${config.npmCDN}/qrcodejs/qrcode.min.js`, "src"), defineScriptVars({ content }));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/QRCode.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://xingjianwang.github.io/");
const $$MediumZoom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MediumZoom;
  const { selector = config.integ.mediumZoom.selector, background = "hsl(var(--background) / 0.8)" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script src="https://cdn.jsdelivr.net/npm/medium-zoom@1/dist/medium-zoom.min.js"><\/script> <script>(function(){', "\n  if (typeof mediumZoom !== 'undefined') {\n    mediumZoom(selector, { background })\n  }\n})();<\/script> "])), defineScriptVars({ selector, background }));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/MediumZoom.astro", void 0);

const $$Astro$4 = createAstro("https://xingjianwang.github.io/");
const $$Comment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Comment;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "comment-component", "comment-component", { "class": "astro-w2uxdene" }, { "default": () => renderTemplate`${maybeRenderHead()}<div id="waline"${addAttribute((cn("not-prose", className) ?? "") + " astro-w2uxdene", "class")}>
Comment seems to stuck. Try to refresh?✨
</div>` })}`}${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/Comment.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/Comment.astro", void 0);

const $$Astro$3 = createAstro("https://xingjianwang.github.io/");
const $$ArxivRating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArxivRating;
  const { id, tldr, rank, url = id } = Astro2.props;
  const isArxivId = /^\d{4}\.\d{4,5}$/.test(id);
  const href = isArxivId ? `https://arxiv.org/abs/${id}` : url;
  const hjfy_href = isArxivId ? `https://hjfy.top/arxiv/${id}` : url;
  const processed_id = isArxivId ? id : url.split("/").pop();
  return renderTemplate`${maybeRenderHead()}<div class="rounded-xl border p-4"> <div class="inline-flex items-stretch gap-2 rounded-full border pe-3"> <span class="flex shrink-0 items-center rounded-full bg-primary-foreground px-2.5 text-sm text-primary">
Arxiv ID
</span> <samp class="break-all text-foreground"> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"> ${processed_id} </a> </samp> </div> ${isArxivId && renderTemplate`<div class="inline-flex items-stretch gap-2 rounded-full border pe-3"> <span class="flex shrink-0 items-center rounded-full bg-blue-100 px-2.5 text-sm text-blue-700">
幻觉翻译
</span> <samp class="break-all text-foreground"> <a${addAttribute(hjfy_href, "href")} target="_blank" rel="noopener noreferrer"> ${id} </a> </samp> </div>`} <p class="flex items-center gap-x-3"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"> <g fill="none"> <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path> <path fill="currentColor" d="M13 20a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM12 2c4.41 0 8 3.543 8 7.933c0 3.006-1.522 5.196-2.78 6.494l-.284.283l-.27.252l-.252.22l-.33.27l-.328.244c-.196.138-.34.329-.466.535l-.145.251l-.141.252c-.24.412-.518.766-1.111.766h-3.786c-.593 0-.871-.354-1.11-.766l-.213-.378c-.145-.253-.305-.494-.54-.66l-.232-.171l-.199-.155l-.227-.188l-.252-.22l-.27-.252l-.285-.283C5.522 15.129 4 12.939 4 9.933C4 5.543 7.59 2 12 2m0 2C8.677 4 6 6.665 6 9.933c0 2.624 1.533 4.494 2.593 5.471l.245.218l.22.182l.27.208l.072.052c.315.222.549.531.762.854l.373.582h2.93l.373-.582c.213-.323.447-.632.762-.854l.243-.182l.206-.165l.233-.2C16.342 14.576 18 12.662 18 9.933C18 6.665 15.323 4 12 4m.293 2.293a1 1 0 0 1 1.497 1.32l-.083.094L12.414 9l1.286 1.286c.364.364.392.937.084 1.333l-.084.095l-1.993 1.993a1 1 0 0 1-1.497-1.32l.083-.094L11.586 11L10.3 9.714a1.01 1.01 0 0 1-.084-1.333l.084-.095z"></path> </g> </svg> ${tldr} </p> <div class="function-table-content"> ${renderSlot($$result, $$slots["default"])} </div> <div class="inline-flex items-center gap-x-1 rounded-full border bg-muted px-3 [&_svg]:text-foreground">
推荐指数：
${// print stars (count rank)
  Array.from({ length: rank }, (_) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"> <g fill="none" fill-rule="evenodd"> <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path> <path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176zM12 4.987L9.687 8.959a1.25 1.25 0 0 1-.816.592l-4.492.973l3.062 3.427c.234.262.347.61.312.959l-.463 4.573l4.206-1.854a1.25 1.25 0 0 1 1.008 0l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .311-.959l3.063-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592z"></path> </g> </svg>`)} </div> </div>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/ArxivRating.astro", void 0);

const $$Astro$2 = createAstro("https://xingjianwang.github.io/");
const $$RatingCriteria = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RatingCriteria;
  const { lang = "zh" } = Astro2.props;
  const criteria = {
    zh: {
      title: "\u8BC4\u5206\u51C6\u5219",
      levels: [
        { star: 1, desc: "\u5E73\u5E73\u65E0\u5947\u7684\u8BBA\u6587" },
        { star: 2, desc: "\u6B63\u5E38\u7684\u8BBA\u6587" },
        { star: 3, desc: "\u5E7F\u53D7\u8BA4\u53EF\u6216\u8005\u8BA9\u6211\u773C\u524D\u4E00\u4EAE\u7684\u8BBA\u6587" },
        { star: 4, desc: "\u5960\u57FA\u6027\u7684\u8BBA\u6587\u6216\u8005\u6211\u975E\u5E38\u559C\u6B22\u7684\u8BBA\u6587" },
        { star: 5, desc: "\u6BCB\u5EB8\u7F6E\u7591\u7684\u6700\u68D2\u7684\u8BBA\u6587" }
      ]
    },
    en: {
      title: "Rating Criteria",
      levels: [
        { star: 1, desc: "Mediocre paper" },
        { star: 2, desc: "Regular paper" },
        { star: 3, desc: "Widely recognized or eye-catching paper" },
        { star: 4, desc: "Foundational paper or one I really love" },
        { star: 5, desc: "Undoubtedly the best paper" }
      ]
    }
  };
  const currentCriteria = criteria[lang] || criteria.zh;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-xl border p-4"> <div class="inline-flex items-stretch gap-2 rounded-full border mb-4"> <span class="flex shrink-0 items-center rounded-full bg-primary-foreground px-2.5 text-sm text-primary"> ${currentCriteria.title} </span> </div> <div class="space-y-3"> ${currentCriteria.levels.map((level) => renderTemplate`<div class="flex items-center gap-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"> <div class="inline-flex items-center gap-x-1"> ${// 渲染星星
  Array.from({ length: level.star }, (_, i) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="text-yellow-500"${addAttribute(i, "data-star")}> <g fill="none" fill-rule="evenodd"> <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path> <path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176zM12 4.987L9.687 8.959a1.25 1.25 0 0 1-.816.592l-4.492.973l3.062 3.427c.234.262.347.61.312.959l-.463 4.573l4.206-1.854a1.25 1.25 0 0 1 1.008 0l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .311-.959l3.063-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592z"></path> </g> </svg>`)} ${// 渲染空星星
  Array.from({ length: 5 - level.star }, (_, i) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="text-gray-300"${addAttribute(i + level.star, "data-empty-star")}> <g fill="none" fill-rule="evenodd"> <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path> <path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176zM12 4.987L9.687 8.959a1.25 1.25 0 0 1-.816.592l-4.492.973l3.062 3.427c.234.262.347.61.312.959l-.463 4.573l4.206-1.854a1.25 1.25 0 0 1 1.008 0l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .311-.959l3.063-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592z"></path> </g> </svg>`)} </div> <span class="text-sm text-foreground flex-1">${level.desc}</span> </div>`)} </div> </div>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/RatingCriteria.astro", void 0);

const $$Astro$1 = createAstro("https://xingjianwang.github.io/");
const $$WebVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WebVideo;
  const { src, title, width = "100%", height = "468px" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<iframe${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(src, "src")}${addAttribute(title, "title")} allowfullscreen${addAttribute({ borderRadius: "10px", overflow: "hidden" }, "style")}></iframe>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/WebVideo.astro", void 0);

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$ManualTOC = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ManualTOC;
  const { title = "DOCS", categories, class: className, ...props } = Astro2.props;
  function getLocalizedUrl(locale, path) {
    let url = getRelativeLocaleUrl(locale || "zh", path);
    if (url !== "/" && url.endsWith("/")) {
      url = url.slice(0, -1);
    }
    return url;
  }
  return renderTemplate`${renderComponent($$result, "docs-toc", "docs-toc", { "class": (clsx("not-prose", className) ?? "") + " astro-ewgkb4yy", ...props }, { "default": () => renderTemplate` ${title && renderTemplate`${maybeRenderHead()}<h2 class="font-semibold text-foreground astro-ewgkb4yy">${title}</h2>`} <ul class="mt-4 flex flex-col gap-y-5 astro-ewgkb4yy"> ${categories.map((category) => renderTemplate`<li class="astro-ewgkb4yy"> <h3 class="text-xs uppercase tracking-widest text-muted-foreground astro-ewgkb4yy">${category.title}</h3> <ul class="mt-2 flex flex-col astro-ewgkb4yy"> ${category.items.sort((a, b) => a.order - b.order).map((item) => renderTemplate`<li class="docs-item relative ms-2 flex rounded-2xl px-3 py-1 text-foreground/75 transition-all hover:bg-muted/50 astro-ewgkb4yy"> <a class="flex-1 hover:text-foreground astro-ewgkb4yy"${addAttribute(getLocalizedUrl(Astro2.currentLocale, item.href), "href")}> ${item.title} </a> </li>`)} </ul> </li>`)} </ul> ` })}  ${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/ManualTOC.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/advanced/ManualTOC.astro", void 0);

export { $$Comment as $, $$MediumZoom as a, $$QRCode as b, $$GithubCard as c, $$LinkPreview as d, $$ImageGroup as e, $$WebVideo as f };
