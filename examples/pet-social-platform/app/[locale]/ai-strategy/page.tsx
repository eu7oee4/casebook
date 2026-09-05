import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { InsightCard } from "@/components/ui/InsightCard";
import { ArchitectureDiagram } from "@/components/product/ai/ArchitectureDiagram";
import { CapabilityList } from "@/components/product/ai/CapabilityList";
import { AgentLoop } from "@/components/product/ai/AgentLoop";
import { AgentTrace } from "@/components/product/ai/AgentTrace";
import { capabilities, agentLoop, petCareQuery, petCareTrace, whyAgent, aiPrinciples } from "@/data/ai";
import { DEFAULT_LOCALE, isLocale, tr } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "AI 策略" : "AI Strategy" };
}

export default async function AIStrategyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      <PageHeader
        index="07"
        kicker={t({ en: "Core chapter", zh: "核心章节" })}
        title={t({ en: "AI Strategy", zh: "AI 策略" })}
        subtitle={
          locale === "zh" ? (
            <>
              AI 作为宠物生态的
              <br />
              智能层
            </>
          ) : (
            <>
              AI as the Intelligence Layer
              <br />
              of the Pet Ecosystem
            </>
          )
        }
        lede={t({
          en: "Not a chatbot bolted onto a feed. One layer that understands content, matches people and executes services — reading and writing a single graph of users, pets, places and merchants.",
          zh: "不是贴在信息流上的聊天机器人，而是一个理解内容、匹配人、执行服务的层：读写同一张由用户、宠物、地点与商家构成的图。",
        })}
      />

      {/* Architecture */}
      <Section className="mt-12 lg:mt-16">
        <SectionHeader
          label={t({ en: "Architecture", zh: "架构" })}
          title={t({
            en: "One intelligence layer above three surfaces, one data spine beneath them",
            zh: "三个界面之上是一个智能层，之下是一条数据主干",
          })}
          description={t({
            en: "Hover any node. Branches show where AI acts; the spine shows what it learns from and what it ultimately funds.",
            zh: "悬停任一节点。分支表示 AI 在哪里发挥作用；主干表示它从哪里学习，以及最终为什么买单。",
          })}
        />
        <Reveal className="mt-12">
          <ArchitectureDiagram />
        </Reveal>
      </Section>

      {/* Capabilities */}
      <Section>
        <SectionHeader
          label={t({ en: "AI capabilities", zh: "AI 能力" })}
          title={t({ en: "Five capabilities, one substrate", zh: "五项能力，一个基底" })}
          description={t({
            en: "Each row is a product mechanism, not a model. Expand a capability to see the problem it solves, what it reads, and what it returns to the user and the business.",
            zh: "每一行都是一个产品机制，而不是一个模型。展开任一能力，查看它解决的问题、读取的数据，以及它带给用户和业务的回报。",
          })}
        />
        <div className="mt-10">
          <CapabilityList items={capabilities} />
        </div>
      </Section>

      {/* Agent architecture */}
      <Section>
        <SectionHeader
          label={t({ en: "AI agent architecture", zh: "AI Agent 架构" })}
          title={t({ en: "From a sentence to a completed task", zh: "从一句话到一件办完的事" })}
          description={t({
            en: "The agent is the natural-language interface to every capability above. Tools are product actions; the loop closes on feedback.",
            zh: "Agent 是上述所有能力的自然语言界面。工具就是产品动作；反馈让这个环闭合。",
          })}
        />
        <Reveal className="mt-12">
          <AgentLoop nodes={agentLoop} />
        </Reveal>
      </Section>

      {/* Pet care agent */}
      <Section>
        <SectionHeader
          label={t({ en: "Pet care agent", zh: "宠物护理 Agent" })}
          title={t({
            en: "A worked run: grooming for a golden retriever, Saturday, under ¥200",
            zh: "一次完整运行：周六、金毛、美容、预算 200 元以内",
          })}
          description={t({
            en: "Step through the trace or run it end to end. Each line is a tool call against the platform's own capabilities.",
            zh: "逐步查看追踪，或从头到尾运行一遍。每一行都是对平台自身能力的一次工具调用。",
          })}
        />
        <div className="mt-10">
          <AgentTrace query={petCareQuery} steps={petCareTrace} />
        </div>
      </Section>

      {/* Why agent */}
      <Section>
        <div className="border-t border-ink pt-8 grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <div className="t-label">{t({ en: "Why agent?", zh: "为什么是 Agent？" })}</div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <p className="t-h2">{t(whyAgent.statement)}</p>
            <p className="t-h2 text-ink-2 mt-3">{t({ en: "It is:", zh: "它是：" })}</p>
            <Stagger className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-3">
              {whyAgent.parts.map((p, i) => (
                <StaggerItem key={p.en} className="flex items-baseline gap-4">
                  <span className="t-h2 text-accent-ink">{t(p)}</span>
                  {i < whyAgent.parts.length - 1 && <span className="t-h2 text-ink-3">+</span>}
                </StaggerItem>
              ))}
            </Stagger>
            <p className="t-body text-ink-2 mt-8 max-w-[56ch]">{t(whyAgent.body)}</p>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <SectionHeader
          label={t({ en: "Design principles for the AI layer", zh: "AI 层的设计原则" })}
          title={t({ en: "What we will not build, and what we optimise instead", zh: "我们不做什么，转而优化什么" })}
        />
        <Stagger className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {aiPrinciples.map((p, i) => (
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
