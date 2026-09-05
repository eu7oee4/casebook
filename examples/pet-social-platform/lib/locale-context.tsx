"use client";

import { createContext, useContext } from "react";
import { DEFAULT_LOCALE, tr, type Locale, type Str } from "./i18n";

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** In client components: `const t = useT(); t({ en, zh })`. */
export function useT(): (s: Str) => string {
  return tr(useContext(LocaleContext));
}
