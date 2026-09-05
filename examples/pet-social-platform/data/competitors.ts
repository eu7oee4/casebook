import type { Text } from "@/lib/i18n";
import type { Provenance } from "./provenance";

export type Tier = "direct" | "industry" | "benchmark";

export type Competitor = {
  id: string;
  name: Text;
  tier: Tier;
  category: Text;
  coreValue: Text;
  strength: Text;
  gap: Text;
  mechanism: Text;
  /** content(0) → service(100) */
  x: number;
  /** individual utility(0) → social ecosystem(100) */
  y: number;
  /**
   * Where the description of this product comes from (official site, app store listing, press).
   * Omitted = written from general knowledge; treat as hypothesis. Never add user numbers without a source.
   */
  provenance?: Provenance;
};

export const tiers: Array<{ value: Tier | "all"; label: Text; description: Text }> = [
  { value: "all", label: { en: "All", zh: "全部" }, description: { en: "The full landscape across three tiers.", zh: "三个层级的完整格局。" } },
  {
    value: "direct",
    label: { en: "Direct", zh: "直接竞品" },
    description: { en: "Pet social — products where the pet is the unit of identity.", zh: "宠物社交——以宠物为身份单位的产品。" },
  },
  {
    value: "industry",
    label: { en: "Pet industry", zh: "宠物行业" },
    description: {
      en: "Pet content, services and commerce that own a slice of the lifecycle.",
      zh: "占据生命周期某一段的宠物内容、服务与电商产品。",
    },
  },
  {
    value: "benchmark",
    label: { en: "Benchmark", zh: "跨界参考" },
    description: {
      en: "Cross-industry products whose mechanisms transfer to content, social and local.",
      zh: "机制可迁移到内容、社交与本地的跨行业产品。",
    },
  },
];

