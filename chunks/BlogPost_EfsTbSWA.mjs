import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, g as renderSlot, F as Fragment } from './astro/server_6pLgD4hd.mjs';
import 'piccolore';
/* empty css                        */
import { a as $$MediumZoom, $ as $$Comment } from './ManualTOC_DD9Lavxq.mjs';
import { d as $$TOC, e as $$Hero, f as $$Copyright, g as $$ArticleBottom } from './PFSearch_BuEHxxBW.mjs';
import { $ as $$ContentLayout } from './ContentLayout_BauGTpzp.mjs';
import './server_Cz41rmUb.mjs';

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    post: { id, data },
    posts,
    headings,
    remarkPluginFrontmatter
  } = Astro2.props;
  const {
    description,
    heroImage,
    publishDate,
    title,
    updatedDate,
    draft: isDraft,
    comment: enableComment
  } = data;
  const socialImage = heroImage ? typeof heroImage.src === "string" ? heroImage.src : heroImage.src.src : "/images/social-card.png";
  const articleDate = updatedDate?.toISOString() ?? publishDate.toISOString();
  const primaryColor = data.heroImage?.color ?? "hsl(var(--primary) / var(--tw-text-opacity))";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$ContentLayout, { "meta": { articleDate, description, ogImage: socialImage, title }, "highlightColor": primaryColor, "back": "/blog" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "bottom" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Copyright", $$Copyright, { "data": data })} ${renderComponent($$result3, "ArticleBottom", $$ArticleBottom, { "collections": posts, "id": id, "class": "mt-3 sm:mt-6" })} ${!isDraft && enableComment && renderTemplate`${renderComponent($$result3, "Comment", $$Comment, { "class": "mt-3 sm:mt-6" })}`}` })}`, "bottom-sidebar": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom-sidebar"])}`, "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "data": data, "remarkPluginFrontmatter": remarkPluginFrontmatter, "slot": "header" })}`, "sidebar": ($$result2) => renderTemplate`${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings, "slot": "sidebar" })}`}` })} ${renderTemplate`${renderComponent($$result, "MediumZoom", $$MediumZoom, {})}`}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
