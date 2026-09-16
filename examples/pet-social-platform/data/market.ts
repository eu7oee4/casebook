/**
 * Market data. Every figure carries `provenance` — see data/provenance.ts.
 * Until researched, everything here is a hypothesis used to structure the case, not market data.
 * Strings are bilingual `Text`; numbers, years and coordinates are language-neutral.
 */
import type { Text } from "@/lib/i18n";
import { DESIGN, HYPOTHESIS, type Provenance } from "./provenance";

export type MarketKpi = { label: Text; value: Text; note: Text; provenance: Provenance };

export const marketKpis: MarketKpi[] = [
  {
    label: { en: "Pet owners (urban)", zh: "城镇养宠人群" },
    value: { en: "76.89M", zh: "7689 万" },
    note: {
      en: "urban dog & cat owners, 2024 (+2.4% YoY); dogs 36.01M, cats 40.88M",
      zh: "2024 年城镇犬猫主人（同比 +2.4%）；犬主 3601 万、猫主 4088 万",
    },
    provenance: {
      confidence: "verified",
      source: "China Pet Industry White Paper 2025 (Petdata)",
      url: "https://pdf.dfcfw.com/pdf/H3_AP202512111798269901_1.pdf",
      retrievedAt: "2026-09-06",
      note: "Excerpt PDF of the consumption report; urban dog/cat owners only, exotic pets excluded. The white paper publishes owner counts, not a household-penetration %; iResearch reports 17.8% dog / 16.4% cat household penetration for 2023 (national, secondary reprint).",
    },
  },
  {
    label: { en: "Content consumption", zh: "内容消费" },
    value: { en: "53%", zh: "53%" },
    note: {
      en: "of core pet owners get pet information on Xiaohongshu (2024)",
      zh: "的核心养宠人群会在小红书获取养宠信息（2024）",
    },
    provenance: {
      confidence: "verified",
      source: "Xiaohongshu × CBNData pet industry report 2024",
      url: "https://www.cbndata.com/information/292504",
      retrievedAt: "2026-09-06",
      note: "Published by CBNData, the report's co-author. Single-platform information-seeking, not weekly reach across all content — no public \"x% of owners consume pet content weekly\" survey exists. Platform-side scale for context: Douyin pet content reaches 300M+ users monthly (2024, Ocean Engine, secondary).",
    },
  },
  {
    label: { en: "Social interaction", zh: "社交互动" },
    value: { en: "22.5%", zh: "22.5%" },
    note: {
      en: "of surveyed owners exchange illness & care experience in online pet communities",
      zh: "的受访宠主会在线上宠物社区交流爱宠病情与经验",
    },
    provenance: {
      confidence: "verified",
      source: "iResearch pet health consumption white paper 2023",
      url: "https://m.thepaper.cn/newsDetail_forward_22746944",
      retrievedAt: "2026-09-06",
      note: "Survey fielded 2022-12; diagnosis/treatment sub-sample N=1211 (report p.40, full PDF read page by page). Measures health-related exchange only — no survey quantifies general online owner-to-owner interaction. Skews young: TGI 133 for ages 21–25.",
    },
  },
  {
    label: { en: "Local service use", zh: "本地服务使用" },
    value: { en: "51.4%", zh: "51.4%" },
    note: {
      en: "of urban owners bought grooming in 2024 (dogs 63.3%)",
      zh: "的城镇宠主 2024 年消费过洗澡美容（犬 63.3%）",
    },
    provenance: {
      confidence: "verified",
      source: "China Pet Industry White Paper 2025 (Petdata)",
      url: "https://pdf.dfcfw.com/pdf/H3_AP202512111798269901_1.pdf",
      retrievedAt: "2026-09-06",
      note: "Grooming consumption penetration, down 2.4pp vs 2023. This is penetration, not visit frequency — no authoritative visits-per-quarter figure was found; closest frequency data: 26.5% of owners do a pet check-up every 6 months (iResearch 2023, N=957).",
    },
  },
  {
    label: { en: "Pet spending", zh: "宠物消费" },
    value: { en: "¥2,961 / ¥2,020", zh: "¥2961 / ¥2020" },
    note: {
      en: "annual spend per dog / per cat, 2024; medical is the #2 category after food",
      zh: "2024 年单只犬 / 单只猫年均消费；医疗是仅次于食品的第二大品类",
    },
    provenance: {
      confidence: "verified",
      source: "China Pet Industry White Paper 2025 (Petdata)",
      url: "https://pdf.dfcfw.com/pdf/H3_AP202512111798269901_1.pdf",
      retrievedAt: "2026-09-06",
      note: "2024, urban dog/cat. Category split 2024: food 52.8%, medical 28.0%, supplies 12.4%, services 6.8%. The 2026 edition reports ¥3,006 / ¥2,085 for 2025 (via CCTV reprint of the launch, secondary).",
    },
  },
];

