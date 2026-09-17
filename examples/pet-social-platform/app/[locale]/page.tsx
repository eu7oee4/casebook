import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { InsightCard } from "@/components/ui/InsightCard";
import { ThesisChain } from "@/components/ui/FlowDiagram";
import { Badge } from "@/components/ui/Tag";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProvenanceMark } from "@/components/ui/Note";
import { overview, overviewScopeProvenance, overviewThesisProvenance, overviewInsightsProvenance, overviewOpportunitiesProvenance } from "@/data/overview";
import { isLocale, localePath, tr, DEFAULT_LOCALE } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "总览" : "Overview" };
}

export default async function OverviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      {/* Hero — executive summary */}
      <header className="pt-10 lg:pt-16 pb-12 lg:pb-16 border-b border-line">
        <div className="flex items-baseline gap-4">
          <span className="t-mono text-accent">01</span>
          <span className="t-label">{t(overview.project)}</span>
        </div>
        <div className="mt-8 grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="t-h1">
              {t(overview.title[0])}
              <br />
              <span className="text-ink-2">
                {t(overview.title[1])}
                <br />
                {t(overview.title[2])}
              </span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="t-statement text-ink">{t(overview.subtitle)}</p>
            <p className="t-body text-ink-2 mt-6 max-w-[40ch]">{t(overview.summary)}</p>
            {locale === "en" && <p className="t-annotation mt-3 max-w-[40ch]">{overview.summaryZh}</p>}
            <p className="t-annotation mt-4 max-w-[40ch] border-t border-line-2 pt-3">{t(overview.positioning)}</p>
          </div>
        </div>
      </header>

      {/* Scope */}
      <Section className="mt-12 lg:mt-16">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="t-label">{t({ en: "Research scope", zh: "研究范围" })}</div>
              <ProvenanceMark provenance={overviewScopeProvenance} />
            </div>
            <p className="t-body-sm text-ink-2 mt-3 max-w-[34ch]">
              {t({
                en: "Six modules, one loop. Each chapter isolates a module; the strategy chapter connects them.",
                zh: "六个模块，一个闭环。每一章聚焦一个模块，策略章把它们连起来。",
              })}
            </p>
          </div>
          <Stagger className="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">
            {overview.scope.map((s, i) => (
              <StaggerItem key={s.label.en} className="border-t border-line-2 pt-3">
                <div className="t-mono text-ink-3">{String(i + 1).padStart(2, "0")}</div>
                <div className="t-h3 mt-2">{t(s.label)}</div>
                <div className="t-caption mt-1">{t(s.note)}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Core thesis */}
      <Section>
        <SectionHeader
          label={t({ en: "Core thesis", zh: "核心论点" })}
          provenance={overviewThesisProvenance}
          title={t({
            en: "A pet platform compounds when content turns into relationships, and relationships turn into local service.",
            zh: "当内容转化为关系、关系转化为本地服务时，宠物平台才会产生复利。",
          })}
          size="lg"
        />
        <div className="mt-10 grid-12 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-7">
            <ThesisChain nodes={overview.thesis.map((n) => ({ label: t(n.label), note: t(n.note), emphasis: n.emphasis }))} />
          </Reveal>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="t-label">{t({ en: "Reading the chain", zh: "如何读这条链" })}</div>
            <p className="t-body-sm text-ink-2 mt-3">
              {t({
                en: "Each step is a product surface with its own metric. Most pet apps stall at interaction that never becomes a relationship. BarkHappy got further — nearby matches, user-hosted play dates, dog-friendly place pages — and closed in 2025 with no transaction layer underneath it.",
                zh: "每一步都是一个有自己指标的产品界面。大多数宠物产品止步于互动，关系始终没有长出来。BarkHappy 走得更远——附近匹配、用户自办的约玩、宠物友好场所页——但下面没有交易层，2025 年关停。",
              })}
            </p>
            <p className="t-body-sm text-ink-2 mt-3">
              {t({
                en: "AI is not a step in the chain. It is the layer that makes each transition cheaper — understanding content, matching people, executing services. Cheaper on the easy majority: the cheap model tier is materially worse, not only cheaper, so knowing when to escalate is part of the design rather than an optimisation.",
                zh: "AI 不是链条中的一步，而是让每一次转化变得更便宜的那一层：理解内容、匹配人、执行服务。便宜只在「容易的大多数」上成立——便宜的模型档位不只是更便宜，它确实更差，所以「什么时候升级」是设计的一部分，而不是事后的优化。",
              })}
            </p>
          </div>
        </div>
      </Section>

      {/* Three insights */}
      <Section>
        <SectionHeader
          label={t({ en: "Three insights", zh: "三个洞察" })}
          provenance={overviewInsightsProvenance}
          title={t({ en: "What the research changed in how I think about the product", zh: "研究改变了我对这个产品的哪些看法" })}
        />
        <Stagger className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10">
          {overview.insights.map((ins) => (
            <StaggerItem key={ins.index}>
              <InsightCard index={ins.index} title={t(ins.title)} body={t(ins.body)} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Key opportunities */}
      <Section>
        <SectionHeader
          label={t({ en: "Key opportunities", zh: "关键机会" })}
          provenance={overviewOpportunitiesProvenance}
          title={t({ en: "Four AI-native opportunities, prioritised in chapter 10", zh: "四个 AI 原生机会，在第 10 章排定优先级" })}
          right={
            <Link href={localePath(locale, "/insights")} className="t-label inline-flex items-center gap-1.5 text-ink hover:text-accent-ink">
              {t({ en: "Opportunity matrix", zh: "机会矩阵" })} <ArrowRight size={12} strokeWidth={1.5} />
            </Link>
          }
        />
        <ol className="mt-8 divide-y divide-line">
          {overview.opportunities.map((o, i) => (
            <li
              key={o.title.en}
              className="grid grid-cols-[32px_1fr] sm:grid-cols-[32px_minmax(0,300px)_1fr_auto] gap-x-6 gap-y-2 py-5 items-baseline"
            >
              <span className="t-mono text-ink-3">{String(i + 1).padStart(2, "0")}</span>
              <span className="t-h3">{t(o.title)}</span>
              <span className="t-body-sm text-ink-2 col-start-2 sm:col-start-3 max-w-[56ch]">{t(o.body)}</span>
              <span className="col-start-2 sm:col-start-4">
                <Badge tone={o.priority === "P0" ? "accent" : "neutral"}>{o.priority}</Badge>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Reading path */}
      <Section>
        <div className="grid-12 gap-y-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="t-label">{t({ en: "How to read this case", zh: "如何阅读这个案例" })}</div>
          </div>
          <ol className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {overview.readingPath.map((r) => (
              <li key={r.index} className="flex items-baseline gap-3 border-t border-line pt-3">
                <span className="t-mono text-accent w-12 shrink-0">{r.index}</span>
                <span>
                  <span className="text-[14px] font-medium">{t(r.label)}</span>
                  <span className="t-caption block">{t(r.note)}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Footer />
    </PageContainer>
  );
}
