import type { Provenance } from "./provenance";
import type { Text } from "@/lib/i18n";

/**
 * 09 · Risks & Unknowns 风险与未解
 *
 * Nothing here is new research: every row restates a finding already in `research/` (04's error floor,
 * 07's risk section, 10's supply finding) or, in the last two sections, says something about the research
 * itself. Sources are S44, S45, S52, S60, S66, S72, S74, S75, S78, S79, S80, S81 — all already in
 * `research/sources.md`. A row that cannot be written from a source already in hand does not belong here.
 *
 * Nothing was moved out of 04 / 06 / 07 / 10: those chapters keep their own mitigations and this chapter
 * references them. See `research/09-risks.md`.
 */

/* ── 1 · 能力边界 · What the system cannot do well ─────────────────────────────
   Both rows carry their own mark and the two differ, so the section takes no badge. */

export const capabilityRisks: Array<{ risk: Text; evidence: Text; answer: Text; provenance: Provenance }> = [
  {
    risk: { en: "Breed and entity recognition has a published ceiling", zh: "品种与实体识别有一个公开的上限" },
    evidence: {
      en: "Published fine-grained breed accuracy tops out at 86.4% (Tsinghua Dogs, 130 breeds, over 65% real-life images) and about 59% (Oxford-IIIT Pet, 37 breeds). The pet types most common in Chinese pet content — 橘猫, 狸花猫, 中华田园犬 — are classes in neither list. The 0.87 target sits at the top of what published models reach, on an easier label set than this product’s.",
      zh: "公开的细粒度品种识别最好成绩是 86.4%（Tsinghua Dogs，130 类，七成以上真实生活照）和约 59%（Oxford-IIIT Pet，37 类）。而中文宠物内容里最常见的那几种——橘猫、狸花猫、中华田园犬——在两份类目表里都不是一个类。0.87 这个目标已经压在公开模型的上限上，而且是在一个比本产品简单的标签集上。",
    },
    answer: {
      en: "The design does not put a classifier in front of every image: the profile join — the owner already told us the breed — plus escalation for ambiguous posts. Chapter 07, content understanding.",
      zh: "设计上并不是给每张图都放一个分类器：先做档案联结——品种是主人自己填的——模糊的内容再升级处理。见第 07 章的内容理解能力。",
    },
    provenance: {
      confidence: "verified",
      source: "Tsinghua Dogs dataset and benchmark page; Parkhi et al., “Cats and Dogs”, CVPR 2012 (Oxford-IIIT Pet)",
      url: "https://cg.cs.tsinghua.edu.cn/ThuDogs/",
      retrievedAt: "2026-09-15",
      note:
        "Both numbers are read from the sources: Tsinghua Dogs publishes 86.4% as its best benchmark result (WS-DAN / Inception-v3) over 130 breeds and 70,428 images, more than 65% collected from real life with breed frequency matched to China; Parkhi et al. report about 59% average per-class breed accuracy over 37 breeds (12 cat + 25 dog). The class lists were read directly — 橘猫 (an orange coat pattern, not a breed), 狸花犬/狸花猫 and 中华田园犬 appear in neither. What this does not say is that 0.87 is unreachable on this product's own label set, which is coarser than 130 breeds; it says the target is at the published ceiling while the input is harder. Same sources as `understandingMetrics[1]` in 04.",
    },
  },
  {
    risk: { en: "The escalation policy has no evaluation set", zh: "升级规则没有评估集" },
    evidence: {
      en: "Cheap-tier understanding is not merely cheaper, it is materially worse: a tenth of the cost per question at 63% accuracy against 92%. So the rule deciding what escalates is load-bearing — and tuning it needs a labelled set of Chinese pet content that does not exist yet. This is the evaluation gap that moved content intelligence from 42 to 52 in chapter 10.",
      zh: "便宜档位的理解不只是更便宜，它确实更差：每个问题约十分之一的成本，准确率 63% 对 92%。所以决定「什么升级」的那条规则是承重的——而要调它，需要一个中文宠物内容的标注集，这个集子还不存在。这正是把内容理解的复杂度从 42 推到 52 的那个评估缺口。",
    },
    answer: {
      en: "None yet. Building that set is the first test in the closing section of this chapter.",
      zh: "暂时没有。建这个标注集，是本章最后一节的第一个测试。",
    },
    provenance: {
      confidence: "estimate",
      source: "Anthropic, “Optimizing for cost and intelligence”; Tsinghua Dogs; Oxford-IIIT Pet",
      url: "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence",
      retrievedAt: "2026-09-16",
      note:
        "The tier gap is measured and cited — Claude Haiku 4.5 answered GPQA Diamond questions at about a tenth of Opus 5's cost per question, with 63% accuracy against 92% — but it is measured on graduate science questions, not on Chinese pet posts, which is exactly why this row is an estimate and not a sourced observation: the direction (cheap is materially worse, not marginally worse) transfers, the magnitude does not. That no labelled set of Chinese pet content is public is a negative finding from 04's search, where the two breed datasets above were the closest available and neither carries the commonest Chinese pet types.",
    },
  },
];