export const spendTrend = [
  { year: "2022", food: 100, services: 100, health: 100 },
  { year: "2024", food: 116, services: 111, health: 107 },
  { year: "2025", food: 122, services: 110, health: 110 },
];
export const spendTrendProvenance: Provenance = {
  confidence: "estimate",
  source: "China Pet Industry White Papers 2023–2026 (Petdata)",
  url: "https://pdf.dfcfw.com/pdf/H3_AP202512111798269901_1.pdf",
  retrievedAt: "2026-09-06",
  note: "Derived: category share × urban dog/cat market size, indexed to 2022 = 100. 2022: ¥270.6bn × (food 50.7% / services 6.8% / medical 29.1%); 2024: ¥300.2bn × (52.8% / 6.8% / 28.0%); 2025: ¥312.6bn × (53.7% / 6.5% / 27.6%). 2023 omitted — the full four-category share split for 2023 is not public. 2025 total and shares come from the CCTV reprint of the 2026 edition launch (secondary); 2022 shares via Sina reprint of the 2022 consumption report.",
};
export const spendTrendNote: Text = {
  en: "Indexed to 2022 = 100, derived from white-paper category shares × urban dog-and-cat market size. Food spend has grown slightly faster than services; services' share of spend has been flat (6.5–6.8%) since 2022. The services story shows up in penetration — pet travel +4.9pp, insurance at 18.9%, care services rising — not yet in spend share.",
  zh: "以 2022 年 = 100 作指数，由白皮书品类份额 × 城镇犬猫消费市场规模推算。食品支出增速略高于服务；服务在支出中的份额自 2022 年起基本持平（6.5–6.8%）。服务的增长体现在渗透率上——宠物出行 +4.9 个百分点、保险达 18.9%、照护类服务上升——尚未体现在支出份额上。",
};

/** Medical's share of urban dog & cat spend, 2019 → 2024. Used inline in the market page's implication copy. */
export const medicalShareShiftProvenance: Provenance = {
  confidence: "estimate",
  source: "China Pet Industry White Papers (Petdata), 2019 & 2024 editions",
  url: "https://pdf.dfcfw.com/pdf/H3_AP202512111798269901_1.pdf",
  retrievedAt: "2026-09-06",
  note: "Endpoint (28.0%, 2024) read first-hand from the 2025 white-paper excerpt PDF; startpoint (19.0%, 2019) via a broker research-report reprint of earlier editions (secondary) — hence estimate, not verified.",
};

export type NeedLayer = {
  layer: Text;
  question: Text;
  examples: Text[];
  currentSolution: Text;
  gap: Text;
};

export const needLayers: NeedLayer[] = [
  {
    layer: { en: "Functional", zh: "功能需求" },
    question: { en: "Is my pet healthy, fed, groomed, safe?", zh: "我的宠物健康、吃得好、干净、安全吗？" },
    examples: [
      { en: "Vet & vaccination", zh: "医疗与疫苗" },
      { en: "Grooming", zh: "美容洗护" },
      { en: "Boarding when I travel", zh: "出行时寄养" },
      { en: "Training", zh: "训练" },
    ],
    currentSolution: { en: "Search, group chats, word of mouth", zh: "搜索、群聊、口碑" },
    gap: { en: "Fragmented; trust is built person by person", zh: "分散；信任只能一个人一个人地建立" },
  },
  {
    layer: { en: "Emotional", zh: "情感需求" },
    question: { en: "Is my pet happy — and is my effort seen?", zh: "我的宠物开心吗？我的付出有人看见吗？" },
    examples: [
      { en: "Pet diary", zh: "宠物日记" },
      { en: "Milestones", zh: "成长里程碑" },
      { en: "Recognition from other owners", zh: "其他养宠人的认可" },
      { en: "Grief & support", zh: "哀伤与支持" },
    ],
    currentSolution: { en: "General social apps, private albums", zh: "通用社交 App、私人相册" },
    gap: { en: "Pet content is drowned in a general feed", zh: "宠物内容淹没在综合信息流里" },
  },
  {
    layer: { en: "Social", zh: "社交需求" },
    question: { en: "Who else lives like this, nearby?", zh: "附近还有谁和我过着一样的生活？" },
    examples: [
      { en: "Walk buddies", zh: "遛狗搭子" },
      { en: "Breed communities", zh: "品种社群" },
      { en: "Same-stage owners", zh: "同阶段养宠人" },
      { en: "Local events", zh: "本地活动" },
    ],
    currentSolution: { en: "WeChat groups, offline chance encounters", zh: "微信群、线下偶遇" },
    gap: { en: "No discovery layer; relationships depend on luck", zh: "缺少发现层；关系靠运气" },
  },
];

export type ValueKind = "service" | "content" | "social" | "local";
export type ValuePoint = { id: string; name: Text; x: number; y: number; size: number; kind: ValueKind };

