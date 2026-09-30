import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    expressiveCode({
      defaultProps: { wrap: true },
      themes: ["catppuccin-latte", "catppuccin-mocha"],
    }),
  ],
  site: "https://ai-disclosure.trueberryless.org",
});