/* ── 2 · 执行安全 · What happens when the agent is wrong ───────────────────────── */

export const executionRiskProvenance: Provenance = {
  confidence: "verified",
  source: "OWASP GenAI Security Project, “LLM01: Prompt Injection”; Anthropic, Managed Agents — Tools",
  url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
  retrievedAt: "2026-09-16",
  note:
    "Both halves are quoted from the sources. OWASP: “Indirect prompt injections occur when an LLM accepts input from external sources, such as websites or files”, and among its controls, “Require human approval for high-risk actions”. The platform primitive is Anthropic's tool layer: “The model never executes anything on its own. It emits a structured request, your code runs the operation, and the result flows back into the conversation”, with a per-tool `permission_policy` that can require confirmation. What is not sourced is any claim that the case's design is sufficient — the fourth AI design principle in 07 matches the control OWASP names, and that is all this section asserts.",
};

export const executionRisk: Array<{ title: Text; body: Text }> = [
  {
    title: { en: "The agent reads user content, then pays", zh: "Agent 先读用户内容，然后付款" },
    body: {
      en: "OWASP’s LLM01 defines indirect prompt injection as arising when a model “accepts input from external sources, such as websites or files”. This product’s agent reads posts, reviews and merchant listings, and then books and pays — a textbook exposure.",
      zh: "OWASP LLM01 把间接提示注入定义为：模型「接受来自外部来源的输入，例如网站或文件」时产生的漏洞。本产品的 agent 读帖子、读评价、读商家信息，然后下单并付款——教科书式的暴露面。",
    },
  },
  {
    title: { en: "The control is human approval before a side effect", zh: "控制措施是：有副作用之前，先由人批准" },
    body: {
      en: "The control OWASP names is “Require human approval for high-risk actions” — the fourth AI design principle in chapter 07. The platform primitive that implements it is a per-tool permission policy, where “the model never executes anything on its own”.",
      zh: "OWASP 点名的控制措施是「高风险操作需要人工批准」，也就是第 07 章第四条 AI 设计原则。实现它的平台原语是逐工具的权限策略，「模型不会自己执行任何操作」。",
    },
  },
];

/* ── 3 · 法律与合规 · Where the law binds the design ───────────────────────────── */

export const legalRiskProvenance: Provenance = {
  confidence: "verified",
  source: "《中华人民共和国个人信息保护法》第二十八条 / 第二十九条",
  url: "https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm",
  retrievedAt: "2026-09-17",
  note:
    "Statute text, read first-hand: Article 28 lists 行踪轨迹 among sensitive personal information, and Article 29 requires 单独同意 for processing it. This badge covers the statute only. Two interpretive questions are deliberately off the page because no source was read for either: where the line falls between a 行踪轨迹 and a single city-level fix, and whether handing location to a merchant at booking triggers a second 单独同意 under Article 23. Both are in `research/07-ai-strategy.md`. The product's answer to the constraint is the fifth AI design principle in 07, which is `design`, not a claim about the law.",
};

