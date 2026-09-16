import type { Str, Text } from "@/lib/i18n";
import { HYPOTHESIS, type Provenance } from "./provenance";

export const contentTypesProvenance: Provenance = {
  confidence: "hypothesis",
  source: "艾瑞《2021年中国宠物内容价值研究白皮书》",
  url: "https://pdf.dfcfw.com/pdf/H3_AP202112211535867880_1.pdf",
  retrievedAt: "2026-09-14",
  note:
    "Design target for an owner community, not an observation. The only public mix found measures a different object — broadcast pet content on Weibo, 2021 H1 (Weibo big data, via iResearch p.7): 宠物日记及创意内容 43%, 动物段子集锦 22%, 宠物热点及资讯 18%, 动物公益/救助 12%, 养宠知识/科普 3%, 宠物服务 2%. Three of those six genres have no counterpart in this model and the knowledge-bearing ones total 5%, so the shares cannot be mapped onto these seven types. Demand does not line up with that supply, though the two must not be subtracted — 5% is a share of posts, 58.2% a share of people on a multi-select question. Read inside each denominator: demand is near-flat (eight genres, 66.2% → 47.4%; 养宠知识/科普 ranks fourth at 58.2%, 8.0pp below the leader) while supply spans 21× (43% → 2%, knowledge at one fourteenth of the leader); and TGI, normalised against the base population, puts owners at 136 on knowledge and 123 on goods/services rather than the flat 100 an undifferentiated audience would give (N=500, iResearch iClick survey, 2021-08). Consumption by genre is unknown — both supply figures are publishing volume and no per-genre read counts are published.",
};

export type ContentType = { id: string; type: Text; intent: Text; signal: Text; share: number };

export const contentTypes: ContentType[] = [
  { id: "diary", type: { en: "Pet Diary", zh: "宠物日记" }, intent: { en: "Record & be seen", zh: "记录并被看见" }, signal: { en: "Pet, stage, mood, routine", zh: "宠物、阶段、情绪、作息" }, share: 34 },
  { id: "advice", type: { en: "Advice", zh: "经验" }, intent: { en: "Solve a problem", zh: "解决一个问题" }, signal: { en: "Symptom, behaviour, breed", zh: "症状、行为、品种" }, share: 18 },
  { id: "discovery", type: { en: "Discovery", zh: "发现" }, intent: { en: "Find something new", zh: "发现新东西" }, signal: { en: "Product, place, activity", zh: "商品、地点、活动" }, share: 12 },
  { id: "local", type: { en: "Local", zh: "本地" }, intent: { en: "Go somewhere", zh: "去某个地方" }, signal: { en: "Place, city, service", zh: "地点、城市、服务" }, share: 9 },
  { id: "lifestyle", type: { en: "Lifestyle", zh: "生活方式" }, intent: { en: "Express identity", zh: "表达身份" }, signal: { en: "Aesthetic, lifestyle, breed", zh: "审美、生活方式、品种" }, share: 11 },
  { id: "qa", type: { en: "Q&A", zh: "问答" }, intent: { en: "Ask & answer", zh: "提问与回答" }, signal: { en: "Question, stage, urgency", zh: "问题、阶段、紧急程度" }, share: 10 },
  { id: "ugc", type: { en: "UGC reviews", zh: "用户评价" }, intent: { en: "Report an experience", zh: "反馈一次体验" }, signal: { en: "Service, merchant, outcome", zh: "服务、商家、结果" }, share: 6 },
];

export const contentTypesNote: Text = {
  en: "Share of posts — a design target for the feed, not an observation. Advice and Q&A carry the most retrievable knowledge per post; the closest public mix is far less knowledge-dense than this, and the case for weighting them this high comes from demand, not from any observed supply.",
  zh: "各类内容占比，是对信息流的设计目标，而非观测值。经验与问答两类内容单条可检索的知识密度最高；最接近的公开数据知识密度远低于此，把这两类的权重设到这么高，依据在需求侧，而不在任何已观测到的供给。",
};

