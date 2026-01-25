import { c as createComponent, a as renderTemplate, d as defineScriptVars, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { $ as $$CommonPage } from '../../chunks/CommonPage_C4EopBNr.mjs';
import { $ as $$Button, b as $$Icon, c as $$SimpleIcon, d as $$PublicationSection, e as $$ResearchProjectSection } from '../../chunks/i18n_B1lOdjZF.mjs';
import { c as config } from '../../chunks/server_Cz41rmUb.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const headings = [
    { depth: 2, slug: "about-me", text: "About Me" },
    { depth: 2, slug: "research-interests", text: "Research Interests" },
    { depth: 2, slug: "publications", text: "Publications" },
    { depth: 2, slug: "open-source-projects", text: "Open-source Projects" }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" data-astro-rerun>', "\n  const normalizePath = (path) => {\n    if (path === '/') return path\n    return path.endsWith('/') ? path.slice(0, -1) : path\n  }\n\n  const loadPageviewCount = async () => {\n    const pageview = await import(`${npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: normalizePath(window.location.pathname)\n    })\n  }\n\n  await loadPageviewCount()\n<\/script>"], ["", ' <script type="module" data-astro-rerun>', "\n  const normalizePath = (path) => {\n    if (path === '/') return path\n    return path.endsWith('/') ? path.slice(0, -1) : path\n  }\n\n  const loadPageviewCount = async () => {\n    const pageview = await import(\\`\\${npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: normalizePath(window.location.pathname)\n    })\n  }\n\n  await loadPageviewCount()\n<\/script>"])), renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Academic", "headings": headings, "info": { slug: "/academic", hideComment: true } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 id="about-me">About Me<a class="anchor" href="#about-me">#</a></h2> <p>
Hello, I'm Xingjian Wang!
</p> <p>
🎓 I am an undergraduate student majoring in Information Management and Information Systems at <a href="https://www.shiep.edu.cn/">Shanghai University of Electric Power</a>. I am currently interning at the Monash Medical AI Lab, carrying out close scientific research cooperation with <a href="https://shijian2001.github.io/">Shijian Wang</a> and <a href="https://tomorrow1sanotherday.github.io/">Runhao Fu</a>, and hope to join the lab under the supervision of <a href="https://xueliancheng.github.io/">Prof. Xuelian Cheng</a> and <a href="https://zongyuange.github.io/">Prof. Zongyuan Ge</a>.
</p> <p>
🔍 I'm currently focusing on data-centric approaches to Video Multimodal Large Language Models. I see that Video MLLMs are an essential pathway toward developing World Models, as they empower AI to interpret and understand the physical world through video, much like how humans perceive reality.
</p> <p>
💪  Although I haven't achieved much advanced academic attainments yet, I am striving to improve myself every day.
</p> <p>
👯 I'm looking to discuss AI research and anime, free to reach out!
</p> <p>Here is my academic CV, feel free to download it.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Download CV", "class": "w-fit", "href": "CV.pdf", "target": "_blank" }, { "before": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "class": "size-5", "name": "download", "slot": "before" })}` })} <h2 id="research-interests">
Research Interests<a class="anchor" href="#research-interests">#</a> </h2> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${[
    {
      title: "Data-centric AI",
      description: "Systematically engineering the data used to build an AI system",
      icon: "reactquery"
    },
    {
      title: "MLLM",
      description: "Video and 3D Multimodal Large Language Models",
      icon: "openmined"
    },
    {
      title: "Video Understanding",
      description: "Video grounding, Video reasoning, and Video dataset constructing",
      icon: "bilibili"
    }
  ].map((interest) => renderTemplate`<div class="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:border-foreground/25 hover:shadow-md"> <div class="flex items-start gap-4"> <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20"> ${renderComponent($$result2, "SimpleIcon", $$SimpleIcon, { "class": "size-5 text-primary transition-transform duration-300 group-hover:scale-110", "name": interest.icon })} </div> <div class="flex-1"> <p class="text-xl font-medium leading-tight text-foreground transition-colors group-hover:text-primary"> ${interest.title} </p> <p class="text-sm leading-relaxed text-muted-foreground">${interest.description}</p> </div> </div> </div>`)} </div> <h2 id="publications">Publications<a class="anchor" href="#publications">#</a></h2> ${renderComponent($$result2, "PublicationSection", $$PublicationSection, { "publications": [
    {
      title: 'Video-Thinker: Sparking "Thinking with Videos" via Reinforcement Learning',
      authors: [
        { name: "Shijian Wang" },
        { name: "Jiarui Jin" },
        { name: "Xingjian Wang", isMe: true },
        { name: "Linxin Song" },
        { name: "Runhao Fu" },
        { name: "Hecheng Wang" },
        { name: "Zongyuan Ge" },
        { name: "Yuan Lu" },
        { name: "Xuelian Cheng" }
      ],
      venue: "ICLR",
      year: "2026",
      type: "conference",
      abstract: "",
      links: [
        { type: "github", href: "https://github.com/shijian2001/Video-Thinker" },
        { type: "huggingface", href: "https://huggingface.co/ShijianW01/Video-Thinker-7B" },
        { type: "arxiv", href: "https://www.arxiv.org/abs/2510.23473" }
      ],
      status: "under-review"
    },
    {
      title: "Synthetic Curriculum Reinforces Compositional Text-to-Image Generation",
      authors: [
        { name: "Shijian Wang" },
        { name: "Runhao Fu" },
        { name: "Siyi Zhao" },
        { name: "Qingqin Zhan" },
        { name: "Xingjian Wang", isMe: true },
        { name: "Jiarui Jin" },
        { name: "Yuan Lu" },
        { name: "Hanqian Wu" },
        { name: "Cunjian Chen" }
      ],
      venue: "CVPR",
      year: "2026",
      type: "conference",
      abstract: "",
      links: [
        { type: "arxiv", href: "http://arxiv.org/abs/2511.18378" }
      ],
      status: "under-review"
    },
    {
      title: "A Survey on Large Language Model Benchmarks",
      authors: [
        { name: "Shiwen Ni" },
        { name: "Guhong Chen" },
        { name: "Shuaimin Li" },
        { name: "Xuanang Chen" },
        { name: "Siyi Li" },
        { name: "Bingli Wang" },
        { name: "Qiyao Wang" },
        { name: "Xingjian Wang", isMe: true },
        { name: "Yifan Zhang" },
        { name: "Liyang Fan" },
        { name: "Chengming Li" },
        { name: "Ruifeng Xu" },
        { name: "Le Sun" },
        { name: "Min Yang" }
      ],
      venue: "Survey",
      year: "2025",
      type: "journal",
      abstract: "",
      links: [
        { type: "arxiv", href: "https://arxiv.org/abs/2508.15361" },
        { type: "acm", href: "#" }
      ],
      status: "preprint"
    },
    {
      title: "KORGym: A Dynamic Game Platform for LLM Reasoning Evaluation",
      authors: [
        { name: "Jiajun Shi", isEqual: true },
        { name: "Jian Yang", isEqual: true },
        { name: "Jiaheng Liu", isEqual: true },
        { name: "Xingyuan Bu", isEqual: true },
        { name: "Jiangjie Chen" },
        { name: "Junting Zhou" },
        { name: "Kaijing Ma" },
        { name: "Zhoufutu Wen" },
        { name: "Bingli Wang" },
        { name: "Yancheng He" },
        { name: "Liang Song" },
        { name: "Hualei Zhu" },
        { name: "Shilong Li" },
        { name: "Xingjian Wang", isMe: true },
        { name: "Wei Zhang" },
        { name: "Ruibin Yuan" },
        { name: "Yifan Yao" },
        { name: "Wenjun Yang" },
        { name: "Yunli Wang" },
        { name: "Siyuan Fang" },
        { name: "Siyu Yuan" },
        { name: "Qianyu He" },
        { name: "Xiangru Tang" },
        { name: "Yingshui Tan" },
        { name: "Wangchunshu Zhou" },
        { name: "Zhaoxiang Zhang" },
        { name: "Zhoujun Li" },
        { name: "Wenhao Huang" },
        { name: "Ge Zhang" }
      ],
      venue: "NeurIPS",
      year: "2025",
      type: "conference",
      abstract: "",
      links: [
        { type: "website", href: "https://razor233.github.io/KORGYM_HomePage/" },
        { type: "arxiv", href: "https://arxiv.org/abs/2505.14552" },
        { type: "github", href: "https://github.com/multimodal-art-projection/KORGym" }
      ],
      status: "accepted"
    },
    {
      title: "ScaleLong: A Multi-Timescale Benchmark for Long Video Understanding",
      authors: [
        { name: "David Ma", isEqual: true },
        { name: "Huaqing Yuan", isEqual: true },
        { name: "Xingjian Wang", isMe: true, isEqual: true },
        { name: "Qianbo Zang", isEqual: true },
        { name: "Tianci Liu" },
        { name: "Xinyang He" },
        { name: "Yanbin Wei" },
        { name: "Jiawei Guo" },
        { name: "Ni Jiahui" },
        { name: "Zhenzhu Yang" },
        { name: "Meng Cao" },
        { name: "Shanghaoran Quan" },
        { name: "Yizhi Li" },
        { name: "Wangchunshu Zhou" },
        { name: "Jiaheng Liu" },
        { name: "Wenhao Huang" },
        { name: "Ge Zhang" },
        { name: "Shiwen Ni" },
        { name: "Xiaojie Jin" }
      ],
      venue: "ICLR",
      year: "2026",
      type: "conference",
      abstract: "",
      links: [
        { type: "arxiv", href: "https://arxiv.org/abs/2505.23922" }
      ],
      status: "under-review"
    }
  ] })} <h2 id="open-source-projects">
