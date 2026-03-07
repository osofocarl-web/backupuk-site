import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderScript } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Auth;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/profile");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Member Login", "data-astro-cid-5ndk7oiz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-container animate-fade-in" data-astro-cid-5ndk7oiz> <div class="auth-card glass" data-astro-cid-5ndk7oiz> <div class="auth-header" data-astro-cid-5ndk7oiz> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "users", "class": "auth-icon", "data-astro-cid-5ndk7oiz": true })} <h1 data-astro-cid-5ndk7oiz>Membership Portal</h1> <p data-astro-cid-5ndk7oiz>Sign in to access your dashboard and spiritual progress.</p> </div> <form id="auth-form" class="auth-form" data-astro-cid-5ndk7oiz> <div class="input-group" data-astro-cid-5ndk7oiz> <label for="email" data-astro-cid-5ndk7oiz>Email</label> <div class="input-with-icon" data-astro-cid-5ndk7oiz> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "mail", "size": 18, "data-astro-cid-5ndk7oiz": true })} <input type="email" id="email" required placeholder="you@example.com" data-astro-cid-5ndk7oiz> </div> </div> <div class="input-group" data-astro-cid-5ndk7oiz> <label for="password" data-astro-cid-5ndk7oiz>Password</label> <div class="input-with-icon" data-astro-cid-5ndk7oiz> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "lock", "size": 18, "data-astro-cid-5ndk7oiz": true })} <input type="password" id="password" required placeholder="••••••••" data-astro-cid-5ndk7oiz> </div> </div> <div class="auth-actions" data-astro-cid-5ndk7oiz> <button type="submit" id="login-btn" class="btn-primary w-full" data-astro-cid-5ndk7oiz>
Log In ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "arrow-right", "size": 16, "data-astro-cid-5ndk7oiz": true })} </button> <div class="divider" data-astro-cid-5ndk7oiz><span data-astro-cid-5ndk7oiz>or</span></div> <button type="button" id="signup-btn" class="btn-secondary w-full" data-astro-cid-5ndk7oiz>
Create an Account
</button> </div> </form> <div id="auth-message" class="auth-message hidden" data-astro-cid-5ndk7oiz></div> <div class="admin-link-container" data-astro-cid-5ndk7oiz> <a href="/admin/login" class="admin-link" data-astro-cid-5ndk7oiz>Church Administrator? Log in here.</a> </div> </div> </div>  ${renderScript($$result2, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/auth.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/auth.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/auth.astro";
const $$url = "/auth";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Auth,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
