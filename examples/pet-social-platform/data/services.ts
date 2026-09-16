import { DESIGN, HYPOTHESIS, type Provenance } from "./provenance";
import type { Str, Text } from "@/lib/i18n";

/** Frequency and trust-need are judgements; replace with survey or platform data when found. */
export const serviceCategoriesProvenance: Provenance = HYPOTHESIS;
export type TrustNeed = "Low" | "Medium" | "High" | "Very high";
export const trustNeedLabel: Record<TrustNeed, Text> = {
  Low: { en: "Low", zh: "低" },
  Medium: { en: "Medium", zh: "中" },
  High: { en: "High", zh: "高" },
  "Very high": { en: "Very high", zh: "极高" },
};
export const serviceCategories: Array<{ name: Text; frequency: Text; trustNeed: TrustNeed; intentFrom: Text }> = [
  { name: { en: "Grooming", zh: "美容" }, frequency: { en: "Every 4–8 weeks", zh: "每 4–8 周" }, trustNeed: "Medium", intentFrom: { en: "Diary posts, seasonal moments", zh: "日记内容、季节性时刻" } },
  { name: { en: "Vet", zh: "宠物医疗" }, frequency: { en: "2–4× / year", zh: "每年 2–4 次" }, trustNeed: "Very high", intentFrom: { en: "Q&A, symptom posts", zh: "问答、症状描述" } },
  { name: { en: "Training", zh: "训练" }, frequency: { en: "Episodic", zh: "阶段性" }, trustNeed: "High", intentFrom: { en: "Behaviour questions", zh: "行为问题" } },
  { name: { en: "Boarding", zh: "寄养" }, frequency: { en: "Holidays, travel", zh: "假期、出行" }, trustNeed: "Very high", intentFrom: { en: "Travel & lifestyle posts", zh: "出行与生活方式内容" } },
  { name: { en: "Photography", zh: "摄影" }, frequency: { en: "Milestones", zh: "重要时刻" }, trustNeed: "Low", intentFrom: { en: "Diary, birthdays", zh: "日记、生日" } },
  { name: { en: "Pet-friendly places", zh: "宠物友好场所" }, frequency: { en: "Weekly", zh: "每周" }, trustNeed: "Low", intentFrom: { en: "Local & discovery posts", zh: "本地与探店内容" } },
  { name: { en: "Walking", zh: "遛狗" }, frequency: { en: "Daily / on demand", zh: "每日 / 按需" }, trustNeed: "High", intentFrom: { en: "Schedule gaps", zh: "日程空档" } },
  { name: { en: "Community events", zh: "社区活动" }, frequency: { en: "Monthly", zh: "每月" }, trustNeed: "Low", intentFrom: { en: "Social graph, same-city", zh: "社交图谱、同城" } },
];

export const serviceJourneyProvenance: Provenance = DESIGN;

export const serviceJourney: Array<{ label: Text; note: Text; emphasis?: boolean }> = [
  { label: { en: "Discovery", zh: "发现" }, note: { en: "content, friends, concierge", zh: "内容、朋友、管家" } },
  { label: { en: "Comparison", zh: "比较" }, note: { en: "distance · price · fit · rating", zh: "距离 · 价格 · 匹配度 · 评分" } },
  { label: { en: "Booking", zh: "预订" }, note: { en: "slot + pet profile", zh: "时段 + 宠物档案" } },
  { label: { en: "Experience", zh: "体验" }, note: { en: "the visit itself", zh: "服务本身" } },
  { label: { en: "Review", zh: "评价" }, note: { en: "becomes content", zh: "再次成为内容" } },
  { label: { en: "Repeat", zh: "复购" }, note: { en: "trust compounds", zh: "信任累积" }, emphasis: true },
];

export const conciergeProvenance: Provenance = DESIGN;

export const conciergeQuery: Text = {
  en: "Saturday, want to take my 2-year-old golden for a bath nearby, budget under ¥200.",
  zh: "周六想带 2 岁金毛去洗澡，附近，预算 200 元以内。",
};

export type WorkflowStep = {
  id: string;
  label: Text;
  verb: Text;
  description: Text;
  output: {
    kind: "pairs" | "list" | "count" | "services" | "booking" | "text";
    title: Text;
    pairs?: Array<{ key: Text; value: Str }>;
    items?: Text[];
    count?: number;
    countLabel?: Text;
    text?: Text;
  };
};

