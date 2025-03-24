import { c as createComponent, a as createAstro, d as addAttribute, f as renderScript, r as renderTemplate, b as renderComponent, g as renderHead, h as renderSlot } from './astro/server_jkKJgDP7.mjs';
import 'kleur/colors';
/* empty css                        */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/danieluribe/Desktop/curso-astro/dev-books/node_modules/.pnpm/astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/danieluribe/Desktop/curso-astro/dev-books/node_modules/.pnpm/astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Dev Books" } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/danieluribe/Desktop/curso-astro/dev-books/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
