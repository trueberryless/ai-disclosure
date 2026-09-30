import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, test } from "vitest";

import Page from "../../src/pages/index.astro";

let html: string;

beforeAll(async () => {
  const container = await AstroContainer.create({
    astroConfig: { site: "https://ai-disclosure.trueberryless.org" },
  });

  html = await container.renderToString(Page, {
    request: new Request("https://ai-disclosure.trueberryless.org/"),
  });
});

describe("index page", () => {
  test("has one level one heading, a main landmark and a skip link", () => {
    expect(html.match(/<h1[ >]/g)).toHaveLength(1);
    expect(html).toContain('<main id="content"');
    expect(html).toContain('href="#content"');
  });

  test("allows zooming", () => {
    expect(html).not.toMatch(/user-scalable=no|maximum-scale/);
  });

  test("sets canonical and Open Graph metadata", () => {
    expect(html).toContain(
      '<link rel="canonical" href="https://ai-disclosure.trueberryless.org/">'
    );
    expect(html).toContain(
      'content="https://ai-disclosure.trueberryless.org/og-image.png"'
    );
    expect(html).toContain('<meta property="og:image:alt"');
  });

  test("offers every theme preference", () => {
    for (const value of ["system", "light", "dark"]) {
      expect(html).toMatch(new RegExp(`<option[^>]* value="${value}"`));
    }
  });

  test("groups the FAQ into one exclusive accordion", () => {
    const details = html.match(/<details[^>]*>/g) ?? [];

    expect(details.length).toBeGreaterThan(1);
    expect(details.every((tag) => tag.includes('name="faq"'))).toBe(true);
  });
});
