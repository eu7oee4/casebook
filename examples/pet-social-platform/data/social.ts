import { HYPOTHESIS, type Provenance } from "./provenance";
import type { Text } from "@/lib/i18n";

export const identityDimensions: Array<{ label: Text; note: Text }> = [
  { label: { en: "User", zh: "用户" }, note: { en: "owner, lifestyle, schedule", zh: "主人、生活方式、作息" } },
  { label: { en: "Pet", zh: "宠物" }, note: { en: "name, breed, age, temperament", zh: "名字、品种、年龄、性格" } },
  { label: { en: "Interest", zh: "兴趣" }, note: { en: "outdoor, training, photography", zh: "户外、训练、摄影" } },
  { label: { en: "City", zh: "城市" }, note: { en: "district, usual walking area", zh: "所在区、常去的遛狗区域" } },
  { label: { en: "Lifestyle", zh: "生活方式" }, note: { en: "work rhythm, weekend habits", zh: "工作节奏、周末习惯" } },
  { label: { en: "Pet stage", zh: "宠物阶段" }, note: { en: "puppy · adult · senior · recovery", zh: "幼年 · 成年 · 老年 · 康复期" } },
];

export const relationshipLadder: Array<{ step: Text; depth: number; signal: Text; note: Text }> = [
  { step: { en: "Like", zh: "点赞" }, depth: 1, signal: { en: "Attention", zh: "注意" }, note: { en: "cheap, one-way", zh: "低成本、单向" } },
  { step: { en: "Comment", zh: "评论" }, depth: 2, signal: { en: "Conversation", zh: "对话" }, note: { en: "public, contextual", zh: "公开、有上下文" } },
  { step: { en: "Follow", zh: "关注" }, depth: 3, signal: { en: "Intent to see again", zh: "想再次看到" }, note: { en: "asymmetric", zh: "非对称" } },
  { step: { en: "DM", zh: "私信" }, depth: 4, signal: { en: "Private exchange", zh: "私下交流" }, note: { en: "mutual", zh: "双向" } },
  { step: { en: "Same-city connection", zh: "同城连接" }, depth: 5, signal: { en: "Shared context", zh: "共享语境" }, note: { en: "distance becomes a feature", zh: "距离成为一个特征" } },
  { step: { en: "Offline activity", zh: "线下活动" }, depth: 6, signal: { en: "Shared experience", zh: "共同经历" }, note: { en: "a walk, a park, an event", zh: "一次遛狗、一个公园、一场活动" } },
  { step: { en: "Real-world relationship", zh: "现实关系" }, depth: 7, signal: { en: "Trust", zh: "信任" }, note: { en: "the outcome we optimise for", zh: "我们优化的最终结果" } },
];

/** Hypothesised conversion between rungs (of users at the previous rung). */
export const ladderFunnelProvenance: Provenance = HYPOTHESIS;
export const ladderFunnel: Array<{ step: Text; users: number }> = [
  { step: { en: "Like", zh: "点赞" }, users: 100 },
  { step: { en: "Comment", zh: "评论" }, users: 38 },
  { step: { en: "Follow", zh: "关注" }, users: 24 },
  { step: { en: "DM", zh: "私信" }, users: 9 },
  { step: { en: "Same-city", zh: "同城" }, users: 5 },
  { step: { en: "Offline", zh: "线下" }, users: 2.2 },
  { step: { en: "Relationship", zh: "关系" }, users: 1.1 },
];

export const matchQuery: Text = {
  en: "Find someone nearby to walk dogs with on weekend mornings.",
  zh: "帮我找附近适合周末早上一起遛狗的人。",
};

export const matchSignals: Array<{ key: Text; value: Text }> = [
  { key: { en: "Pet", zh: "宠物" }, value: { en: "Bao · Golden Retriever", zh: "Bao · 金毛寻回犬" } },
  { key: { en: "Breed", zh: "品种" }, value: { en: "Large, sociable, high energy", zh: "大型、亲社交、高精力" } },
  { key: { en: "Age", zh: "年龄" }, value: { en: "2 yrs · adult", zh: "2 岁 · 成年" } },
  { key: { en: "Personality", zh: "性格" }, value: { en: "Playful, dog-friendly, cautious with water", zh: "爱玩、对狗友好、怕水" } },
  { key: { en: "Location", zh: "位置" }, value: { en: "Nanshan, Shenzhen · 3 km radius", zh: "深圳南山 · 3 公里范围" } },
  { key: { en: "Activity time", zh: "活动时间" }, value: { en: "Sat / Sun · 07:00–09:30", zh: "周六 / 周日 · 07:00–09:30" } },
  { key: { en: "Owner interest", zh: "主人兴趣" }, value: { en: "Outdoor, trail walks, photography", zh: "户外、徒步、摄影" } },
  { key: { en: "Social preference", zh: "社交偏好" }, value: { en: "Small groups · calm dogs", zh: "小团体 · 性格温和的狗" } },
];

export type MatchCandidate = {
  id: string;
  pet: string;
  breed: Text;
  owner: Text;
  distanceKm: number;
  score: number;
  commonInterests: Text[];
  compatibleActivity: Text;
  why: Text[];
  schedule: Text;
};

