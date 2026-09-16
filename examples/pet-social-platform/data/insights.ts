import type { Text } from "@/lib/i18n";
import { DESIGN, type Provenance } from "./provenance";

export type Opportunity = {
  id: string;
  name: Text;
  /** implementation complexity 0–100 */
  complexity: number;
  /** user value 0–100 */
  value: number;
  priority: "P0" | "P1" | "P2";
  rationale: Text;
  dependsOn?: Text;
  firstMilestone: Text;
};

/** The 0-100 complexity / value scores are the author's judgement, not measured. */
export const opportunitiesProvenance: Provenance = {
  confidence: "hypothesis",
  source: "Google Actions Center, Reservations End-to-End (eligibility & integration policies); 美团开放平台接入指南",
  url: "https://developers.google.com/actions-center/verticals/reservations/e2e/policies/integration-policies",
  retrievedAt: "2026-09-16",
  note:
    "Positions are the author's judgement; no source can produce a 0–100 score. Two were moved on 2026-09-16 after research, both author-decided: the concierge from 66 to 80, because its supply dependency is documented and contractual rather than technical — an integration of this shape requires “a direct contractual relationship with all the merchants included in their integration feed”, availability answered “in less than 1 second” and “comprehensive inventory”, and even then “meeting the requirements does not guarantee a partner will be eligible”; in the target market nothing public exposes a merchant's bookable slots at all (美团's open platform documents OAuth and user resources only, with access behind an enterprise application and review), and the Chinese pet-store SaaS vendors publish no APIs. And content intelligence from 42 to 52, because the evaluation half of its rationale does not hold on this label set: published breed accuracy tops out at 86.4% (Tsinghua Dogs) and ~59% (Oxford-IIIT Pet), the pet types most common in Chinese pet content are in neither class list, and service intent has no public comparable. The other four positions were checked against the evidence from 02–08 and left as they were; reasoning per item in research/09-insights.md.",
};

export const opportunities: Opportunity[] = [
  {
    id: "content-intel",
    name: { en: "AI Content Intelligence", zh: "AI 内容理解" },
    complexity: 52,
    value: 88,
    priority: "P0",
    rationale: {
      en: "Highest leverage per unit of effort: mature multimodal models, and every other capability depends on it. The evaluation set is ours to build — the breeds most common in Chinese pet content appear in no public model's class list.",
      zh: "单位投入的杠杆最高：多模态模型已成熟，而且其他所有能力都依赖它。但评估集得自己建——中文宠物内容里最常见的那几种，在公开模型的类目表里都找不到。",
    },
    firstMilestone: {
      en: "Pet / breed / stage / place / emotion labels on 90% of posts; feed ranked on them.",
      zh: "90% 的内容带上宠物 / 品种 / 阶段 / 地点 / 情绪标签，并据此排序信息流。",
    },
  },
  {
    id: "concierge",
    name: { en: "AI Service Concierge", zh: "AI 服务管家" },
    complexity: 80,
    value: 92,
    priority: "P0",
    rationale: {
      en: "Direct revenue and the clearest demonstration of agentic value; depends on supply integration, not on research breakthroughs.",
      zh: "直接带来收入，也是 Agent 价值最清晰的证明；依赖的是供给侧接入，而不是研究突破。",
    },
    dependsOn: { en: "A contract per merchant, real-time slots, complete inventory; pet profile", zh: "每家商家的合同、实时可预约时段、完整库存；宠物档案" },
    firstMilestone: {
      en: "Grooming only, one city; intent → booked in under 60 seconds.",
      zh: "只做美容、只做一个城市；从意图到完成预订不超过 60 秒。",
    },
  },
  {
    id: "pet-match",
    name: { en: "AI Pet Match", zh: "AI 宠物匹配" },
    complexity: 58,
    value: 80,
    priority: "P1",
    rationale: {
      en: "High value but needs density: matching only works once a city has enough profiled pets with schedules.",
      zh: "价值高但需要密度：只有当一个城市有足够多带作息信息的宠物档案时，匹配才成立。",
    },
    dependsOn: { en: "Content Intelligence; same-city density", zh: "内容理解；同城密度" },
    firstMilestone: {
      en: "Weekend walk matches in one district; measured on 7-day retention.",
      zh: "在一个城区做周末遛狗匹配；以 7 日留存衡量。",
    },
  },
  {
    id: "knowledge-graph",
    name: { en: "Pet Knowledge Graph", zh: "宠物知识图谱" },
    complexity: 82,
    value: 84,
    priority: "P1",
    rationale: {
      en: "Foundational but should grow out of the first two capabilities rather than be built in advance.",
      zh: "是基础设施，但应从前两项能力中生长出来，而不是提前建好。",
    },
    dependsOn: { en: "Entities from Content Intelligence and Concierge", zh: "来自内容理解与服务管家的实体" },
    firstMilestone: {
      en: "Shared entity store for pets, places and merchants used by two capabilities.",
      zh: "一个被两项能力共用的宠物、地点与商家实体库。",
    },
  },
  {
    id: "creation-tools",
    name: { en: "AI Content Creation tools", zh: "AI 内容创作工具" },
    complexity: 24,
    value: 46,
    priority: "P2",
    rationale: {
      en: "Cheap and visible, but raises supply without raising relevance; ship as a small entry point, not a strategy.",
      zh: "成本低、容易被看见，但只增加供给而不提升相关性；作为一个小入口上线，而不是作为策略。",
    },
    firstMilestone: { en: "Diary prompts and caption suggestions.", zh: "日记提示与文案建议。" },
  },
  {
    id: "events",
    name: { en: "Community events layer", zh: "社区活动层" },
    complexity: 50,
    value: 58,
    priority: "P2",
    rationale: {
      en: "Valuable once relationships exist; premature before match density.",
      zh: "关系存在之后才有价值；在匹配密度形成之前为时过早。",
    },
    dependsOn: { en: "Pet Match", zh: "宠物匹配" },
    firstMilestone: { en: "Merchant-hosted weekend meetups in one district.", zh: "在一个城区由商家承办周末聚会。" },
  },
];

