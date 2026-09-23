import type { ImageMetadata } from 'astro';

/** Plain text with optional emphasis; content is escaped by Astro. */
export type ProjectParagraph = (
  string | { strong: string } | { code: string }
)[];

/** Plain text for metadata, preserving spaces within paragraph fragments. */
export const projectText = (paragraphs: ProjectParagraph[]) =>
  paragraphs
    .map((paragraph) =>
      paragraph
        .map((part) =>
          typeof part === 'string'
            ? part
            : 'strong' in part
              ? part.strong
              : part.code,
        )
        .join(''),
    )
    .join(' ');

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
  overview: ProjectParagraph[];
  role: string;
  stack: string[];
  status?: string[];
  contributions: ProjectParagraph[];
  features: ProjectFeature[];
  learnings: ProjectParagraph[];
};