export const matchCandidates: MatchCandidate[] = [
  {
    id: "m1",
    pet: "Mochi",
    breed: { en: "Labrador · 3 yrs", zh: "拉布拉多 · 3 岁" },
    owner: { en: "Owner in Shekou", zh: "主人在蛇口" },
    distanceKm: 1.8,
    score: 72,
    commonInterests: [
      { en: "Trail walks", zh: "徒步" },
      { en: "Outdoor", zh: "户外" },
    ],
    compatibleActivity: { en: "Saturday coastal walk", zh: "周六海边遛狗" },
    why: [
      { en: "Same city, 1.8 km apart", zh: "同城，相距 1.8 公里" },
      { en: "Similar activity schedule (Sat 07–09)", zh: "活动时间相近（周六 07–09）" },
      { en: "Both outdoor-oriented, similar energy", zh: "都偏好户外，精力水平相近" },
    ],
    schedule: { en: "Sat · 07:30", zh: "周六 · 07:30" },
  },
  {
    id: "m2",
    pet: "Nori",
    breed: { en: "Golden Retriever · 1.5 yrs", zh: "金毛寻回犬 · 1.5 岁" },
    owner: { en: "Owner in Houhai", zh: "主人在后海" },
    distanceKm: 2.6,
    score: 68,
    commonInterests: [
      { en: "Golden retriever", zh: "金毛" },
      { en: "Photography", zh: "摄影" },
    ],
    compatibleActivity: { en: "Sunday park playdate", zh: "周日公园玩耍" },
    why: [
      { en: "Same breed and stage", zh: "同品种、同阶段" },
      { en: "Owner posts photography content", zh: "主人发布摄影内容" },
      { en: "Prefers small groups", zh: "偏好小团体" },
    ],
    schedule: { en: "Sun · 08:00", zh: "周日 · 08:00" },
  },
  {
    id: "m3",
    pet: "Pudding",
    breed: { en: "Samoyed · 4 yrs", zh: "萨摩耶 · 4 岁" },
    owner: { en: "Owner in Shenzhen Bay", zh: "主人在深圳湾" },
    distanceKm: 3.1,
    score: 61,
    commonInterests: [{ en: "Outdoor", zh: "户外" }],
    compatibleActivity: { en: "Weekend group walk (4 dogs)", zh: "周末群体遛狗（4 只）" },
    why: [
      { en: "Calm temperament matches Bao's preference", zh: "性格温和，符合 Bao 的偏好" },
      { en: "Active in the same walking area", zh: "活跃在同一遛狗区域" },
      { en: "Slight schedule offset (starts 09:00)", zh: "时间略有偏差（09:00 开始）" },
    ],
    schedule: { en: "Sat · 09:00", zh: "周六 · 09:00" },
  },
];

/** Product targets. Cite comparable public benchmarks (dating / community apps) in `note` if an estimate is made. */
export const matchMetrics: Array<{ label: Text; value: string; note: Text; provenance: Provenance }> = [
  { label: { en: "Match acceptance rate", zh: "匹配接受率" }, value: "34%", note: { en: "of shown matches accepted by either side", zh: "展示的匹配中任一方接受的比例" }, provenance: HYPOTHESIS },
  { label: { en: "Conversation rate", zh: "对话率" }, value: "58%", note: { en: "of accepted matches that exchange ≥3 messages", zh: "接受的匹配中交换 ≥3 条消息的比例" }, provenance: HYPOTHESIS },
  { label: { en: "Mutual follow rate", zh: "互关率" }, value: "47%", note: { en: "of conversations that lead to mutual follow", zh: "对话中发展为互相关注的比例" }, provenance: HYPOTHESIS },
  { label: { en: "7D relationship retention", zh: "7 日关系留存" }, value: "41%", note: { en: "still messaging or meeting a week later", zh: "一周后仍在联系或见面的比例" }, provenance: HYPOTHESIS },
  { label: { en: "Offline conversion", zh: "线下转化率" }, value: "12%", note: { en: "of matches that meet in person within 30 days", zh: "30 天内线下见面的匹配比例" }, provenance: HYPOTHESIS },
];

export const matchPrinciples: Array<{ title: Text; body: Text }> = [
  {
    title: { en: "Do not optimise the number of recommendations.", zh: "不要优化推荐数量。" },
    body: {
      en: "More matches shown lowers acceptance and floods DMs. The unit of success is a relationship that survives a week, not a swipe.",
      zh: "展示更多匹配只会降低接受率、淹没私信。成功的单位是一段能维持一周的关系，而不是一次滑动。",
    },
  },
  {
    title: { en: "Match on the pet first, then the human.", zh: "先匹配宠物，再匹配人。" },
    body: {
      en: "Two dogs that play well is a stronger predictor of a second meeting than two owners with similar bios.",
      zh: "两只玩得来的狗，比两个简介相似的主人更能预测第二次见面。",
    },
  },
  {
    title: { en: "Give every match an activity.", zh: "给每个匹配一个活动。" },
    body: {
      en: "\"Say hi\" fails; \"Saturday 07:30 coastal walk\" succeeds. The recommendation is a plan, not a profile.",
      zh: "「打个招呼」会失败，「周六 07:30 海边遛狗」会成功。推荐是一个计划，而不是一份资料。",
    },
  },
];