export const legalRisk: Array<{ title: Text; body: Text }> = [
  {
    title: { en: "Location is legally sensitive, and location is load-bearing", zh: "位置在法律上是敏感信息，而位置是承重的" },
    body: {
      en: "PIPL Article 28 lists 行踪轨迹 among sensitive personal information; Article 29 requires 单独同意 — separate consent, not a blanket terms-of-service checkbox. Location runs through all three layers of this case: the content understanding label, the same-city rung of the relationship ladder, and the whole local layer.",
      zh: "《个人信息保护法》第 28 条把行踪轨迹列为敏感个人信息，第 29 条要求单独同意——单独问一次，不是用户协议里的一个总勾选。而位置贯穿这个案例的三层：内容理解的地点标签、关系阶梯的「同城」一级，以及整个本地服务层。",
    },
  },
];

/* ── 4 · 供给依赖 · The part that is not an AI problem ─────────────────────────── */

export const supplyRiskProvenance: Provenance = {
  confidence: "verified",
  source: "Google Actions Center — Reservations End-to-End overview and integration policies; 美团开放平台 接入指南",
  url: "https://developers.google.com/actions-center/verticals/reservations/e2e/policies/integration-policies",
  retrievedAt: "2026-09-16",
  note:
    "Requirements quoted from Google's published policies: “Partners need to have a direct contractual relationship with all the merchants included in their integration feed”; availability answered “in less than 1 second”; “Partners must have comprehensive inventory for their merchants”; and “meeting the requirements does not guarantee a partner will be eligible to integrate or go live”. The target-market half is a negative finding: 美团's public open-platform documentation covers OAuth and user resources only, with access behind an enterprise application (营业执照号 plus the applicant's 身份证号) and review, and none of the named Chinese pet-store SaaS vendors (宠老板 / 宠想来 / 爱宠 / 宠知道) publishes an API. Absence of public documentation is not proof that no private integration exists — it is proof that none can be planned against. Same sources as the concierge's complexity in 10.",
};

export const supplyRisk: Array<{ title: Text; body: Text }> = [
  {
    title: { en: "The hardest dependency is contractual, not technical", zh: "最难的依赖是契约性的，不是技术性的" },
    body: {
      en: "Where a bookable-slot interface is a published standard, the requirements are contractual: a direct contractual relationship with every merchant in the feed, availability answered in under a second, comprehensive inventory — and meeting all of it still does not guarantee eligibility.",
      zh: "在可预订时段接口已有公开标准的地方，要求是契约性的：与接入的每一个商家都有直接合同关系、可用性查询一秒内响应、库存完整——而且全部满足也不保证有资格接入。",
    },
  },
  {
    title: { en: "In the target market, no such interface is public at all", zh: "在目标市场，这样的接口根本没有公开" },
    body: {
      en: "美团’s open platform documents OAuth and user resources only, behind an enterprise application and review, and none of the named Chinese pet-store SaaS vendors publishes an API. All of that sits before any of this case’s AI work begins.",
      zh: "美团开放平台的公开文档只覆盖 OAuth 与用户资源，接入要企业申请并审核，几家中文宠物门店 SaaS 无一公开 API。这一切都发生在本案的 AI 工作开始之前。",
    },
  },
];

/* ── 5 · 测不到的东西 · What could not be measured ─────────────────────────────
   Three numbers went unchecked for three structurally different reasons, and the reason decides what to
   do next. Every row carries its own mark, so the section takes no badge. */