export const contentLoop: Array<{ label: Text; note: Text; emphasis?: boolean }> = [
  { label: { en: "Create", zh: "创作" }, note: { en: "diary, question, review", zh: "日记、提问、评价" } },
  { label: { en: "Publish", zh: "发布" }, note: { en: "understood before ranked", zh: "先理解，再排序" } },
  { label: { en: "Discover", zh: "发现" }, note: { en: "interest + pet + place", zh: "兴趣 + 宠物 + 地点" } },
  { label: { en: "Interact", zh: "互动" }, note: { en: "like, save, comment", zh: "点赞、收藏、评论" } },
  { label: { en: "Follow", zh: "关注" }, note: { en: "the pet, the owner", zh: "关注宠物，关注主人" } },
  { label: { en: "Return", zh: "回访" }, note: { en: "for the relationship, not the feed", zh: "为关系而回来，而非为信息流" }, emphasis: true },
];

export type PipelineStage = { id: string; stage: Text; title: Text; detail: Text; example: Str };

export const pipeline: PipelineStage[] = [
  {
    id: "content",
    stage: { en: "Content", zh: "内容" },
    title: { en: "Raw post", zh: "原始帖子" },
    detail: { en: "Photo, video, caption, location, time", zh: "照片、视频、文案、位置、时间" },
    example: {
      en: "\"Bao's first beach day — still afraid of waves 🌊\" · 4 photos · Shenzhen · Sat 09:40",
      zh: "「Bao 的第一次海边日，还是怕浪 🌊」· 4 张照片 · 深圳 · 周六 09:40",
    },
  },
  {
    id: "classification",
    stage: { en: "AI classification", zh: "AI 分类" },
    title: { en: "Multimodal understanding", zh: "多模态理解" },
    detail: { en: "A small vision + language model labels every post; only ambiguous ones escalate", zh: "小型视觉与语言模型为每条帖子打标；只有判不准的才升级处理" },
    example: {
      en: "Golden retriever · ~1 yr · outdoor · beach · playful/anxious · first-time experience",
      zh: "金毛 · 约 1 岁 · 户外 · 海滩 · 兴奋/紧张 · 初次体验",
    },
  },
  {
    id: "entities",
    stage: { en: "Entities", zh: "实体" },
    title: { en: "Pet / Breed / Location / Interest / Emotion", zh: "宠物 / 品种 / 地点 / 兴趣 / 情绪" },
    detail: { en: "Labels are resolved to graph entities, not free tags", zh: "标签被解析为图谱实体，而不是自由标签" },
    example: "pet:bao → breed:golden · place:dameisha-beach · interest:outdoor · emotion:joy+fear",
  },
  {
    id: "recommendation",
    stage: { en: "Recommendation", zh: "推荐" },
    title: { en: "Interest & stage-aware ranking", zh: "感知兴趣与阶段的排序" },
    detail: { en: "Same-breed, same-stage and same-city readers are prioritised", zh: "优先分发给同品种、同阶段、同城的读者" },
    example: {
      en: "Shown to golden owners in Shenzhen with dogs 8–18 months",
      zh: "分发给深圳的金毛主人，且狗龄在 8–18 个月之间",
    },
  },
  {
    id: "matching",
    stage: { en: "Social matching", zh: "社交匹配" },
    title: { en: "From reader to candidate", zh: "从读者到候选人" },
    detail: { en: "Engagement on understood content becomes a compatibility signal", zh: "对已理解内容的互动成为相容性信号" },
    example: {
      en: "3 owners who saved this are within 5 km and walk on Saturday mornings",
      zh: "收藏这条内容的 3 位主人都在 5 km 内，且习惯周六早上遛狗",
    },
  },
  {
    id: "service",
    stage: { en: "Service recommendation", zh: "服务推荐" },
    title: { en: "From content to intent", zh: "从内容到意图" },
    detail: { en: "Content reveals service moments before the user searches", zh: "在用户搜索之前，内容已经暴露出服务时刻" },
    example: {
      en: "Beach trip → sand & salt → grooming suggestion for the coming week",
      zh: "海边出行 → 沙子与海盐 → 建议下周洗护",
    },
  },
];