Open-source Projects<a class="anchor" href="#open-source-projects">#</a> </h2> ${renderComponent($$result2, "ResearchProjectSection", $$ResearchProjectSection, { "projects": [
    {
      title: "DORO-STVG",
      description: "Ongoing  Research Project for Video Spatial-Temporal Video Grounding | Monash Medical AI Lab",
      category: "Video MLLM",
      status: "active",
      links: [
        { type: "github", href: "https://github.com/Themaoqiu/DORO-STVG", label: "Code" }
      ]
    },
    {
      title: "Approval-MIS",
      description: "Course Project for Web 2.0 Programming | IMIS Major | Shanghai University of Electric Power",
      category: "Open Source Course Project",
      status: "completed",
      links: [
        { type: "github", href: "https://github.com/Themaoqiu/Approval-MIS", label: "Code" }
      ]
    },
    {
      title: "MeetingRoom-MIS",
      description: "Course Project for Java Programming | IMIS Major | Shanghai University of Electric Power",
      category: "Open Source Course Project",
      status: "completed",
      links: [
        { type: "github", href: "https://github.com/Themaoqiu/Meeting-MIS", label: "Code" }
      ]
    },
    {
      title: "Inventory-MIS",
      description: "Course Project for Management Information Systems | IMIS Major | Shanghai University of Electric Power",
      category: "Open Source Course Project",
      status: "completed",
      links: [
        { type: "github", href: "https://github.com/Themaoqiu/Inventory-MIS", label: "Code" }
      ]
    }
  ] })} ` }), defineScriptVars({ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }));
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/academic/index.astro", void 0);

const $$file = "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/pages/en/academic/index.astro";
const $$url = "/en/academic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