export const unmeasured: Array<{ code: string; type: Text; meaning: Text; instance: Text; provenance: Provenance }> = [
  {
    code: "A",
    type: { en: "Not published", zh: "没有公开" },
    meaning: {
      en: "Someone measures it; nobody discloses it. Obtainable in principle — by working somewhere that has it.",
      zh: "有人在测，只是没人披露。原则上能拿到——在测它的那家公司里。",
    },
    instance: {
      en: "Request → booking on a services marketplace. Angi discloses roughly 23 million projects a year, Rover discloses bookings and repeat bookings; neither publishes the rate between them.",
      zh: "服务市场的「需求 → 预订」转化率。Angi 披露一年约 2300 万个需求，Rover 披露预订量与复购率，但两者都不公布中间那一步。",
    },
    provenance: {
      confidence: "verified",
      source: "Angi Inc. FY2023 Form 10-K; Rover Group, Inc. FY2021 Form 10-K",
      url: "https://www.sec.gov/Archives/edgar/data/1705110/000170511024000012/angi-20231231.htm",
      retrievedAt: "2026-09-16",
      note:
        "A negative finding read from statutory filings: Angi reports that “consumers turned to at least one of our businesses to find a service professional for approximately 23 million projects” in 2023 and Rover reports bookings and repeat bookings, but neither discloses a request → booking conversion. The “booking rate” league tables that surface in search (31% / 18% / 12% across lead platforms) trace to marketing blogs with no stated method or sample and were not used.",
    },
  },
  {
    code: "B",
    type: { en: "Not observable from inside", zh: "从平台内部观察不到" },
    meaning: {
      en: "The denominator includes events that never reach the platform. No amount of log data fixes it; only surveys, an external split or an experiment can estimate it.",
      zh: "分母里包含了从未抵达平台的事件。再多日志也补不上；只能靠调研、外部分布或实验去估。",
    },
    instance: {
      en: "Expressed intent → booking. An intent is a state of the owner, not a platform event: “狗该洗澡了，下楼那家就做了” never touches the product. Browsing behaviour recovers precision — of the intents flagged, how many converted — but never recall.",
      zh: "「表达出的意图 → 预订」。意图是主人的一个状态，不是平台上的一个事件：「狗该洗澡了，下楼那家就做了」从头到尾没碰过产品。浏览行为能还原精确率——被识别出的意图里有多少成交——但还原不了召回率。",
    },
    provenance: {
      confidence: "hypothesis",
      source: "毕马威《2025年中国宠物行业市场报告》 (as one of the partial remedies)",
      url: "https://assets.kpmg.com/content/dam/kpmg/cn/pdf/zh/2025/06/2025-china-pet-industry-market-report.pdf",
      retrievedAt: "2026-09-16",
      note:
        "Marked Illustrative because the finding is the absence itself: there is no source to cite for a rate whose denominator cannot be enumerated, and no source was found that measures one. Three partial remedies, each producing an estimate at best — ask owners what they did off-platform (how the white papers get penetration; 06 records that Chinese white papers publish penetration, not frequency); borrow an external split (KPMG publishes where owners go — 宠物店 above 50% for both 洗美 and 寄养); or run geo / hold-out experiments and measure incremental bookings, which sidesteps the denominator. One channel this product has that a pure marketplace does not: users narrate offline consumption in content, so a post saying 「今天带狗去洗澡了」 is an observation of a transaction the platform did not broker. That is an argument, not a measurement, and it is recorded here as one.",
    },
  },
  {
    code: "C",
    type: { en: "No comparable exists", zh: "没有可比对象" },
    meaning: {
      en: "Nobody in an adjacent category publishes anything to bracket it against.",
      zh: "邻近品类里，没有任何一家公开过可以用来对表的数字。",
    },
    instance: {
      en: "The social matching funnel. Match Group and Bumble disclose payers and revenue per payer only — no match → conversation → meeting funnel is published by either.",
      zh: "社交匹配漏斗。Match Group 与 Bumble 只披露付费用户与每付费用户收入，两家都没有公开「匹配 → 对话 → 见面」的漏斗。",
    },
    provenance: {
      confidence: "verified",
      source: "Match Group FY2023 Form 10-K; Bumble Inc. FY2024 Form 10-K",
      url: "https://www.sec.gov/Archives/edgar/data/891103/000089110324000014/mtch-20231231.htm",
      retrievedAt: "2026-09-12",
      note:
        "A negative finding read from both filings: the disclosed operating metrics are Payers and Revenue Per Payer (Match Group) and Paying Users and ARPPU (Bumble). Neither discloses match, conversation or meeting volumes, so 05's funnel targets have nothing public to sit beside — not a missing disclosure from one company but an absence across the category.",
    },
  },
];

/* ── 6 · 先证伪什么 · What to falsify first ────────────────────────────────────
   Proposed tests, not observations — the whole section is `design`. It hands over to 10's priorities. */

