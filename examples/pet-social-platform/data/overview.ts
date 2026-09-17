import type { Text } from "@/lib/i18n";
import { DESIGN, type Provenance } from "./provenance";

export const overviewScopeProvenance: Provenance = DESIGN;
export const overviewThesisProvenance: Provenance = DESIGN;
/**
 * The three insights are the author's product judgement about the world, revisable by research.
 * They stay `hypothesis`: reconciling them against 02–09 (2026-09-16) did not make them *derived from*
 * sources, so `estimate` would over-claim. The note carries what the research found for and against each.
 */
export const overviewInsightsProvenance: Provenance = {
  confidence: "hypothesis",
  retrievedAt: "2026-09-16",
  note:
    "The author's product judgement, written before any research and kept as the author's. Reconciled against chapters 02–09 on 2026-09-16; what the evidence says, per insight. " +
    "(01) Pet identity reliably produces contact — US dog owners were 2.4× more likely to meet their neighbours than cat owners, and Japanese owners who walked scored higher on activities with neighbours — but not cohesion (no significant difference) and not neighbourhood friendship (b=0.22, p=.36). What mediates a sense of community is the anchored tie, the relationship that exists through the dog (b=0.69, p<.001, more than twice the direct effect). So the climb from contact to trust is the product's job, not a property of ownership. No public source compares an identity key against an interest tag, so \"stronger than any interest tag\" is uncompared. " +
    "(02) The two ends of the loop are published — Rover: \"approximately 81% of our bookings were repeat bookings\"; 32.8% of new veterinary clients first heard of the practice from a fellow pet owner, ahead of every other channel. The middle is not: no marketplace discloses how often a stated need becomes a booking. " +
    "(03) Four of the five capabilities have production comparables (Pinterest's one taxonomy feeding several consumers over 200B+ Pins; Meituan's review understanding at ~708k merchants; Dianping's 点仔; confirmation-gated agent execution as a platform primitive). Social matching has none — no dating company discloses a funnel. And understanding is cheap only on the easy majority: the cheap model tier measured 63% accuracy against 92%, so escalation is load-bearing. " +
    "Sources per claim in research/01-overview.md.",
};
export const overviewOpportunitiesProvenance: Provenance = DESIGN;

