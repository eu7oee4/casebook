import type { Text } from "@/lib/i18n";

export const architecture = {
  top: "AI",
  middle: ["Content", "Social", "Local"],
  stack: ["Data", "User & Pet Profile", "Personalization", "Monetization"],
};

export type Capability = {
  index: string;
  name: Text;
  oneLiner: Text;
  problem: Text;
  capability: Text;
  mechanism: Text;
  dataInput: Text[];
  userValue: Text;
  businessValue: Text;
  priority: "P0" | "P1";
};

export const capabilities: Capability[] = [
  {
    index: "01",
    name: { en: "Content Intelligence", zh: "内容理解" },
    oneLiner: { en: "Understand every post at the pet level, cheaply enough to do it on all of them.", zh: "在宠物层面理解每一条内容，且成本低到足以覆盖全量。" },
    problem: {
      en: "Pet content is ranked on generic engagement; the platform does not know which dog, which stage, which place, which feeling.",
      zh: "宠物内容按通用互动指标排序；平台不知道是哪只狗、哪个阶段、哪个地点、什么情绪。",
    },
    capability: {
      en: "Multimodal classification and entity resolution: pet, breed, age/stage, location, activity, emotion, service moment.",
      zh: "多模态分类与实体消歧：宠物、品种、年龄/阶段、地点、活动、情绪、服务时机。",
    },
    mechanism: {
      en: "Every post is understood before it is ranked — once at publish time, not per impression, and mostly by a profile join or a small classifier rather than a large model; only ambiguous posts escalate. Labels resolve to graph entities that recommendation, matching and services share.",
      zh: "每条内容先被理解，再被排序——在发布时跑一次，而不是每次曝光都跑，且主要靠档案 join 或小分类器，而不是大模型，只有判不准的内容才升级处理。标签落到图谱实体上，推荐、匹配与服务共用同一套实体。",
    },
    dataInput: [
      { en: "Photos & video", zh: "图片与视频" },
      { en: "Captions", zh: "文案" },
      { en: "Location & time", zh: "地点与时间" },
      { en: "Pet profile", zh: "宠物档案" },
      { en: "Engagement", zh: "互动数据" },
    ],
    userValue: {
      en: "A feed that feels like it knows my dog — same breed, same stage, same city.",
      zh: "一个像是认识我家狗的信息流：同品种、同阶段、同城。",
    },
    businessValue: {
      en: "The substrate for every other capability; improves relevance and surfaces service intent from content.",
      zh: "其他所有能力的基础；提升相关性，并从内容中识别出服务意图。",
    },
    priority: "P0",
  },
  {
    index: "02",
    name: { en: "Social Intelligence", zh: "社交理解" },
    oneLiner: { en: "Match pets first, then people.", zh: "先匹配宠物，再匹配人。" },
    problem: {
      en: "Owners find each other by chance; recommendations optimise clicks, so DMs fill with unanswered hellos.",
      zh: "养宠人靠偶然相识；推荐只优化点击，私信里堆满无人回应的招呼。",
    },
    capability: {
      en: "Compatibility scoring over pet temperament, stage, schedule, distance and owner preference; activity-anchored recommendations.",
      zh: "基于宠物性格、阶段、作息、距离与主人偏好的相容性评分；以具体活动为锚点的推荐。",
    },
    mechanism: {
      en: "Each match ships with a concrete plan (time, place, activity) and a plain-language reason. Optimised on 7-day relationship retention, not acceptance.",
      zh: "每个匹配都附带具体计划（时间、地点、活动）和一句直白的理由。优化目标是 7 日关系留存，而不是接受率。",
    },
    dataInput: [
      { en: "Pet profile", zh: "宠物档案" },
      { en: "Activity times", zh: "活动时段" },
      { en: "Location", zh: "位置" },
      { en: "Content interactions", zh: "内容互动" },
      { en: "Past match outcomes", zh: "历史匹配结果" },
    ],
    userValue: {
      en: "A walk buddy whose dog gets on with mine, near me, at the time I actually walk.",
      zh: "一个遛狗搭子：狗跟我家狗合得来，就在附近，时间和我真正遛狗的时段对得上。",
    },
    businessValue: {
      en: "Relationships are the retention engine and the bridge to local services.",
      zh: "关系是留存引擎，也是通向本地服务的桥梁。",
    },
    priority: "P1",
  },
  {
    index: "03",
    name: { en: "Local Service Intelligence", zh: "本地服务理解" },
    oneLiner: { en: "Turn intent into a booked service.", zh: "把意图变成已预订的服务。" },
    problem: {
      en: "Service choice is anxious and fragmented; search returns lists, not decisions.",
      zh: "选服务这件事让人焦虑且信息分散；搜索给出的是列表，而不是决定。",
    },
    capability: {
      en: "Intent understanding, constraint filtering, ranking with community trust signals, explanation and execution.",
      zh: "意图理解、约束筛选、结合社区信任信号的排序、解释与执行。",
    },
    mechanism: {
      en: "The Service Concierge: understand → retrieve context → search → filter → recommend with reasons → book. Community experience is a ranking feature.",
      zh: "服务管家：理解 → 读取上下文 → 搜索 → 筛选 → 带理由推荐 → 预订。社区的真实体验是排序特征之一。",
    },
    dataInput: [
      { en: "Service graph", zh: "服务图谱" },
      { en: "Pet profile", zh: "宠物档案" },
      { en: "Past bookings", zh: "历史预订" },
      { en: "Reviews from followed owners", zh: "已关注主人的评价" },
      { en: "Availability", zh: "可预约时段" },
    ],
    userValue: {
      en: "One sentence becomes a confirmed appointment that fits my dog.",
      zh: "一句话变成一个适合我家狗的、已确认的预约。",
    },
    businessValue: {
      en: "First agentic transaction; take-rate on services; higher repeat and lower acquisition cost for merchants.",
      zh: "第一笔 Agent 式交易；服务抽成；更高的复购和更低的商家获客成本。",
    },
    priority: "P0",
  },
  {
    index: "04",
    name: { en: "Pet Knowledge Graph", zh: "宠物知识图谱" },
    oneLiner: { en: "One graph the whole product reasons over.", zh: "整个产品共同推理的一张图。" },
    problem: {
      en: "Content, users, pets, places and services live in separate tables; no capability can see across them.",
      zh: "内容、用户、宠物、地点与服务分散在不同的表里；没有任何能力能跨表看到全貌。",
    },
    capability: {
      en: "A graph of entities (pet, owner, breed, place, merchant, content, event) and typed relationships, updated by content understanding and behaviour.",
      zh: "由实体（宠物、主人、品种、地点、商家、内容、活动）和带类型的关系构成的图谱，由内容理解与用户行为持续更新。",
    },
    mechanism: {
      en: "Every capability reads from and writes to the graph. It is the memory of the AI layer and the definition of personalization.",
      zh: "每个能力都读写这张图。它是 AI 层的记忆，也是个性化的定义本身。",
    },
    dataInput: [
      { en: "Content entities", zh: "内容实体" },
      { en: "Profiles", zh: "档案" },
      { en: "Bookings", zh: "预订记录" },
      { en: "Social graph", zh: "社交图" },
      { en: "Place data", zh: "地点数据" },
    ],
    userValue: {
      en: "The product remembers my dog — stage, health, preferences — across every surface.",
      zh: "产品在每个界面都记得我家狗：阶段、健康、偏好。",
    },
    businessValue: {
      en: "Compounding data moat; enables personalization and precise monetization without ad-style targeting.",
      zh: "持续复利的数据护城河；无需广告式定向即可实现个性化与精准商业化。",
    },
    priority: "P1",
  },
  {
    index: "05",
    name: { en: "AI Agent", zh: "AI Agent" },
    oneLiner: { en: "Natural language in, completed task out.", zh: "输入自然语言，输出已完成的任务。" },
    problem: {
      en: "Users describe needs in sentences; products expose filters. The gap is manual work the user has to do.",
      zh: "用户用句子描述需求，产品却只给出筛选器。中间的差距是用户不得不自己做的手工活。",
    },
    capability: {
      en: "An agent that understands intent, retrieves context, plans, calls tools (search, filter, book, message) and executes with confirmation.",
      zh: "一个能理解意图、读取上下文、规划、调用工具（搜索、筛选、预订、发消息）并在确认后执行的 Agent。",
    },
    mechanism: {
      en: "Understand → Context → Plan → Tool calling → Execute → Feedback. Each tool is a product capability exposed to the agent.",
      zh: "理解 → 上下文 → 规划 → 工具调用 → 执行 → 反馈。每个工具都是一项暴露给 Agent 的产品能力。",
    },
    dataInput: [
      { en: "Conversation", zh: "对话" },
      { en: "Knowledge graph", zh: "知识图谱" },
      { en: "Tool results", zh: "工具返回结果" },
      { en: "User confirmation", zh: "用户确认" },
    ],
    userValue: {
      en: "I say what I need; it gets done, and I can see why.",
      zh: "我说出需求，事情就被办好，而且我能看到为什么这样办。",
    },
    businessValue: {
      en: "Raises conversion on every intent; makes the ecosystem operable through one interface.",
      zh: "提升每一个意图的转化率；让整个生态可以通过一个界面来操作。",
    },
    priority: "P0",
  },
];