export const conciergeSteps: WorkflowStep[] = [
  {
    id: "intent",
    label: { en: "Understand intent", zh: "理解意图" },
    verb: { en: "Parsing request", zh: "解析请求" },
    description: { en: "Turn free text into a structured service request.", zh: "把自由文本变成结构化的服务请求。" },
    output: {
      kind: "pairs",
      title: { en: "Structured intent", zh: "结构化意图" },
      pairs: [
        { key: { en: "Pet", zh: "宠物" }, value: { en: "Golden Retriever", zh: "金毛寻回犬" } },
        { key: { en: "Age", zh: "年龄" }, value: { en: "2 yrs", zh: "2 岁" } },
        { key: { en: "Service", zh: "服务" }, value: { en: "Grooming · bath", zh: "美容 · 洗澡" } },
        { key: { en: "Time", zh: "时间" }, value: { en: "Saturday", zh: "周六" } },
        { key: { en: "Budget", zh: "预算" }, value: "≤ ¥200" },
        { key: { en: "Location", zh: "位置" }, value: { en: "Nearby (≤ 3 km)", zh: "附近（≤ 3 公里）" } },
      ],
    },
  },
  {
    id: "context",
    label: { en: "Retrieve context", zh: "读取上下文" },
    verb: { en: "Loading user & pet profile", zh: "加载用户与宠物档案" },
    description: { en: "Pull what the platform already knows so the user does not repeat it.", zh: "调出平台已知的信息，用户无需重复。" },
    output: {
      kind: "pairs",
      title: { en: "User / pet context", zh: "用户 / 宠物上下文" },
      pairs: [
        { key: { en: "Pet profile", zh: "宠物档案" }, value: { en: "Bao · 32 kg · long coat · nervous with dryers", zh: "Bao · 32 kg · 长毛 · 怕吹风机" } },
        { key: { en: "Past services", zh: "历史服务" }, value: { en: "2 grooms · last one 7 weeks ago · rated 5★", zh: "2 次美容 · 上次在 7 周前 · 评价 5★" } },
        { key: { en: "Location", zh: "位置" }, value: { en: "Nanshan · usual area Shekou–Houhai", zh: "南山 · 常去蛇口–后海一带" } },
        { key: { en: "Preferences", zh: "偏好" }, value: { en: "Weekend mornings · female groomer preferred", zh: "周末上午 · 偏好女性美容师" } },
      ],
    },
  },
  {
    id: "search",
    label: { en: "Search services", zh: "搜索服务" },
    verb: { en: "Querying nearby supply", zh: "查询附近供给" },
    description: { en: "Retrieve candidate merchants from the service graph.", zh: "从服务图谱中取出候选商家。" },
    output: {
      kind: "count",
      title: { en: "Candidates", zh: "候选" },
      count: 12,
      countLabel: { en: "grooming services within 3 km with Saturday slots", zh: "家 3 公里内周六有空位的美容服务" },
    },
  },
  {
    id: "filter",
    label: { en: "Filter", zh: "筛选" },
    verb: { en: "Applying constraints", zh: "应用约束" },
    description: { en: "Hard constraints first, then soft preferences.", zh: "先硬约束，再软偏好。" },
    output: {
      kind: "list",
      title: { en: "Filters applied", zh: "已应用的筛选" },
      items: [
        { en: "Distance ≤ 3 km", zh: "距离 ≤ 3 公里" },
        { en: "Price ≤ ¥200 for large breed bath", zh: "大型犬洗澡价格 ≤ ¥200" },
        { en: "Large-dog capable · dryer-sensitive handling", zh: "可接大型犬 · 能照顾怕吹风机的狗" },
        { en: "Rating ≥ 4.6 (≥ 30 reviews)", zh: "评分 ≥ 4.6（≥ 30 条评价）" },
        { en: "Saturday 09:00–12:00 availability", zh: "周六 09:00–12:00 有空位" },
      ],
    },
  },
  {
    id: "recommend",
    label: { en: "Recommend", zh: "推荐" },
    verb: { en: "Ranking & explaining", zh: "排序与解释" },
    description: { en: "Rank the remaining options and explain each in the user's terms.", zh: "对剩余选项排序，并用用户的语言解释每一个。" },
    output: { kind: "services", title: { en: "Top 3 matches", zh: "最匹配的 3 家" } },
  },
  {
    id: "execute",
    label: { en: "Execute", zh: "执行" },
    verb: { en: "Booking", zh: "预订" },
    description: { en: "Confirm the slot, attach the pet profile, hold the reservation.", zh: "确认时段，附上宠物档案，锁定预约。" },
    output: { kind: "booking", title: { en: "Booking", zh: "预订" } },
  },
];

