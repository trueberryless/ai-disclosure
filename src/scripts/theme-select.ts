import {
  applyThemePreference,
  parseThemePreference,
  readThemePreference,
  storeThemePreference,
} from "../libs/theme";

const select = document.querySelector<HTMLSelectElement>("#theme-select");
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;

if (select) {
  select.value = readThemePreference(localStorage);

  select.addEventListener("change", () => {
    const preference = parseThemePreference(select.value);

    storeThemePreference(localStorage, preference);
    applyThemePreference(root, preference);
  });
}

systemTheme.addEventListener("change", () => {
  applyThemePreference(root, readThemePreference(localStorage));
});
