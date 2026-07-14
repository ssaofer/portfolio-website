export interface VideoProject {
  id: string;
  title: string;
  description: string;
  cover: string;
  src: string;
}

export interface DesignProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
}

export const videoProjects: VideoProject[] = [
  {
    id: "video-1",
    title: "拾星者",
    description:
      "以星空与梦境为意象的 AI 影像实验作品，探索人与宇宙之间的微妙联系，运用生成式 AI 构建超现实视觉场景。",
    cover: "/works/videos/拾星者.mp4",
    src: "/works/videos/拾星者.mp4",
  },
  {
    id: "video-2",
    title: "时空茶话会",
    description:
      "穿梭于不同时代背景下的茶文化叙事短片，融合传统美学与现代数字技术，呈现东方茶道的当代诠释。",
    cover: "/works/videos/时空茶话会.mp4",
    src: "/works/videos/时空茶话会.mp4",
  },
  {
    id: "video-3",
    title: "春天的故事",
    description:
      "捕捉春日自然色彩的影像诗集，通过细腻的镜头语言记录季节流转中的色彩变化与生命力。",
    cover: "/works/videos/春天的故事.mp4",
    src: "/works/videos/春天的故事.mp4",
  },
];

export const designCategories = [
  "全部",
  "AI产品设计",
  "AI海报",
  "VI设计",
  "包装设计",
  "折页设计",
  "海报设计",
  "画册排版",
];

