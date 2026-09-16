"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV, navIndexFor } from "@/lib/nav";
import { localePath, splitLocale } from "@/lib/i18n";

export function KeyboardNav() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.isComposing) return;
      const target = e.target as HTMLElement | null;
      if (target && (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      // `key` is the character the layout produced, and a Chinese IME turns the bracket keys into 「 and 」,
      // so fall back to `code`, which names the physical key whatever the input method does with it.
      const prev = e.key === "[" || e.key === "「" || e.key === "【" || e.code === "BracketLeft";
      const next = e.key === "]" || e.key === "」" || e.key === "】" || e.code === "BracketRight";
      if (!prev && !next) return;
      const { locale } = splitLocale(pathname);
      const i = navIndexFor(pathname);
      if (next && i < NAV.length - 1) router.push(localePath(locale, NAV[i + 1].href));
      if (prev && i > 0) router.push(localePath(locale, NAV[i - 1].href));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname, router]);

  return null;
}
