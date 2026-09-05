"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV, navIndexFor } from "@/lib/nav";
import { localePath, splitLocale } from "@/lib/i18n";
import { useT } from "@/lib/locale-context";
import { cn } from "@/lib/utils";
import { LocaleSwitch } from "./LocaleSwitch";

export function TopBar() {
  const pathname = usePathname();
  const { locale, path } = splitLocale(pathname);
  const t = useT();
  const [open, setOpen] = useState(false);
  const current = NAV[navIndexFor(pathname)];

  return (
    <div className="lg:hidden sticky top-0 z-40 bg-bg/95 backdrop-blur-[2px] border-b border-line">
      <div className="flex items-center justify-between px-5 h-14">
        <div className="flex items-baseline gap-3 min-w-0">
          <span className="t-label-ink whitespace-nowrap">{t({ en: "Case / 2026", zh: "案例 / 2026" })}</span>
          <span className="t-mono text-accent">{current.index}</span>
          <span className="text-sm truncate">{t(current.label)}</span>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="chapter-menu"
          aria-label={open ? t({ en: "Close chapters", zh: "关闭章节" }) : t({ en: "Open chapters", zh: "打开章节" })}
          onClick={() => setOpen((v) => !v)}
          className="p-2 -mr-2 text-ink-2 hover:text-ink"
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="chapter-menu"
            aria-label={t({ en: "Chapters", zh: "章节" })}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="border-t border-line px-5 py-3 bg-bg"
          >
            <ol className="grid grid-cols-2 sm:grid-cols-3 gap-x-6">
              {NAV.map((item) => {
                const active = path === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={localePath(locale, item.href)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-baseline gap-2 py-2 text-sm",
                        active ? "text-ink font-medium" : "text-ink-2"
                      )}
                    >
                      <span className={cn("t-mono", active ? "text-accent" : "text-ink-3")}>{item.index}</span>
                      {t(item.label)}
                    </Link>
                  </li>
                );
              })}
            </ol>
            <div className="mt-3 pt-3 border-t border-line">
              <LocaleSwitch />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
