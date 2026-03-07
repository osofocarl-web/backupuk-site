import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
import { a as getCollection } from '../chunks/_astro_content_FL5zKjFJ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const modules = await getCollection("academy");
  const sortedModules = modules.sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lifeline Academy", "data-astro-cid-ag4konwg": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="school-intro animate-fade-in" data-astro-cid-ag4konwg> <div class="header-with-icon" data-astro-cid-ag4konwg> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "graduation-cap", "class": "school-icon", "data-astro-cid-ag4konwg": true })} <h1 data-astro-cid-ag4konwg>Lifeline <span class="gold-text" data-astro-cid-ag4konwg>Academy</span></h1> </div> <p data-astro-cid-ag4konwg>Level 4 Foundational Bible School Certificate Standard.</p> </section> <div class="modules-grid animate-fade-in" style="animation-delay: 0.1s;" data-astro-cid-ag4konwg> ${sortedModules.map((mod) => renderTemplate`<a${addAttribute(`/academy/${mod.slug}`, "href")} class="module-card glass" data-astro-cid-ag4konwg> <div class="module-icon-wrap" data-astro-cid-ag4konwg> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": mod.data.icon, "data-astro-cid-ag4konwg": true })} </div> <div class="module-content" data-astro-cid-ag4konwg> <div class="module-meta" data-astro-cid-ag4konwg>Module ${mod.data.module}</div> <h3 data-astro-cid-ag4konwg>${mod.data.title}</h3> <p data-astro-cid-ag4konwg>${mod.data.description}</p> </div> <div class="module-footer" data-astro-cid-ag4konwg> <span class="status-tag" data-astro-cid-ag4konwg>Available</span> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "arrow-right", "size": 18, "data-astro-cid-ag4konwg": true })} </div> </a>`)} </div> <section class="certificate-info glass animate-fade-in" style="animation-delay: 0.2s;" data-astro-cid-ag4konwg> <h3 data-astro-cid-ag4konwg>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "award", "class": "gold-text", "data-astro-cid-ag4konwg": true })} Certification Path</h3> <p data-astro-cid-ag4konwg>Complete all 12 modules with at least 80% reading completion and pass all assessments to receive your <strong data-astro-cid-ag4konwg>Foundational Bible School Certificate</strong>.</p> <div class="path-steps" data-astro-cid-ag4konwg> <div class="step" data-astro-cid-ag4konwg>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "check-circle", "data-astro-cid-ag4konwg": true })} 12 Modules</div> <div class="step" data-astro-cid-ag4konwg>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "check-circle", "data-astro-cid-ag4konwg": true })} Quizzes</div> <div class="step" data-astro-cid-ag4konwg>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "check-circle", "data-astro-cid-ag4konwg": true })} Final Assessment</div> </div> </section>  ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/academy/index.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/academy/index.astro";
const $$url = "/academy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
