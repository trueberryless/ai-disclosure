export const THEME_STORAGE_KEY = "theme-preference";

export const THEME_PREFERENCES = ["system", "light", "dark"] as const;

export type ThemePreference = (typeof THEME_PREFERENCES)[number];

const CODE_THEMES = {
  dark: "catppuccin-mocha",
  light: "catppuccin-latte",
} as const;

export function parseThemePreference(value: unknown): ThemePreference {
  return (
    THEME_PREFERENCES.find((preference) => preference === value) ?? "system"
  );
}

export function getThemeAttributes(preference: ThemePreference) {
  if (preference === "system") {
    return { codeTheme: undefined, colorScheme: "light dark" };
  }

  return { codeTheme: CODE_THEMES[preference], colorScheme: preference };
}

export function applyThemePreference(
  root: HTMLElement,
  preference: ThemePreference
) {
  const { codeTheme, colorScheme } = getThemeAttributes(preference);

  if (codeTheme) {
    root.dataset["theme"] = codeTheme;
  } else {
    delete root.dataset["theme"];
  }

  root.style.colorScheme = colorScheme;
}

export function readThemePreference(storage: Pick<Storage, "getItem">) {
  try {
    return parseThemePreference(storage.getItem(THEME_STORAGE_KEY));
  } catch {
    return "system";
  }
}

export function storeThemePreference(
  storage: Pick<Storage, "setItem">,
  preference: ThemePreference
) {
  try {
    storage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    return;
  }
}