export const agentLoop: Array<{ label: Text; note: Text; emphasis?: boolean }> = [
  { label: { en: "Understand intent", zh: "理解意图" }, note: { en: "parse the request into entities and constraints", zh: "把请求解析为实体与约束" } },
  { label: { en: "Context", zh: "上下文" }, note: { en: "user, pet, history, location from the graph", zh: "从图谱中读取用户、宠物、历史与位置" } },
  { label: { en: "Plan", zh: "规划" }, note: { en: "decide which tools, in what order", zh: "决定调用哪些工具、以什么顺序" } },
  { label: { en: "Tool calling", zh: "工具调用" }, note: { en: "search · filter · rank · book · message", zh: "搜索 · 筛选 · 排序 · 预订 · 发消息" } },
  { label: { en: "Execute", zh: "执行" }, note: { en: "with explicit confirmation on side effects", zh: "有副作用的操作先获得明确确认" } },
  { label: { en: "Feedback", zh: "反馈" }, note: { en: "outcome updates the graph and the ranker", zh: "结果回写图谱并更新排序模型" }, emphasis: true },
];

export const petCareQuery: Text = {
  en: "Saturday, find me a grooming shop nearby that suits my golden retriever, budget ¥200.",
  zh: "周六帮我找一个附近适合我家金毛的美容店，预算 200。",
};

