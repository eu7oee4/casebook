import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { DataTable } from "@/components/ui/DataTable";
import { InsightCard } from "@/components/ui/InsightCard";
import { Badge } from "@/components/ui/Tag";
import { ProvenanceMark } from "@/components/ui/Note";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  capabilityRisks,
  executionRisk,
  executionRiskProvenance,
  falsify,
  falsifyProvenance,
  legalRisk,
  legalRiskProvenance,
  supplyRisk,
  supplyRiskProvenance,
  unmeasured,
} from "@/data/risks";
import { DEFAULT_LOCALE, isLocale, tr } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "风险与未解" : "Risks & Unknowns" };
}

export default async function RisksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      <PageHeader
        index="09"
        kicker={t({ en: "Risks", zh: "风险" })}
        title={t({ en: "Risks & Unknowns", zh: "风险与未解" })}
        subtitle={
          locale === "zh" ? (
            <>
              能力边界、法律约束，
              <br />
              以及测不到的东西
            </>
          ) : (
            <>
              Limits, Constraints,
              <br />
              and What Could Not Be Measured
            </>
          )
        }
        lede={t({
          en: "Eight chapters of research produced findings that argue against parts of this case. They are collected here, before the recommendation rather than after it: what the system cannot do well, where the law binds the design, which dependency is not an AI problem, and which numbers could not be checked at all.",
          zh: "前八章的研究里，有一些发现是不利于这个案例本身的。它们集中在这一章，放在结论之前而不是之后：系统做不好什么、法律在哪里约束设计、哪一个依赖不是 AI 问题，以及哪些数字根本没能核实。",
        })}
      />

      {/* 1 · Capability limits — every row carries its own mark, so the section takes none. */}
      <Section className="mt-14 lg:mt-20">
        <SectionHeader
          label={t({ en: "Capability limits", zh: "能力边界" })}
          title={t({ en: "What the system cannot do well", zh: "系统做不好什么" })}
          description={t({
            en: "Both limits sit in content understanding, the capability everything else in the case reads from. Each row is marked on its own evidence.",
            zh: "两个边界都在内容理解上——案例里其他能力都从它取数。每一行按各自的证据单独标注。",
          })}
        />
        <Reveal className="mt-8">
          <DataTable
            rows={capabilityRisks}
            rowKey={(r) => r.risk.en}
            columns={[
              {
                key: "risk",
                header: t({ en: "Limit", zh: "边界" }),
                cell: (r) => (
                  <span className="flex flex-col gap-2">
                    <span className="font-medium">{t(r.risk)}</span>
                    <ProvenanceMark provenance={r.provenance} className="self-start" />
                  </span>
                ),
                width: "24%",
              },
              { key: "evidence", header: t({ en: "What the evidence says", zh: "证据说了什么" }), cell: (r) => <span className="text-ink-2">{t(r.evidence)}</span> },
              { key: "answer", header: t({ en: "How the case answers it", zh: "案例的应对" }), cell: (r) => <span className="text-ink-2">{t(r.answer)}</span>, width: "26%" },
            ]}
          />
        </Reveal>
      </Section>

      {/* 2 · Execution safety */}
      <Section>
        <SectionHeader
          label={t({ en: "Execution safety", zh: "执行安全" })}
          provenance={executionRiskProvenance}
          title={t({ en: "What happens when the agent is wrong", zh: "Agent 出错时会发生什么" })}
          description={t({
            en: "The concierge reads text written by other people and then spends money. That is the exposure a published standard already names, along with the control for it.",
            zh: "服务管家先读别人写的文字，然后花钱。这个暴露面在公开标准里已经有名字，控制措施也有。",
          })}
        />
        <Stagger className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
          {executionRisk.map((r, i) => (
            <StaggerItem key={r.title.en}>
              <InsightCard index={String(i + 1).padStart(2, "0")} title={t(r.title)} body={t(r.body)} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 3 · Law */}
      <Section>
        <SectionHeader
          label={t({ en: "Law and compliance", zh: "法律与合规" })}
          provenance={legalRiskProvenance}
          title={t({ en: "Where the law binds the design", zh: "法律在哪里约束设计" })}
          description={t({
            en: "One constraint, and it is not a preference the product can trade away. Chapter 07 carries the product’s answer to it as the fifth AI design principle.",
            zh: "只有一条约束，而且它不是产品可以权衡掉的偏好。第 07 章第五条 AI 设计原则是产品对它的回答。",
          })}
        />
        <Stagger className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
          {legalRisk.map((r) => (
            <StaggerItem key={r.title.en}>
              <InsightCard index="01" title={t(r.title)} body={t(r.body)} />
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="lg:pt-5">
              <p className="t-body-sm text-ink-2 max-w-[44ch]">
                {t({
                  en: "Two questions are deliberately not answered on this site: where the line falls between a location trail and a single city-level fix, and whether handing location to a merchant at booking requires separate consent again. No source was read for either, so neither is stated.",
                  zh: "有两个问题本站刻意不作回答：行踪轨迹与一次城市级定位之间的界线在哪里，以及预订时把位置交给商家是否需要再次单独同意。这两个问题都没有读到可引用的依据，所以不下结论。",
                })}
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </Section>

      {/* 4 · Supply dependency */}
      <Section>
        <SectionHeader
          label={t({ en: "Supply dependency", zh: "供给依赖" })}
          provenance={supplyRiskProvenance}
          title={t({ en: "The part that is not an AI problem", zh: "不是 AI 问题的那一部分" })}
          description={t({
            en: "The concierge is the case’s clearest AI capability and its hardest dependency has nothing to do with models.",
            zh: "服务管家是案例里最清晰的 AI 能力，而它最难的依赖和模型没有任何关系。",
          })}
        />
        <Stagger className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
          {supplyRisk.map((r, i) => (
            <StaggerItem key={r.title.en}>
              <InsightCard index={String(i + 1).padStart(2, "0")} title={t(r.title)} body={t(r.body)} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 5 · What could not be measured — rows are individually marked, so no section badge. */}
      <Section>
        <SectionHeader
          label={t({ en: "What could not be measured", zh: "测不到的东西" })}
          title={t({ en: "Three numbers, three different reasons", zh: "三个数字，三种不同的原因" })}
          description={t({
            en: "Three of this case’s numbers could not be checked, for three different reasons. The distinction matters: one is a disclosure problem, one is a measurement problem, and one is an absence of any comparable. Only the first disappears with better access to data; the other two need surveys, experiments and time.",
            zh: "这个案例里有三个数字没能核实，原因各不相同。区别很重要：一个是披露问题，一个是测量问题，一个是根本没有可比对象。只有第一类会随着数据获取的改善而消失，另外两类不会——它们要靠调研、实验和时间。",
          })}
          size="lg"
        />
        <Reveal className="mt-8">
          <DataTable
            rows={unmeasured}
            rowKey={(r) => r.code}
            columns={[
              {
                key: "type",
                header: t({ en: "Type", zh: "类型" }),
                cell: (r) => (
                  <span className="flex flex-col gap-2">
                    <span className="font-medium">
                      <span className="t-mono text-ink-3 mr-2">{r.code}</span>
                      {t(r.type)}
                    </span>
                    <ProvenanceMark provenance={r.provenance} className="self-start" />
                  </span>
                ),
                width: "22%",
              },
              { key: "meaning", header: t({ en: "What it means", zh: "含义" }), cell: (r) => <span className="text-ink-2">{t(r.meaning)}</span>, width: "30%" },
              { key: "instance", header: t({ en: "The case’s instance", zh: "本案中的实例" }), cell: (r) => <span className="text-ink-2">{t(r.instance)}</span> },
            ]}
          />
        </Reveal>
      </Section>

      {/* 6 · What to falsify first */}
      <Section>
        <SectionHeader
          label={t({ en: "What to falsify first", zh: "先证伪什么" })}
          provenance={falsifyProvenance}
          title={t({ en: "The unknowns, turned into tests", zh: "把未解变成测试" })}
          description={t({
            en: "These risks do not change what to build; they change what to find out first. Each test below is small enough to run before the capability it threatens, and each can come back negative.",
            zh: "这些风险不改变要做什么，改变的是先弄清楚什么。下面每个测试都小到可以在对应能力开工之前跑完，而且都可能跑出否定的结果。",
          })}
          size="lg"
        />
        <Reveal className="mt-8">
          <DataTable
            rows={falsify}
            rowKey={(r) => r.claim.en}
            columns={[
              {
                key: "claim",
                header: t({ en: "Falsify", zh: "证伪什么" }),
                cell: (r) => (
                  <span className="flex flex-col gap-2">
                    <span className="font-medium">{t(r.claim)}</span>
                    <Badge tone={r.priority === "P0" ? "accent" : "ink"} className="self-start">{r.priority}</Badge>
                  </span>
                ),
                width: "20%",
              },
              {
                key: "because",
                header: t({ en: "Because", zh: "因为" }),
                // The evidence each test aims at is sourced elsewhere; the section badge covers only the proposal.
                cell: (r) => (
                  <span className="flex flex-col gap-2">
                    <span className="text-ink-2">{t(r.because)}</span>
                    <ProvenanceMark provenance={r.evidenceProvenance} className="self-start" />
                  </span>
                ),
                width: "28%",
              },
              { key: "test", header: t({ en: "The smallest test", zh: "最小的测试" }), cell: (r) => <span className="text-ink-2">{t(r.test)}</span>, width: "26%" },
              { key: "negative", header: t({ en: "If it comes back negative", zh: "如果结果是否定的" }), cell: (r) => <span className="text-ink-2">{t(r.ifNegative)}</span> },
            ]}
          />
        </Reveal>
        <div className="mt-8 grid-12">
          <p className="col-span-12 lg:col-span-6 lg:col-start-7 t-body-sm text-ink-2">
            {t({
              en: "Expressed intent → booking is deliberately not on this list. It is a type-B unknown, so no experiment falsifies it — there is no denominator to test against. The first move there is not a test but an estimate: ask owners what they did off-platform last month, and publish the result with its sample stated.",
              zh: "「表达出的意图 → 预订」刻意没有进这张表。它属于 B 类未解，没有实验能证伪它——根本没有可供对照的分母。那里的第一步不是测试，而是估算：问主人上个月在平台之外做了什么，然后把结果连同样本一起公开。",
            })}
          </p>
        </div>
      </Section>

      <Footer />
    </PageContainer>
  );
}
