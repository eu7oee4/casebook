/**
 * Market data. Every figure carries `provenance` — see data/provenance.ts.
 * Until researched, everything here is a hypothesis used to structure the case, not market data.
 * Strings are bilingual `Text`; numbers, years and coordinates are language-neutral.
 */
import type { Text } from "@/lib/i18n";
import { HYPOTHESIS, type Provenance } from "./provenance";

export type MarketKpi = { label: Text; value: Text; note: Text; provenance: Provenance };

export const marketKpis: MarketKpi[] = [
  {
    label: { en: "Pet owners (urban, sampled)", zh: "养宠家庭（城市抽样）" },
    value: { en: "1 in 4", zh: "1 / 4" },
    note: { en: "households with ≥1 pet — hypothesis for tier-1/2 cities", zh: "至少养一只宠物的家庭占比，一二线城市假设" },
    provenance: HYPOTHESIS,
  },
  {
    label: { en: "Content consumption", zh: "内容消费" },
    value: { en: "68%", zh: "68%" },
    note: { en: "of owners watch or read pet content weekly", zh: "的养宠人每周看或读宠物内容" },
    provenance: HYPOTHESIS,
  },
  {
    label: { en: "Social interaction", zh: "社交互动" },
    value: { en: "41%", zh: "41%" },
    note: { en: "have interacted with another owner online", zh: "曾在线上与其他养宠人互动" },
    provenance: HYPOTHESIS,
  },
  {
    label: { en: "Local service use", zh: "本地服务使用" },
    value: { en: "3.4×", zh: "3.4 次" },
    note: { en: "service visits per pet per quarter", zh: "每只宠物每季度的服务到店次数" },
    provenance: HYPOTHESIS,
  },
  {
    label: { en: "Pet spending", zh: "宠物消费" },
    value: { en: "¥4.8k", zh: "¥4.8k" },
    note: { en: "annual spend per pet; services growing fastest", zh: "每只宠物年均支出，服务类增长最快" },
    provenance: HYPOTHESIS,
  },
];

export const spendTrend = [
  { year: "2021", food: 100, services: 100, health: 100 },
  { year: "2022", food: 108, services: 118, health: 112 },
  { year: "2023", food: 115, services: 141, health: 126 },
  { year: "2024", food: 121, services: 168, health: 141 },
  { year: "2025", food: 126, services: 199, health: 158 },
  { year: "2026", food: 131, services: 234, health: 176 },
];
export const spendTrendProvenance: Provenance = HYPOTHESIS;
export const spendTrendNote: Text = {
  en: "Indexed to 2021 = 100. Hypothesis: services and health outgrow food as ownership matures and owners shift spend from goods to care.",
  zh: "以 2021 年 = 100 作指数。假设：随着养宠成熟、支出从商品转向照护，服务与健康类增速高于食品。",
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
