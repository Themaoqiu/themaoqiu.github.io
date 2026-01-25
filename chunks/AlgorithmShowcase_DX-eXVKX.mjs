import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, f as renderScript, a as renderTemplate } from './astro/server_6pLgD4hd.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://xingjianwang.github.io/");
const $$AlgorithmShowcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AlgorithmShowcase;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((`algorithm-showcase ${className}` ?? "") + " astro-2il25zw4", "class")}> <div class="showcase-header astro-2il25zw4"> <h3 id="current-title" class="astro-2il25zw4">Boids Algorithm</h3> <div class="showcase-controls astro-2il25zw4"> <button id="prev-btn" class="nav-btn astro-2il25zw4" aria-label="上一个算法"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="astro-2il25zw4"> <polyline points="15,18 9,12 15,6" class="astro-2il25zw4"></polyline> </svg> </button> <div class="indicator-dots astro-2il25zw4" id="indicator-dots"> <span class="dot active astro-2il25zw4"></span> <span class="dot astro-2il25zw4"></span> <span class="dot astro-2il25zw4"></span> </div> <button id="next-btn" class="nav-btn astro-2il25zw4" aria-label="下一个算法"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="astro-2il25zw4"> <polyline points="9,18 15,12 9,6" class="astro-2il25zw4"></polyline> </svg> </button> </div> </div> <div class="showcase-content astro-2il25zw4"> <div class="showcase-slider astro-2il25zw4" id="showcase-slider"> <!-- Boids Algorithm --> <div class="showcase-slide active astro-2il25zw4" data-title="Boids Algorithm"> <div class="boids-showcase astro-2il25zw4"> <canvas id="boidsCanvas" class="astro-2il25zw4"></canvas> </div> </div> <!-- Cellular Automata - Conway's Game of Life --> <div class="showcase-slide astro-2il25zw4" data-title="Game of Life"> <div class="cellular-automata-showcase astro-2il25zw4"> <canvas id="cellularAutomataCanvas" class="astro-2il25zw4"></canvas> </div> </div> <!-- A* Pathfinding Algorithm --> <div class="showcase-slide astro-2il25zw4" data-title="Pathfinding"> <div class="astar-showcase astro-2il25zw4"> <canvas id="astarCanvas" class="astro-2il25zw4"></canvas> </div> </div> </div> </div> </div>  ${renderScript($$result, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/about/AlgorithmShowcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/themaoqiu/CodeRepo/web/pure/Xingjian Wang/src/components/about/AlgorithmShowcase.astro", void 0);

export { $$AlgorithmShowcase as $ };
