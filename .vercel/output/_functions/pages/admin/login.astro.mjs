import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../../chunks/Layout_DWS-D9My.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Secure Login", "data-astro-cid-rf56lckb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-auth-container animate-fade-in" data-astro-cid-rf56lckb> <div class="admin-auth-card glass" data-astro-cid-rf56lckb> <div class="auth-header" data-astro-cid-rf56lckb> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "shield-check", "class": "auth-icon-admin", "data-astro-cid-rf56lckb": true })} <h1 data-astro-cid-rf56lckb>Admin Portal</h1> <p data-astro-cid-rf56lckb>Restricted access for authorized church leadership.</p> </div> <form id="admin-auth-form" class="auth-form" data-astro-cid-rf56lckb> <div class="input-group" data-astro-cid-rf56lckb> <label for="email" data-astro-cid-rf56lckb>Administrator Email</label> <div class="input-with-icon" data-astro-cid-rf56lckb> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "shield", "size": 18, "data-astro-cid-rf56lckb": true })} <input type="email" id="email" required placeholder="admin@lifeline.com" data-astro-cid-rf56lckb> </div> </div> <div class="input-group" data-astro-cid-rf56lckb> <label for="password" data-astro-cid-rf56lckb>Security Passkey</label> <div class="input-with-icon" data-astro-cid-rf56lckb> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "key", "size": 18, "data-astro-cid-rf56lckb": true })} <input type="password" id="password" required placeholder="••••••••" data-astro-cid-rf56lckb> </div> </div> <div class="auth-actions" data-astro-cid-rf56lckb> <button type="submit" id="admin-login-btn" class="btn-admin w-full" data-astro-cid-rf56lckb>
Secure Login ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "lock", "size": 16, "data-astro-cid-rf56lckb": true })} </button> </div> </form> <div id="auth-message" class="auth-message hidden" data-astro-cid-rf56lckb></div> <div class="back-link-container" data-astro-cid-rf56lckb> <a href="/auth" class="back-link" data-astro-cid-rf56lckb>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "arrow-left", "size": 14, "data-astro-cid-rf56lckb": true })} Return to Member Portal</a> </div> </div> </div>  ${renderScript($$result2, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
