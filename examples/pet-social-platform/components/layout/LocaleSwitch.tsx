"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABEL, localePath, splitLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** EN / 中文 toggle that keeps the current chapter. */
export function LocaleSwitch({ className }: { className?: string }) {
  const pathname = usePathname();
  const { locale, path } = splitLocale(pathname);
  return (
    <div className={cn("inline-flex items-center gap-2", className)} role="group" aria-label="Language">
      {LOCALES.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-2">
          {i > 0 && <span className="text-line-2" aria-hidden>/</span>}
          <Link
            href={localePath(l, path)}
            hrefLang={l}
            aria-current={l === locale ? "true" : undefined}
            className={cn("t-mono transition-colors", l === locale ? "text-ink" : "text-ink-3 hover:text-ink")}
          >
            {LOCALE_LABEL[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
