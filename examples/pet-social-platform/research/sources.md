# Sources

One line per source, in the order first used. Reference the same `source` string in `data/*.ts` provenance.

| ID | Source | Publisher / type | Year | URL | Used in |
|---|---|---|---|---|---|
| S01 | 《2025年中国宠物行业白皮书（消费报告）》节选 PDF — "China Pet Industry White Paper 2025 (Petdata)" | 派读宠物行业大数据 (Petdata) · industry white paper, first-hand excerpt PDF (data year 2024, urban dogs & cats) | 2025 | https://pdf.dfcfw.com/pdf/H3_AP202512111798269901_1.pdf | `marketKpis[0][3][4]`, `spendTrend`, 02 note |
| S02 | 《2026年中国宠物行业白皮书》发布报道 | 央视网 reprint of the Petdata launch (data year 2025) · secondary | 2026 | https://business.cctv.com/2026/01/05/ARTIdmv2AWmVeRVodaZYLOvQ260105.shtml | `spendTrend` (2025), `marketKpis[4]` note, 02 note |
| S03 | 《2022年中国宠物消费报告》品类份额 | 新浪财经 reprint (data year 2022) · secondary | 2023 | https://finance.sina.cn/2023-02-23/detail-imyhsweq8589815.d.html | `spendTrend` (2022 shares) |
| S04 | 小红书 × CBNData《2024宠物行业洞察报告》 — "Xiaohongshu × CBNData pet industry report 2024" | CBNData (co-publisher release page) | 2024 | https://www.cbndata.com/information/292504 | `marketKpis[1]`, 02 note |
| S05 | 艾瑞咨询《2023年中国宠物健康消费白皮书》 — "iResearch pet health consumption white paper 2023" | iResearch · survey 2022-12, N=2067 (sub-samples noted per figure); 62-page image PDF read page-by-page; public mirror on The Paper | 2023 | https://m.thepaper.cn/newsDetail_forward_22746944 | `marketKpis[2]`, `marketKpis[3]` note, 02 note |
| S06 | 艾瑞咨询宠物行业报告（犬/猫家庭渗透率 17.8% / 16.4%，2023，全国口径） | 新浪财经 reprint · secondary | 2025 | https://finance.sina.cn/hkstock/ggyw/2025-03-09/detail-inenziev7750249.d.html | `marketKpis[0]` provenance note, 02 note |
| S07 | 巨量引擎母婴宠物行业经营文章（抖音宠物内容月均覆盖 3亿+，兴趣用户 1.5亿+） | 维宠 reprint of Ocean Engine material · secondary | 2024 | https://www.petdhw.com/xiamen-show-37371.html | `marketKpis[1]` provenance note, 02 note |
| S08 | 小红书商业化亚宠展发布（宠物兴趣人群 1.7 亿，2025-06） | 宠观网 reprint · secondary | 2025 | https://www.petgw.com/6244.html | 02 note |
| S09 | 《2026年中国宠物行业白皮书》发布报道（疾病信息渠道、服务渠道） | 光明网 reprint · secondary | 2026 | https://m.gmw.cn/2026-01/05/content_1304291767.htm | 02 note |
| S10 | 南都民调中心宠物服务消费调查（n=1060） | 南方都市报 · media poll | 2022 | https://m.mp.oeeee.com/oe/BAAFRD000020220413671262.html | 02 note |
| S11 | 美团新闻稿《今年新增宠物门店超2.5万家》（"离家近" 57.9%） | 美团 · company disclosure | 2023 | https://www.meituan.com/news/NN230821046001678 | 02 note |
| S12 | 美团 2025 宠物经济消费洞察报道 | 凤凰网财经 reprint · secondary | 2025 | https://finance.ifeng.com/c/8lyKO5fvtUQ | 02 note |
| S13 | 《线下消费新场景，靠宠物社交能打开吗？》 | 21经济网 · press, qualitative | 2023 | https://www.21jingji.com/article/20231226/herald/f75be67b56181176232d171af785c522.html | 02 note |
| S14 | KPMG《2025年中国宠物行业市场报告》（转引 Statista / Frost & Sullivan） | 毕马威 · report PDF, transcited figures | 2025 | https://assets.kpmg.com/content/dam/kpmg/cn/pdf/zh/2025/06/2025-china-pet-industry-market-report.pdf | 02 note |
| S15 | 券商研报转引历年白皮书品类份额（2019–2022 食品/医疗序列） | 华鑫证券系研报 PDF · secondary | n.d. | https://file.iyanbao.com/pdf/03064-0013e410-970c-4984-83c0-3c08f501d53a.pdf | 02 note, market page implication copy (19%→28%) |
| S16 | 艾瑞 × 微博《中国宠物内容价值研究白皮书》 | 澎湃 reprint · secondary | 2021 | https://www.thepaper.cn/newsDetail_forward_15953366 | 02 note |
| S17 | 快手《2021快手宠物生态报告》 | 21经济网 reprint · secondary | 2021 | http://www.21jingji.com/article/20211008/herald/9cd5e1c1817141880ca9cc6efd6b55e4.html | 02 note |
| S18 | 《2019年中国宠物行业白皮书》（59.1% 视宠物为孩子） | 腾讯新闻 reprint · secondary, dated | 2020 | https://news.qq.com/rain/a/20200115A0527L00 | 02 note |
| S19 | Petzbe — App Store listing (US) + petzbe.com | PetsGlobal · app-store listing (read via the iTunes lookup API, v1.3.11, 2026-04-13) and official site | 2026 | https://apps.apple.com/us/app/petzbe-pet-social-media/id1314000163 | `competitors[petzbe]`, 03 note |
| S20 | Yummypets — App Store listing (US) | SARL Octopepper · app-store listing (iTunes lookup, v47, 2026-07-20) | 2026 | https://apps.apple.com/us/app/id527910229 | `competitors[yummypets]`, 03 note |
| S21 | BarkHappy — official site with shutdown notice ("AS OF JANUARY 2025 OUR MOBILE APP IS NO LONGER AVAILABLE") | BarkHappy Inc. · company site, first-hand | 2025 | https://barkhappy.com/ | `competitors[barkhappy]`, `competitorInsights[0][2]`, 03 note |
| S22 | 《千亿宠物经济难于社交："猫卡"停运200万用户数据失踪》 | 中国经营报 via 新浪财经 · press (lists 闻闻窝 / 遛遛 / 狗卡 / 宠咖秀 as stopped) | 2019 | https://finance.sina.cn/chanjing/gdxw/2019-09-18/detail-iicezueu6730326.d.html | 03 note (CN direct-tier attrition) |
| S23 | 宠胖胖 — App Store listing (CN) | 江苏千宠家科技 · app-store listing (iTunes lookup, v7.1.6, 2026-09-03) | 2026 | https://apps.apple.com/cn/app/id1501134228 | `competitors[chongpangpang]`, 03 note |
| S24 | 铲屎官的日常 — App Store listing (CN; last update 2020-10-20) | 少华 李 · app-store listing (iTunes lookup) | 2020 | https://apps.apple.com/cn/app/id1478066726 | 03 note (context only: stale CN pet-community app) |
| S25 | 波奇宠物 — App Store listing (CN) | 广橙（上海）信息技术 (Boqii) · app-store listing (iTunes lookup, v4.7.28, 2026-03-04) | 2026 | https://apps.apple.com/cn/app/id1398653068 | `competitors[boqii]`, 03 note |
| S26 | PetMD — "Introducing PetMD's Symptom Checker" (Veronica Higgs, DVM) | PetMD / Chewy · product article, first-hand | 2023 | https://www.petmd.com/general-health/-introducing-petmd-symptom-checker | `competitors[petmd]`, 03 note |
| S27 | Rover Help Center — "What is the Star Sitter program?" | Rover · help centre (read through a text proxy; rover.com blocks direct fetches) | 2026 | https://support.rover.com/hc/en-us/articles/16397182711444-What-is-the-Star-Sitter-program | `competitors[rover]`, 03 note |
| S28 | Rover — pet-sitting landing page (verified reviews, repeat client stats, background-check badges) + App Store listing (US, v26.0819, 2026-08-27) | Rover · company site + app-store listing | 2026 | https://www.rover.com/pet-sitting/ | `competitors[rover]` note, 03 note |
| S29 | Chewy — Google Play listing (Autoship, pet profiles, pharmacy, Connect with a Vet) | Chewy, Inc. · app-store listing (read through a text proxy) | 2026 | https://play.google.com/store/apps/details?id=com.chewy.android | `competitors[chewy]`, 03 note |
| S30 | 小红书 — App Store listing (CN) | 行吟信息科技 · app-store listing (iTunes lookup, v9.46, 2026-09-07) | 2026 | https://apps.apple.com/cn/app/id741292507 | `competitors[xiaohongshu]`, 03 note |
| S31 | 《小红书日搜索量接近6亿 每天有1.2亿人在搜什么》 | 新浪科技 reprint of 中关村在线 · secondary (search usage figures attributed to Xiaohongshu) | 2024 | https://finance.sina.com.cn/tech/roll/2024-12-13/doc-incziqvr5736527.shtml | `competitors[xiaohongshu]` note (estimate), 03 note |
| S32 | Instagram Help Center — "Create a Close Friends list on Instagram" | Meta · help centre (read through a text proxy) | 2026 | https://help.instagram.com/476003390920140 | `competitors[instagram]`, 03 note |
| S33 | Soul — App Store listing (CN) | 上海任意门科技 · app-store listing (iTunes lookup, v6.35.0, 2026-09-07) | 2026 | https://apps.apple.com/cn/app/id1032287195 | `competitors[soul]`, 03 note |
| S34 | 即刻 — App Store listing (CN) | 上海若友网络科技 · app-store listing (iTunes lookup, v7.56.16, 2026-03-10) | 2026 | https://apps.apple.com/cn/app/id966129812 | `competitors[jike]`, 03 note |
| S35 | 大众点评 — App Store listing (CN) | 汉海信息技术 · app-store listing (iTunes lookup, v11.71.13, 2026-09-08) | 2026 | https://apps.apple.com/cn/app/id351091731 | `competitors[dianping]` note, 03 note |
| S36 | 美团规则中心《2025年大众点评必吃榜规则》 | 美团 · platform rules, first-hand (published 2025-05-15) | 2025 | https://rules-center.meituan.com/m/detail/guize/316001?activeRule=1 | `competitors[dianping]`, 03 note |
| S37 | 美团 — App Store listing (CN) | 三快科技 · app-store listing (iTunes lookup, v12.65.202, 2026-09-02) | 2026 | https://apps.apple.com/cn/app/id423084029 | `competitors[meituan]` note, 03 note |
| S38 | 美团消费者保障服务（过期自动退 / 未消费随时退款） | 美团 · company commitment page, first-hand | n.d. | https://i.meituan.com/commitment/ | `competitors[meituan]`, 03 note |
| S39 | 《宠物行业发展现状分析：宠物app是新的红海吗？》 | 人人都是产品经理 · blog, qualitative (author tested ~30 pet apps, half dead) | 2020 | https://www.woshipm.com/evaluating/4039367.html | 03 note (CN attrition, context only) |
| S40 | barkhappy.com — Wayback Machine snapshots 2024-10-04 / 2024-12-08 (app still advertised) and 2025-02-23 ("THANK YOU FOR AN AMAZING 8 YEARS! AS OF JANUARY 2025 OUR MOBILE APP IS NO LONGER AVAILABLE") | Internet Archive · first-hand page captures | 2024–2025 | https://web.archive.org/web/20250223160312/https://barkhappy.com/ | `competitors[barkhappy]` note, 03 note |
| S41 | BarkHappy — Tracxn company profile ("has not raised any funding rounds yet", 1 employee as of 2026-07, founded 2013) | Tracxn · data aggregator, secondary | 2026 | https://tracxn.com/d/companies/barkhappy/__EQUjtmHQyN-O39NybzUHsJHviKO8pHacbs4K2bohSKk | 03 note |
| S42 | "BarkHappy Mobile App for Dog Owners Reaches 60,000 Users; Announces Upcoming Events" | PR Newswire · company press release (Austin, 2017-01-19) | 2017 | https://www.prnewswire.com/news-releases/barkhappy-mobile-app-for-dog-owners-reaches-60000-users-announces-upcoming-events-300393601.html | 03 note |