export const designProjects: DesignProject[] = [
  // AI产品设计
  { id: "dp-1", title: "玩偶海报", description: "AI 辅助生成的玩偶主题商业海报，融合手绘质感与数字合成技术", thumbnail: "/works/design/ai-product/玩偶海报.jpg", category: "AI产品设计" },
  { id: "dp-2", title: "产品展示", description: "以 AI 工具辅助完成的产品视觉展示方案", thumbnail: "/works/design/ai-product/产品展示.jpg", category: "AI产品设计" },
  { id: "dp-3", title: "产品设计稿 1", description: "概念产品设计草图与渲染图", thumbnail: "/works/design/ai-product/图片1.jpg", category: "AI产品设计" },
  { id: "dp-4", title: "产品设计稿 2", description: "产品细节与场景化展示", thumbnail: "/works/design/ai-product/图片2.jpg", category: "AI产品设计" },
  { id: "dp-5", title: "产品设计稿 3", description: "产品配色与材质探索", thumbnail: "/works/design/ai-product/图片3.jpg", category: "AI产品设计" },
  { id: "dp-6", title: "产品设计稿 4", description: "产品使用场景模拟", thumbnail: "/works/design/ai-product/图片4.jpg", category: "AI产品设计" },
  // AI海报
  { id: "dp-7", title: "AI海报 1", description: "以生成式 AI 创作的视觉海报", thumbnail: "/works/design/ai-poster/图片1.jpg", category: "AI海报" },
  { id: "dp-8", title: "AI海报 2", description: "探索人工智能艺术表达的实验海报", thumbnail: "/works/design/ai-poster/图片2.jpg", category: "AI海报" },
  { id: "dp-9", title: "AI海报 3", description: "数字艺术与传统元素的融合", thumbnail: "/works/design/ai-poster/图片3.jpg", category: "AI海报" },
  { id: "dp-10", title: "AI海报 4", description: "概念视觉海报设计", thumbnail: "/works/design/ai-poster/图片4.jpg", category: "AI海报" },
  { id: "dp-11", title: "AI海报 5", description: "AI 辅助品牌视觉探索", thumbnail: "/works/design/ai-poster/图片5.jpg", category: "AI海报" },
  { id: "dp-12", title: "AI海报 6", description: "实验性视觉语言研究", thumbnail: "/works/design/ai-poster/图片6.jpg", category: "AI海报" },
  // VI设计
  { id: "dp-13", title: "丹棱不知火 VI 设计", description: "农产品品牌全套视觉识别系统设计，包含标志、辅助图形与应用规范", thumbnail: "/works/design/vi/丹棱不知火VI设计.jpg", category: "VI设计" },
  // 包装设计
  { id: "dp-14", title: "无花果包装 01", description: "无花果产品包装设计方案，以自然清新风格呈现产品特色", thumbnail: "/works/design/packaging/无花果包装01.jpg", category: "包装设计" },
  { id: "dp-15", title: "无花果包装 02", description: "包装展开图与材质说明", thumbnail: "/works/design/packaging/无花果包装02.jpg", category: "包装设计" },
  { id: "dp-16", title: "无花果包装 03", description: "包装整体视觉与货架效果模拟", thumbnail: "/works/design/packaging/无花果包装03.jpg", category: "包装设计" },
  // 折页设计
  { id: "dp-17", title: "折页设计 1", description: "商业宣传折页设计，注重信息层级与阅读动线", thumbnail: "/works/design/brochure/折页1.jpg", category: "折页设计" },
  { id: "dp-18", title: "折页设计 2", description: "折页展开整体视觉效果", thumbnail: "/works/design/brochure/折页2.jpg", category: "折页设计" },
  // 海报设计
  { id: "dp-19", title: "二十四节气·星药纪 1", description: "以二十四节气为主题的中药文化系列海报，融合天文与草本美学", thumbnail: "/works/design/poster/二十四节气·星药纪1.jpg", category: "海报设计" },
  { id: "dp-20", title: "二十四节气·星药纪 2", description: "节气与中医药文化的视觉叙事", thumbnail: "/works/design/poster/二十四节气·星药纪2.jpg", category: "海报设计" },
  { id: "dp-21", title: "二十四节气·星药纪 3", description: "传统文化元素的现代化演绎", thumbnail: "/works/design/poster/二十四节气·星药纪3.jpg", category: "海报设计" },
  { id: "dp-22", title: "困", description: "概念海报设计，以极简视觉传达情绪与哲思", thumbnail: "/works/design/poster/困 海报设计.jpg", category: "海报设计" },
  // 画册排版
  { id: "dp-23", title: "吴冠中画册 01", description: "吴冠中艺术作品集画册排版设计，致敬大师的点线面美学", thumbnail: "/works/design/album/吴冠中-01.jpg", category: "画册排版" },
  { id: "dp-24", title: "吴冠中画册 02", description: "画册内页版式设计", thumbnail: "/works/design/album/吴冠中-02.jpg", category: "画册排版" },
  { id: "dp-25", title: "吴冠中画册 03", description: "图文混排与留白节奏", thumbnail: "/works/design/album/吴冠中-03.jpg", category: "画册排版" },
  { id: "dp-26", title: "吴冠中画册 04", description: "作品展示页设计", thumbnail: "/works/design/album/吴冠中-04.jpg", category: "画册排版" },
  { id: "dp-27", title: "吴冠中画册 05", description: "章节过渡页设计", thumbnail: "/works/design/album/吴冠中-05.jpg", category: "画册排版" },
  { id: "dp-28", title: "吴冠中画册 06", description: "画册细节与装帧构思", thumbnail: "/works/design/album/吴冠中-06.jpg", category: "画册排版" },
  { id: "dp-29", title: "吴冠中画册 07", description: "艺术家生平时间轴页", thumbnail: "/works/design/album/吴冠中-07.jpg", category: "画册排版" },
  { id: "dp-30", title: "吴冠中画册 08", description: "画作与文字 commentary 排版", thumbnail: "/works/design/album/吴冠中-08.jpg", category: "画册排版" },
  { id: "dp-31", title: "吴冠中画册 09", description: "跨页大幅作品展示", thumbnail: "/works/design/album/吴冠中-09.jpg", category: "画册排版" },
  { id: "dp-32", title: "吴冠中画册 10", description: "画册尾页与致谢", thumbnail: "/works/design/album/吴冠中-10.jpg", category: "画册排版" },
  { id: "dp-33", title: "吴冠中画册 11", description: "封底与 ISBN 信息页", thumbnail: "/works/design/album/吴冠中-11.jpg", category: "画册排版" },
  { id: "dp-34", title: "吴冠中画册 12", description: "整体装帧效果预览", thumbnail: "/works/design/album/吴冠中-12.jpg", category: "画册排版" },
];
