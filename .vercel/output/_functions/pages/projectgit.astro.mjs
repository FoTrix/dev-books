import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_HkpvVbJC.mjs';
import 'kleur/colors';
import 'clsx';
import { a as PUBLIC_REPO_API } from '../chunks/server_BOT3FfFt.mjs';
import axios from 'axios';
import { $ as $$Layout } from '../chunks/Layout_Cr-KZTR-.mjs';
export { renderers } from '../renderers.mjs';

const $$Repos = createComponent(async ($$result, $$props, $$slots) => {
  const response = await axios.get(PUBLIC_REPO_API);
  const repos = await response.data;
  return renderTemplate`${repos.map((repo) => renderTemplate`${maybeRenderHead()}<h1> name: ${repo.name}</h1>
        <p> url: ${repo.url}</p>`)}`;
}, "/Users/danieluribe/Desktop/curso-astro/dev-books/src/components/Repos.astro", void 0);

const $$Projectgit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "proyectos - github" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Repos", $$Repos, {})} ` })}`;
}, "/Users/danieluribe/Desktop/curso-astro/dev-books/src/pages/projectgit.astro", void 0);

const $$file = "/Users/danieluribe/Desktop/curso-astro/dev-books/src/pages/projectgit.astro";
const $$url = "/projectgit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projectgit,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
