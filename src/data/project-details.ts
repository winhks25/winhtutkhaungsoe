import type { ImageMetadata } from 'astro';

/** Plain text with optional emphasis; content is escaped by Astro. */
export type ProjectParagraph = (string | { strong: string })[];

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectHeroImage = {
  image: ImageMetadata;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

/** The concise format shared by project overview pages. */
export type ProjectDetails = {
  tagline?: string;
  hero?: ProjectHeroImage;
  links?: ProjectLink[];
  overview: string;
  role: string;
  stack: string[];
  contributions: ProjectParagraph[];
  features: ProjectFeature[];
  learnings: ProjectParagraph[];
};
