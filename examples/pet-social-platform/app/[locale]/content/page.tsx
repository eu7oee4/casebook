import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ChartCard } from "@/components/ui/ChartCard";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { MetricGrid } from "@/components/ui/Metric";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Spec } from "@/components/ui/InsightCard";
import { Badge } from "@/components/ui/Tag";
import { ContentTypesChart } from "@/components/product/content/ContentTypesChart";
import { IntelligencePipeline } from "@/components/product/content/IntelligencePipeline";
import { contentTypes, contentTypesNote, contentLoop, creationVsUnderstanding, understandingMetrics, contentTypesProvenance, contentLoopProvenance, creationVsUnderstandingProvenance, pipelineProvenance } from "@/data/content";
import { DEFAULT_LOCALE, isLocale, tr } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "内容" : "Content" };
}

export default async function ContentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      <PageHeader
        index="04"
        kicker={t({ en: "Content", zh: "内容" })}
        title={t({ en: "Content", zh: "内容" })}
        subtitle={t({ en: "From Posting to Knowledge", zh: "从发布到知识" })}
        lede={t({
          en: "Content is the entry point of the ecosystem, but its value is not the post itself. It is what the platform understands about the pet, the place and the moment behind each post.",
          zh: "内容是生态的入口，但它的价值不在帖子本身，而在于平台从每条帖子背后理解到的宠物、地点与时刻。",
        })}
      />

      {/* Content types */}
      <Section>
        <SectionHeader
          label={t({ en: "Content types", zh: "内容类型" })}
          title={t({ en: "Seven types of post, each carrying a different machine-readable signal", zh: "七种帖子类型，各自携带不同的机器可读信号" })}
          description={t({
            en: "Diaries dominate volume; advice and Q&A carry the most retrievable knowledge. The mix decides what the understanding layer can learn.",
            zh: "日记占据数量优势；经验与问答携带最多可检索的知识。内容结构决定了理解层能学到什么。",
          })}
        />
        <div className="mt-10 grid-12 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-6">
            <ChartCard
              provenance={contentTypesProvenance}
              title={t({ en: "Share of posts by type", zh: "各类型帖子占比" })}
              question={t({ en: "What does an early-stage feed look like?", zh: "早期信息流的结构是什么样的？" })}
              caption={t(contentTypesNote)}
            >
              <ContentTypesChart />
            </ChartCard>
          </Reveal>
          <div className="col-span-12 lg:col-span-6">
            <div className="border-t border-line pt-4">
              <div className="grid grid-cols-[minmax(88px,1fr)_1.2fr_1.6fr] gap-x-4 pb-2 border-b border-ink">
                <span className="t-label">{t({ en: "Type", zh: "类型" })}</span>
                <span className="t-label">{t({ en: "Intent", zh: "意图" })}</span>
                <span className="t-label">{t({ en: "Signal it carries", zh: "携带的信号" })}</span>
              </div>
              <ul className="divide-y divide-line">
                {contentTypes.map((c) => (
                  <li key={c.id} className="grid grid-cols-[minmax(88px,1fr)_1.2fr_1.6fr] gap-x-4 py-2.5 text-[13.5px] leading-5">
                    <span className="font-medium text-ink">{t(c.type)}</span>
                    <span className="text-ink-2">{t(c.intent)}</span>
                    <span className="t-mono text-ink-2 normal-case">{t(c.signal)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Loop */}
      <Section>
        <SectionHeader
          label={t({ en: "Content loop", zh: "内容闭环" })}
          provenance={contentLoopProvenance}
          title={t({ en: "The loop closes on return, and return depends on relationships", zh: "闭环在回访处闭合，而回访取决于关系" })}
          description={t({
            en: "Every step is measurable. The step most pet apps lose is the last: people return for the people they follow, not for the feed.",
            zh: "每一步都可度量。大多数宠物产品丢掉的是最后一步：人们为关注的人回来，而不是为信息流。",
          })}
        />
        <Reveal className="mt-10 border-t border-line pt-6">
          <FlowDiagram nodes={contentLoop.map((n) => ({ label: t(n.label), note: t(n.note), emphasis: n.emphasis }))} size="lg" />
        </Reveal>
      </Section>

      {/* AI × Content */}
      <Section>
        <SectionHeader
          label={t({ en: "AI × Content", zh: "AI × 内容" })}
          provenance={creationVsUnderstandingProvenance}
          title={t({ en: "Two very different jobs hide behind “AI for content”", zh: "「AI 做内容」背后藏着两件截然不同的事" })}
        />
        <div className="mt-10 grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="t-h2">
              {t({ en: "AI content creation is only the entry point.", zh: "AI 内容创作只是入口。" })}
              <br />
              <span className="text-accent-ink">
                {t({ en: "AI content understanding is the infrastructure.", zh: "AI 内容理解才是基础设施。" })}
              </span>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="t-body-sm text-ink-2">
              {t({
                en: "Caption tools raise supply. Understanding raises relevance, and relevance is what recommendation, matching and service intent are built on. One is a feature; the other is a layer every capability reads from.",
                zh: "文案工具提升供给；理解提升相关性，而推荐、匹配与服务意图都建立在相关性之上。前者是一个功能，后者是所有能力都要读取的一层。",
              })}
            </p>
          </div>
        </div>

        <Stagger className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
          {creationVsUnderstanding.map((c, i) => {
            const weighted = i === 1;
            return (
              <StaggerItem key={c.id} className={cn("border-t pt-5", weighted ? "border-accent" : "border-line-2")}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="t-h3">{t(c.label)}</h3>
                  <Badge tone={weighted ? "accent" : "neutral"}>{t(c.role)}</Badge>
                </div>
                <Spec
                  className="mt-4"
                  rows={[
                    { label: t({ en: "What", zh: "做什么" }), value: t(c.what) },
                    { label: t({ en: "Value", zh: "价值" }), value: t(c.value) },
                    { label: t({ en: "Limit", zh: "局限" }), value: t(c.limit) },
                  ]}
                />
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Pipeline */}
      <Section>
        <SectionHeader
          label={t({ en: "Content intelligence pipeline", zh: "内容理解流水线" })}
          provenance={pipelineProvenance}
          title={t({ en: "From one post to recommendation, matching and service intent", zh: "从一条帖子到推荐、匹配与服务意图" })}
          description={t({
            en: "Understanding happens once, at publish time. Every downstream surface reuses the same entities instead of re-guessing from engagement — and because a post is understood once but read many times, doing it at write time is what makes understanding every post affordable at all.",
            zh: "理解只在发布时发生一次。所有下游界面复用同一组实体，而不是各自从互动数据里重新猜测——而且一条帖子只被理解一次，却要被读很多次，正是放在写入时做，才让「理解每一条」在成本上站得住。",
          })}
          size="lg"
        />
        <div className="mt-10">
          <IntelligencePipeline />
        </div>
      </Section>

      {/* Metrics */}
      <Section>
        <SectionHeader
          label={t({ en: "Understanding layer · targets", zh: "理解层 · 目标" })}
          title={t({ en: "How the understanding layer is measured", zh: "如何度量理解层" })}
          description={t({ en: "Targets for the first version, evaluated on a labelled sample. Illustrative.", zh: "第一版的目标值，在标注样本上评估。示意数据。" })}
        />
        <Reveal className="mt-8">
          <MetricGrid
            items={understandingMetrics.map((m) => ({ label: t(m.label), value: m.value, note: t(m.note), provenance: m.provenance }))}
            columns={4}
          />
        </Reveal>
      </Section>

      <Footer />
    </PageContainer>
  );
}
