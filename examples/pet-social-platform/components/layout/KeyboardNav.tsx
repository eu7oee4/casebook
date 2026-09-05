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
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const { locale } = splitLocale(pathname);
      const i = navIndexFor(pathname);
      if (e.key === "]" && i < NAV.length - 1) router.push(localePath(locale, NAV[i + 1].href));
      if (e.key === "[" && i > 0) router.push(localePath(locale, NAV[i - 1].href));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname, router]);

  return null;
}
