import type { Str, Text } from "@/lib/i18n";
import { DESIGN, type Provenance } from "./provenance";

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
    provenance: {
      confidence: "estimate",
      source: "小红书 App Store listing (CN) + search-usage press",
      url: "https://apps.apple.com/cn/app/id741292507",
      retrievedAt: "2026-09-10",
      note:
        "Positioning from the CN App Store listing (v9.46, 2026-09): '生活兴趣社区', '遇见同好', '一键种草，轻松下单拔草', '线下活动'. The search-first reading rests on secondary press (新浪科技 2024-12-13: ~70% of monthly actives search, ~600M daily searches in 2024Q4) — no first-hand Xiaohongshu release read, hence estimate. 'One understanding layer behind search and feed' is the author's inference about architecture, not a documented fact.",
    },
  },
  {
    id: "instagram",
    domain: "Content",
    product: "Instagram",
    mechanism: { en: "Account-as-persona — the pet account — plus tiered audiences (Close Friends)", zh: "账号即人设（宠物账号），加上分层受众（Close Friends）" },
    whyItWorks: { en: "Identity is expressive and low-effort; tiers make sharing feel safe", zh: "身份表达直接且低成本；分层让分享有安全感" },
    insight: { en: "The pet can be the poster; relationship tiers turn broadcast into intimacy", zh: "宠物可以成为发布者；关系分层让广播变成亲密" },
    adaptation: { en: "Pet profile owns the timeline; a “walk circle” tier for people you have actually met", zh: "宠物档案拥有时间线；为真正见过面的人设一个「遛狗圈」层级" },
    provenance: {
      confidence: "verified",
      source: "Instagram Help Center — Close Friends",
      url: "https://help.instagram.com/476003390920140",
      retrievedAt: "2026-09-10",
      note:
        "Help article: a Close Friends list lets you share 'a post, note, reel, or story' with only the people on it; members see a 'Close friends' label and a green ring; nobody is notified when added or removed, and 'No one can request to be added'. Pet accounts as personas is observed practice, not a documented feature.",
    },
  },
  {
    id: "soul",
    domain: "Social",
    product: "Soul",
    mechanism: { en: "30-second personality-and-values test before photos; avatars, voice matching and group parties as low-pressure first contact", zh: "先做 30 秒性格与三观测试再看照片；捏脸头像、语音匹配和群聊派对作为低压力的初次接触" },
    whyItWorks: { en: "Removes appearance pressure and the blank-page problem of a first message", zh: "去掉外貌压力，也解决了第一条消息不知说什么的问题" },
    insight: { en: "Compatibility can be computed from something richer than a bio — for us, the pet", zh: "相容性可以基于比个人简介更丰富的东西来计算，对我们来说就是宠物" },
    adaptation: { en: "Pet temperament + schedule + distance as the compatibility model; first message pre-filled with a plan", zh: "以宠物性格 + 时间安排 + 距离作为相容性模型；第一条消息预填一个计划" },
    provenance: {
      confidence: "verified",
      source: "Soul App Store listing (CN)",
      url: "https://apps.apple.com/cn/app/id1032287195",
      retrievedAt: "2026-09-10",
      note:
        "CN App Store listing (v6.35.0, 2026-09): '30秒的灵魂鉴定', '基于性格、三观的测试', '超萌捏脸', '语音匹配、群聊派对', '3D星球 — 发现身边有趣的灵魂'. The earlier 'guided first conversation' wording was dropped: no such feature is documented. Ranking logic is not published.",
    },
  },
  {
    id: "jike",
    domain: "Social",
    product: { en: "Jike", zh: "即刻" },
    mechanism: { en: "Topic circles as the join unit; membership displayed as identity", zh: "以话题圈子为加入单元；成员身份即社交身份" },
    whyItWorks: { en: "Small, high-signal communities with visible norms", zh: "小而高信号的社区，规范清晰可见" },
    insight: { en: "Breed and stage are natural circles with built-in relevance decay (a puppy grows up)", zh: "品种与阶段是天然的圈子，并自带相关性衰减（幼犬会长大）" },
    adaptation: { en: "Stage-based circles that migrate members as the pet ages", zh: "按阶段划分的圈子，随宠物年龄增长自动迁移成员" },
    provenance: {
      confidence: "verified",
      source: "即刻 App Store listing (CN)",
      url: "https://apps.apple.com/cn/app/id966129812",
      retrievedAt: "2026-09-10",
      note:
        "CN App Store listing (v7.56.16, 2026-03): '30W+兴趣圈子' (developer claim), '限时日记 — 发布日记48小时后仅自己可见', '同好面基 — 线下玩更嗨', '基于兴趣同好的交友社区'. 'Membership displayed as identity' describes the product's profile convention; visible norms are the author's reading.",
    },
  },
  {
    id: "dianping",
    domain: "Local",
    product: { en: "Dianping", zh: "大众点评" },
    mechanism: { en: "Ranked lists and review artifacts as the decision layer before a visit", zh: "榜单与评价内容作为到店前的决策层" },
    whyItWorks: { en: "Captures intent-to-visit and resolves it with social proof at scale", zh: "捕获到店意图，并用规模化的社会证明来完成决策" },
    insight: { en: "Pet content can become local service intent: a beach post is a grooming need", zh: "宠物内容可以变成本地服务意图：一条海边帖子就是一次洗护需求" },
    adaptation: { en: "Detect service moments in content; rank merchants with reviews from people the user follows", zh: "在内容中识别服务时刻；用用户所关注的人的评价来给商家排序" },
    provenance: {
      confidence: "verified",
      source: "美团规则中心 — 2025年大众点评必吃榜规则",
      url: "https://rules-center.meituan.com/m/detail/guize/316001?activeRule=1",
      retrievedAt: "2026-09-10",
      note:
        "List rules (2025-05-15): five criteria led by '评价真实可信'; '不采纳人为提名，坚持公平公正不收费'; merchants penalised for review manipulation are excluded; third-party notarised. Product scope from the CN App Store listing (v11.71.13, 2026-09): reviews, check-in photos, 团购, booking.",
    },
  },
  {
    id: "meituan",
    domain: "Local",
    product: { en: "Meituan", zh: "美团" },
    mechanism: { en: "Intent → nearby supply → fulfilment in one flow, backed by platform-level guarantees (unconsumed-voucher refund, expired-voucher auto refund)", zh: "意图 → 附近供给 → 履约一气呵成，并由平台级保障兜底（未消费随时退、过期自动退）" },
    whyItWorks: { en: "Density plus reliability turns a decision into a habit", zh: "密度加上可靠性，让决策变成习惯" },
    insight: { en: "Fulfilment reliability is what lets an agent act on the user's behalf", zh: "履约的可靠性，是 Agent 能代替用户行动的前提" },
    adaptation: { en: "Concierge books only against merchants with slot and SLA guarantees; feedback updates ranking", zh: "管家只向有档期与 SLA 保障的商家预订；反馈回流更新排序" },
    provenance: {
      confidence: "verified",
      source: "美团消费者保障服务 + 美团 App Store listing (CN)",
      url: "https://i.meituan.com/commitment/",
      retrievedAt: "2026-09-10",
      note:
        "Guarantee page: '过期自动退 — 美团券有效期过后7个工作日内，对未消费的订单进行自动退款', '未消费随时退款', refunds in 1–7 working days. Listing (v12.65, 2026-09): 在线预订餐厅桌位, 外卖, 跑腿, '7天内未消费无条件退款'. Pet-store online booking pilot: Meituan press release 2023 (S11). 'Merchant SLAs' in the adaptation column is the case's own design term, not a Meituan feature.",
    },
  },
];

export const transferMapProvenance: Provenance = DESIGN;

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
