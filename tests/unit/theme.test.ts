import { describe, expect, test } from "vitest";

import {
  THEME_STORAGE_KEY,
  applyThemePreference,
  getThemeAttributes,
  parseThemePreference,
  readThemePreference,
  storeThemePreference,
} from "../../src/libs/theme";

describe("parseThemePreference", () => {
  test.each(["system", "light", "dark"])("accepts %s", (value) => {
    expect(parseThemePreference(value)).toBe(value);
  });

  test.each([null, undefined, "", "Dark", "blue", 1])(
    "falls back to system for %s",
    (value) => {
      expect(parseThemePreference(value)).toBe("system");
    }
  );
});

describe("getThemeAttributes", () => {
  test("lets the system decide by default", () => {
    expect(getThemeAttributes("system")).toEqual({
      codeTheme: undefined,
      colorScheme: "light dark",
    });
  });

  test("pins the code theme for explicit preferences", () => {
    expect(getThemeAttributes("light")).toEqual({
      codeTheme: "catppuccin-latte",
      colorScheme: "light",
    });
    expect(getThemeAttributes("dark")).toEqual({
      codeTheme: "catppuccin-mocha",
      colorScheme: "dark",
    });
  });
});

describe("applyThemePreference", () => {
  function createRoot() {
    return {
      dataset: {} as Record<string, string | undefined>,
      style: { colorScheme: "" },
    } as unknown as HTMLElement;
  }

  test("sets the code theme and color scheme", () => {
    const root = createRoot();

    applyThemePreference(root, "dark");

    expect(root.dataset["theme"]).toBe("catppuccin-mocha");
    expect(root.style.colorScheme).toBe("dark");
  });

  test("removes the code theme for the system preference", () => {
    const root = createRoot();

    applyThemePreference(root, "light");
    applyThemePreference(root, "system");

    expect(root.dataset["theme"]).toBeUndefined();
    expect(root.style.colorScheme).toBe("light dark");
  });
});

describe("theme storage", () => {
  const throwingStorage = {
    getItem() {
      throw new Error("blocked");
    },
    setItem() {
      throw new Error("blocked");
    },
  };

  test("reads a stored preference", () => {
    expect(
      readThemePreference({
        getItem: (key) => (key === THEME_STORAGE_KEY ? "dark" : null),
      })
    ).toBe("dark");
  });

  test("falls back to system when storage is empty or blocked", () => {
    expect(readThemePreference({ getItem: () => null })).toBe("system");
    expect(readThemePreference(throwingStorage)).toBe("system");
  });

  test("stores a preference and ignores blocked storage", () => {
    const values = new Map<string, string>();

    storeThemePreference(
      { setItem: (key, value) => values.set(key, value) },
      "light"
    );

    expect(values.get(THEME_STORAGE_KEY)).toBe("light");
    expect(() => storeThemePreference(throwingStorage, "light")).not.toThrow();
  });
});
