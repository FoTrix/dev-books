import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_jkKJgDP7.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SCORE_API_URL } from './server_DrZXGvAQ.mjs';

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const score = await fetch(SCORE_API_URL);
  const scoreValue = await score.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">⭐️ Puntuación: ${scoreValue.trim()} / 5</span>`;
}, "/Users/danieluribe/Desktop/curso-astro/dev-books/src/components/BookScore.astro", void 0);

const $$file = "/Users/danieluribe/Desktop/curso-astro/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