/** Functional value (x) × emotional value (y), 0–100. Positions are research judgements; cite interviews or surveys when available. */
/** The three need layers are the author's model of demand, not a measured segmentation. */
export const needLayersProvenance: Provenance = HYPOTHESIS;
/** The owner journey is a model of how owners behave; no public study maps these stages. */
export const journeyProvenance: Provenance = HYPOTHESIS;
/** Closing argument of the chapter — the case's own reading, nothing to cite. */
export const productOpportunityProvenance: Provenance = DESIGN;
export const valueMatrixProvenance: Provenance = HYPOTHESIS;
export const valueMatrix: ValuePoint[] = [
  { id: "vet", name: { en: "Vet / health", zh: "医疗 / 健康" }, x: 92, y: 55, size: 3, kind: "service" },
  { id: "grooming", name: { en: "Grooming", zh: "美容" }, x: 78, y: 45, size: 2, kind: "service" },
  { id: "boarding", name: { en: "Boarding", zh: "寄养" }, x: 85, y: 38, size: 2, kind: "service" },
  { id: "training", name: { en: "Training", zh: "训练" }, x: 70, y: 52, size: 1, kind: "service" },
  { id: "diary", name: { en: "Pet diary", zh: "宠物日记" }, x: 20, y: 88, size: 3, kind: "content" },
  { id: "advice", name: { en: "Advice / Q&A", zh: "经验 / 问答" }, x: 72, y: 62, size: 3, kind: "content" },
  { id: "walk-buddies", name: { en: "Walk buddies", zh: "遛狗搭子" }, x: 48, y: 82, size: 2, kind: "social" },
  { id: "breed-community", name: { en: "Breed community", zh: "品种社群" }, x: 40, y: 78, size: 2, kind: "social" },
  { id: "places", name: { en: "Pet-friendly places", zh: "宠物友好场所" }, x: 62, y: 70, size: 2, kind: "local" },
  { id: "events", name: { en: "Community events", zh: "社区活动" }, x: 45, y: 86, size: 1, kind: "local" },
];

export type JourneyStage = { stage: Text; need: Text; touchpoint: Text };

export const journey: JourneyStage[] = [
  {
    stage: { en: "Adopt", zh: "领养" },
    need: { en: "Preparation, first-week anxiety", zh: "准备工作、第一周的焦虑" },
    touchpoint: { en: "Advice content, breed community", zh: "经验内容、品种社群" },
  },
  {
    stage: { en: "Daily care", zh: "日常照护" },
    need: { en: "Routine, feeding, behaviour questions", zh: "作息、喂养、行为问题" },
    touchpoint: { en: "Q&A, diary, same-stage owners", zh: "问答、日记、同阶段养宠人" },
  },
  {
    stage: { en: "Socialise", zh: "社交" },
    need: { en: "Walks, play, belonging", zh: "遛狗、玩耍、归属感" },
    touchpoint: { en: "Local match, events, places", zh: "同城匹配、活动、场所" },
  },
  {
    stage: { en: "Service moments", zh: "服务时刻" },
    need: { en: "Grooming, vet, boarding, travel", zh: "美容、医疗、寄养、出行" },
    touchpoint: { en: "Concierge, reviews, booking", zh: "服务管家、评价、预订" },
  },
  {
    stage: { en: "Milestones", zh: "里程碑" },
    need: { en: "Birthdays, recovery, growth", zh: "生日、康复、成长" },
    touchpoint: { en: "Diary, recognition, gifts", zh: "日记、认可、礼物" },
  },
];

export type OpportunityArea = { id: string; title: Text; problem: Text; opportunity: Text };

export const opportunityAreas: OpportunityArea[] = [
  {
    id: "feed",
    title: { en: "A pet-native feed", zh: "宠物原生的信息流" },
    problem: {
      en: "Pet content is a topic inside general platforms, not a place with its own norms and graph.",
      zh: "宠物内容只是通用平台里的一个话题，而不是一个拥有自身规范与关系图谱的地方。",
    },
    opportunity: {
      en: "A community where the pet is the unit of identity and content is understood at the pet level.",
      zh: "一个以宠物为身份单位、在宠物层面理解内容的社区。",
    },
  },
  {
    id: "discovery",
    title: { en: "Relationship discovery", zh: "关系发现" },
    problem: {
      en: "Owners find each other by chance — the park, the elevator, a group chat someone happens to add them to.",
      zh: "养宠人靠偶然相识：公园、电梯，或者恰好被拉进的某个群。",
    },
    opportunity: {
      en: "Deliberate discovery on pet compatibility, stage and distance, designed to move offline.",
      zh: "基于宠物相容性、阶段与距离的有意发现，并以走向线下为目标来设计。",
    },
  },
  {
    id: "services",
    title: { en: "Trusted local services", zh: "可信的本地服务" },
    problem: {
      en: "Service choice depends on scattered reviews and personal referrals; switching cost is anxiety, not price.",
      zh: "服务选择依赖零散评价和熟人推荐；切换成本是焦虑，而不是价格。",
    },
    opportunity: {
      en: "Service discovery grounded in the community's own experiences and the pet's own profile.",
      zh: "以社区自身经验和宠物档案为依据的服务发现。",
    },
  },
];
