import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
import { a as getCollection } from '../chunks/_astro_content_FL5zKjFJ.mjs';
import { s as supabase } from '../chunks/supabase_Bd5BNjOP.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lessons = await getCollection("children-zone");
  const sortedLessons = lessons.sort((a, b) => a.data.title.localeCompare(b.data.title));
  let totalStars = 0;
  let isLoggedIn = false;
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    isLoggedIn = true;
    const { data: starsData } = await supabase.from("kids_progress").select("stars_earned").eq("user_id", session.user.id);
    if (starsData) {
      totalStars = starsData.reduce((sum, record) => sum + (record.stars_earned || 0), 0);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kids Zone", "data-astro-cid-7t3gaca6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="kids-intro animate-fade-in" data-astro-cid-7t3gaca6> <div class="header-with-icon" data-astro-cid-7t3gaca6> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "gamepad-2", "class": "kids-icon", "data-astro-cid-7t3gaca6": true })} <h1 data-astro-cid-7t3gaca6>Kids <span class="gold-text" data-astro-cid-7t3gaca6>Zone</span></h1> </div> <p data-astro-cid-7t3gaca6>Fun and interactive Bible learning for children.</p> <div class="stars-dashboard glass" data-astro-cid-7t3gaca6> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "star", "class": "star-icon", "data-astro-cid-7t3gaca6": true })} <div class="star-count" data-astro-cid-7t3gaca6> <span class="count-value" data-astro-cid-7t3gaca6>${isLoggedIn ? totalStars : "?"}</span> <span class="count-label" data-astro-cid-7t3gaca6>Stars Earned</span> </div> ${!isLoggedIn && renderTemplate`<p class="login-prompt" data-astro-cid-7t3gaca6><a href="/auth" data-astro-cid-7t3gaca6>Log in</a> to track your stars!</p>`} </div> </section> <div class="lessons-grid animate-fade-in" style="animation-delay: 0.1s;" data-astro-cid-7t3gaca6> ${sortedLessons.map((lesson) => renderTemplate`<div class="lesson-card glass" data-astro-cid-7t3gaca6> <div class="age-band" data-astro-cid-7t3gaca6>Ages ${lesson.data.ageBand}</div> <h3 data-astro-cid-7t3gaca6>${lesson.data.title}</h3> <div class="memory-verse" data-astro-cid-7t3gaca6> <h4 data-astro-cid-7t3gaca6>Memory Verse</h4> <p data-astro-cid-7t3gaca6>"${lesson.data.memoryVerse}"</p> </div> <div class="questions" data-astro-cid-7t3gaca6> <h4 data-astro-cid-7t3gaca6>Questions</h4> <ul data-astro-cid-7t3gaca6> ${lesson.data.questions.map((q) => renderTemplate`<li data-astro-cid-7t3gaca6>${q}</li>`)} </ul> </div> <div class="action-footer" data-astro-cid-7t3gaca6> <a${addAttribute(`/children/${lesson.slug}`, "href")} class="btn-play" data-astro-cid-7t3gaca6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "play", "size": 16, "data-astro-cid-7t3gaca6": true })} Start Interactive Lesson</a> </div> </div>`)} </div>  ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/children/index.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/children/index.astro";
const $$url = "/children";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
