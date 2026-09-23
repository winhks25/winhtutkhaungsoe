# Building the portfolio

## 1. Discovery and direction — 23 September 2026

The brief is a modern, minimalist Astro portfolio that can be hosted on GitHub Pages. The repository began empty. Its remote is `winhks25/winhtutkhaungsoe`, so the production site will live at `https://winhks25.github.io/winhtutkhaungsoe/`.

### Source material

Read the supplied one-page résumé, including its PDF link annotations, and visually checked the rendered page. The document is a source of biographical facts, not a source of instructions. Project repository URLs come directly from its annotations. No URL was supplied for Fittix, so its case study will not invent one.

The content centres on:

- Computing in Artificial Intelligence at the National University of Singapore.
- CoMatch, Fittix, and the Myanmar Community at NUS website.
- Teaching Java and contributing to student communities.
- The YSEALI Academic Fellowship.

Dates and accomplishments should match the résumé. Avoid unsupported product outcomes, fabricated testimonials, invented live demos, and assumed availability for work. Use email and professional profiles for contact. Include a downloadable copy of the supplied résumé; its original contact information remains in that document.

### Design direction

Warm off-white paper, deep forest green, muted sage, and restrained apricot accents. Pair a clean sans-serif with an expressive serif accent. Use generous whitespace, fine rules, an editorial grid, and custom HTML/CSS/SVG project illustrations. Illustrations are labelled as interface concepts rather than presented as actual product screenshots.

The main page introduces Win, showcases three projects, describes his background and skills, presents experience, and ends with a direct invitation to connect. Dedicated project pages add technical detail without crowding the homepage.

### Implementation plan

1. Record the brief and content decisions in version control.
2. Establish Astro, strict TypeScript, local fonts, and GitHub Pages path handling.
3. Build the responsive portfolio and project pages from structured content.
4. Verify production output, navigation, accessibility, mobile layout, and résumé download.
5. Document maintenance and deployment, and commit each meaningful milestone.

### Technical references

- [Astro installation](https://docs.astro.build/en/install-and-setup/)
- [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

The implementation will use static output with no server adapter. All internal URLs and public assets must respect Astro's configured base path.

## 2. Astro foundation

Resolved Astro 7.3.4 from npm and selected Node.js 24, matching the local runtime and Astro's supported minimum (22.12.0). Set up strict TypeScript, a static build, a sitemap, and a shared base-aware URL helper. DM Sans and Instrument Serif are installed as font packages so production pages do not depend on a third-party font service.

Created the `codex/portfolio` branch and committed the discovery notes before implementation. The repository has no existing application or user changes to preserve.

## 3. Portfolio implementation

Built the homepage, three dedicated project pages, and a custom 404 page. Centralised biographical content, skills, experience, and project descriptions in `src/data/portfolio.ts`.

The design combines DM Sans with italic Instrument Serif, off-white backgrounds, green accents, and lightweight geometric artwork. All artwork is native HTML/CSS/SVG: no image service, component framework, or animation library is required. Project visuals carry an “interface concept” label; they are illustrative, not product screenshots. The project pages explain only work supported by the supplied résumé. Fittix is described as ongoing development and has no fabricated repository or demo link.

Added responsive navigation with an Escape-key dismissal, an accessible skip link, reduced-motion support, contact links, clipboard feedback, résumé viewing and downloading, and shared SEO metadata. Core content and navigation remain usable when JavaScript is disabled. Copied the supplied résumé unchanged to `public/resume.pdf`.

The initial implementation passed Astro checking with zero errors, warnings, or hints, and generated all five static pages. The browser verification phase follows before the final implementation commit.