export type TraceStep = { step: Text; tool: string; result: Text };

export const petCareTrace: TraceStep[] = [
  { step: { en: "Understand request", zh: "理解请求" }, tool: "intent-parser", result: { en: "service=grooming · pet=golden · day=Sat · budget≤200 · radius=nearby", zh: "service=grooming · pet=golden · day=Sat · budget≤200 · radius=nearby" } },
  { step: { en: "Retrieve pet profile", zh: "读取宠物档案" }, tool: "graph.pet", result: { en: "Bao · 2 yrs · 32 kg · long coat · dryer-sensitive", zh: "Bao · 2 岁 · 32 kg · 长毛 · 怕吹风机" } },
  { step: { en: "Retrieve location", zh: "读取位置" }, tool: "graph.user.location", result: { en: "Nanshan · usual radius 3 km", zh: "南山 · 常用范围 3 km" } },
  { step: { en: "Search services", zh: "搜索服务" }, tool: "services.search", result: { en: "12 candidates with Saturday slots", zh: "12 家候选商家有周六时段" } },
  { step: { en: "Filter", zh: "筛选" }, tool: "services.filter", result: { en: "5 remain (price, large-breed, rating, slot)", zh: "剩余 5 家（价格、大型犬、评分、时段）" } },
  { step: { en: "Rank", zh: "排序" }, tool: "ranker.trust", result: { en: "Paws & Co. first — 3 followed owners rated 5★", zh: "Paws & Co. 排第一：3 位你关注的主人给了 5★" } },
  { step: { en: "Explain", zh: "解释" }, tool: "explain", result: { en: "\"Closest, within budget, quiet dryers, trusted by people you follow\"", zh: "「最近、在预算内、静音吹风机、你关注的人信任」" } },
  { step: { en: "Confirm", zh: "确认" }, tool: "ui.confirm", result: { en: "User confirms Sat 09:30", zh: "用户确认周六 09:30" } },
  { step: { en: "Book", zh: "预订" }, tool: "services.book", result: { en: "Reservation held · profile attached", zh: "预约已锁定 · 已附上宠物档案" } },
];

export const whyAgent: { statement: Text; parts: Text[]; body: Text } = {
  statement: { en: "Because the task is not “answer a question”.", zh: "因为这个任务不是「回答一个问题」。" },
  parts: [
    { en: "Understand", zh: "理解" },
    { en: "Retrieve", zh: "检索" },
    { en: "Reason", zh: "推理" },
    { en: "Compare", zh: "比较" },
    { en: "Execute", zh: "执行" },
  ],
  body: {
    en: "A chatbot answers. An agent completes. The difference is tool access, context and the right to act — with the user confirming the side effects.",
    zh: "聊天机器人负责回答，Agent 负责完成。区别在于工具访问、上下文和行动的权限，而有副作用的操作由用户来确认。",
  },
};

export const aiPrinciples: Array<{ title: Text; body: Text }> = [
  { title: { en: "Understanding before generation.", zh: "先理解，后生成。" }, body: { en: "The platform's edge is knowing pets, people and places — not writing captions.", zh: "平台的优势在于认识宠物、人和地点，而不是写文案。" } },
  { title: { en: "Every capability reads the same graph.", zh: "每个能力读同一张图。" }, body: { en: "Content, matching and services share entities, so each improves the others.", zh: "内容、匹配与服务共用实体，因此每一项都会让其他项变得更好。" } },
  { title: { en: "Optimise outcomes, not outputs.", zh: "优化结果，而非产出。" }, body: { en: "Relationships formed, services completed, questions resolved — not posts generated or matches shown.", zh: "衡量的是形成的关系、完成的服务、解决的问题，而不是生成的内容数或展示的匹配数。" } },
  { title: { en: "Explain and confirm.", zh: "解释并确认。" }, body: { en: "Every recommendation says why; every action with a side effect asks first.", zh: "每个推荐都说明理由；每个有副作用的操作都先征求确认。" } },
];
