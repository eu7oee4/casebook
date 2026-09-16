import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { ProvenanceMark } from "@/components/ui/Note";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { BenchmarkTable } from "@/components/product/benchmark/BenchmarkTable";
import { TransferMap } from "@/components/product/benchmark/TransferMap";
import { benchmarkRows, DOMAIN_LABEL, transferPrinciple, type BenchmarkDomain, transferMapProvenance } from "@/data/benchmark";
import { DEFAULT_LOCALE, isLocale, tr, type Text } from "@/lib/i18n";

const DOMAINS: Array<{ domain: BenchmarkDomain; question: Text }> = [
  { domain: "Content", question: { en: "How does discovery lead to a decision?", zh: "发现如何通向决策？" } },
  { domain: "Social", question: { en: "How does a stranger become a relationship?", zh: "陌生人如何变成一段关系？" } },
  { domain: "Local", question: { en: "How does intent become a completed visit?", zh: "意图如何变成一次完成的到店？" } },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "跨界参考" : "Benchmark" };
}

export default async function BenchmarkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = tr(locale);

  return (
    <PageContainer>
      <PageHeader
        index="08"
        kicker={t({ en: "Cross-industry benchmark", zh: "跨行业参考" })}
        title={t({ en: "Cross-industry Benchmark", zh: "跨行业参考" })}
        subtitle={t({ en: "Borrow the mechanism, not the product.", zh: "借鉴机制，而不是复制产品。" })}
        lede={t({
          en: "Content, social and local each have a product that solves one stage of the loop extremely well. The research question is which mechanism transfers, and what it becomes when the unit of identity is a pet.",
          zh: "内容、社交、本地三个领域，各有一个把闭环中某一段做到极致的产品。研究的问题是：哪种机制可以迁移，以及当身份单元变成宠物时，它会变成什么。",
        })}
      />

      {/* Domain map */}
      <Section>
        <SectionHeader
          label={t({ en: "Three domains, six references", zh: "三个领域，六个参考" })}
          title={t({ en: "Each domain is studied through the products that own its mechanism", zh: "每个领域都通过掌握其核心机制的产品来研究" })}
        />
        <Stagger className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
          {DOMAINS.map((d, i) => {
            const products = benchmarkRows.filter((r) => r.domain === d.domain);
            return (
              <StaggerItem key={d.domain} className="border-t border-ink pt-5">
                <div className="t-mono text-ink-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="t-h2 mt-3">{t(DOMAIN_LABEL[d.domain])}</h3>
                <p className="t-caption mt-2">{t(d.question)}</p>
                <ul className="mt-6 divide-y divide-line">
                  {products.map((p) => (
                    <li key={p.id} className="py-3">
                      <div className="text-[15px] font-medium">{t(p.product)}</div>
                      <div className="t-caption mt-0.5">{t(p.mechanism)}</div>
                      {p.provenance && (
                        <div className="mt-2">
                          <ProvenanceMark provenance={p.provenance} />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Transfer table */}
      <Section>
        <SectionHeader
          label={t({ en: "Mechanism transfer", zh: "机制迁移" })}
          provenance={transferMapProvenance}
          title={t({ en: "What works, why it works, and what it becomes here", zh: "什么有效，为何有效，以及在这里会变成什么" })}
          description={t({ en: "The insight column is the research output. The adaptation column is the product output.", zh: "洞察一列是研究的产出，落地一列是产品的产出。" })}
          size="lg"
        />
        <div className="mt-8">
          <BenchmarkTable />
        </div>
      </Section>

      {/* Transfer map */}
      <Section>
        <SectionHeader
          label={t({ en: "Transfer map", zh: "迁移地图" })}
          provenance={transferMapProvenance}
          title={t({ en: "Six transfers, one identity", zh: "六条迁移，一个身份" })}
          description={t({
            en: "Every transfer runs through the pet: the same entity connects discovery, relationship and fulfilment.",
            zh: "每一条迁移都经过宠物：同一个实体连接了发现、关系与履约。",
          })}
        />
        <Reveal className="mt-8">
          <TransferMap />
        </Reveal>
      </Section>

      {/* Principle */}
      <Section>
        <div className="grid-12 gap-y-8 border-t border-accent pt-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="t-h2">{t(transferPrinciple.title)}</p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="t-body-sm text-ink-2">{t(transferPrinciple.body)}</p>
          </div>
        </div>
      </Section>

      <Footer />
    </PageContainer>
  );
}
