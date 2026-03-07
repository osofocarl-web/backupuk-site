import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderScript } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
import { s as supabase } from '../chunks/supabase_Bd5BNjOP.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/auth");
  }
  await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/auth");
  }
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
  const dayStreak = profile?.day_streak || 0;
  const chaptersRead = profile?.chapters_read || 0;
  const modulesDone = profile?.modules_done || 0;
  const email = user.email || "User";
  const joinDate = new Date(profile?.join_date || user.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Profile", "data-astro-cid-wwes6yjo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="profile-header animate-fade-in" data-astro-cid-wwes6yjo> <div class="avatar" data-astro-cid-wwes6yjo> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "user", "size": 48, "data-astro-cid-wwes6yjo": true })} </div> <h1 data-astro-cid-wwes6yjo>${email.split("@")[0]}</h1> <p class="join-date" data-astro-cid-wwes6yjo>Joined ${joinDate}</p> </div> <div class="stats-overview animate-fade-in" style="animation-delay: 0.1s;" data-astro-cid-wwes6yjo> <div class="stat-box glass" data-astro-cid-wwes6yjo> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "flame", "class": "stat-icon streak", "data-astro-cid-wwes6yjo": true })} <div class="stat-data" data-astro-cid-wwes6yjo> <span class="value" data-astro-cid-wwes6yjo>${dayStreak}</span> <span class="label" data-astro-cid-wwes6yjo>Day Streak</span> </div> </div> <div class="stat-box glass" data-astro-cid-wwes6yjo> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "book-open", "class": "stat-icon read", "data-astro-cid-wwes6yjo": true })} <div class="stat-data" data-astro-cid-wwes6yjo> <span class="value" data-astro-cid-wwes6yjo>${chaptersRead}</span> <span class="label" data-astro-cid-wwes6yjo>Chapters Read</span> </div> </div> <div class="stat-box glass" data-astro-cid-wwes6yjo> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "graduation-cap", "class": "stat-icon school", "data-astro-cid-wwes6yjo": true })} <div class="stat-data" data-astro-cid-wwes6yjo> <span class="value" data-astro-cid-wwes6yjo>${modulesDone}</span> <span class="label" data-astro-cid-wwes6yjo>Modules Done</span> </div> </div> </div> <div class="settings-section animate-fade-in" style="animation-delay: 0.2s;" data-astro-cid-wwes6yjo> <h3 data-astro-cid-wwes6yjo>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "settings", "size": 20, "data-astro-cid-wwes6yjo": true })} Settings & Preferences</h3> <div class="settings-list glass" data-astro-cid-wwes6yjo> <div class="setting-item" data-astro-cid-wwes6yjo> <div class="setting-info" data-astro-cid-wwes6yjo> <h4 data-astro-cid-wwes6yjo>Daily Reminders</h4> <p data-astro-cid-wwes6yjo>Get notified for your daily reading</p> </div> <label class="toggle" data-astro-cid-wwes6yjo> <input type="checkbox" checked data-astro-cid-wwes6yjo> <span class="slider" data-astro-cid-wwes6yjo></span> </label> </div> <div class="setting-item" data-astro-cid-wwes6yjo> <div class="setting-info" data-astro-cid-wwes6yjo> <h4 data-astro-cid-wwes6yjo>Study Mode</h4> <p data-astro-cid-wwes6yjo>Highlight key verses automatically</p> </div> <label class="toggle" data-astro-cid-wwes6yjo> <input type="checkbox" data-astro-cid-wwes6yjo> <span class="slider" data-astro-cid-wwes6yjo></span> </label> </div> <div class="setting-item" data-astro-cid-wwes6yjo> <div class="setting-info" data-astro-cid-wwes6yjo> <h4 data-astro-cid-wwes6yjo>Translation</h4> <p data-astro-cid-wwes6yjo>Preferred Bible version</p> </div> <select class="select-input" data-astro-cid-wwes6yjo> <option data-astro-cid-wwes6yjo>ESV</option> <option data-astro-cid-wwes6yjo>NIV</option> <option data-astro-cid-wwes6yjo>KJV</option> <option data-astro-cid-wwes6yjo>NLT</option> </select> </div> </div> </div> <div class="logout-container animate-fade-in" style="animation-delay: 0.3s;" data-astro-cid-wwes6yjo> <button id="logout-btn" class="btn-danger" data-astro-cid-wwes6yjo> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "log-out", "data-astro-cid-wwes6yjo": true })} Log Out
</button> </div>  ${renderScript($$result2, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/profile.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/profile.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
