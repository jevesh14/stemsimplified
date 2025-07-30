// Utility functions for view tracking

export const generateArticleId = (page: string, articleId: string | number): string => {
  return `${page}-${articleId}`;
};

// Predefined article IDs for consistency
export const ARTICLE_IDS = {
  // Breakthrough Briefs
  AI_ANTIBIOTIC_RESISTANCE: "breakthrough-1",
  POCKET_SIZED_PHYSICS: "breakthrough-2",
  AI_POWERED_LAB: "breakthrough-3",
  
  // Games
  AI_ANTIBIOTIC_QUIZ: "game-ai-antibiotic-resistance",
  POCKET_PHYSICS_QUIZ: "game-pocket-sized-physics",
  
  // Delve Deeper
  TIME_DILATION: "delve-1",
  
  // Recent Articles
  HEALTHCARE_BREATH: "recent-healthcare-breath"
} as const; 