import type { Text } from "./i18n";
import { splitLocale } from "./i18n";

export type NavItem = {
  index: string;
  label: Text;
  /** Locale-less path; render with `localePath(locale, href)`. */
  href: string;
  short: Text;
};

export const NAV: NavItem[] = [
  { index: "01", label: { en: "Overview", zh: "总览" }, href: "/", short: { en: "Executive summary", zh: "执行摘要" } },
  { index: "02", label: { en: "Market", zh: "市场" }, href: "/market", short: { en: "Understanding the opportunity", zh: "理解机会" } },
  { index: "03", label: { en: "Competitors", zh: "竞品" }, href: "/competitors", short: { en: "Competitive landscape", zh: "竞争格局" } },
  { index: "04", label: { en: "Content", zh: "内容" }, href: "/content", short: { en: "From posting to knowledge", zh: "从发布到知识" } },
  { index: "05", label: { en: "Social", zh: "社交" }, href: "/social", short: { en: "From pet identity to human relationship", zh: "从宠物身份到人的关系" } },
  { index: "06", label: { en: "Local", zh: "本地" }, href: "/local", short: { en: "Where digital relationships become real", zh: "线上关系落地之处" } },
  { index: "07", label: { en: "AI Strategy", zh: "AI 策略" }, href: "/ai-strategy", short: { en: "AI as the intelligence layer", zh: "AI 作为智能层" } },
  { index: "08", label: { en: "Benchmark", zh: "跨界参考" }, href: "/benchmark", short: { en: "Cross-industry mechanisms", zh: "跨行业机制" } },
  { index: "09", label: { en: "Risks & Unknowns", zh: "风险与未解" }, href: "/risks", short: { en: "Limits, constraints, and what could not be measured", zh: "能力边界、法律约束，以及测不到的东西" } },
  { index: "10", label: { en: "Insights", zh: "结论" }, href: "/insights", short: { en: "From research to product strategy", zh: "从研究到产品策略" } },
];

/** Index of the current chapter for a pathname with or without a locale prefix. */
export function navIndexFor(pathname: string): number {
  const { path } = splitLocale(pathname);
  const i = NAV.findIndex((n) => n.href === path);
  return i === -1 ? 0 : i;
}
