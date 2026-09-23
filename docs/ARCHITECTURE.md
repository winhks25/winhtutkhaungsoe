# Architecture and maintenance

## Static by design

Astro generates five HTML pages: the homepage, three project pages, and a custom 404. GitHub Pages serves the result directly. There is no backend, database, server adapter, client-side router, or framework hydration.

`src/data/portfolio.ts` is the main content source. Its typed `Project` records feed both the homepage cards and `getStaticPaths()` in `src/pages/work/[slug].astro`. A project’s optional `repository` field controls whether its GitHub button appears. Do not use placeholder links for missing URLs.

The homepage’s introduction and about copy are in `src/pages/index.astro`. Contact links are shared through the profile record. `BaseLayout.astro` supplies consistent navigation, footer, fonts, SEO metadata, and the skip link.

## File structure

```text
.github/workflows/deploy.yml  CI and GitHub Pages deployment
public/                      Résumé, favicon, social card, robots.txt
scripts/                     Reproducible social-card generator
src/
  assets/win-portrait.jpg    Original supplied photo (retained as reference)
  assets/win-portrait-cutout.png  Transparent paper-edged hero portrait
  components/                Header, footer, contact, icons, and artwork
  data/portfolio.ts          Typed résumé-based content
  layouts/BaseLayout.astro   Shared document and metadata
  pages/index.astro          Homepage
  pages/404.astro            Custom error page
  pages/work/[slug].astro    Statically generated project pages
  styles/global.css         Typography and responsive styling
  styles/themes.css         Light and dark colour tokens
  utils/paths.ts             Base-aware internal URLs
tests/portfolio.spec.ts     Browser and accessibility checks
```

## Visual system

`themes.css` defines semantic colours for paper, ink, muted text, borders, surfaces, actions, and artwork surrounds. It provides light and dark values, including a CSS-only fallback for the system preference. `global.css` consumes those tokens instead of fixing content to a single palette.

Typography uses locally hosted Farro Medium (500) for body copy and Bold (700) for headings and primary controls. Body copy is 17–18px, navigation is 16px, tags and dates are at least 14px, and section labels are 12px. The former serif accents have been removed. Both font weights are real font files, not synthetic bold. The design works without remote fonts or image providers.

`HeroPortrait.astro` displays a transparent photographic cutout with an ivory torn-paper silhouette edge. There is no rectangular frame, background panel, or caption. The paper edge is part of `src/assets/win-portrait-cutout.png`; component styles control sizing and a subtle silhouette shadow. The original `win-portrait.jpg` is retained as a reference and is not shipped to visitors. To replace the portrait, supply an image with real alpha transparency and update its import and alt text. Astro generates responsive WebP assets with alpha preserved, intrinsic dimensions, and eager, high-priority loading. Generated asset URLs automatically include the GitHub Pages base path. The entire cutout is shown without cropping, at up to 440px wide on desktop and 300px on mobile. The portrait is hidden in print. See `docs/PORTRAIT-ASSET.md` for generation provenance and the editing prompt.

HTML/CSS/SVG illustrations are decorative, with no focusable elements. Their small interface text is illustrative; actual project descriptions remain available as ordinary readable text outside the artwork. Each illustration carries a visible concept label.

Breakpoints at 1100px, 760px, and 390px adapt the grid and artwork. Navigation collapses at 900px to accommodate the larger type and appearance control. Reduced-motion preferences disable smooth scrolling and hover transitions. Print styles use a light palette regardless of the selected theme.

## Progressive enhancement

`ThemeController.astro` runs inline in the head, before the body paints. The `portfolio-theme` local-storage value is accepted only when it is `light` or `dark`; otherwise the system preference is used. A manual choice overrides subsequent system changes. The toggle has a stable “Dark mode” accessible label, an `aria-pressed` state, and a tooltip describing the next action. Preference changes synchronise across tabs through the storage event.

The toggle is hidden until its handler is ready. Storage exceptions are caught, so switching still works for the current page. Without JavaScript, CSS follows the operating system and the inactive toggle stays hidden. Browser toolbar colours follow the selected theme through `theme-color` metadata.

The mobile menu button is only revealed after its handler is installed. Without JavaScript, ordinary navigation remains visible. The menu closes after section selection, outside clicks, Escape, or a switch to desktop width. Escape returns focus to the toggle.

Clipboard copying is optional. The email address is always a usable `mailto:` link, and the copy button appears only when the Clipboard API is available. Success and failure messages use a live status region. Native links handle project navigation and résumé downloads.

## URLs and metadata

Use `localPath()` for every internal page and public asset. It reads `import.meta.env.BASE_URL`, avoiding broken links when GitHub serves the site below the repository name. Same-page fragment links need no prefix.

The layout derives canonical and Open Graph URLs from `Astro.site` and the requested path. The sitemap integration discovers the generated pages. `robots.txt` contains the deployment-specific sitemap address and must be updated if the hostname or repository changes.

## Extended CoMatch case study

`src/data/comatch.ts` holds the CoMatch product walkthrough, screenshots, team credit, demo URL, engineering decisions, and testing descriptions. The shared project template renders these additional sections only for CoMatch. `src/styles/case-study.css` supplies the extended layout using the existing colour tokens. Screenshots in `src/assets/comatch/` are original embedded images from the supplied documentation; Astro generates responsive WebP versions and the gallery links to the full-size originals. See `docs/COMATCH-CASE-STUDY.md` for source pages, attribution boundaries, and maintenance notes.

## Projects in ideation

The optional `plan` field in a `Project` record adds a status/team panel, a proposed CLI command, and planned capabilities. Fittix uses this field to distinguish its ideation phase and October 2026 MVP target from delivered functionality. Edit its team, target, feature descriptions, and command in `src/data/portfolio.ts`; the template changes “Built with” to “Planned stack” automatically. Review these labels as implementation progresses.

## Updating projects

1. Update the matching record in `portfolio.ts`; keep dates and accomplishments factual.
2. For a new project, add its slug to the `Project` type and an illustration variant to `ProjectArtwork.astro`.
3. Keep `repository` absent until there is a real public URL to link.
4. Add the project to the route checks in `tests/portfolio.spec.ts`.
5. Run formatting, type checking, the production build, and browser tests.

Replace `public/resume.pdf` when updating the résumé. Both viewing and download links point to this one file. Dates labelled “Present”, education details, and GPA are editorial content and should be reviewed over time.

## Dependency maintenance

Node.js 24 is recorded in `.nvmrc`; `package-lock.json` makes dependency installs reproducible. Use `npm ci` on clean checkouts. Test dependency upgrades before committing the revised lockfile.

Generated build files, browser reports, traces, temporary screenshots, and local environment files are ignored by Git and excluded from TypeScript checking where applicable.
