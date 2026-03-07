import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DlFpYq4x.mjs';
import { manifest } from './manifest_Ca2DzPHv.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/academy/_slug_.astro.mjs');
const _page2 = () => import('./pages/academy.astro.mjs');
const _page3 = () => import('./pages/admin/login.astro.mjs');
const _page4 = () => import('./pages/admin.astro.mjs');
const _page5 = () => import('./pages/auth.astro.mjs');
const _page6 = () => import('./pages/children/_slug_.astro.mjs');
const _page7 = () => import('./pages/children.astro.mjs');
const _page8 = () => import('./pages/notes.astro.mjs');
const _page9 = () => import('./pages/profile.astro.mjs');
const _page10 = () => import('./pages/study/today.astro.mjs');
const _page11 = () => import('./pages/study/_day_.astro.mjs');
const _page12 = () => import('./pages/study.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/academy/[slug].astro", _page1],
    ["src/pages/academy/index.astro", _page2],
    ["src/pages/admin/login.astro", _page3],
    ["src/pages/admin/index.astro", _page4],
    ["src/pages/auth.astro", _page5],
    ["src/pages/children/[slug].astro", _page6],
    ["src/pages/children/index.astro", _page7],
    ["src/pages/notes/index.astro", _page8],
    ["src/pages/profile.astro", _page9],
    ["src/pages/study/today.astro", _page10],
    ["src/pages/study/[day].astro", _page11],
    ["src/pages/study/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "79d10f96-009f-4932-b29f-f3d2305b70f8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
