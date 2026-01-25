export { renderers } from '../renderers.mjs';

const robotsTxt = `
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Claude-Web

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", "https://xingjianwang.github.io/").href}
`.trim();
const GET = () => new Response(robotsTxt, {
  headers: {
    "Content-Type": "text/plain; charset=utf-8"
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
