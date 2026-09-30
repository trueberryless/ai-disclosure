import { describe, expect, test } from "vitest";

import { getCanonicalUrl, getOpenGraphImageUrl } from "../../src/libs/metadata";

const site = new URL("https://ai-disclosure.trueberryless.org");

describe("getCanonicalUrl", () => {
  test("resolves the pathname against the site", () => {
    expect(getCanonicalUrl("/", site).href).toBe(
      "https://ai-disclosure.trueberryless.org/"
    );
  });
});

describe("getOpenGraphImageUrl", () => {
  test("points to the image in the public folder", () => {
    expect(getOpenGraphImageUrl(site).href).toBe(
      "https://ai-disclosure.trueberryless.org/og-image.png"
    );
  });
});
