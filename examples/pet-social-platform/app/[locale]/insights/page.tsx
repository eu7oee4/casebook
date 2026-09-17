import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Tag";
import { OpportunityMatrix } from "@/components/product/insights/OpportunityMatrix";
import { opportunities, priorities, roadmap, northStar, principles, opportunitiesProvenance, prioritiesProvenance, roadmapProvenance, principlesProvenance } from "@/data/insights";
import { DEFAULT_LOCALE, isLocale, tr } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "结论" : "Insights" };
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      <PageHeader
        index="10"
        kicker={t({ en: "Synthesis", zh: "综合" })}
        title={t({ en: "Insights", zh: "结论" })}
        subtitle={
          locale === "zh" ? (
            <>
              从研究
              <br />
              到产品策略
            </>
          ) : (
            <>
              From Research
              <br />
              to Product Strategy
            </>
          )
        }
        lede={t({
          en: "The research points to four AI-native opportunities. This chapter ranks them, sequences them, and states the north star they serve.",
          zh: "研究指向四个 AI 原生机会。本章为它们排定优先级和顺序，并说明它们共同服务的北极星。",
        })}
      />

      {/* Opportunity matrix */}
      <Section className="mt-12 lg:mt-16">
        <SectionHeader
          label={t({ en: "Opportunity matrix", zh: "机会矩阵" })}
          provenance={opportunitiesProvenance}
          title={t({ en: "User value against implementation complexity", zh: "用户价值 × 实现复杂度" })}
          description={t({
            en: "Select a point to read the rationale and the first milestone. The two P0s are the ones that unlock the others.",
            zh: "选择任一点，查看理由与首个里程碑。两个 P0 是解锁其他机会的前提。",
          })}
        />
        <div className="mt-10">
          <OpportunityMatrix items={opportunities} />
        </div>
      </Section>

      {/* Priority */}
      <Section>
        <SectionHeader
          label={t({ en: "Priority", zh: "优先级" })}
          provenance={prioritiesProvenance}
          title={t({ en: "Two to build first, two to grow into", zh: "先建两项，再长出两项" })}
        />
        <ol className="mt-8 border-t border-ink">
          {priorities.map((p, i) => (
            <li
              key={p.name.en}
              className="grid grid-cols-[56px_1fr] sm:grid-cols-[56px_minmax(0,360px)_1fr] gap-x-6 gap-y-1 items-baseline py-5 border-b border-line"
            >
              <Badge tone={p.priority === "P0" ? "accent" : "ink"}>{p.priority}</Badge>
              <span className="t-statement">{t(p.name)}</span>
              <span className="col-start-2 sm:col-start-3 t-body-sm text-ink-2">
                <span className="t-mono text-ink-3 mr-3">{String(i + 1).padStart(2, "0")}</span>
                {t(p.why)}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Roadmap */}
      <Section>
        <SectionHeader
          label={t({ en: "Sequencing", zh: "节奏" })}
          provenance={roadmapProvenance}
          title={t({ en: "Understand, then connect, then orchestrate", zh: "先理解，再连接，最后调度" })}
          description={t({
            en: "Each phase ships the entities the next one reasons over. The graph is grown, not pre-built.",
            zh: "每个阶段交付下一阶段据以推理的实体。图谱是长出来的，不是预先建好的。",
          })}
        />
        <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {roadmap.map((r, i) => (
            <StaggerItem key={r.phase.en} className={i === 0 ? "border-t border-accent pt-4" : "border-t border-ink pt-4"}>
              <div className="t-label">{t(r.phase)}</div>
              <div className="t-h2 mt-3">{t(r.focus)}</div>
              <ul className="mt-5 divide-y divide-line">
                {r.items.map((it) => (
                  <li key={it.en} className="py-2 text-[14px] leading-6 flex items-baseline gap-3">
                    <ArrowRight size={12} strokeWidth={1.5} className="text-ink-3 shrink-0 translate-y-[3px]" />
                    {t(it)}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* North star */}
      <Section>
        <Reveal>
          <div className="border-t border-ink pt-8">
            <div className="t-label">{t({ en: "Product north star", zh: "产品北极星" })}</div>
            <p className="t-h1 mt-6 max-w-[16ch]">
              {t(northStar.statement[0])}
              <br />
              <span className="text-accent-ink">{t(northStar.statement[1])}</span>
            </p>
            <div className="mt-10 grid-12 gap-y-6">
              <p className="col-span-12 lg:col-span-5 t-body text-ink-2">{t(northStar.metric)}</p>
              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <div className="t-label mb-4">{t({ en: "AI should connect", zh: "AI 应该连接" })}</div>
                <ol className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  {northStar.connects.map((c, i) => (
                    <li key={c.en} className="flex items-baseline gap-3">
                      <span className="t-statement">{t(c)}</span>
                      {i < northStar.connects.length - 1 && <span className="text-ink-3 t-statement">·</span>}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Principles */}
      <Section>
        <SectionHeader
          label={t({ en: "Closing", zh: "收束" })}
          title={t({ en: "Four commitments", zh: "四项承诺" })}
          provenance={principlesProvenance}
        />
        <Stagger className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
          {principles.map((p, i) => (
            <StaggerItem key={p.index} className={i === 3 ? "border-t border-accent pt-5" : "border-t border-ink pt-5"}>
              <div className={i === 3 ? "t-mono text-accent" : "t-mono text-ink-3"}>{p.index}</div>
              <h3 className="t-h2 mt-4">{t(p.title)}</h3>
              <p className="t-body-sm text-ink-2 mt-4 max-w-[44ch]">{t(p.body)}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Footer />
    </PageContainer>
  );
}
