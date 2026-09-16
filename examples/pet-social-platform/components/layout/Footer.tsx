"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { NAV, navIndexFor } from "@/lib/nav";
import { localePath, splitLocale } from "@/lib/i18n";
import { useT } from "@/lib/locale-context";

export function Footer() {
  const pathname = usePathname();
  const { locale } = splitLocale(pathname);
  const t = useT();
  const i = navIndexFor(pathname);
  const prev = i > 0 ? NAV[i - 1] : null;
  const next = i < NAV.length - 1 ? NAV[i + 1] : null;

  return (
    <footer className="mt-28 border-t border-ink pt-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          {prev ? (
            <Link href={localePath(locale, prev.href)} className="group inline-flex flex-col gap-1">
              <span className="t-label inline-flex items-center gap-1.5">
                <ArrowLeft size={12} strokeWidth={1.5} /> {t({ en: "Previous", zh: "上一章" })}
              </span>
              <span className="text-sm text-ink-2 group-hover:text-ink transition-colors">
                {prev.index} {t(prev.label)}
              </span>
            </Link>
          ) : (
            <span className="t-label">{t({ en: "Start", zh: "起点" })}</span>
          )}
        </div>
        <div className="text-right">
          {next ? (
            <Link href={localePath(locale, next.href)} className="group inline-flex flex-col items-end gap-1">
              <span className="t-label inline-flex items-center gap-1.5">
                {t({ en: "Next chapter", zh: "下一章" })} <ArrowRight size={12} strokeWidth={1.5} />
              </span>
              <span className="t-statement !text-[1.35rem] text-ink group-hover:text-accent-ink transition-colors">
                {next.index} · {t(next.label)}
              </span>
            </Link>
          ) : (
            <span className="t-label">{t({ en: "End of case", zh: "案例结束" })}</span>
          )}
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-baseline justify-between gap-4 t-annotation">
        <span>{t({ en: "Pet Social Platform · Product Research & AI Strategy · 2026", zh: "宠物社交平台 · 产品研究与 AI 策略 · 2026" })}</span>
        <span>{t({ en: "Market, competitor and mechanism figures are sourced; product targets and judgement fields are marked Illustrative.", zh: "市场、竞品、机制类数字均有出处；产品目标值与判断类字段标为示意。" })}</span>
      </div>
    </footer>
  );
}