export type Service = {
  id: string;
  name: Text;
  distanceKm: number;
  price: number;
  rating: number;
  reviews: number;
  slot: Text;
  why: Text;
  tags: Text[];
  best?: boolean;
};

export const recommendedServicesProvenance: Provenance = DESIGN;

export const recommendedServices: Service[] = [
  {
    id: "s1",
    name: { en: "Paws & Co. Grooming · Shekou", zh: "Paws & Co. 宠物美容 · 蛇口" },
    distanceKm: 1.2,
    price: 168,
    rating: 4.9,
    reviews: 212,
    slot: { en: "Sat 09:30", zh: "周六 09:30" },
    why: {
      en: "Large-breed specialists; 3 golden owners you follow rated it 5★; quiet dryers.",
      zh: "专做大型犬；你关注的 3 位金毛主人给了 5★；使用静音吹风机。",
    },
    tags: [
      { en: "Large-breed", zh: "大型犬" },
      { en: "Quiet dryer", zh: "静音吹风" },
      { en: "Followed by 3", zh: "3 位关注者去过" },
    ],
    best: true,
  },
  {
    id: "s2",
    name: { en: "Cloud Bath Studio · Houhai", zh: "Cloud Bath 洗护工作室 · 后海" },
    distanceKm: 2.4,
    price: 188,
    rating: 4.7,
    reviews: 96,
    slot: { en: "Sat 10:00", zh: "周六 10:00" },
    why: {
      en: "Within budget; female groomer available; slightly further from usual area.",
      zh: "在预算内；有女性美容师；离常去区域稍远。",
    },
    tags: [
      { en: "Female groomer", zh: "女性美容师" },
      { en: "Walk-in ok", zh: "可直接到店" },
    ],
  },
  {
    id: "s3",
    name: { en: "Happy Tail Spa · Nanshan", zh: "Happy Tail 宠物 SPA · 南山" },
    distanceKm: 2.9,
    price: 148,
    rating: 4.6,
    reviews: 341,
    slot: { en: "Sat 11:30", zh: "周六 11:30" },
    why: {
      en: "Cheapest option; busy on weekends; later slot than your usual morning window.",
      zh: "价格最低；周末较忙；时段晚于你平时的上午窗口。",
    },
    tags: [
      { en: "Best price", zh: "价格最优" },
      { en: "Busy", zh: "较忙" },
    ],
  },
];

export const booking: {
  merchant: Text;
  service: Text;
  pet: Text;
  time: Text;
  price: string;
  notes: Text;
  status: Text;
} = {
  merchant: { en: "Paws & Co. Grooming · Shekou", zh: "Paws & Co. 宠物美容 · 蛇口" },
  service: { en: "Bath & brush · large breed", zh: "洗澡与梳理 · 大型犬" },
  pet: { en: "Bao · Golden Retriever · 2 yrs", zh: "Bao · 金毛寻回犬 · 2 岁" },
  time: { en: "Saturday · 09:30 – 10:45", zh: "周六 · 09:30 – 10:45" },
  price: "¥168",
  notes: {
    en: "Nervous with dryers — quiet dryer requested. Profile & vaccination record attached.",
    zh: "怕吹风机——已备注使用静音吹风。已附上档案与疫苗记录。",
  },
  status: { en: "Held for 15 min · confirm to book", zh: "锁定 15 分钟 · 确认即预订" },
};

/** Product targets. Cite comparable local-service conversion benchmarks in `note` if an estimate is made. */
export const servicePrinciplesProvenance: Provenance = DESIGN;

export const serviceMetrics: Array<{ label: Text; value: string; note: Text; provenance: Provenance }> = [
  { label: { en: "Intent → booking", zh: "意图 → 预订" }, value: "23%", note: { en: "vs 6% for search-based flow (hypothesis)", zh: "对比搜索式流程的 6%（假设）" }, provenance: HYPOTHESIS },
  { label: { en: "Time to book", zh: "预订耗时" }, value: "48 s", note: { en: "median, from first message", zh: "从第一条消息起的中位数" }, provenance: HYPOTHESIS },
  { label: { en: "Repeat within 60 days", zh: "60 天内复购" }, value: "44%", note: { en: "same merchant, same pet", zh: "同一商家、同一宠物" }, provenance: HYPOTHESIS },
  { label: { en: "Reviews → content", zh: "评价 → 内容" }, value: "31%", note: { en: "bookings that produce a post or review", zh: "产生帖子或评价的预订比例" }, provenance: HYPOTHESIS },
];
