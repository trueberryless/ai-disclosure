import { describe, expect, test } from "vitest";

import { getCanonicalUrl, getOpenGraphImageUrl } from "../../src/libs/metadata";

const site = new URL("https://ai-disclosure.netlify.app");

describe("getCanonicalUrl", () => {
  test("resolves the pathname against the site", () => {
    expect(getCanonicalUrl("/", site).href).toBe(
      "https://ai-disclosure.netlify.app/"
    );
  });
});

describe("getOpenGraphImageUrl", () => {
  test("points to the image in the public folder", () => {
    expect(getOpenGraphImageUrl(site).href).toBe(
      "https://ai-disclosure.netlify.app/og-image.png"
    );
  });
});
