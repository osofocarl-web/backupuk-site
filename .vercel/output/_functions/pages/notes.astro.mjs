import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderScript } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Notes", "data-astro-cid-mejek24l": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="notes-intro animate-fade-in" data-astro-cid-mejek24l> <div class="header-with-icon" data-astro-cid-mejek24l> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "sticky-note", "class": "notes-icon", "data-astro-cid-mejek24l": true })} <h1 data-astro-cid-mejek24l>My <span class="gold-text" data-astro-cid-mejek24l>Notes</span></h1> </div> <p data-astro-cid-mejek24l>Chronicle your personal insights and revelations.</p> </section> <div class="notes-container animate-fade-in" style="animation-delay: 0.1s;" data-astro-cid-mejek24l> <div class="note-editor glass" data-astro-cid-mejek24l> <input type="text" id="noteTitle" placeholder="Note Title..." class="note-input" data-astro-cid-mejek24l> <textarea id="noteContent" placeholder="Write your insights here..." class="note-textarea" data-astro-cid-mejek24l></textarea> <div class="editor-actions" data-astro-cid-mejek24l> <button id="saveNote" class="btn-primary" data-astro-cid-mejek24l> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "save", "size": 18, "data-astro-cid-mejek24l": true })} Save Note
</button> </div> </div> <div class="saved-notes" data-astro-cid-mejek24l> <h2 data-astro-cid-mejek24l>Recent Notes</h2> <div id="notesList" class="notes-grid" data-astro-cid-mejek24l> <!-- Notes will be injected here via JS --> </div> </div> </div>  ${renderScript($$result2, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/notes/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/notes/index.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/notes/index.astro";
const $$url = "/notes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
