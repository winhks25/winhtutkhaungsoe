/** Plain text with optional emphasis; content is escaped by Astro. */
export type ProjectParagraph = (string | { strong: string })[];

export type ProjectFeature = {
  title: string;
  description: string;
};

/** The concise format shared by project overview pages. */
export type ProjectDetails = {
  overview: string;
  role: string;
  stack: string[];
  contributions: ProjectParagraph[];
  features: ProjectFeature[];
  learnings: ProjectParagraph[];
};
