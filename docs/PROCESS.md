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
