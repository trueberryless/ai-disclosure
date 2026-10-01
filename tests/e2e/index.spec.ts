import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows the title and the sections", async ({ page }) => {
    await expect(page).toHaveTitle("AI Disclosure");
    await expect(
      page.getByRole("heading", { level: 1, name: "AI Disclosure" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { level: 2 })).toHaveText([
      "The Value of Being Open",
      "Simple Disclosure Templates",
      "Adding Context for Different Scenarios",
      "You Are the Author",
      "FAQ",
      "Further Reading",
    ]);
  });

  test("renders the disclosure templates as code blocks", async ({ page }) => {
    await expect(page.locator(".expressive-code")).toHaveCount(3);
  });

  test("does not scroll horizontally", async ({ page }) => {
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth
    );

    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("skip link is the first focusable element and reaches the content", async ({
    page,
  }) => {
    await page.keyboard.press("Tab");

    const skipLink = page.getByRole("link", { name: "Skip to content" });

    await expect(skipLink).toBeFocused();
    await skipLink.press("Enter");
    await expect(page).toHaveURL(/#content$/);
  });

  test("opens one FAQ answer at a time", async ({ page }) => {
    const questions = page.locator("details summary");

    await questions.nth(0).click();
    await expect(page.locator("details[open]")).toHaveCount(1);

    await questions.nth(1).click();
    await expect(page.locator("details[open]")).toHaveCount(1);
    await expect(page.locator("details").nth(1)).toHaveAttribute("open", "");
  });

  test("remembers the chosen theme", async ({ page }) => {
    await page.getByLabel("Theme").selectOption("dark");
    await expect(page.locator("html")).toHaveAttribute(
      "data-theme",
      "catppuccin-mocha"
    );

    await page.reload();

    await expect(page.locator("html")).toHaveAttribute(
      "data-theme",
      "catppuccin-mocha"
    );
    await expect(page.getByLabel("Theme")).toHaveValue("dark");

    await page.getByLabel("Theme").selectOption("system");
    await expect(page.locator("html")).not.toHaveAttribute("data-theme");
  });

  for (const colorScheme of ["dark", "light"] as const) {
    test(`has no accessibility violations in ${colorScheme} mode`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme });
      await page.locator("details summary").first().click();

      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();

      expect(
        violations.map(
          ({ id, nodes }) =>
            `${id}: ${nodes.map(({ target }) => target.join(" ")).join(", ")}`
        )
      ).toEqual([]);
    });
  }
});
