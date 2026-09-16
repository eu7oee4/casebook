import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProvenanceMark } from "@/components/ui/Note";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { InsightCard } from "@/components/ui/InsightCard";
import { ChartCard } from "@/components/ui/ChartCard";
import { MetricGrid } from "@/components/ui/Metric";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { IdentityGraph } from "@/components/product/social/IdentityGraph";
import { RelationshipLadder } from "@/components/product/social/RelationshipLadder";
import { LadderFunnelChart } from "@/components/product/social/LadderFunnelChart";
import { PetMatch } from "@/components/product/social/PetMatch";
import { matchMetrics, matchPrinciples, ladderFunnelProvenance, identityDimensionsProvenance, petMatchProvenance, relationshipLadderProvenance } from "@/data/social";
import { DEFAULT_LOCALE, isLocale, tr } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "社交" : "Social" };
}

export default async function SocialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      <PageHeader
        index="05"
        kicker={t({ en: "Social", zh: "社交" })}
        title={t({ en: "Social", zh: "社交" })}
        subtitle={t({ en: "From Pet Identity to Human Relationship", zh: "从宠物身份到人的关系" })}
        lede={t({
          en: "Pet content earns attention. Relationships earn retention. This chapter designs the path from one to the other, and the AI that makes each step cheaper.",
          zh: "宠物内容赢得注意力，关系赢得留存。本章设计从前者到后者的路径，以及让每一步成本更低的 AI。",
        })}
      />

      {/* Big statement */}
      <Section className="mt-14 lg:mt-20">
        <Reveal>
          <p className="t-h2 max-w-[22ch]">
            {t({ en: "People may come for pets.", zh: "人们可能因为宠物而来。" })}
            <br />
            <span className="text-accent-ink">{t({ en: "They stay for relationships.", zh: "但因为关系而留下。" })}</span>
          </p>
        </Reveal>
        <div className="mt-8 grid-12">
          <p className="col-span-12 lg:col-span-6 lg:col-start-7 t-body text-ink-2">
            {t({
              en: "The feed is a discovery surface, not a destination. The product’s retention curve is the retention curve of its relationships: users who form one real connection in the first month are the ones still here at month six. So the social system is designed backwards from the real-world relationship, not forwards from the like.",
              zh: "信息流是发现的入口，而不是终点。产品的留存曲线就是关系的留存曲线：第一个月建立起一段真实连接的用户，才是第六个月还在的用户。所以社交系统是从现实关系倒推设计的，而不是从点赞正推。",
            })}
          </p>
        </div>
      </Section>

      {/* Identity → graph */}
      <Section>
        <SectionHeader
          label={t({ en: "Pet as social identity", zh: "宠物作为社交身份" })}
          provenance={identityDimensionsProvenance}
          title={t({ en: "Six dimensions, one graph", zh: "六个维度，一张图谱" })}
          description={t({
            en: "The pet turns generic profile fields into a specific, persistent, emotionally loaded identity. The social graph is built on that identity, not on follow counts.",
            zh: "宠物把泛泛的资料字段变成具体、持久、带有情感的身份。社交图谱建立在这个身份之上，而不是关注数之上。",
          })}
        />
        <Reveal className="mt-10">
          <IdentityGraph />
        </Reveal>
      </Section>

      {/* Ladder + funnel */}
      <Section>
        <SectionHeader
          label={t({ en: "Relationship growth", zh: "关系的成长" })}
          title={t({ en: "Seven rungs from attention to trust", zh: "从注意到信任的七级阶梯" })}
          description={t({
            en: "Each rung is a product surface with its own conversion. The leaks are structural: rungs 03→04 (follow to DM) and 05→06 (same city to offline) are where most social products stop.",
            zh: "每一级都是一个有自己转化率的产品界面。漏损是结构性的：03→04（关注到私信）和 05→06（同城到线下）正是大多数社交产品止步的地方。",
          })}
        />
        <div className="mt-10 grid-12 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-6">
            <RelationshipLadder />
            <div className="mt-4">
              <ProvenanceMark provenance={relationshipLadderProvenance} />
            </div>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-6" delay={0.1}>
            <ChartCard
              provenance={ladderFunnelProvenance}
              title={t({ en: "Relationship funnel", zh: "关系漏斗" })}
              question={t({ en: "Where does the relationship funnel leak?", zh: "关系漏斗在哪里漏损？" })}
              caption={t({
                en: "Share of users who reach each rung, of those who started at Like. The two largest drops — follow→DM and same-city→offline — are exactly the transitions AI Pet Match targets.",
                zh: "从点赞开始的用户中到达每一级的比例。两处最大的下降——关注→私信、同城→线下——正是 AI 宠物匹配要解决的转化。",
              })}
            >
              <LadderFunnelChart />
            </ChartCard>
          </Reveal>
        </div>
      </Section>

      {/* AI Pet Match */}
      <Section>
        <SectionHeader
          label={t({ en: "AI Pet Match", zh: "AI 宠物匹配" })}
          provenance={petMatchProvenance}
          title={t({ en: "A recommendation is a plan, not a profile", zh: "推荐是一个计划，而不是一份资料" })}
          description={t({
            en: "The user asks in plain language. The system reads pet, schedule and place from what it already knows, ranks nearby owners on compatibility, and proposes a concrete activity with a reason.",
            zh: "用户用自然语言提出请求。系统从已知信息中读取宠物、时间和地点，按相容性对附近的主人排序，并给出带理由的具体活动。",
          })}
          size="lg"
        />
        <div className="mt-12">
          <PetMatch />
        </div>
      </Section>

      {/* Metrics */}
      <Section>
        <SectionHeader
          label={t({ en: "What we measure", zh: "衡量什么" })}
          title={t({ en: "Success metrics for matching", zh: "匹配的成功指标" })}
          description={t({
            en: "Illustrative targets. Acceptance is the input; 7-day retention and offline conversion are the outcomes.",
            zh: "示意性目标。接受率是输入，7 日留存和线下转化才是结果。",
          })}
        />
        <div className="mt-10">
          <MetricGrid items={matchMetrics.map((m) => ({ ...m, label: t(m.label), note: t(m.note) }))} columns={5} />
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <div className="border-t border-ink pt-8">
          <p className="t-h2 max-w-[24ch]">
            {t({ en: "Do not optimise the number of recommendations.", zh: "不要优化推荐的数量。" })}
            <br />
            <span className="text-accent-ink">
              {t({ en: "Optimise meaningful relationship formation.", zh: "优化有意义的关系形成。" })}
            </span>
          </p>
        </div>
        <Stagger className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10">
          {matchPrinciples.map((p, i) => (
            <StaggerItem key={p.title.en}>
              <InsightCard index={String(i + 1).padStart(2, "0")} title={t(p.title)} body={t(p.body)} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Footer />
    </PageContainer>
  );
}
