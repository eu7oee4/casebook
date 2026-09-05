/**
 * Bilingual content model.
 * Every user-visible string is either a plain string (language-neutral: numbers, product names, codes)
 * or a `Text` object holding both languages. `t()` resolves it for the active locale.
 */
export type Locale = "en" | "zh";
export const LOCALES: readonly Locale[] = ["en", "zh"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export type Text = { en: string; zh: string };
export type Str = string | Text;

export function isLocale(x: string | undefined): x is Locale {
  return x === "en" || x === "zh";
}

export function t(s: Str, locale: Locale): string {
  return typeof s === "string" ? s : s[locale] ?? s.en;
}

/** Bind a locale once: `const t = tr(locale); t(x)`. */
export function tr(locale: Locale) {
  return (s: Str) => t(s, locale);
}

/** `/market` → `/zh/market`; `/` → `/zh`. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}

/** `/zh/market` → { locale: "zh", path: "/market" }. Unknown prefix → default locale. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const m = pathname.match(/^\/(en|zh)(\/.*)?$/);
  if (!m) return { locale: DEFAULT_LOCALE, path: pathname || "/" };
  return { locale: m[1] as Locale, path: m[2] && m[2] !== "/" ? m[2] : "/" };
}

export const LOCALE_LABEL: Record<Locale, string> = { en: "EN", zh: "中文" };
