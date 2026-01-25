import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as addAttribute, g as renderSlot } from './astro/server_6pLgD4hd.mjs';
import 'piccolore';
import { g as getBlogCollection, s as sortMDByDate } from './server_Cz41rmUb.mjs';
import { b as $$Icon, f as cn } from './i18n_B1lOdjZF.mjs';
import 'clsx';
import { getYear, parseISO, getDay, subWeeks, nextDay, differenceInCalendarDays, getMonth, eachDayOfInterval, formatISO } from 'date-fns';

const CJK_RANGES = [
  [19968, 40959],
  // CJK Unified Ideographs
  [13312, 19903],
  // CJK Extension A
  [131072, 173791],
  // CJK Extension B
  [173824, 177983],
  // CJK Extension C
  [177984, 178207],
  // CJK Extension D
  [178208, 183983],
  // CJK Extension E
  [63744, 64255],
  // CJK Compatibility Ideographs
  [194560, 195103]
  // CJK Compatibility Ideographs Supplement
];
const CJK_PUNCTUATION = /[\u3000-\u303F\uff00-\uffef]/;
function isCJK(char) {
  const code = char.charCodeAt(0);
  return CJK_RANGES.some(([start, end]) => code >= start && code <= end);
}
function countWords(text) {
  let words = 0;
  let inWord = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (isCJK(char)) {
      words++;
      while (i + 1 < text.length && CJK_PUNCTUATION.test(text[i + 1])) {
        i++;
      }
      inWord = false;
    } else if (/\S/.test(char)) {
      if (!inWord) {
        words++;
        inWord = true;
      }
    } else {
      if (inWord && i + 1 < text.length && /\S/.test(text[i + 1])) {
        inWord = false;
      }
    }
  }
  return words;
}
function getReadingTime(text, wordsPerMinute = 200) {
  const words = countWords(text);
  const minutes = words / wordsPerMinute;
  const time = Math.round(minutes * 60 * 1e3);
  const displayed = Math.ceil(minutes);
  return {
    text: `${displayed} min read`,
    minutes,
    time,
    words
  };
}

const $$Astro$2 = createAstro("https://xingjianwang.github.io/");
const $$BlogStats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogStats;
  const { blogStartDate } = Astro2.props;
  const startDate = blogStartDate;
  const allPosts = await getBlogCollection();
  const sortedPosts = sortMDByDate(allPosts);
  const today = /* @__PURE__ */ new Date();
  const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1e3 * 60 * 60 * 24));
  const lastUpdated = sortedPosts.length > 0 ? new Date(sortedPosts[0].data.updatedDate || sortedPosts[0].data.publishDate) : /* @__PURE__ */ new Date();
  let totalWords = 0;
  for (const post of allPosts) {
    try {
      const { body } = post;
      if (body) {
        const readingTime = getReadingTime(body);
        totalWords += readingTime.words;
      }
    } catch (error) {
      console.warn(`Error calculating word count for post ${post.id}:`, error);
    }
  }
  const formatNumber = (num) => {
    if (num >= 1e4) {
      return Math.round(num / 1e3) / 10 + "w";
    } else if (num >= 1e3) {
      return Math.round(num / 100) / 10 + "k";
    }
    return num.toString();
  };
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-5"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-3"> <div class="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-foreground/25 hover:shadow-lg"> ${renderComponent($$result, "Icon", $$Icon, { "name": "time", "class": "size-5 text-muted-foreground group-hover:text-primary transition-colors" })} <div class="text-center"> <div class="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">${daysDiff}</div> <div class="text-sm text-muted-foreground">Days Online</div> </div> </div> <div class="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-foreground/25 hover:shadow-lg"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "size-5 text-muted-foreground group-hover:text-primary transition-colors" })} <div class="text-center"> <div class="text-sm font-medium text-foreground group-hover:text-primary transition-colors">${formatDate(lastUpdated)}</div> <div class="text-sm text-muted-foreground">Last Updated</div> </div> </div> <div class="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-foreground/25 hover:shadow-lg"> ${renderComponent($$result, "Icon", $$Icon, { "name": "document", "class": "size-5 text-muted-foreground group-hover:text-primary transition-colors" })} <div class="text-center"> <div class="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">${formatNumber(totalWords)}</div> <div class="text-sm text-muted-foreground">Total Words</div> </div> </div> </div> <div class="flex items-center justify-between text-sm border-t border-border pt-3"> <span class="text-muted-foreground">Total Posts</span> <span class="font-medium text-foreground">${allPosts.length}</span> </div> </div>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/home/BlogStats.astro", void 0);

const $$Astro$1 = createAstro("https://xingjianwang.github.io/");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("flex flex-col gap-y-5 md:flex-row md:gap-y-0", className), "class")}> <div class="text-xl font-semibold md:min-w-36"> <h2>${title}</h2> </div> <div class="flex flex-1 flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/home/Section.astro", void 0);

