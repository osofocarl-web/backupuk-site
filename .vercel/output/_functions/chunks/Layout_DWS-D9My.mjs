import { c as createComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, a as renderTemplate, b as createAstro, r as renderComponent, d as renderScript, i as renderHead, j as renderSlot } from './astro/server_tKDu1v88.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';
import * as icons from 'lucide-static';

const $$Astro$1 = createAstro();
const $$LucideIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LucideIcon;
  const { name, size = 24, color = "currentColor", class: className } = Astro2.props;
  const iconName = name.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
  const icon = icons[iconName];
  if (!icon) {
    console.warn(`Icon "${name}" (as "${iconName}") not found in lucide-static.`);
  }
  return renderTemplate`${icon && renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none"${addAttribute(color, "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}>${unescapeHTML(icon)}</svg>`}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/components/LucideIcon.astro", void 0);

const $$PastorFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="pastor-footer glass" data-astro-cid-qjra3n6b> <div class="footer-content" data-astro-cid-qjra3n6b> <div class="pastor-image-wrapper" data-astro-cid-qjra3n6b> <img src="/logo.png" alt="Pastor Carlking" class="pastor-image" data-astro-cid-qjra3n6b> </div> <div class="footer-message" data-astro-cid-qjra3n6b> <h4 data-astro-cid-qjra3n6b>Welcome to Lifeline Jacket</h4> <p data-astro-cid-qjra3n6b>I am so thrilled you are dedicating time to deepen your walk with God. May this app be a powerful tool in your spiritual journey.</p> <div class="signature-box" data-astro-cid-qjra3n6b> <span class="signature" data-astro-cid-qjra3n6b>pastor carl</span> <span class="title" data-astro-cid-qjra3n6b>Lead Pastor</span> </div> <div class="support-info" data-astro-cid-qjra3n6b> <h5 data-astro-cid-qjra3n6b>${renderComponent($$result, "Icon", $$LucideIcon, { "name": "help-circle", "size": 14, "data-astro-cid-qjra3n6b": true })} Need Administrative Support?</h5> <a href="mailto:admin@lifelineglobalministries.org" data-astro-cid-qjra3n6b>${renderComponent($$result, "Icon", $$LucideIcon, { "name": "mail", "size": 14, "data-astro-cid-qjra3n6b": true })} admin@lifelineglobalministries.org</a> <a href="tel:07939837099" data-astro-cid-qjra3n6b>${renderComponent($$result, "Icon", $$LucideIcon, { "name": "phone", "size": 14, "data-astro-cid-qjra3n6b": true })} Tel: 07939837099</a> </div> </div> </div> </footer> `;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/components/PastorFooter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Lifeline Jacket Bible Study App - Empowering your faith journey." } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Lifeline Jacket</title><meta name="description"${addAttribute(description, "content")}><!-- PWA -->${renderScript($$result, "C:/Users/John/OneDrive/Desktop/churchApp/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<link rel="manifest" href="/manifest.webmanifest">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="app-container" data-astro-cid-sckkx6r4> <header class="glass main-header" data-astro-cid-sckkx6r4> <div class="logo" data-astro-cid-sckkx6r4> <img src="/logo.png" alt="Lifeline Jacket Logo" class="logo-img" data-astro-cid-sckkx6r4> <span data-astro-cid-sckkx6r4>Lifeline <span data-astro-cid-sckkx6r4>Jacket</span></span> </div> <nav class="desktop-nav" data-astro-cid-sckkx6r4> <a href="/" data-astro-cid-sckkx6r4>Home</a> <a href="/study" data-astro-cid-sckkx6r4>Study Plan</a> <a href="/academy" data-astro-cid-sckkx6r4>Lifeline Bible Academy</a> <a href="/children" data-astro-cid-sckkx6r4>Children</a> </nav> <a href="/profile" class="profile-btn" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Icon", $$LucideIcon, { "name": "user", "data-astro-cid-sckkx6r4": true })} </a> </header> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "PastorFooter", $$PastorFooter, { "data-astro-cid-sckkx6r4": true })} <nav class="mobile-nav glass" data-astro-cid-sckkx6r4> <a href="/" class="active" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Icon", $$LucideIcon, { "name": "home", "data-astro-cid-sckkx6r4": true })} <span data-astro-cid-sckkx6r4>Home</span> </a> <a href="/study" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Icon", $$LucideIcon, { "name": "calendar", "data-astro-cid-sckkx6r4": true })} <span data-astro-cid-sckkx6r4>Study</span> </a> <a href="/academy" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Icon", $$LucideIcon, { "name": "graduation-cap", "data-astro-cid-sckkx6r4": true })} <span data-astro-cid-sckkx6r4>Academy</span> </a> <a href="/children" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Icon", $$LucideIcon, { "name": "smile", "data-astro-cid-sckkx6r4": true })} <span data-astro-cid-sckkx6r4>Kids</span> </a> <a href="/profile" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Icon", $$LucideIcon, { "name": "user", "data-astro-cid-sckkx6r4": true })} <span data-astro-cid-sckkx6r4>Me</span> </a> </nav> </div>  </body> </html>`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$LucideIcon as a };