export const creationVsUnderstanding: Array<{ id: string; label: Text; role: Text; what: Text; value: Text; limit: Text }> = [
  {
    id: "creation",
    label: { en: "AI content creation", zh: "AI 内容创作" },
    role: { en: "Entry point", zh: "入口" },
    what: { en: "Caption suggestions, diary prompts, photo curation", zh: "文案建议、日记提示、照片挑选" },
    value: { en: "Lowers the effort to post; raises supply", zh: "降低发布成本，提高供给" },
    limit: { en: "Does not know what the post means to anyone else", zh: "不知道这条内容对其他人意味着什么" },
  },
  {
    id: "understanding",
    label: { en: "AI content understanding", zh: "AI 内容理解" },
    role: { en: "Infrastructure", zh: "基础设施" },
    what: { en: "Classification, entity resolution, emotion & stage inference", zh: "分类、实体解析、情绪与阶段推断" },
    value: { en: "Every downstream capability — ranking, matching, service intent — depends on it", zh: "排序、匹配、服务意图等所有下游能力都依赖于它" },
    limit: { en: "Invisible to the user; its value shows up as relevance", zh: "对用户不可见，价值以相关性的形式体现" },
  },
];

/** Product targets, not observations. Keep as hypothesis unless a comparable published benchmark is cited in `note`. */
export const understandingMetrics: Array<{ label: Text; value: string; note: Text; provenance: Provenance }> = [
  {
    label: { en: "Posts with resolved pet entity", zh: "解析出宠物实体的帖子" },
    value: "91%",
    note: { en: "target: profile-linked or inferred", zh: "目标：关联档案或推断得出" },
    provenance: {
      confidence: "hypothesis",
      source: "Pinterest Engineering — Interest Taxonomy",
      url: "https://medium.com/pinterest-engineering/interest-taxonomy-a-knowledge-graph-management-system-for-content-understanding-at-pinterest-a6ae75c203fd",
      retrievedAt: "2026-09-14",
      note:
        "Target, not an observation. Closest published comparable: Pinterest states that \"more than 99% of the Pins can be mapped to at least one taxonomy node\" through Pin2Interest, over a corpus of 200B+ Pins (2020). That is coverage of a broad interest taxonomy, not resolution to one named entity such as a specific pet, so this target is deliberately set below it.",
    },
  },
  {
    label: { en: "Breed inference precision", zh: "品种推断精确率" },
    value: "0.87",
    note: { en: "vision model, top-1 on labelled set", zh: "视觉模型，标注集上的 top-1" },
    provenance: {
      confidence: "hypothesis",
      source: "Tsinghua Dogs benchmark",
      url: "https://cg.cs.tsinghua.edu.cn/ThuDogs/",
      retrievedAt: "2026-09-14",
      note:
        "Target, set against published fine-grained results. Tsinghua Dogs (130 breeds, 70,428 images, over 65% taken from real life, breed frequencies matched to how often they occur in China) reports a best benchmark of 86.4% (WS-DAN, Inception-v3, 2019); Oxford-IIIT Pet (37 breeds, 7,349 images) stood at about 59% average per-class accuracy when it was published in 2012. Both score a closed breed list on curated single-animal photos. A real pet feed does not fit one: Weibo's 2021 H1 cat top-10 is led by 橘猫 and 狸花猫, and the dog top-10 includes 中华田园犬 — coat types and landraces that are not classes in either dataset.",
    },
  },
  {
    label: { en: "Location-resolved posts", zh: "解析出地点的帖子" },
    value: "64%",
    note: { en: "explicit or inferred from place", zh: "明确标注或由地点推断" },
    provenance: {
      confidence: "hypothesis",
      source: "Huang & Carley, geotagging on Twitter (2019)",
      url: "https://arxiv.org/abs/1908.10948",
      retrievedAt: "2026-09-14",
      note:
        "Target, not an observation. The explicit half of it is rare wherever it has been measured at scale: across 41.3bn tweets from 20.0m users, 2.31% carried a geotag (1.76% a place, 0.55% coordinates). No comparable public figure was found for inferred location, which is where most of this target would have to come from.",
    },
  },
  { label: { en: "Posts → service intent signals", zh: "帖子 → 服务意图信号" }, value: "12%", note: { en: "posts carrying a detectable service moment", zh: "带有可检测服务时刻的帖子" }, provenance: HYPOTHESIS },
];
