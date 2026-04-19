// @ts-check
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-disclosure.trueberryless.org',
  integrations: [
    expressiveCode({
      themes: ['catppuccin-latte', 'catppuccin-mocha'],
    }),
  ],
});
