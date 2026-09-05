import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { InsightCard } from "@/components/ui/InsightCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CompetitorExplorer } from "@/components/product/competitors/CompetitorExplorer";
import { competitors, competitorInsights, tiers } from "@/data/competitors";
import { DEFAULT_LOCALE, isLocale, tr, type Text } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "竞品" : "Competitors" };
}

const TIER_INTRO: ReadonlyArray<{ letter: string; value: "direct" | "industry" | "benchmark"; title: Text; scope: Text }> = [
  {
    letter: "A",
    value: "direct",
    title: { en: "Direct competitors", zh: "直接竞品" },
    scope: { en: "Pet social", zh: "宠物社交" },
  },
  {
    letter: "B",
    value: "industry",
    title: { en: "Industry competitors", zh: "行业竞品" },
    scope: { en: "Pet content · Pet services · Pet commerce", zh: "宠物内容 · 宠物服务 · 宠物电商" },
  },
  {
    letter: "C",
    value: "benchmark",
    title: { en: "Cross-industry benchmarks", zh: "跨行业参考" },
    scope: { en: "Content · Social · Local", zh: "内容 · 社交 · 本地" },
  },
];

export default async function CompetitorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      <PageHeader
        index="03"
        title={t({ en: "Competitive Landscape", zh: "竞争格局" })}
        subtitle={t({
          en: "Different products solve different parts of the pet lifecycle.",
          zh: "不同的产品解决宠物生命周期的不同环节。",
        })}
        lede={t({
          en: "No single product owns identity, relationship and service together. Reading the landscape in three tiers keeps direct rivals, adjacent pet businesses and cross-industry mechanisms from blurring into one list.",
          zh: "没有哪一个产品同时拥有身份、关系与服务。按三个层级来看格局，可以避免把直接对手、相邻的宠物生意和跨行业机制混成一张清单。",
        })}
      />

      <Section className="mt-12 lg:mt-16">
        <SectionHeader
          label={t({ en: "Research system", zh: "研究体系" })}
          title={t({ en: "Three tiers, three questions", zh: "三个层级，三个问题" })}
        />
        <Stagger className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {TIER_INTRO.map((tier) => {
            const meta = tiers.find((x) => x.value === tier.value)!;
            const n = competitors.filter((c) => c.tier === tier.value).length;
            return (
              <StaggerItem key={tier.letter} className="border-t border-ink pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="t-mono text-accent">{tier.letter}</span>
                  <span className="t-label">
                    {n} {t({ en: "products", zh: "个产品" })}
                  </span>
                </div>
                <h3 className="t-h3 mt-3">{t(tier.title)}</h3>
                <div className="t-label mt-2">{t(tier.scope)}</div>
                <p className="t-body-sm text-ink-2 mt-4">{t(meta.description)}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section>
        <SectionHeader
          label={t({ en: "Landscape", zh: "格局" })}
          title={t({
            en: "Content → Service, Individual Utility → Social Ecosystem",
            zh: "内容 → 服务，个人工具 → 社交生态",
          })}
          description={t({
            en: "Filter a tier to read the map and the product notes together. Each product card lists the mechanism worth learning, not just the gap.",
            zh: "筛选一个层级，把地图和产品笔记放在一起读。每张产品卡都列出值得借鉴的机制，而不只是缺口。",
          })}
        />
        <div className="mt-8">
          <CompetitorExplorer />
        </div>
      </Section>

      <Section>
        <SectionHeader
          label={t({ en: "What the landscape says", zh: "格局说明了什么" })}
          title={t({ en: "Three readings", zh: "三个解读" })}
          size="lg"
        />
        <Stagger className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10">
          {competitorInsights.map((text, i) => (
            <StaggerItem key={text.en}>
              <InsightCard index={`0${i + 1}`} title={t(text)} tone={i === 2 ? "accent" : "default"} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Footer />
    </PageContainer>
  );
}
