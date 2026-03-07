import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
import { s as supabase } from '../chunks/supabase_Bd5BNjOP.mjs';
import { p as planData } from '../chunks/biblePlan_BOrWVYzl.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let completedDaysMap = {};
  let currentStreak = 0;
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    const { data: completed } = await supabase.from("completed_days").select("day_id").eq("user_id", session.user.id);
    if (completed) {
      completed.forEach((c) => {
        completedDaysMap[c.day_id] = true;
      });
    }
    const { data: profile } = await supabase.from("profiles").select("day_streak").eq("id", session.user.id).single();
    if (profile) currentStreak = profile.day_streak || 0;
  }
  const getDayOfYear = () => {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1e3;
    const oneDay = 1e3 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };
  const todayIndex = getDayOfYear();
  const totalCompleted = Object.keys(completedDaysMap).length;
  const progressPercent = Math.round(totalCompleted / 365 * 100) || 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "1-Year Bible Plan", "data-astro-cid-t4hnkldk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="study-dashboard animate-fade-in" data-astro-cid-t4hnkldk> <header class="plan-header glass" data-astro-cid-t4hnkldk> <div class="header-icon-bg" data-astro-cid-t4hnkldk> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "book-open", "size": 150, "data-astro-cid-t4hnkldk": true })} </div> <div class="header-content" data-astro-cid-t4hnkldk> <h1 data-astro-cid-t4hnkldk>1-Year Bible Plan</h1> <p data-astro-cid-t4hnkldk>Your daily journey through the Word of God.</p> <div class="header-stats" data-astro-cid-t4hnkldk> <div class="stat-box" data-astro-cid-t4hnkldk> <span class="stat-value" data-astro-cid-t4hnkldk>${totalCompleted}/365</span> <span class="stat-label" data-astro-cid-t4hnkldk>Days Finished</span> </div> <div class="stat-box" data-astro-cid-t4hnkldk> <span class="stat-value" data-astro-cid-t4hnkldk>${progressPercent}%</span> <span class="stat-label" data-astro-cid-t4hnkldk>Total Progress</span> </div> <div class="stat-box" data-astro-cid-t4hnkldk> <span class="stat-value" data-astro-cid-t4hnkldk><span class="flame-icon" data-astro-cid-t4hnkldk>🔥</span> ${currentStreak}</span> <span class="stat-label" data-astro-cid-t4hnkldk>Day Streak</span> </div> </div> <div class="header-actions" data-astro-cid-t4hnkldk> <a${addAttribute(`/study/day-${todayIndex}`, "href")} class="btn-primary jump-btn" data-astro-cid-t4hnkldk> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "arrow-right-circle", "data-astro-cid-t4hnkldk": true })} Jump to Today (Day ${todayIndex})
</a> </div> </div> </header> <div class="plan-grid" data-astro-cid-t4hnkldk> ${planData.map((day) => {
    const isCompleted = !!completedDaysMap[`day-${day.day}`];
    const isToday = day.day === todayIndex;
    return renderTemplate`<a${addAttribute(`/study/day-${day.day}`, "href")}${addAttribute(`day-card glass ${isCompleted ? "completed" : ""} ${isToday ? "today-pulse" : ""}`, "class")} data-astro-cid-t4hnkldk> <div class="day-status" data-astro-cid-t4hnkldk> ${isCompleted ? renderTemplate`${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "check-circle", "class": "status-icon parsed", "data-astro-cid-t4hnkldk": true })}` : renderTemplate`<div class="empty-circle" data-astro-cid-t4hnkldk></div>`} </div> <div class="day-details" data-astro-cid-t4hnkldk> <h3 data-astro-cid-t4hnkldk>${day.title} ${isToday && renderTemplate`<span class="today-badge" data-astro-cid-t4hnkldk>TODAY</span>`}</h3> <p data-astro-cid-t4hnkldk>${day.reading}</p> </div> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "chevron-right", "class": "arrow-icon", "data-astro-cid-t4hnkldk": true })} </a>`;
  })} </div> </div>  ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/study/index.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/study/index.astro";
const $$url = "/study";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