export const prioritiesProvenance: Provenance = DESIGN;

export const priorities: Array<{ priority: "P0" | "P1"; name: Text; why: Text }> = [
  { priority: "P0", name: { en: "AI Content Intelligence", zh: "AI 内容理解" }, why: { en: "Substrate for everything; fastest to evaluate.", zh: "一切的基础；最容易评估。" } },
  { priority: "P0", name: { en: "AI Service Concierge", zh: "AI 服务管家" }, why: { en: "Revenue and the first agentic transaction.", zh: "收入来源，也是第一笔 Agent 式交易。" } },
  { priority: "P1", name: { en: "AI Pet Match", zh: "AI 宠物匹配" }, why: { en: "Retention engine; needs density first.", zh: "留存引擎；先要有密度。" } },
  { priority: "P1", name: { en: "Pet Knowledge Graph", zh: "宠物知识图谱" }, why: { en: "Grows from P0 entities into the shared memory.", zh: "从 P0 的实体生长为共享记忆。" } },
];

export const northStarProvenance: Provenance = DESIGN;

export const northStar: { statement: [Text, Text]; metric: Text; connects: Text[] } = {
  statement: [
    { en: "Build the most intelligent", zh: "打造最智能的" },
    { en: "pet social ecosystem.", zh: "宠物社交生态。" },
  ],
  metric: {
    en: "Meaningful connections formed per active pet per month — relationships that survive a week, services completed, questions resolved.",
    zh: "每只活跃宠物每月形成的有意义连接数：延续超过一周的关系、完成的服务、解决的问题。",
  },
  connects: [
    { en: "People", zh: "人" },
    { en: "Pets", zh: "宠物" },
    { en: "Content", zh: "内容" },
    { en: "Relationships", zh: "关系" },
    { en: "Places", zh: "地点" },
    { en: "Services", zh: "服务" },
  ],
};

export const principlesProvenance: Provenance = DESIGN;

export const principles: Array<{ index: string; title: Text; body: Text }> = [
  { index: "01", title: { en: "Build the graph.", zh: "建图谱。" }, body: { en: "Understand every post, pet, place and merchant as an entity. Nothing else works without it.", zh: "把每条内容、每只宠物、每个地点和商家都理解为实体。没有它，其他一切都不成立。" } },
  { index: "02", title: { en: "Build meaningful relationships.", zh: "建有意义的关系。" }, body: { en: "Measure relationships that last, not matches shown. Anchor every match to an activity.", zh: "衡量能延续的关系，而不是展示的匹配数。每个匹配都锚定在一个具体活动上。" } },
  { index: "03", title: { en: "Turn intent into action.", zh: "把意图变成行动。" }, body: { en: "A sentence should become a booking. The concierge is the first proof.", zh: "一句话应该变成一次预订。服务管家是第一个证明。" } },
  { index: "04", title: { en: "Let AI orchestrate the ecosystem.", zh: "让 AI 调度整个生态。" }, body: { en: "One intelligence layer across content, social and local — reading one graph, optimising outcomes.", zh: "一个贯穿内容、社交与本地的智能层：读同一张图，优化最终结果。" } },
];

export const roadmapProvenance: Provenance = DESIGN;

export const roadmap: Array<{ phase: Text; focus: Text; items: Text[] }> = [
  {
    phase: { en: "Phase 1 · 0–6 months", zh: "第一阶段 · 0–6 个月" },
    focus: { en: "Understand", zh: "理解" },
    items: [
      { en: "Content Intelligence v1", zh: "内容理解 v1" },
      { en: "Pet profile & entity store", zh: "宠物档案与实体库" },
      { en: "Grooming Concierge pilot (1 city)", zh: "美容服务管家试点（1 个城市）" },
    ],
  },
  {
    phase: { en: "Phase 2 · 6–12 months", zh: "第二阶段 · 6–12 个月" },
    focus: { en: "Connect", zh: "连接" },
    items: [
      { en: "Pet Match in dense districts", zh: "在高密度城区上线宠物匹配" },
      { en: "Concierge: vet, boarding", zh: "服务管家扩展到医疗、寄养" },
      { en: "Trust ranking from social graph", zh: "基于社交图的信任排序" },
    ],
  },
  {
    phase: { en: "Phase 3 · 12–18 months", zh: "第三阶段 · 12–18 个月" },
    focus: { en: "Orchestrate", zh: "调度" },
    items: [
      { en: "Knowledge Graph as shared memory", zh: "知识图谱成为共享记忆" },
      { en: "Pet Care Agent across surfaces", zh: "宠物护理 Agent 覆盖所有界面" },
      { en: "Personalized monetization", zh: "个性化商业化" },
    ],
  },
];
