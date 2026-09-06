import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { MetricGrid } from "@/components/ui/Metric";
import { ChartCard } from "@/components/ui/ChartCard";
import { Illustrative } from "@/components/ui/Note";
import { Tag } from "@/components/ui/Tag";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SpendTrend } from "@/components/product/market/SpendTrend";
import { ValueMatrix } from "@/components/product/market/ValueMatrix";
import { Sourced } from "@/components/ui/ProvenanceHover";
import { chart } from "@/components/charts/theme";
import {
  marketKpis,
  spendTrendNote,
  needLayers,
  journey,
  opportunityAreas,
  spendTrendProvenance,
  valueMatrixProvenance,
  medicalShareShiftProvenance,
} from "@/data/market";
import { DEFAULT_LOCALE, isLocale, tr } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "市场" : "Market" };
}

export default async function MarketPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  // Legends live here (server) — values exported from client modules arrive as references, not arrays.
  const spendLegend = [
    { label: t({ en: "Services", zh: "服务" }), color: chart.series[0] },
    { label: t({ en: "Health", zh: "健康" }), color: chart.series[1] },
    { label: t({ en: "Food", zh: "食品" }), color: chart.series[2] },
  ];
  const valueLegend = [
    { label: t({ en: "Service", zh: "服务" }), color: chart.ink },
    { label: t({ en: "Content", zh: "内容" }), color: chart.accent },
    { label: t({ en: "Social", zh: "社交" }), color: chart.series[1] },
    { label: t({ en: "Local", zh: "本地" }), color: chart.series[2] },
  ];

  return (
    <PageContainer>
      <PageHeader
        index="02"
        title={t({ en: "Market", zh: "市场" })}
        subtitle={t({ en: "Understanding the Opportunity", zh: "理解机会" })}
        lede={t({
          en: "Pet ownership is maturing from goods to care. The product opportunity is not another store or feed, but the layer where functional, emotional and social needs meet.",
          zh: "养宠正在从买商品走向做照护。产品机会不是再做一个商店或信息流，而是功能、情感与社交需求交汇的那一层。",
        })}
        aside={
          <Illustrative
            className="mt-4"
            label={{ en: "Value map & judgement fields · illustrative", zh: "价值矩阵与判断类字段 · 示意" }}
          />
        }
      />

      {/* 1. Pet economy overview */}
      <Section className="mt-12 lg:mt-16">
        <SectionHeader
          label={t({ en: "01 · Pet economy", zh: "01 · 宠物经济" })}
          title={t({
            en: "Ownership is mainstream, content lives on platforms, and spend is shifting from goods to care",
            zh: "养宠已成主流、内容消费在平台上发生、支出正从商品转向照护",
          })}
          description={t({
            en: "Five indicators that frame the case. Sourced figures carry their provenance; judgement fields stay explicitly illustrative.",
            zh: "构成本案例框架的五个指标。有出处的数字带来源标注，判断类字段明确保持示意。",
          })}
        />
        <Reveal className="mt-10">
          <MetricGrid
            items={marketKpis.map((k) => ({ label: t(k.label), value: t(k.value), note: t(k.note), provenance: k.provenance }))}
            columns={5}
            size="lg"
          />
        </Reveal>
        <div className="mt-14 grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <ChartCard
              provenance={spendTrendProvenance}
              title={t({ en: "Pet spend by category, indexed", zh: "宠物支出分类指数" })}
              question={t({ en: "Where is pet spend shifting?", zh: "宠物支出正在向哪里转移？" })}
              height={300}
              legend={spendLegend}
              caption={t(spendTrendNote)}
            >
              <SpendTrend />
            </ChartCard>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <div className="t-label">{t({ en: "Implication", zh: "含义" })}</div>
            <p className="t-body-sm text-ink-2 mt-3">
              {locale === "zh" ? (
                <>
                  支出正从商品转向照护：2019 到 2024 年，医疗在城镇宠物消费中的份额
                  <Sourced provenance={medicalShareShiftProvenance}>从 19% 升到 28%</Sourced>
                  。有价值的位置不是货架，而是决策本身：选哪家美容店、哪家医院、什么时候去。今天这个决策靠内容和社区完成——问一个人。
                </>
              ) : (
                <>
                  Owners are shifting spend from goods to care: medical went{" "}
                  <Sourced provenance={medicalShareShiftProvenance}>from 19% to 28%</Sourced> of urban pet spend
                  between 2019 and 2024. The valuable position is not the shelf but the decision: which groomer,
                  which vet, when. Content and community are how that decision gets made today — by asking someone.
                </>
              )}
            </p>
            <p className="t-body-sm text-ink-2 mt-3">
              {t({
                en: "A platform that already knows the pet and the owner's circle can own that decision without becoming a marketplace first.",
                zh: "一个已经了解宠物和主人圈子的平台，可以在成为交易市场之前先拥有这个决策。",
              })}
            </p>
          </div>
        </div>
      </Section>

      {/* 2. User needs */}
      <Section>
        <SectionHeader
          label={t({ en: "02 · User needs", zh: "02 · 用户需求" })}
          title={t({ en: "Three needs, one owner", zh: "三种需求，同一个养宠人" })}
          size="lg"
        />
        <p className="t-statement mt-8 max-w-[30ch]">
          {locale === "zh" ? (
            <>
              宠物产品同时承载功能需求 <span className="text-ink-3">+</span> 情感需求 <span className="text-ink-3">+</span>{" "}
              社交需求。
            </>
          ) : (
            <>
              Pet products carry a functional need <span className="text-ink-3">+</span> an emotional need{" "}
              <span className="text-ink-3">+</span> a social need — at once.
            </>
          )}
        </p>
        <Stagger className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10">
          {needLayers.map((n, i) => (
            <StaggerItem key={n.layer.en} className={i === 2 ? "border-t border-accent pt-5" : "border-t border-ink pt-5"}>
              <div className="flex items-baseline justify-between">
                <h3 className="t-h3">{t(n.layer)}</h3>
                <span className="t-mono text-ink-3">0{i + 1}</span>
              </div>
              <p className="t-italic text-[1.15rem] leading-snug text-ink-2 mt-3">“{t(n.question)}”</p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="t-label mb-2">{t({ en: "Examples", zh: "例子" })}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {n.examples.map((e) => (
                      <Tag key={e.en} tone="outline">
                        {t(e)}
                      </Tag>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-[112px_1fr] gap-4 border-t border-line pt-3">
                  <div className="t-label pt-[3px]">{t({ en: "Solved by", zh: "现有方案" })}</div>
                  <div className="text-[14px] leading-6">{t(n.currentSolution)}</div>
                </div>
                <div className="grid grid-cols-[112px_1fr] gap-4 border-t border-line pt-3">
                  <div className="t-label pt-[3px]">{t({ en: "Gap", zh: "缺口" })}</div>
                  <div className="text-[14px] leading-6 text-ink">{t(n.gap)}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="t-annotation mt-8 max-w-[60ch]">
          {t({
            en: "The social need is the least served and the one that makes the other two cheaper to satisfy: people who know your dog recommend the vet.",
            zh: "社交需求满足得最少，却能让另外两种需求更便宜地被满足：认识你家狗的人会给你推荐医院。",
          })}
        </p>
      </Section>

      {/* 3. Value matrix */}
      <Section>
        <SectionHeader
          label={t({ en: "03 · Market opportunity", zh: "03 · 市场机会" })}
          title={t({ en: "Functional value vs emotional value", zh: "功能价值 vs 情感价值" })}
          description={t({
            en: "Where existing pet surfaces sit. Services cluster on the functional axis; content and social on the emotional axis. The top-right is where the loop closes.",
            zh: "现有宠物产品界面所处的位置。服务聚在功能轴上，内容与社交聚在情感轴上。右上角是闭环闭合之处。",
          })}
        />
        <div className="mt-10 grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <ChartCard
              provenance={valueMatrixProvenance}
              title={t({ en: "Pet surfaces by value type", zh: "按价值类型划分的宠物产品界面" })}
              question={t({ en: "Which surfaces carry both kinds of value?", zh: "哪些界面同时承载两种价值？" })}
              height={420}
              legend={valueLegend}
              caption={t({
                en: "Point size ≈ frequency of the need. Positions are research judgements from interviews and desk research, not measured values.",
                zh: "点的大小 ≈ 需求频率。位置来自访谈与案头研究的判断，并非测量值。",
              })}
            >
              <ValueMatrix />
            </ChartCard>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4 space-y-6">
            <div>
              <div className="t-label">{t({ en: "Reading the matrix", zh: "如何读这张矩阵" })}</div>
              <p className="t-body-sm text-ink-2 mt-3">
                {t({
                  en: "Advice, pet-friendly places and walk buddies already sit near both axes. They are functional acts with an emotional and social payoff.",
                  zh: "经验问答、宠物友好场所和遛狗搭子已经靠近两条轴。它们是带有情感与社交回报的功能行为。",
                })}
              </p>
            </div>
            <div>
              <div className="t-label">{t({ en: "Implication", zh: "含义" })}</div>
              <p className="t-body-sm text-ink-2 mt-3">
                {t({
                  en: "Build the product around the surfaces in the top-right, and use them to pull purely functional services (vet, grooming, boarding) into the community rather than the other way round.",
                  zh: "围绕右上角的界面来构建产品，并用它们把纯功能性服务（医疗、美容、寄养）拉进社区，而不是反过来。",
                })}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* User journey */}
      <Section>
        <SectionHeader
          label={t({ en: "Owner journey", zh: "养宠人旅程" })}
          title={t({
            en: "Every stage has a need and a touchpoint the platform can own",
            zh: "每个阶段都有一个需求，和一个平台可以拥有的触点",
          })}
        />
        <Reveal className="mt-10 overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
          <ol className="grid grid-cols-[repeat(5,minmax(180px,1fr))] gap-x-6 min-w-[900px] lg:min-w-0">
            {journey.map((j, i) => (
              <li key={j.stage.en} className="border-t border-ink pt-4 relative">
                <div className="flex items-baseline justify-between">
                  <span className="t-mono text-ink-3">0{i + 1}</span>
                  {i < journey.length - 1 && (
                    <ArrowRight size={12} strokeWidth={1.5} className="text-ink-3 absolute -right-4 top-4" aria-hidden />
                  )}
                </div>
                <div className="t-h3 mt-3">{t(j.stage)}</div>
                <div className="mt-4 border-t border-line pt-3">
                  <div className="t-label mb-1">{t({ en: "Need", zh: "需求" })}</div>
                  <div className="text-[13.5px] leading-5 text-ink-2">{t(j.need)}</div>
                </div>
                <div className="mt-3 border-t border-line pt-3">
                  <div className="t-label mb-1">{t({ en: "Touchpoint", zh: "触点" })}</div>
                  <div className="text-[13.5px] leading-5 text-ink">{t(j.touchpoint)}</div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* 4. Product opportunity */}
      <Section>
        <SectionHeader
          label={t({ en: "04 · Product opportunity", zh: "04 · 产品机会" })}
          title={t({ en: "Three gaps the research points to", zh: "研究指向的三个缺口" })}
          size="lg"
        />
        <ol className="mt-10 divide-y divide-line">
          {opportunityAreas.map((o, i) => (
            <li key={o.id} className="py-8 grid-12 gap-y-4">
              <div className="col-span-12 lg:col-span-4 flex items-baseline gap-4">
                <span className="t-mono text-accent">0{i + 1}</span>
                <h3 className="t-statement">{t(o.title)}</h3>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="t-label mb-2">{t({ en: "Problem", zh: "问题" })}</div>
                <p className="t-body-sm text-ink-2">{t(o.problem)}</p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="t-label mb-2 text-accent-ink">{t({ en: "Opportunity", zh: "机会" })}</div>
                <p className="t-body-sm text-ink">{t(o.opportunity)}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Footer />
    </PageContainer>
  );
}