/** The evidence behind row 3's "because" cell; the other two reuse the marks from sections 1 and 4. */
export const anchoredTieProvenance: Provenance = {
  confidence: "verified",
  source: "Ishiguro et al., “Dog ownership enhances anchored personal relationships and sense of community”, PLOS One (2025)",
  url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0336957",
  retrievedAt: "2026-09-12",
  note:
    "Read from the paper (Sagamihara City, Japan; N=377; survey fielded 2023-06 to 2023-08; GSEM). The anchored personal relationship was the only relationship type mediating dog ownership → sense of community (b=0.69, 95% CI 0.29–1.08, p<.001), “more than twice as large as the direct effect”; incidental interactions rose (b=0.25, p=.019) but did not mediate; neighbourhood friendships did not increase after demographic controls (b=0.22, p=.36). One city, one country, dogs only — it is why the test below is worth running here rather than a result this product can assume.",
};

/**
 * Covers the claims, the tests and the consequences — all three are the proposal's own, and there is nothing
 * to cite for a test that has not been run. The evidence cells in the “Because” column carry their own marks.
 */
export const falsifyProvenance: Provenance = {
  confidence: "design",
  note:
    "The tests and what follows from a negative result are this case's proposal, not an observation. The evidence each test is aimed at is sourced elsewhere and marked on its own cell: the tier gap in section 1, the supply requirements in section 4, and the anchored-tie result from 05.",
};

export const falsify: Array<{ claim: Text; priority: "P0" | "P1"; because: Text; evidenceProvenance: Provenance; test: Text; ifNegative: Text }> = [
  {
    claim: { en: "Content understanding is cheap enough", zh: "内容理解便宜得起" },
    priority: "P0",
    because: {
      en: "The cheap tier is 63% against 92%, and the escalation rule has no evaluation set for Chinese pet content.",
      zh: "便宜档位是 63% 对 92%，而升级规则在中文宠物内容上没有评估集。",
    },
    evidenceProvenance: capabilityRisks[1].provenance,
    test: {
      en: "Hand-label a few hundred real Chinese pet posts; measure the cheap tier plus an escalation rule against them, at cost.",
      zh: "人工标注几百条真实的中文宠物帖；用它们去测便宜档位加升级规则的准确率和成本。",
    },
    ifNegative: {
      en: "Content intelligence is not the cheap substrate the case calls it, and the whole “understand every post” architecture has to be re-costed.",
      zh: "内容理解不是案例说的那个廉价底座，「理解每一条内容」这套架构要重新算账。",
    },
  },
  {
    claim: { en: "Supply can actually be connected", zh: "供给接得上" },
    priority: "P0",
    because: {
      en: "The dependency is contractual — a contract per merchant, real-time slots, complete inventory — and no public interface exists in the target market.",
      zh: "这个依赖是契约性的——一个商家一份合同、实时时段、完整库存——而目标市场没有任何公开接口。",
    },
    evidenceProvenance: supplyRiskProvenance,
    test: {
      en: "Sign a handful of merchants in one district and get real availability out of them, by whatever means.",
      zh: "在一个区里签下几家商家，用任何手段把真实的可预订时段拿出来。",
    },
    ifNegative: {
      en: "The concierge is not a P0 for this team at this stage, whatever its user value — and chapter 10’s complexity of 80 was still too low.",
      zh: "不管用户价值多高，服务管家在这个阶段对这支团队都不是 P0——而且第 10 章给的复杂度 80 还是低了。",
    },
  },
  {
    claim: { en: "Anchored relationships hold", zh: "锚定的关系留得住" },
    priority: "P1",
    because: {
      en: "The anchored tie is the only relationship type that mediates a sense of community (b=0.69, p<.001), while dog ownership alone does not raise friendship likelihood (b=0.22, p=.36).",
      zh: "锚定关系是唯一中介社区感的关系类型（b=0.69，p<.001），而单是养狗并不提高成为朋友的可能性（b=0.22，p=.36）。",
    },
    evidenceProvenance: anchoredTieProvenance,
    test: {
      en: "Compare 7-day relationship retention for activity-anchored matches against unanchored ones.",
      zh: "比较有活动锚点的匹配与没有锚点的匹配，7 天关系留存的差异。",
    },
    ifNegative: {
      en: "Pet matching is producing contact volume, which the research says does not become trust — and the match principles need rewriting, not tuning.",
      zh: "宠物匹配产出的只是接触量，而研究说接触不会自动变成信任——匹配原则要重写，不是调参。",
    },
  },
];
