import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderScript } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
import { s as supabase } from '../chunks/supabase_Bd5BNjOP.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/admin/login");
  }
  let sessionUser = null;
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken.value);
    if (authError || !user) throw new Error("Invalid session");
    sessionUser = user;
    const { data: profile, error: profileError } = await supabase.from("profiles").select("role").eq("id", user.id).single();
    if (profileError || !profile || profile.role !== "admin") {
      return Astro2.redirect("/");
    }
  } catch (e) {
    Astro2.cookies.delete("sb-access-token", { path: "/" });
    Astro2.cookies.delete("sb-refresh-token", { path: "/" });
    return Astro2.redirect("/admin/login");
  }
  const { count: userCount } = await supabase.from("profiles").select("*", { count: "exact", head: true });
  const { count: attendanceCount } = await supabase.from("church_attendance").select("*", { count: "exact", head: true });
  const { data: kidsData } = await supabase.from("kids_progress").select("stars_earned");
  const totalStars = kidsData ? kidsData.reduce((acc, curr) => acc + (curr.stars_earned || 0), 0) : 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Dashboard", "data-astro-cid-u2h3djql": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-wrapper animate-fade-in" data-astro-cid-u2h3djql> <header class="admin-topbar glass" data-astro-cid-u2h3djql> <div class="topbar-left" data-astro-cid-u2h3djql> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "shield-check", "class": "admin-shield", "data-astro-cid-u2h3djql": true })} <h2 data-astro-cid-u2h3djql>Lifeline Command Center</h2> </div> <div class="topbar-right" data-astro-cid-u2h3djql> <span class="admin-badge" data-astro-cid-u2h3djql>AUTHORIZED ADMIN</span> <button id="admin-logout" class="btn-logout" data-astro-cid-u2h3djql>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "log-out", "size": 16, "data-astro-cid-u2h3djql": true })} Sign Out</button> </div> </header> <main class="admin-dashboard" data-astro-cid-u2h3djql> <section class="welcome-section" data-astro-cid-u2h3djql> <h1 data-astro-cid-u2h3djql>Welcome, Administrator</h1> <p data-astro-cid-u2h3djql>You have full access to monitor and manage the Lifeline Jacket platform.</p> </section> <div class="admin-stats-grid" data-astro-cid-u2h3djql> <div class="admin-stat-card glass" data-astro-cid-u2h3djql> <div class="stat-icon-wrapper users" data-astro-cid-u2h3djql>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "users", "data-astro-cid-u2h3djql": true })}</div> <div class="stat-data" data-astro-cid-u2h3djql> <span class="stat-num" data-astro-cid-u2h3djql>${userCount || 0}</span> <span class="stat-label" data-astro-cid-u2h3djql>Total Registered Users</span> </div> </div> <div class="admin-stat-card glass" data-astro-cid-u2h3djql> <div class="stat-icon-wrapper church" data-astro-cid-u2h3djql>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "church", "data-astro-cid-u2h3djql": true })}</div> <div class="stat-data" data-astro-cid-u2h3djql> <span class="stat-num" data-astro-cid-u2h3djql>${attendanceCount || 0}</span> <span class="stat-label" data-astro-cid-u2h3djql>Lifetime Check-Ins</span> </div> </div> <div class="admin-stat-card glass" data-astro-cid-u2h3djql> <div class="stat-icon-wrapper kids" data-astro-cid-u2h3djql>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "star", "data-astro-cid-u2h3djql": true })}</div> <div class="stat-data" data-astro-cid-u2h3djql> <span class="stat-num" data-astro-cid-u2h3djql>${totalStars}</span> <span class="stat-label" data-astro-cid-u2h3djql>Kids Stars Distributed</span> </div> </div> </div> <section class="admin-actions" data-astro-cid-u2h3djql> <div class="glass panel placeholder-panel" data-astro-cid-u2h3djql> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "settings", "size": 48, "class": "muted-icon", "data-astro-cid-u2h3djql": true })} <h3 data-astro-cid-u2h3djql>System Settings</h3> <p data-astro-cid-u2h3djql>Global app configurations will appear here in future updates.</p> </div> <div class="glass panel placeholder-panel" data-astro-cid-u2h3djql> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "database", "size": 48, "class": "muted-icon", "data-astro-cid-u2h3djql": true })} <h3 data-astro-cid-u2h3djql>Data Management</h3> <p data-astro-cid-u2h3djql>Direct user database interfaces will appear here in future updates.</p> </div> </section> </main> </div>  ${renderScript($$result2, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
