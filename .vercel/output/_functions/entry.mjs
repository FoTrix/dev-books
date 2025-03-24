import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_CHn1qovV.mjs';
import { manifest } from './manifest_BwcFkr8k.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_C7QepoY-.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DJnYb4lV.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/book/_id_.astro.mjs');
const _page2 = () => import('./pages/projectgit.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/book/[id].astro", _page1],
    ["src/pages/projectgit.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cb7d0ac8-e2cc-40e7-aa49-db94a137a39a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