const avatar = new Proxy({"src":"/_astro/avatar.eqm0NkMC.png","width":542,"height":542,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/assets/avatar.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/assets/avatar.png");
							return target[name];
						}
					});

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$GitHubActivityCalendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GitHubActivityCalendar;
  async function fetchData(username2) {
    const apiUrl = "https://github-contributions-api.jogruber.de/v4/";
    const response = await fetch(`${apiUrl}${username2}?y=last`);
    const data2 = await response.json();
    if (!response.ok) {
      const message = data2.error || "Unknown error";
      throw Error(`Fetching GitHub contribution data for "${username2}" failed: ${message}`);
    }
    return data2;
  }
  function fillHoles(activities2) {
    const calendar = new Map(activities2.map((a) => [a.date, a]));
    const firstActivity = activities2[0];
    const lastActivity = activities2[activities2.length - 1];
    return eachDayOfInterval({
      start: parseISO(firstActivity.date),
      end: parseISO(lastActivity.date)
    }).map((day) => {
      const date = formatISO(day, { representation: "date" });
      return calendar.get(date) ?? { date, count: 0, level: 0 };
    });
  }
  function groupByWeeks(activities2) {
    const normalized = fillHoles(activities2);
    const firstDate = parseISO(normalized[0].date);
    const firstCalendarDate = getDay(firstDate) === 0 ? firstDate : subWeeks(nextDay(firstDate, 0), 1);
    const padded = [
      ...Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(
        void 0
      ),
      ...normalized
    ];
    const numberOfWeeks = Math.ceil(padded.length / 7);
    return [...Array(numberOfWeeks).keys()].map((i) => padded.slice(i * 7, i * 7 + 7));
  }
  function getMonthLabels(weeks2) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return weeks2.reduce((labels, week, weekIndex) => {
      const firstActivity = week.find((a) => a);
      if (!firstActivity) return labels;
      const month = monthNames[getMonth(parseISO(firstActivity.date))];
      if (weekIndex === 0 || labels.at(-1)?.label !== month) {
        labels.push({ weekIndex, label: month });
      }
      return labels;
    }, []);
  }
  const { username } = Astro2.props;
  const data = await fetchData(username);
  const activities = data.contributions;
  const totalCount = data.total.lastYear;
  const activityYear = getYear(parseISO(activities[0].date));
  const blockSize = 12;
  const blockMargin = 4;
  const blockRadius = 2;
  const fontSize = 14;
  const labelMargin = 8;
  const labelHeight = fontSize + labelMargin;
  const weeks = groupByWeeks(activities);
  const width = weeks.length * (blockSize + blockMargin) - blockMargin;
  const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin;
  const monthLabels = getMonthLabels(weeks);
  return renderTemplate`${maybeRenderHead()}<div class="overflow-x-auto w-full" style="max-width: 90vw;"> <svg class="block"${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(`0 0 ${width} ${height}`, "viewBox")}> <g> ${monthLabels.map(({ label, weekIndex }) => renderTemplate`<text${addAttribute((blockSize + blockMargin) * weekIndex, "x")}${addAttribute(0, "y")} dominant-baseline="hanging" fill="currentColor"> ${label} </text>`)} </g> ${weeks.map((week, wi) => renderTemplate`<g${addAttribute(`translate(${(blockSize + blockMargin) * wi}, 0)`, "transform")}> ${week.map(
    (activity, di) => activity ? renderTemplate`<rect${addAttribute([
      "stroke-foreground/10, hover:opacity-80",
      activity.level === 0 && "fill-[#ebedf0] dark:fill-[#161b22]",
      activity.level === 1 && "fill-[#c6e48b] dark:fill-[#0e4429]",
      activity.level === 2 && "fill-[#7bc96f] dark:fill-[#006d32]",
      activity.level === 3 && "fill-[#239a3b] dark:fill-[#26a641]",
      activity.level === 4 && "fill-[#196127] dark:fill-[#39d353]"
    ], "class:list")}${addAttribute(0, "x")}${addAttribute(labelHeight + (blockSize + blockMargin) * di, "y")}${addAttribute(blockSize, "width")}${addAttribute(blockSize, "height")}${addAttribute(blockRadius, "rx")}${addAttribute(blockRadius, "ry")}${addAttribute(activity.date, "data-date")}${addAttribute(activity.level, "data-level")}> <title>${`${activity.count} contributions on ${activity.date}`}</title> </rect>` : null
  )} </g>`)} </svg> </div> <footer class="flex items-center justify-between"> <div>${totalCount} contributions in ${activityYear} ~ ${activityYear + 1}</div> <div class="flex items-center gap-1"> <span>Less</span> ${[0, 1, 2, 3, 4].map((level) => renderTemplate`<svg${addAttribute(blockSize, "width")}${addAttribute(blockSize, "height")}> <rect${addAttribute(blockSize, "width")}${addAttribute(blockSize, "height")}${addAttribute(blockRadius, "rx")}${addAttribute(blockRadius, "ry")}${addAttribute([
    level === 0 && "fill-[#ebedf0] dark:fill-[#161b22]",
    level === 1 && "fill-[#c6e48b] dark:fill-[#0e4429]",
    level === 2 && "fill-[#7bc96f] dark:fill-[#006d32]",
    level === 3 && "fill-[#239a3b] dark:fill-[#26a641]",
    level === 4 && "fill-[#196127] dark:fill-[#39d353]"
  ], "class:list")}></rect> </svg>`)} <span>More</span> </div> </footer>`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/home/GitHubActivityCalendar.astro", void 0);

export { $$Section as $, avatar as a, $$BlogStats as b, $$GitHubActivityCalendar as c };
