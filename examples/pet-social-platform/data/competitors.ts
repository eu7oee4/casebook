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
   * Map coordinates `x` / `y` are the author's judgement in every case; the provenance covers the text fields,
   * and the reasoning behind each position is in `research/03-competitors.md`.
   */
  provenance?: Provenance;
};

const RETRIEVED = "2026-09-10";

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
  // ── A · Direct: pet social ────────────────────────────────────────────────
  {
    id: "petzbe",
    name: { en: "Petzbe", zh: "Petzbe" },
    tier: "direct",
    category: { en: "Pet social · feed-first (US)", zh: "宠物社交 · 信息流优先（美国）" },
    coreValue: {
      en: "A pet-only feed: the pet posts, humans stay out of frame",
      zh: "只有宠物的信息流：由宠物发布，人不入镜",
    },
    strength: {
      en: "Clear identity; chronological, non-algorithmic feed; in-app charity campaigns bind the community",
      zh: "身份清晰；按时间排序、无算法的信息流；应用内公益活动把社区拧在一起",
    },
    gap: {
      en: "Interaction stays in the feed and discussion boards; no local layer, no service, no path to a meeting",
      zh: "互动停留在信息流和讨论板；没有本地层，没有服务，也没有通向见面的路径",
    },
    mechanism: {
      en: "Pet profile as the poster, plus pet-centric feeling tags as structured emotion on every post",
      zh: "以宠物档案作为发布主体，加上以宠物为中心的心情标签，把每条内容的情绪结构化",
    },
    x: 10,
    y: 60,
    provenance: {
      confidence: "verified",
      source: "Petzbe App Store listing (US)",
      url: "https://apps.apple.com/us/app/petzbe-pet-social-media/id1314000163",
      retrievedAt: RETRIEVED,
      note:
        "Description read from the US App Store listing (v1.3.11, 2026-04) and petzbe.com: 'Share your pet's life from their point of view', 'No status posts… Just pets', 'does not use addictive algorithms… chronological', feeling tags, stickers, Sniffers, discussion boards, Lend a Paw charity. No user numbers published; map position is judgement.",
    },
  },
  {
    id: "yummypets",
    name: { en: "Yummypets", zh: "Yummypets" },
    tier: "direct",
    category: { en: "Pet social · community + content (FR)", zh: "宠物社交 · 社区 + 内容（法国）" },
    coreValue: {
      en: "Pet profiles, a photo feed and a library of care articles for every species",
      zh: "宠物档案、照片信息流和面向所有物种的照护文章库",
    },
    strength: {
      en: "Multi-species; charity clicks and themed photo contests give the community recurring rituals; editorial content adds search value",
      zh: "多物种；公益点击与主题摄影比赛给社区提供了可重复的仪式；编辑内容带来搜索价值",
    },
    gap: {
      en: "Rituals substitute for relationships; no local action, no service, no owner-to-owner structure beyond following",
      zh: "仪式替代了关系；没有本地行动，没有服务，关注之外没有养宠人之间的结构",
    },
    mechanism: {
      en: "Engagement converted into donations (click → kibble for rescues) as a community-wide ritual",
      zh: "把互动转化为捐赠（点击 → 给救助机构的粮食），作为全社区的仪式",
    },
    x: 16,
    y: 54,
    provenance: {
      confidence: "verified",
      source: "Yummypets App Store listing (US)",
      url: "https://apps.apple.com/us/app/id527910229",
      retrievedAt: RETRIEVED,
      note:
        "Description read from the US App Store listing (developer SARL Octopepper, v47, 2026-07): all species welcome, personalised pet profiles, VOICE charity clicks ('over 30 tons of kibble'), themed photo contests, thousands of free articles. 'Largest online community dedicated to pets' is the developer's claim, not verified. Map position is judgement.",
    },
  },
  {
    id: "barkhappy",
    name: { en: "BarkHappy", zh: "BarkHappy" },
    tier: "direct",
    category: { en: "Pet social · local-first (US, closed 2025)", zh: "宠物社交 · 本地优先（美国，2025 年关闭）" },
    coreValue: {
      en: "Nearby dogs, play dates, dog-friendly places and events in one app",
      zh: "附近的狗、玩耍约会、宠物友好场所和活动，集中在一个 App 里",
    },
    strength: {
      en: "The one direct player that put social and local together: nearby matches, user-hosted events, place pages with pet policies",
      zh: "唯一把社交和本地放在一起的直接竞品：附近匹配、用户自办活动、带宠物政策的场所页",
    },
    gap: {
      en: "No transaction layer under the social one; the app was discontinued in January 2025",
      zh: "社交层之下没有交易层；App 于 2025 年 1 月停止提供",
    },
    mechanism: {
      en: "Daily matches of compatible nearby dogs + user-hosted play dates + place pages listing pet policies and amenities",
      zh: "每日推送附近合拍的狗 + 用户自办玩耍约会 + 列出宠物政策与设施的场所页",
    },
    x: 55,
    y: 76,
    provenance: {
      confidence: "verified",
      source: "BarkHappy official site (shutdown notice)",
      url: "https://barkhappy.com/",
      retrievedAt: RETRIEVED,
      note:
        "barkhappy.com carries the notice 'THANK YOU FOR AN AMAZING 8 YEARS! AS OF JANUARY 2025 OUR MOBILE APP IS NO LONGER AVAILABLE' above the feature list (nearby dogs, events & play dates, dog-friendly places with pet policies, lost & found); the 2024-12-08 Wayback snapshot still advertised the app. No reason for the closure was published anywhere found; the company is listed as never funded (Tracxn) and the app is no longer on the US App Store (2026-09-10). Kept on the map as evidence: social + local existed as a standalone product and did not survive. Map position is judgement.",
    },
  },
  {
    id: "chongpangpang",
    name: { en: "Chongpangpang", zh: "宠胖胖" },
    tier: "direct",
    category: { en: "Pet community + services (CN)", zh: "宠物社区 + 服务（中国）" },
    coreValue: {
      en: "Community, expert care guides, a shop and nearby-store services in one 'one-stop' app",
      zh: "社区、专家养宠指南、商城和附近门店服务合在一个「一站式」App 里",
    },
    strength: {
      en: "Bundles content, community, commerce and nearby stores; actively maintained, unlike most CN pet-social apps",
      zh: "把内容、社区、电商和附近门店打包在一起；持续更新，不像大多数国内宠物社交 App",
    },
    gap: {
      en: "Community is a module beside the shop, not the identity layer; no owner-to-owner relationship structure",
      zh: "社区是商城旁边的一个模块，不是身份层；没有养宠人之间的关系结构",
    },
    mechanism: {
      en: "One-tap 'nearby stores' next to the community — the closest CN attempt at community → store in one product",
      zh: "社区旁边就是一键「附近门店」——国内把社区 → 门店放进同一产品的最接近尝试",
    },
    x: 60,
    y: 44,
    provenance: {
      confidence: "verified",
      source: "宠胖胖 App Store listing (CN)",
      url: "https://apps.apple.com/cn/app/id1501134228",
      retrievedAt: RETRIEVED,
      note:
        "Description read from the CN App Store listing (江苏千宠家科技, v7.1.6, 2026-09): '一站式智慧养宠综合服务平台', expert guides, food/supplies/offline services in one, '一键查询你附近的门店'. Community and pet-profile modules are described in third-party teardowns (see chapter note), not in the listing itself. No user numbers published; map position is judgement.",
    },
  },

  // ── B · Pet industry ───────────────────────────────────────────────────────
  {
    id: "petmd",
    name: { en: "PetMD (Chewy)", zh: "PetMD（Chewy 旗下）" },
    tier: "industry",
    category: { en: "Pet content · knowledge", zh: "宠物内容 · 知识" },
    coreValue: {
      en: "Vet-written, peer-reviewed care content and a symptom checker for dogs and cats",
      zh: "由兽医撰写并同行评审的照护内容，以及面向猫狗的症状自查工具",
    },
    strength: { en: "Search intent; evergreen content; credibility from DVM authorship and triage pathways", zh: "搜索意图；长青内容；兽医署名与分诊路径带来的可信度" },
    gap: {
      en: "Reading ends in a Chewy funnel (vet chat, insurance), not in a relationship or a local visit",
      zh: "读完之后进入 Chewy 的漏斗（在线兽医、保险），而不是关系或本地到店",
    },
    mechanism: {
      en: "Symptom checker: symptom → guided questions → possible causes → when to call a vet → printable report",
      zh: "症状自查：症状 → 引导式提问 → 可能原因 → 何时联系兽医 → 可打印报告",
    },
    x: 30,
    y: 24,
    provenance: {
      confidence: "verified",
      source: "PetMD — Introducing the Symptom Checker",
      url: "https://www.petmd.com/general-health/-introducing-petmd-symptom-checker",
      retrievedAt: RETRIEVED,
      note:
        "PetMD article by Veronica Higgs, DVM (2023-09-22): 'answer a series of questions related to your pet's symptoms' → summary with possible causes, when to call your vet; 'over 50 of the most common symptoms'; 'written and peer-reviewed by our team of veterinarians'; links to Chewy's Connect with a Vet and CarePlus. No CN equivalent verified — see chapter note. Map position is judgement.",
    },
  },
  {
    id: "rover",
    name: { en: "Rover", zh: "Rover" },
    tier: "industry",
    category: { en: "Pet services · booking marketplace (US)", zh: "宠物服务 · 预订平台（美国）" },
    coreValue: {
      en: "Book sitters and walkers: boarding, house sitting, drop-in visits, walks, day care",
      zh: "预订寄养员与遛狗员：寄养、上门看护、上门探访、遛狗、日托",
    },
    strength: {
      en: "Transaction-ready; background checks, verified reviews, repeat-client stats, photo updates and a guarantee on every stay",
      zh: "可直接交易；背景审查、经验证的评价、复购客户数据、照片更新和覆盖每次寄养的保障",
    },
    gap: {
      en: "Trust is rebuilt per sitter from badges and reviews; nothing carries context between stays or between owners",
      zh: "信任要靠徽标和评价对每个寄养员重新建立；寄养与寄养之间、养宠人之间没有任何语境被沿用",
    },
    mechanism: {
      en: "Sitter profile with repeat-client stats, background-check badges and a Star Sitter status earned from repeat clients, rating and response time",
      zh: "寄养员档案带复购客户数据、背景审查徽标，以及由复购客户、评分和响应速度决定的 Star Sitter 状态",
    },
    x: 88,
    y: 26,
    provenance: {
      confidence: "verified",
      source: "Rover Help Center — Star Sitter program",
      url: "https://support.rover.com/hc/en-us/articles/16397182711444-What-is-the-Star-Sitter-program",
      retrievedAt: RETRIEVED,
      note:
        "Star Sitter criteria read from the help article: ≥5 unique and ≥2 repeat clients in the last 6 months, 4.9+ rating, 95% of requests answered within 24h, ≤2% late cancellations; badge shows on profile and in search. Verified reviews, 'repeat client stats' and blue/gold background-check badges from rover.com/pet-sitting; Rover Guarantee and photo updates from the US App Store listing (v26.0819, 2026-08). No CN booking app verified: 小狗在家 was not on the CN App Store on 2026-09-10 (see chapter note). Map position is judgement.",
    },
  },
  {
    id: "chewy",
    name: { en: "Chewy", zh: "Chewy" },
    tier: "industry",
    category: { en: "Pet commerce · subscription (US)", zh: "宠物电商 · 订阅（美国）" },
    coreValue: {
      en: "Food, supplies and pharmacy delivered, with Autoship recurring orders",
      zh: "食品、用品与处方药配送到家，配合 Autoship 定期订购",
    },
    strength: {
      en: "Autoship cadence; multiple pet profiles; 24/7 vet chat and pharmacy pulled into the shop",
      zh: "Autoship 节奏；多宠物档案；24/7 在线兽医和药房都收进商城",
    },
    gap: {
      en: "No community at all; the pet profile drives replenishment and recommendations, not relationships",
      zh: "完全没有社区；宠物档案驱动补货和推荐，而不是关系",
    },
    mechanism: {
      en: "Pet profile → Autoship cadence, with vet chat and symptom tracking attached to the same profile",
      zh: "宠物档案 → Autoship 补货节奏，在线兽医和症状记录挂在同一份档案上",
    },
    x: 82,
    y: 12,
    provenance: {
      confidence: "verified",
      source: "Chewy Google Play listing",
      url: "https://play.google.com/store/apps/details?id=com.chewy.android",
      retrievedAt: RETRIEVED,
      note:
        "Description read from the Google Play listing (Chewy, Inc., 2026-09): Autoship recurring deliveries with no fees or commitments, multiple pet profiles, pharmacy delivery, Connect with a Vet 24/7 with consult reports, symptom tracking and medicine reminders. Autoship share of sales not used (not read first-hand). Map position is judgement.",
    },
  },
  {
    id: "boqii",
    name: { en: "Boqii", zh: "波奇宠物" },
    tier: "industry",
    category: { en: "Pet commerce · shop + community (CN)", zh: "宠物电商 · 商城 + 社区（中国）" },
    coreValue: {
      en: "A pet-supplies mall with a community module: vet Q&A, product trials, topics",
      zh: "带社区模块的宠物用品商城：兽医问答、产品试用、话题",
    },
    strength: {
      en: "Supply depth (500+ brands, own warehouses); vet Q&A and mass product trials tie content to purchase",
      zh: "供给深度（500+ 品牌、自建仓）；兽医问答和万人测评把内容与购买绑在一起",
    },
    gap: {
      en: "Community functions serve the shop (trials, topics, contests); no pet-level identity or local layer",
      zh: "社区功能服务于商城（试用、话题、活动）；没有宠物层面的身份，也没有本地层",
    },
    mechanism: {
      en: "Free product trial → user review → purchase: UGC run as a commerce loop",
      zh: "0 元试用 → 用户测评 → 购买：把 UGC 当作电商闭环来运营",
    },
    x: 76,
    y: 32,
    provenance: {
      confidence: "verified",
      source: "波奇宠物 App Store listing (CN)",
      url: "https://apps.apple.com/cn/app/id1398653068",
      retrievedAt: RETRIEVED,
      note:
        "Description read from the CN App Store listing (广橙（上海）信息技术, v4.7.28, 2026-03, category Shopping): '波奇社区 — 专业问答、万人测评、搞笑视频、有奖活动、热门话题', '波奇社交 — 互动、问答、测评（热销潮品0元试用）', '500多家知名品牌', '全国自建5个仓库'. No user numbers used. Map position is judgement.",
    },
  },

  // ── C · Cross-industry benchmarks ─────────────────────────────────────────
  {
    id: "xiaohongshu",
    name: { en: "Xiaohongshu", zh: "小红书" },
    tier: "benchmark",
    category: { en: "Content discovery", zh: "内容发现" },
    coreValue: { en: "Interest-based lifestyle discovery", zh: "基于兴趣的生活方式发现" },
    strength: {
      en: "Search-grade content understanding; discovery → decision → purchase → offline activity",
      zh: "搜索级的内容理解；发现 → 决策 → 购买 → 线下活动",
    },
    gap: {
      en: "Pets are one interest among thousands; no pet-level identity or local action",
      zh: "宠物只是数千兴趣之一；没有宠物层面的身份或本地行动",
    },
    mechanism: {
      en: "Notes as decision units; interest graph built from content understanding and search, not follows",
      zh: "笔记作为决策单元；兴趣图谱建立在内容理解与搜索之上，而非关注关系",
    },
    x: 30,
    y: 48,
    provenance: {
      confidence: "estimate",
      source: "小红书 App Store listing (CN) + search-usage press",
      url: "https://apps.apple.com/cn/app/id741292507",
      retrievedAt: RETRIEVED,
      note:
        "Positioning read from the CN App Store listing (v9.46, 2026-09): '生活兴趣社区', '遇见同好', '一键种草，轻松下单拔草', '线下活动'. The search-first mechanism rests on secondary press (新浪科技 2024-12-13: ~70% of monthly actives search, daily searches near 600M in 2024Q4) — not read from a first-hand Xiaohongshu release, hence estimate. Map position is judgement.",
    },
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
      en: "Account-as-persona (the pet account) and Close Friends as a private relationship tier across posts, notes, reels and stories",
      zh: "账号即人设（宠物账号），Close Friends 作为覆盖帖子、便签、Reels 和快拍的私密关系层级",
    },
    x: 18,
    y: 58,
    provenance: {
      confidence: "verified",
      source: "Instagram Help Center — Close Friends",
      url: "https://help.instagram.com/476003390920140",
      retrievedAt: RETRIEVED,
      note:
        "Help article: 'create a Close Friends list… when you share things like a post, note, reel, or story, you can choose for only people on that list to see it'; members see a 'Close friends' label and a green ring; nobody is notified when added or removed and 'No one can request to be added'. Pet accounts as identities is observed practice, not a documented feature. Map position is judgement.",
    },
  },
  {
    id: "soul",
    name: { en: "Soul", zh: "Soul" },
    tier: "benchmark",
    category: { en: "Social matching", zh: "社交匹配" },
    coreValue: { en: "Personality-based matching without photos first", zh: "先看性格、不先看照片的匹配" },
    strength: {
      en: "Matching on compatibility instead of appearance; low-pressure first contact via avatars, voice matching and group parties",
      zh: "按相容性而非外貌匹配；通过捏脸头像、语音匹配和群聊派对实现低压力的初次接触",
    },
    gap: {
      en: "No shared real-world context; conversations decay without an activity to meet around",
      zh: "缺少共同的现实语境；没有可以见面的活动，对话会衰减",
    },
    mechanism: { en: "30-second 'soul test' on personality and values → compatibility → guided first conversation", zh: "30 秒基于性格与三观的「灵魂鉴定」→ 相容性 → 引导式初次对话" },
    x: 40,
    y: 84,
    provenance: {
      confidence: "verified",
      source: "Soul App Store listing (CN)",
      url: "https://apps.apple.com/cn/app/id1032287195",
      retrievedAt: RETRIEVED,
      note:
        "Description read from the CN App Store listing (上海任意门科技, v6.35.0, 2026-09): '30秒的灵魂鉴定', '灵魂鉴定 — 基于性格、三观的测试', '超萌捏脸', '语音匹配、群聊派对', '3D星球 — 发现身边有趣的灵魂'. How the matching algorithm ranks candidates is not published and is not claimed here. Map position is judgement.",
    },
  },
  {
    id: "jike",
    name: { en: "Jike", zh: "即刻" },
    tier: "benchmark",
    category: { en: "Interest community", zh: "兴趣社区" },
    coreValue: { en: "Topic circles with strong norms", zh: "规范感强的话题圈子" },
    strength: {
      en: "Small, high-signal communities; identity via circles followed; offline meet-ups (面基) as a first-class feature",
      zh: "小而高信号的社区；通过关注的圈子表达身份；线下面基是一等功能",
    },
    gap: { en: "Purely online at the product level; limited local or transactional layer", zh: "产品层面纯线上；本地层与交易层有限" },
    mechanism: { en: "Circle as the join unit; membership displayed as identity; 48-hour diaries for low-stakes posting", zh: "以圈子为加入单元；成员身份即自我表达；48 小时限时日记降低发布门槛" },
    x: 35,
    y: 70,
    provenance: {
      confidence: "verified",
      source: "即刻 App Store listing (CN)",
      url: "https://apps.apple.com/cn/app/id966129812",
      retrievedAt: RETRIEVED,
      note:
        "Description read from the CN App Store listing (上海若友网络科技, v7.56.16, 2026-03): '30W+兴趣圈子', '限时日记 — 发布日记48小时后仅自己可见', '同好面基 — 线下玩更嗨', '基于兴趣同好的交友社区'. The circle count is the developer's claim. Map position is judgement.",
    },
  },
  {
    id: "dianping",
    name: { en: "Dianping", zh: "大众点评" },
    tier: "benchmark",
    category: { en: "Local service discovery", zh: "本地服务发现" },
    coreValue: { en: "Reviews and ranked lists for local merchants", zh: "本地商户的评价与榜单" },
    strength: {
      en: "Intent-to-visit capture; trust through volume of reviews; ranked lists audited against review integrity; deals and booking",
      zh: "捕获到店意图；靠评价数量建立信任；榜单按评价诚信审核；团购与预订",
    },
    gap: {
      en: "Reviews are anonymous utility, not relationships; no pet-level context",
      zh: "评价是匿名的工具信息而非关系；没有宠物层面的语境",
    },
    mechanism: {
      en: "Ranked lists + review artifacts as the decision layer before a visit; list rules exclude paid placement and penalised review manipulation",
      zh: "榜单 + 评价内容作为到店前的决策层；榜单规则排除付费上榜，并剔除因刷评被处罚的商户",
    },
    x: 80,
    y: 40,
    provenance: {
      confidence: "verified",
      source: "美团规则中心 — 2025年大众点评必吃榜规则",
      url: "https://rules-center.meituan.com/m/detail/guize/316001?activeRule=1",
      retrievedAt: RETRIEVED,
      note:
        "Rules (2025-05-15): five criteria '评价真实可信、口味优中选优、长期稳定体验佳、符合日常消费水平、满足日常就餐选择'; '不采纳人为提名，坚持公平公正不收费'; merchants penalised for review manipulation in the period are excluded; notarised by a third party. Product scope from the CN App Store listing (v11.71.13, 2026-09): reviews and check-in photos, 团购, booking, life services. Map position is judgement.",
    },
  },
  {
    id: "meituan",
    name: { en: "Meituan", zh: "美团" },
    tier: "benchmark",
    category: { en: "Local transaction", zh: "本地交易" },
    coreValue: { en: "Instant local fulfilment", zh: "即时本地履约" },
    strength: { en: "Supply density; fulfilment reliability; habit; platform-level refund guarantees", zh: "供给密度；履约可靠；使用习惯；平台级退款保障" },
    gap: { en: "Purely transactional; no community memory across visits", zh: "纯交易；跨次到店没有社区记忆" },
    mechanism: {
      en: "Intent → nearby supply → fulfilment in one flow; trust carried by platform terms (unconsumed-voucher refund, expired-voucher auto refund) rather than by the merchant",
      zh: "意图 → 附近供给 → 履约一气呵成；信任由平台条款（未消费随时退、过期自动退）而非商户承载",
    },
    x: 95,
    y: 20,
    provenance: {
      confidence: "verified",
      source: "美团 App Store listing (CN) + 美团消费者保障服务",
      url: "https://i.meituan.com/commitment/",
      retrievedAt: RETRIEVED,
      note:
        "Consumer-guarantee page: '过期自动退 — 美团券有效期过后7个工作日内，对未消费的订单进行自动退款', '未消费随时退款', refunds '1~7个工作日退至支付账户'. Scope from the CN App Store listing (v12.65, 2026-09): 在线预订餐厅桌位, 外卖, 跑腿, 到店团购, '7天内未消费无条件退款'. Pet-store online booking pilot (2023) is S11 in sources.md. Map position is judgement.",
    },
  },
];

export const competitorInsights: Text[] = [
  {
    en: "Direct competitors own identity but stall at interaction. The one that bridged to local action (BarkHappy) had no transaction layer underneath and closed in 2025.",
    zh: "直接竞品拥有身份，却止步于互动。唯一搭起通往本地行动之桥的 BarkHappy，社交层下面没有交易层，2025 年关闭。",
  },
  {
    en: "Service and commerce players own the transaction, but trust is rebuilt per booking from badges and reviews; no community carries it forward.",
    zh: "服务与电商玩家拥有交易，但信任要靠徽标和评价在每次预订时重新建立；没有社区把它沿用下去。",
  },
  {
    en: "The high-service × high-social quadrant has no surviving product. A community-grounded service layer would sit there — with the transaction layer BarkHappy lacked.",
    zh: "高服务 × 高社交象限没有存活下来的产品。以社区为根基的服务层该在这里——并带上 BarkHappy 缺失的交易层。",
  },
];