export const competitors: Competitor[] = [
  {
    id: "pet-social-a",
    name: { en: "Pet social community (type A)", zh: "宠物社交社区（A 类）" },
    tier: "direct",
    category: { en: "Pet social · feed-first", zh: "宠物社交 · 信息流优先" },
    coreValue: { en: "A dedicated feed for pet photos and diaries", zh: "专属于宠物照片与日记的信息流" },
    strength: { en: "Clear identity; owners feel at home; high posting intent", zh: "身份清晰；养宠人有归属感；发布意愿高" },
    gap: {
      en: "Interaction stays at likes; relationships rarely leave the feed; no local layer",
      zh: "互动停留在点赞；关系很少走出信息流；没有本地层",
    },
    mechanism: {
      en: "Pet profile as the poster — the pet, not the human, owns the timeline",
      zh: "以宠物档案作为发布主体——时间线属于宠物而非人",
    },
    x: 12,
    y: 62,
  },
  {
    id: "pet-social-b",
    name: { en: "Breed & interest communities", zh: "品种与兴趣社群" },
    tier: "direct",
    category: { en: "Pet social · group-first", zh: "宠物社交 · 群组优先" },
    coreValue: { en: "Breed-specific groups and Q&A", zh: "按品种划分的群组与问答" },
    strength: { en: "Deep, trusted advice; strong retention among engaged owners", zh: "深度、可信的经验；活跃养宠人留存强" },
    gap: {
      en: "Closed groups do not scale discovery; little structure around place or service",
      zh: "封闭群组无法规模化发现；围绕地点与服务几乎没有结构",
    },
    mechanism: {
      en: "Stage-based cohorts (puppy, senior) that keep a group relevant over time",
      zh: "按阶段划分的同期群（幼犬、老年犬），让群组随时间保持相关",
    },
    x: 22,
    y: 74,
  },
  {
    id: "pet-content",
    name: { en: "Pet content & knowledge platforms", zh: "宠物内容与知识平台" },
    tier: "industry",
    category: { en: "Pet content", zh: "宠物内容" },
    coreValue: { en: "Expert and UGC guidance on care and behaviour", zh: "关于照护与行为的专家和 UGC 指南" },
    strength: { en: "Search intent; evergreen content; credibility", zh: "搜索意图；长青内容；可信度" },
    gap: { en: "No relationships, no local action — reading ends the session", zh: "没有关系，没有本地行动——读完即离开" },
    mechanism: {
      en: "Structured knowledge (symptom → cause → action) that AI can retrieve against",
      zh: "结构化知识（症状 → 原因 → 行动），可供 AI 检索",
    },
    x: 28,
    y: 30,
  },
  {
    id: "pet-services",
    name: { en: "Pet service booking apps", zh: "宠物服务预订 App" },
    tier: "industry",
    category: { en: "Pet services", zh: "宠物服务" },
    coreValue: { en: "Book grooming, boarding and walking", zh: "预订美容、寄养与遛狗" },
    strength: { en: "Transaction-ready; clear supply; repeat purchase", zh: "可直接交易；供给清晰；复购" },
    gap: {
      en: "Cold start on trust; no community context; every booking starts from zero",
      zh: "信任冷启动；没有社区语境；每次预订都从零开始",
    },
    mechanism: {
      en: "Sitter/groomer profiles with verified repeat-customer signals",
      zh: "带有经验证复购信号的寄养员 / 美容师档案",
    },
    x: 90,
    y: 22,
  },
  {
    id: "pet-commerce",
    name: { en: "Pet commerce & subscriptions", zh: "宠物电商与订阅" },
    tier: "industry",
    category: { en: "Pet commerce", zh: "宠物电商" },
    coreValue: { en: "Food, supplies, health products delivered", zh: "食品、用品、健康产品配送到家" },
    strength: { en: "High-frequency purchase; pet profile for replenishment", zh: "高频购买；宠物档案驱动补货" },
    gap: {
      en: "Content and social are marketing, not product; the pet profile is a SKU filter",
      zh: "内容与社交只是营销而非产品；宠物档案只是 SKU 筛选器",
    },
    mechanism: {
      en: "Pet profile → replenishment cadence (the profile drives the transaction)",
      zh: "宠物档案 → 补货节奏（档案驱动交易）",
    },
    x: 82,
    y: 12,
  },
  {
    id: "xiaohongshu",
    name: { en: "Xiaohongshu", zh: "小红书" },
    tier: "benchmark",
    category: { en: "Content discovery", zh: "内容发现" },
    coreValue: { en: "Interest-based lifestyle discovery", zh: "基于兴趣的生活方式发现" },
    strength: {
      en: "Search-grade content understanding; discovery → decision → purchase",
      zh: "搜索级的内容理解；发现 → 决策 → 购买",
    },
    gap: {
      en: "Pets are one topic among thousands; no pet-level identity or local action",
      zh: "宠物只是数千话题之一；没有宠物层面的身份或本地行动",
    },
    mechanism: {
      en: "Notes as decision units; interest graph built from content understanding, not follows",
      zh: "笔记作为决策单元；兴趣图谱建立在内容理解而非关注关系上",
    },
    x: 30,
    y: 48,
  },
  {
    id: "instagram",
    name: { en: "Instagram", zh: "Instagram" },
    tier: "benchmark",
    category: { en: "Content → social", zh: "内容 → 社交" },
    coreValue: { en: "Visual identity and following", zh: "视觉身份与关注关系" },
    strength: { en: "Pet accounts as identities; creator ecosystem", zh: "宠物账号即身份；创作者生态" },
    gap: { en: "Global feed, no locality; relationships are broadcast, not mutual", zh: "全球信息流，无本地性；关系是广播式而非双向" },
    mechanism: {
      en: "Account-as-persona (the pet account) and Close Friends as a relationship tier",
      zh: "账号即人设（宠物账号），Close Friends 作为关系层级",
    },
    x: 18,
    y: 58,
  },
  {
    id: "soul",
    name: { en: "Soul", zh: "Soul" },
    tier: "benchmark",
    category: { en: "Social matching", zh: "社交匹配" },
    coreValue: { en: "Personality-based matching without photos first", zh: "先看性格、不先看照片的匹配" },
    strength: {
      en: "Matching on compatibility instead of appearance; low-pressure first contact",
      zh: "按相容性而非外貌匹配；低压力的初次接触",
    },
    gap: {
      en: "No shared real-world context; conversations decay without an activity to meet around",
      zh: "缺少共同的现实语境；没有可以见面的活动，对话会衰减",
    },
    mechanism: { en: "Profile test → compatibility → guided first conversation", zh: "性格测试 → 相容性 → 引导式初次对话" },
    x: 40,
    y: 84,
  },
  {
    id: "jike",
    name: { en: "Jike", zh: "即刻" },
    tier: "benchmark",
    category: { en: "Interest community", zh: "兴趣社区" },
    coreValue: { en: "Topic circles with strong norms", zh: "规范感强的话题圈子" },
    strength: { en: "Small, high-signal communities; identity via topics followed", zh: "小而高信号的社区；通过关注的话题表达身份" },
    gap: { en: "Purely online; limited local or transactional layer", zh: "纯线上；本地层与交易层有限" },
    mechanism: { en: "Topic as the join unit; membership displayed as identity", zh: "以话题为加入单元；成员身份即自我表达" },
    x: 35,
    y: 70,
  },
  {
    id: "dianping",
    name: { en: "Dianping", zh: "大众点评" },
    tier: "benchmark",
    category: { en: "Local service discovery", zh: "本地服务发现" },
    coreValue: { en: "Reviews and ranking for local merchants", zh: "本地商户的评价与排行" },
    strength: {
      en: "Intent-to-visit capture; trust through volume of reviews; booking and vouchers",
      zh: "捕获到店意图；靠评价数量建立信任；预订与团购券",
    },
    gap: {
      en: "Reviews are anonymous utility, not relationships; no pet-level context",
      zh: "评价是匿名的工具信息而非关系；没有宠物层面的语境",
    },
    mechanism: {
      en: "Ranked lists + review artifacts as the decision layer before a visit",
      zh: "榜单 + 评价内容作为到店前的决策层",
    },
    x: 80,
    y: 40,
  },
  {
    id: "meituan",
    name: { en: "Meituan", zh: "美团" },
    tier: "benchmark",
    category: { en: "Local transaction", zh: "本地交易" },
    coreValue: { en: "Instant local fulfilment", zh: "即时本地履约" },
    strength: { en: "Supply density; fulfilment reliability; habit", zh: "供给密度；履约可靠；使用习惯" },
    gap: { en: "Purely transactional; no community memory across visits", zh: "纯交易；跨次到店没有社区记忆" },
    mechanism: {
      en: "Intent → nearby supply → fulfilment in one flow; merchant SLAs",
      zh: "意图 → 附近供给 → 履约一气呵成；商户 SLA",
    },
    x: 95,
    y: 20,
  },
];

export const competitorInsights: Text[] = [
  {
    en: "Direct competitors own identity but stall at interaction; nobody has built the bridge to local action.",
    zh: "直接竞品拥有身份，却止步于互动；没有人搭起通往本地行动的桥。",
  },
  {
    en: "Service and commerce players own the transaction but start every booking from zero trust.",
    zh: "服务与电商玩家拥有交易，但每一次预订都从零信任开始。",
  },
  {
    en: "The empty quadrant — high service, high social — is where a community-grounded service layer would sit.",
    zh: "空着的象限——高服务、高社交——正是以社区为根基的服务层该在的位置。",
  },
];