export const overview = {
  project: { en: "Project / 2026", zh: "项目 / 2026" } as Text,
  title: [
    { en: "Pet Social Platform", zh: "宠物社交平台" },
    { en: "Product Research", zh: "产品研究" },
    { en: "& AI Strategy", zh: "与 AI 策略" },
  ] as Text[],
  subtitle: { en: "From Content Community to AI-native Pet Ecosystem", zh: "从内容社区到 AI 原生的宠物生态" } as Text,
  summary: {
    en: "How a pet platform can grow from content into a living ecosystem of relationships and local services — with AI as the intelligence layer connecting users, pets, content and services rather than a bolt-on chatbot.",
    zh: "探索一个宠物平台如何从内容出发，成长为由关系与本地服务构成的生态；AI 不是附加的聊天框，而是连接用户、宠物、内容与服务的智能层。",
  } as Text,
  /** Shown small under the summary in the English version only (the original Chinese brief). */
  summaryZh: "探索如何通过内容、关系与本地服务构建宠物生活生态，并以 AI 作为 intelligence layer，连接用户、宠物、内容与服务。",
  /**
   * How the case positions its own evidence. Decided 2026-09-06 (`research/plan.md`, top) to land here and in
   * `PRODUCT.md` when chapter 01 was updated; placed in the hero 2026-09-17. Renders in both locales.
   */
  positioning: {
    en: "Evidence-backed product research built on public sources; market, competitor and mechanism figures are sourced, while product targets and judgement-based conclusions are explicitly marked as the author's hypotheses.",
    zh: "基于公开来源做过实证的产品研究；市场、竞品、机制类数字均有出处，产品目标值与判断类结论明确标注为作者假设。",
  } as Text,
  scope: [
    { label: { en: "Content", zh: "内容" }, note: { en: "Diary, advice, discovery", zh: "日记、经验、发现" } },
    { label: { en: "Social", zh: "社交" }, note: { en: "Pet identity → relationship", zh: "宠物身份 → 关系" } },
    { label: { en: "Local", zh: "本地" }, note: { en: "Services & places", zh: "服务与场所" } },
    { label: { en: "AI", zh: "AI" }, note: { en: "Intelligence layer", zh: "智能层" } },
    { label: { en: "Data", zh: "数据" }, note: { en: "User & pet profile", zh: "用户与宠物档案" } },
    { label: { en: "Monetization", zh: "商业化" }, note: { en: "Services, commerce, ads", zh: "服务、电商、广告" } },
  ] as Array<{ label: Text; note: Text }>,
  thesis: [
    { label: { en: "Content", zh: "内容" }, note: { en: "the entry point", zh: "入口" } },
    { label: { en: "Interaction", zh: "互动" }, note: { en: "like · comment · save", zh: "点赞 · 评论 · 收藏" } },
    { label: { en: "Relationship", zh: "关系" }, note: { en: "follow · DM · same city", zh: "关注 · 私信 · 同城" } },
    { label: { en: "Local Connection", zh: "本地连接" }, note: { en: "walks, meetups, places", zh: "遛狗、约见、场所" } },
    { label: { en: "Service", zh: "服务" }, note: { en: "grooming, vet, boarding", zh: "美容、医疗、寄养" } },
    { label: { en: "Ecosystem", zh: "生态" }, note: { en: "data → personalization → revenue", zh: "数据 → 个性化 → 收入" }, emphasis: true },
  ] as Array<{ label: Text; note: Text; emphasis?: boolean }>,
  insights: [
    {
      index: "01",
      title: { en: "Pet is not just a content topic. It is a social identity.", zh: "宠物不只是一个内容话题，而是一种社交身份。" },
      body: {
        en: "Owners present themselves through their pets — breed, stage, temperament, routine: specific, persistent, emotionally loaded. That identity is a reliable social key — it genuinely produces contact between owners. The trust it brings on its own is limited: how you climb from contact to a relationship is the product's problem to solve.",
        zh: "养宠人通过宠物来呈现自己：品种、阶段、性格、作息——具体、持久，且带有强烈情感。这种身份是一把可靠的社交钥匙，能让养宠人之间真的产生接触。但它本身带来的信任有限：如何从接触上升到关系，是产品要思考的事。",
      },
    },
    {
      index: "02",
      title: { en: "Local services are where online relationships become real-world value.", zh: "本地服务是线上关系转化为现实价值的地方。" },
      body: {
        en: "Walks, grooming, boarding, the vet — these needs are inherently local. And how often a stated need actually becomes a booking: no platform has ever published that middle step. Pet social relationships carry service intent; services that land produce content, trust and repeat bookings. That loop is the moat a pure content app never gets, and the hardest gap to build across.",
        zh: "遛狗、美容、寄养、宠物医院……这些需求天然是本地的。而一句需求到底有多大比例会变成一次预订，中间那一步没有任何平台公开过。宠物社交关系带着服务意图，服务落地产生内容、信任和复购。这个闭环是纯内容产品永远得不到的护城河，也是最难搭建的缺口。",
      },
    },
    {
      index: "03",
      title: {
        en: "AI should not be another feature. It should become the intelligence layer connecting the ecosystem.",
        zh: "AI 不该是又一个功能，而应成为连接整个生态的智能层。",
      },
      body: {
        en: "The bottleneck is not generating posts; it is understanding pets, people, places and intent well enough to match and act. Content understanding, matching and service execution are one system, not three chat windows.",
        zh: "瓶颈不在于生成内容，而在于是否足够理解宠物、人、地点与意图，从而完成匹配和执行。内容理解、社交匹配与服务执行是一个系统，而不是三个聊天窗口。",
      },
    },
  ] as Array<{ index: string; title: Text; body: Text }>,
  opportunities: [
    {
      title: { en: "AI Content Intelligence", zh: "AI 内容理解" },
      body: { en: "Understand every post at the pet / breed / stage / place / emotion level — once at publish time, with only the ambiguous ones escalated; the substrate for every other capability.", zh: "在宠物 / 品种 / 阶段 / 地点 / 情绪的层面理解每一条内容——发布时跑一次，只有判不准的才升级处理；是其他所有能力的基础。" },
      priority: "P0",
    },
    {
      title: { en: "AI Pet Matching", zh: "AI 宠物匹配" },
      body: { en: "Match owners on pet compatibility, schedule and distance to form relationships that survive offline.", zh: "基于宠物相容性、时间安排与距离匹配养宠人，形成能延续到线下的关系。" },
      priority: "P1",
    },
    {
      title: { en: "AI Service Concierge", zh: "AI 服务管家" },
      body: { en: "Turn a natural-language need into a filtered, explained, booked service — the first agentic transaction.", zh: "把一句自然语言的需求变成经过筛选、解释并完成预订的服务，是第一笔 Agent 式交易。" },
      priority: "P0",
    },
    {
      title: { en: "Pet Knowledge Graph", zh: "宠物知识图谱" },
      body: { en: "One graph connecting content, users, pets, relationships, places and services; the memory the AI layer reasons over.", zh: "一张连接内容、用户、宠物、关系、地点与服务的图谱，是 AI 层进行推理的记忆。" },
      priority: "P1",
    },
  ] as Array<{ title: Text; body: Text; priority: "P0" | "P1" }>,
  readingPath: [
    { index: "02", label: { en: "Market", zh: "市场" }, note: { en: "why this category, why now", zh: "为什么是这个品类，为什么是现在" } },
    { index: "03", label: { en: "Competitors", zh: "竞品" }, note: { en: "who solves which part of the lifecycle", zh: "谁解决了生命周期的哪一段" } },
    { index: "04–06", label: { en: "Content · Social · Local", zh: "内容 · 社交 · 本地" }, note: { en: "the three product surfaces", zh: "三个产品界面" } },
    { index: "07", label: { en: "AI Strategy", zh: "AI 策略" }, note: { en: "the intelligence layer", zh: "智能层" } },
    { index: "08", label: { en: "Benchmark", zh: "跨界参考" }, note: { en: "mechanisms borrowed from other categories", zh: "从其他品类借来的机制" } },
    { index: "09–10", label: { en: "Risks · Insights", zh: "风险 · 结论" }, note: { en: "what could fail, then the priorities", zh: "可能失败在哪里，然后是优先级" } },
  ] as Array<{ index: string; label: Text; note: Text }>,
};
