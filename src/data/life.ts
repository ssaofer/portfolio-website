export interface LifeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const lifeItems: LifeItem[] = [
  {
    id: "life-1",
    title: "摄影",
    description: "喜欢用镜头捕捉生活中的美好瞬间，偏爱光影交错的城市角落与自然风景。",
    image: "/images/life-photography.jpg",
    tag: "Photography",
  },
  {
    id: "life-2",
    title: "旅游",
    description: "热爱旅行，喜欢探索不同城市的文化与风景，用脚步丈量世界的美好。",
    image: "/images/life-travel.jpg",
    tag: "Travel",
  },
  {
    id: "life-3",
    title: "夜景",
    description: "迷恋城市夜景的璀璨灯火，喜欢记录夜晚独特的氛围与故事。",
    image: "/images/life-night.jpg",
    tag: "Night View",
  },
  {
    id: "life-4",
    title: "烘焙",
    description: "享受烘焙的治愈过程，亲手制作美味饼干，在香气中感受生活的甜蜜。",
    image: "/images/life-baking.jpg",
    tag: "Baking",
  },
  {
    id: "life-5",
    title: "美食",
    description: "热爱美食，喜欢尝试各种甜点与料理，在味蕾的享受中寻找生活的小确幸。",
    image: "/images/life-food.jpg",
    tag: "Food",
  },
];
