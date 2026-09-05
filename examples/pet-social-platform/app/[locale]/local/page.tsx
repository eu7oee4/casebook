import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { DataTable } from "@/components/ui/DataTable";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { MetricGrid } from "@/components/ui/Metric";
import { InsightCard } from "@/components/ui/InsightCard";
import { Tag } from "@/components/ui/Tag";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AgentWorkflow } from "@/components/product/local/AgentWorkflow";
import {
  booking,
  conciergeQuery,
  conciergeSteps,
  recommendedServices,
  serviceCategories,
  serviceJourney,
  serviceMetrics,
  trustNeedLabel,
  type TrustNeed,
} from "@/data/services";
import { DEFAULT_LOCALE, isLocale, tr } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "本地" : "Local" };
}

const trustTone = (x: TrustNeed) => (x === "Very high" ? "accent" : x === "High" ? "neutral" : "outline");

export default async function LocalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  const principles = [
    {
      title: { en: "Context is retrieved, never asked.", zh: "上下文是读取的，不是问出来的。" },
      body: {
        en: "Pet size, coat, past groomers, usual area and preferences already exist in the profile. Asking again is the failure mode of every booking form.",
        zh: "体型、毛发、去过的美容师、常去区域和偏好都已经在档案里。再问一遍，正是每一个预订表单的失败之处。",
      },
    },
    {
      title: { en: "Ranking explains itself in the user’s terms.", zh: "排序用用户的语言解释自己。" },
      body: {
        en: "“Closest, within budget, quiet dryers, trusted by people you follow” is the output — not a sorted list with a score.",
        zh: "输出是「最近、在预算内、静音吹风、你关注的人信任」，而不是一张带分数的排序列表。",
      },
    },
    {
      title: { en: "Execution waits for confirmation.", zh: "执行等待确认。" },
      body: {
        en: "The agent holds the slot and attaches the profile; the user commits. Side effects are always a human decision.",
        zh: "Agent 锁定时段并附上档案，由用户做决定。有副作用的操作永远由人来拍板。",
      },
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        index="06"
        kicker={t({ en: "Local", zh: "本地" })}
        title={t({ en: "Local", zh: "本地" })}
        subtitle={t({ en: "Where Digital Relationships Become Real", zh: "线上关系落地之处" })}
        lede={t({
          en: "Every pet need eventually has an address: a groomer, a vet, a park, a sitter. Local services are where the community’s trust turns into transactions — and where an AI agent can act, not just answer.",
          zh: "每一个宠物需求最终都有一个地址：美容师、宠物医院、公园、寄养人。本地服务是社区信任转化为交易的地方，也是 AI Agent 能够执行而不只是回答的地方。",
        })}
      />

      {/* Ecosystem */}
      <Section className="mt-14 lg:mt-20">
        <SectionHeader
          label={t({ en: "Service ecosystem", zh: "服务生态" })}
          title={t({ en: "Eight service categories, very different trust requirements", zh: "八类服务，信任要求差异很大" })}
          description={t({
            en: "Frequency drives habit; trust need drives where the community matters. Intent for almost every category shows up in content before it shows up in search.",
            zh: "频次决定习惯，信任需求决定社区在哪里起作用。几乎每一类服务的意图都会先出现在内容里，再出现在搜索里。",
          })}
        />
        <Reveal className="mt-8">
          <DataTable
            rows={serviceCategories}
            rowKey={(r) => r.name.en}
            dense
            columns={[
              { key: "name", header: t({ en: "Category", zh: "类别" }), cell: (r) => <span className="font-medium">{t(r.name)}</span>, width: "22%" },
              { key: "freq", header: t({ en: "Frequency", zh: "频次" }), cell: (r) => <span className="text-ink-2">{t(r.frequency)}</span>, width: "20%" },
              {
                key: "trust",
                header: t({ en: "Trust need", zh: "信任需求" }),
                cell: (r) => <Tag tone={trustTone(r.trustNeed)}>{t(trustNeedLabel[r.trustNeed])}</Tag>,
                width: "16%",
              },
              { key: "intent", header: t({ en: "Intent from", zh: "意图来源" }), cell: (r) => <span className="text-ink-2">{t(r.intentFrom)}</span> },
            ]}
          />
        </Reveal>
        <div className="mt-8 grid-12">
          <p className="col-span-12 lg:col-span-6 lg:col-start-7 t-body-sm text-ink-2">
            {t({
              en: "Where trust need is very high — vet, boarding — a stranger’s rating is not enough; a rating from someone the user follows is. That is the ranking feature only a community can provide, and the reason local services belong inside the social product rather than beside it.",
              zh: "在信任需求极高的场景——医疗、寄养——陌生人的评分不够，用户关注的人的评分才够。这是只有社区能提供的排序特征，也是本地服务应该在社交产品之内、而不是之外的原因。",
            })}
          </p>
        </div>
      </Section>

      {/* Journey */}
      <Section>
        <SectionHeader
          label={t({ en: "Service journey", zh: "服务旅程" })}
          title={t({ en: "Discovery to repeat, with content at both ends", zh: "从发现到复购，两端都是内容" })}
          description={t({
            en: "Discovery starts from content and friends; the review at the end becomes content again. Repeat is where the loop pays: the second booking costs nothing to acquire.",
            zh: "发现始于内容和朋友，结束时的评价又变回内容。复购是闭环的回报：第二次预订不需要任何获客成本。",
          })}
        />
        <Reveal className="mt-10">
          <FlowDiagram nodes={serviceJourney.map((n) => ({ label: t(n.label), note: t(n.note), emphasis: n.emphasis }))} size="lg" />
        </Reveal>
      </Section>

      {/* Concierge */}
      <Section>
        <SectionHeader
          label={t({ en: "AI Service Concierge", zh: "AI 服务管家" })}
          title={t({ en: "One sentence becomes a booking", zh: "一句话变成一次预订" })}
          description={t({
            en: "The concierge is the first agentic transaction in the product: it understands the request, reads what the platform already knows about the pet, searches and filters supply, explains its ranking, and books with the user’s confirmation.",
            zh: "服务管家是产品里第一笔 Agent 式交易：理解请求，读取平台已知的宠物信息，搜索并筛选供给，解释排序，在用户确认后完成预订。",
          })}
          size="lg"
        />
        <div className="mt-12">
          <AgentWorkflow
            query={conciergeQuery}
            queryNote={locale === "zh" ? conciergeQuery.en : conciergeQuery.zh}
            context={[
              { label: { en: "User intent", zh: "用户意图" }, value: { en: "Grooming · bath", zh: "美容 · 洗澡" } },
              { label: { en: "Pet context", zh: "宠物上下文" }, value: { en: "Bao · Golden · 2 yrs", zh: "Bao · 金毛 · 2 岁" } },
              { label: { en: "Location", zh: "位置" }, value: { en: "Nanshan · ≤ 3 km", zh: "南山 · ≤ 3 公里" } },
              { label: { en: "Time", zh: "时间" }, value: { en: "Saturday morning", zh: "周六上午" } },
              { label: { en: "Budget", zh: "预算" }, value: "≤ ¥200" },
            ]}
            steps={conciergeSteps}
            services={recommendedServices}
            booking={booking}
          />
        </div>
      </Section>

      {/* Why it matters */}
      <Section>
        <SectionHeader
          label={t({ en: "Design principles", zh: "设计原则" })}
          title={t({ en: "What makes this an agent, not a search box", zh: "为什么这是 Agent，而不是搜索框" })}
        />
        <Stagger className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10">
          {principles.map((p, i) => (
            <StaggerItem key={p.title.en}>
              <InsightCard index={String(i + 1).padStart(2, "0")} title={t(p.title)} body={t(p.body)} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Metrics */}
      <Section>
        <SectionHeader
          label={t({ en: "What we measure", zh: "衡量什么" })}
          title={t({ en: "Success metrics for the concierge", zh: "服务管家的成功指标" })}
          description={t({
            en: "Illustrative targets against a search-based baseline. The comparison that matters is intent → booking, not sessions.",
            zh: "相对搜索式基线的示意性目标。真正重要的对比是意图 → 预订，而不是会话数。",
          })}
        />
        <div className="mt-10">
          <MetricGrid items={serviceMetrics.map((m) => ({ ...m, label: t(m.label), note: t(m.note) }))} columns={4} />
        </div>
      </Section>

      <Footer />
    </PageContainer>
  );
}
