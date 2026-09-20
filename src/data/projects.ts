export type ProjectType = "video" | "graphic";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  type: ProjectType;
  thumbnail: string;
  video?: string;
  description: string;
  role: string[];
  tools: string[];
  images: string[];
}

export const projects: Project[] = [
  { id: "star-gatherer", title: "拾星者", category: "VIDEO", year: "2026", type: "video", thumbnail: "/works/videos/拾星者.mp4", video: "/works/videos/拾星者.mp4", description: "[PROJECT DESCRIPTION]", role: ["Direction", "Visual Development", "Editing"], tools: ["Premiere Pro", "After Effects"], images: [] },
  { id: "tea-time", title: "时空茶话会", category: "VIDEO", year: "2026", type: "video", thumbnail: "/works/videos/时空茶话会.mp4", video: "/works/videos/时空茶话会.mp4", description: "[PROJECT DESCRIPTION]", role: ["Direction", "Script", "Editing"], tools: ["Premiere Pro", "After Effects"], images: [] },
  { id: "spring-story", title: "春天的故事", category: "VIDEO", year: "2026", type: "video", thumbnail: "/works/videos/春天的故事.mp4", video: "/works/videos/春天的故事.mp4", description: "[PROJECT DESCRIPTION]", role: ["Creative", "Editing"], tools: ["Premiere Pro"], images: [] },
  { id: "doll-poster", title: "玩偶海报", category: "AI PRODUCT DESIGN", year: "2026", type: "graphic", thumbnail: "/works/design/ai-product/玩偶海报.jpg", description: "[PROJECT DESCRIPTION]", role: ["Art Direction", "AI Exploration"], tools: ["Photoshop", "AI Tools"], images: ["/works/design/ai-product/玩偶海报.jpg", "/works/design/ai-product/产品展示.jpg"] },
  { id: "fig-packaging", title: "无花果包装", category: "PACKAGING DESIGN", year: "2026", type: "graphic", thumbnail: "/works/design/packaging/无花果包装01.jpg", description: "[PROJECT DESCRIPTION]", role: ["Visual Identity", "Packaging"], tools: ["Illustrator", "Photoshop"], images: ["/works/design/packaging/无花果包装01.jpg", "/works/design/packaging/无花果包装02.jpg", "/works/design/packaging/无花果包装03.jpg"] },
  { id: "wuganzhong", title: "吴冠中画册", category: "EDITORIAL DESIGN", year: "2026", type: "graphic", thumbnail: "/works/design/album/吴冠中-01.jpg", description: "[PROJECT DESCRIPTION]", role: ["Editorial Design", "Layout"], tools: ["InDesign", "Photoshop"], images: ["/works/design/album/吴冠中-01.jpg", "/works/design/album/吴冠中-05.jpg", "/works/design/album/吴冠中-10.jpg"] },
  { id: "star-herbs", title: "二十四节气·星药纪", category: "POSTER DESIGN", year: "2026", type: "graphic", thumbnail: "/works/design/poster/二十四节气·星药纪1.jpg", description: "[PROJECT DESCRIPTION]", role: ["Concept", "Graphic Design"], tools: ["Illustrator", "Photoshop"], images: ["/works/design/poster/二十四节气·星药纪1.jpg", "/works/design/poster/二十四节气·星药纪2.jpg", "/works/design/poster/二十四节气·星药纪3.jpg"] }
];

export const videoProjects = projects.filter((project) => project.type === "video");
export const graphicProjects = projects.filter((project) => project.type === "graphic");

// Compatibility exports for the retained legacy section components.
export const designProjects = graphicProjects;
export const designCategories = ["全部", ...Array.from(new Set(graphicProjects.map((project) => project.category)))];
