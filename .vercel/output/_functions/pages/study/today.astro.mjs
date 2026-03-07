import { c as createComponent, b as createAstro } from '../../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Today = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Today;
  return Astro2.redirect("/study/day-1");
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/study/today.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/study/today.astro";
const $$url = "/study/today";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Today,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
