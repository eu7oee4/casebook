import type { Str, Text } from "@/lib/i18n";
import type { Provenance } from "./provenance";

export type BenchmarkDomain = "Content" | "Social" | "Local";

export const DOMAIN_LABEL: Record<BenchmarkDomain, Text> = {
  Content: { en: "Content", zh: "内容" },
  Social: { en: "Social", zh: "社交" },
  Local: { en: "Local", zh: "本地" },
};

export type BenchmarkRow = {
  id: string;
  domain: BenchmarkDomain;
  product: Str;
  mechanism: Text;
  whyItWorks: Text;
  insight: Text;
  adaptation: Text;
  /** Source for the mechanism description (product docs, help centre, teardown). Omitted = general knowledge. */
  provenance?: Provenance;
};

export const benchmarkRows: BenchmarkRow[] = [
  {
    id: "xiaohongshu",
    domain: "Content",
    product: { en: "Xiaohongshu", zh: "小红书" },
    mechanism: { en: "Interest-based discovery built on content understanding, not follow graphs", zh: "基于内容理解而非关注关系的兴趣发现" },
    whyItWorks: { en: "Notes are decision units; search and feed share one understanding layer, so discovery leads to action", zh: "笔记是决策单元；搜索与信息流共用同一理解层，发现因此能通向行动" },
    insight: { en: "Content discovery can become social discovery: people who save the same kind of note are compatible", zh: "内容发现可以变成社交发现：收藏同类笔记的人彼此相容" },
    adaptation: { en: "Classify posts at the pet level and let saves/engagement feed the match candidate pool", zh: "在宠物层面对帖子分类，让收藏与互动进入匹配候选池" },
  },
  {
    id: "instagram",
    domain: "Content",
    product: "Instagram",
    mechanism: { en: "Account-as-persona — the pet account — plus tiered audiences (Close Friends)", zh: "账号即人设（宠物账号），加上分层受众（Close Friends）" },
    whyItWorks: { en: "Identity is expressive and low-effort; tiers make sharing feel safe", zh: "身份表达直接且低成本；分层让分享有安全感" },
    insight: { en: "The pet can be the poster; relationship tiers turn broadcast into intimacy", zh: "宠物可以成为发布者；关系分层让广播变成亲密" },
    adaptation: { en: "Pet profile owns the timeline; a “walk circle” tier for people you have actually met", zh: "宠物档案拥有时间线；为真正见过面的人设一个「遛狗圈」层级" },
  },
  {
    id: "soul",
    domain: "Social",
    product: "Soul",
    mechanism: { en: "Compatibility test before photos; guided first conversation", zh: "先做相容性测试再看照片；引导式的第一次对话" },
    whyItWorks: { en: "Removes appearance pressure and the blank-page problem of a first message", zh: "去掉外貌压力，也解决了第一条消息不知说什么的问题" },
    insight: { en: "Compatibility can be computed from something richer than a bio — for us, the pet", zh: "相容性可以基于比个人简介更丰富的东西来计算，对我们来说就是宠物" },
    adaptation: { en: "Pet temperament + schedule + distance as the compatibility model; first message pre-filled with a plan", zh: "以宠物性格 + 时间安排 + 距离作为相容性模型；第一条消息预填一个计划" },
  },
  {
    id: "jike",
    domain: "Social",
    product: { en: "Jike", zh: "即刻" },
    mechanism: { en: "Topic circles as the join unit; membership displayed as identity", zh: "以话题圈子为加入单元；成员身份即社交身份" },
    whyItWorks: { en: "Small, high-signal communities with visible norms", zh: "小而高信号的社区，规范清晰可见" },
    insight: { en: "Breed and stage are natural circles with built-in relevance decay (a puppy grows up)", zh: "品种与阶段是天然的圈子，并自带相关性衰减（幼犬会长大）" },
    adaptation: { en: "Stage-based circles that migrate members as the pet ages", zh: "按阶段划分的圈子，随宠物年龄增长自动迁移成员" },
  },
  {
    id: "dianping",
    domain: "Local",
    product: { en: "Dianping", zh: "大众点评" },
    mechanism: { en: "Ranked lists and review artifacts as the decision layer before a visit", zh: "榜单与评价内容作为到店前的决策层" },
    whyItWorks: { en: "Captures intent-to-visit and resolves it with social proof at scale", zh: "捕获到店意图，并用规模化的社会证明来完成决策" },
    insight: { en: "Pet content can become local service intent: a beach post is a grooming need", zh: "宠物内容可以变成本地服务意图：一条海边帖子就是一次洗护需求" },
    adaptation: { en: "Detect service moments in content; rank merchants with reviews from people the user follows", zh: "在内容中识别服务时刻；用用户所关注的人的评价来给商家排序" },
  },
  {
    id: "meituan",
    domain: "Local",
    product: { en: "Meituan", zh: "美团" },
    mechanism: { en: "Intent → nearby supply → fulfilment in one flow, with merchant SLAs", zh: "意图 → 附近供给 → 履约一气呵成，并有商家 SLA 保障" },
    whyItWorks: { en: "Density plus reliability turns a decision into a habit", zh: "密度加上可靠性，让决策变成习惯" },
    insight: { en: "Fulfilment reliability is what lets an agent act on the user's behalf", zh: "履约的可靠性，是 Agent 能代替用户行动的前提" },
    adaptation: { en: "Concierge books only against merchants with slot and SLA guarantees; feedback updates ranking", zh: "管家只向有档期与 SLA 保障的商家预订；反馈回流更新排序" },
  },
];

export const transferPrinciple: { title: Text; body: Text } = {
  title: { en: "Borrow the mechanism, not the product.", zh: "借鉴机制，而不是复制产品。" },
  body: {
    en: "Each benchmark solves one stage of the loop extremely well. The opportunity is not to clone any of them but to connect their mechanisms around a single identity — the pet — so that discovery, relationship and fulfilment reinforce each other.",
    zh: "每个参考产品都把闭环中的某一段做到了极致。机会不在于复制其中任何一个，而在于围绕同一个身份——宠物——把它们的机制连起来，让发现、关系与履约相互强化。",
  },
};

export const transferMap: Array<{ id: string; from: Text; to: Text; via: Text }> = [
  { id: "discovery", from: { en: "Content discovery", zh: "内容发现" }, to: { en: "Social discovery", zh: "社交发现" }, via: { en: "shared content understanding", zh: "共用的内容理解层" } },
  { id: "identity", from: { en: "Pet identity", zh: "宠物身份" }, to: { en: "Relationship tiers", zh: "关系分层" }, via: { en: "the pet account + circles", zh: "宠物账号 + 圈子" } },
  { id: "matching", from: { en: "Compatibility matching", zh: "相容性匹配" }, to: { en: "Offline activity", zh: "线下活动" }, via: { en: "activity-anchored matches", zh: "以活动为锚点的匹配" } },
  { id: "intent", from: { en: "Content", zh: "内容" }, to: { en: "Local service intent", zh: "本地服务意图" }, via: { en: "service-moment detection", zh: "服务时刻识别" } },
  { id: "trust", from: { en: "Reviews", zh: "评价" }, to: { en: "Trust ranking", zh: "信任排序" }, via: { en: "social-graph weighting", zh: "社交关系加权" } },
  { id: "execution", from: { en: "Fulfilment reliability", zh: "履约可靠性" }, to: { en: "Agent execution", zh: "Agent 执行" }, via: { en: "merchant SLAs as tool contracts", zh: "商家 SLA 作为工具契约" } },
];
