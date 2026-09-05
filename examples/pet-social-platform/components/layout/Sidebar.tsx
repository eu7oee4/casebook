"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import { localePath, splitLocale } from "@/lib/i18n";
import { useT } from "@/lib/locale-context";
import { cn } from "@/lib/utils";
import { LocaleSwitch } from "./LocaleSwitch";

export function Sidebar() {
  const pathname = usePathname();
  const { locale, path } = splitLocale(pathname);
  const t = useT();
  return (
    <aside className="hidden lg:flex lg:flex-col sticky top-0 h-screen border-r border-line bg-bg px-7 py-8">
      <div className="flex items-baseline justify-between">
        <span className="t-label-ink">{t({ en: "Case", zh: "案例" })}</span>
        <span className="t-label">2026</span>
      </div>
      <nav aria-label={t({ en: "Chapters", zh: "章节" })} className="mt-12 flex-1">
        <ol className="space-y-[2px]">
          {NAV.map((item) => {
            const active = path === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={localePath(locale, item.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group grid grid-cols-[28px_1fr] items-baseline gap-2 py-[7px] -mx-2 px-2 rounded-sm transition-colors",
                    active ? "text-ink" : "text-ink-3 hover:text-ink"
                  )}
                >
                  <span className={cn("t-mono", active ? "text-accent" : "text-ink-3 group-hover:text-ink-2")}>
                    {item.index}
                  </span>
                  <span className={cn("text-[14px] leading-5", active && "font-medium")}>{t(item.label)}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
      <div className="mt-8 space-y-1">
        <LocaleSwitch className="mb-5" />
        <div className="t-label">{t({ en: "Research case", zh: "研究案例" })}</div>
        <div className="t-label">{t({ en: "Product strategy", zh: "产品策略" })}</div>
        <div className="mt-5 pt-4 border-t border-line t-annotation">
          {t({ en: "Data shown is illustrative.", zh: "所示数据均为示意。" })}
          <br />
          {t({ en: "Navigate with", zh: "翻章：" })} <kbd className="t-mono">[</kbd> {t({ en: "and", zh: "与" })}{" "}
          <kbd className="t-mono">]</kbd>
        </div>
      </div>
    </aside>
  );
}
