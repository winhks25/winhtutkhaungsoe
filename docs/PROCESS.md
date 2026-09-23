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

## 4. Browser verification and refinements

Added Playwright coverage against the production preview under the real `/winhtutkhaungsoe/` base path, using desktop Chromium and an emulated Pixel 7. The first run passed all functional checks: project navigation, mobile menu dismissal, clipboard success and rejection, PDF download, keyboard skip link, canonical URLs, sitemap, custom 404, and operation without JavaScript. The viewport matrix found no document overflow across all pages at 320, 390, 768, 1024, and 1440 pixels.

The initial axe scans identified insufficient contrast in several muted labels and the decorative mock interfaces. Darkened the affected text colours rather than excluding the artwork from checks. Visual review also prompted more vertical breathing room around the CoMatch illustration on mobile.

Reviewed the complete desktop homepage, mobile homepage, mobile CoMatch page, and generated 1200 × 630 social card. The interface stays fully static; only the menu, section indicator, and clipboard control need JavaScript.

The final verification completed with **30 passing browser tests**, **two intentional skips**, and **zero axe violations** across the eight desktop/mobile page scans. Astro reported zero errors, warnings, or hints. All five static pages built successfully. Also excluded generated browser reports from TypeScript analysis after a repeat check attempted to scan their bundled scripts, and isolated the test preview on port 4322 with foreground execution.

## 5. Delivery and deployment setup

Added a GitHub Actions workflow that validates pull requests and publishes successful `main` builds to GitHub Pages. Verified the official action release versions against GitHub's API: checkout 7.0.1, setup-node 7.0.0, upload-pages-artifact 5.0.0, and deploy-pages 5.0.1. Only the publishing job receives deployment permissions.

Completed the README, architecture guide, deployment instructions, and verification notes. Work is recorded in five meaningful commits covering discovery, scaffolding, implementation, testing/refinement, and deployment/documentation. The local preview is available at `http://127.0.0.1:4321/winhtutkhaungsoe/` while the preview server is running.

The site is ready for first publication. No source was pushed and no remote settings were changed. To publish, enable GitHub Actions as the Pages source and push the reviewed portfolio to `main`, following `docs/DEPLOYMENT.md`.

## 6. Readability revision — Farro

The user requested Farro, thicker weights, substantially easier reading, and dark mode. Replaced DM Sans and the thin serif accents with locally hosted Farro Medium (500) and Bold (700), using the actual weights listed in [Google Fonts' Farro metadata](https://github.com/google/fonts/blob/main/ofl/farro/METADATA.pb). Removed the unused font packages and updated the social-card generator.

Raised primary body copy to 17–18px, navigation to 16px, tags and dates to at least 14px, and section labels to 12px. Headings and primary controls use Bold. Kept the compact interface illustrations decorative; their real descriptions appear at readable sizes outside the artwork. Adjusted wrapping and spacing to accommodate the larger type on narrow screens.

Dark mode is the next milestone: an accessible header toggle, saved preference, system-colour preference on first visit, and contrast verification in both appearances.

Typography milestone checks: Astro reported zero diagnostics; the static build passed; all eight light-mode axe scans and the 25-combination layout matrix passed (nine tests, one intentional skip).

## 7. Dark appearance and saved preference

Added a keyboard-accessible header toggle with an announced pressed state. The initial appearance follows the operating system; a manual choice is saved in `localStorage` and survives navigation and reloads. An inline head script resolves the appearance before the body is parsed, avoiding a flash of the wrong theme. Open tabs synchronise preference changes. If storage is blocked, the toggle still changes the current page, and the CSS-only system preference works without JavaScript.

Moved page colours to semantic tokens in `src/styles/themes.css`. Dark mode uses forest backgrounds, warm light text, brighter sage actions, visible focus outlines, and matching artwork surrounds. The illustrated product windows retain their original palettes, with explicit text colours. The larger type and added toggle required a 900px navigation breakpoint and a separate full-width navigation row when JavaScript is unavailable.

Added tests for initial system preference, live system changes, manual override, keyboard toggling, navigation/reload persistence, appearance before body parsing, blocked storage, cross-tab synchronisation, and dark-mode accessibility on all five pages. The first complete run passed 51 checks and caught one overlapping illustration caption on mobile; gave captions an opaque themed background and moved them away from the floating mockup cards.

The final build and Astro/TypeScript check passed with zero diagnostics. The complete suite finished with **52 passing tests**, **two intentional skips**, and **zero accessibility violations across 18 light/dark page scans**. The viewport matrix still passed at 320, 390, 768, 1024, and 1440 pixels. Reviewed light/dark desktop screenshots and the dark mobile page, then refreshed the user's existing in-app preview. Updated the README, architecture guide, and verification notes. Recorded the revision as separate typography and dark-mode commits.

## 8. Personal portrait in the hero

Replaced the geometric hero illustration with the user's supplied waterfront photo. Kept the original photo as a source asset and used Astro's built-in image pipeline to generate five responsive WebP sizes (approximately 38–240 KB, compared with the 3.9 MB source). The portrait loads eagerly with high priority and explicit dimensions, and its generated URLs respect the repository base path.

Added a rounded sage frame and readable name/role caption using the existing light/dark colour tokens. Desktop uses a portrait frame beside the introduction; mobile uses a smaller square frame below the introduction and actions. Removed the obsolete illustration component and its CSS. Documented how to replace the photo and adjust its crop in the architecture guide.

Astro checking reported zero errors, warnings, or hints, and the production build generated all five pages and optimized images. The existing browser suite passed **52 tests with two intentional skips**, including light/dark accessibility scans and the responsive overflow matrix. Visually reviewed light and dark desktop screenshots and the dark mobile layout, and verified that the browser loaded the generated WebP successfully. Opened the updated local preview for the user.

## 9. Borderless paper-cut portrait

The user preferred a backgroundless portrait with paper outlines. Replaced the framed photograph with a transparent, AI-edited cutout and an irregular ivory paper edge that follows the silhouette. Removed the sage panel, rounded rectangular border, and caption. Kept the full silhouette visible on desktop and mobile, with a subtle shadow and no photo crop. The original photo remains available as a source reference.

Used the built-in image-generation tool for the edit and verified actual PNG alpha transparency. The tool initially rejected the source JPEG; an orientation-correct PNG encoding was accepted. Recorded the tool, asset paths, and final prompt in `docs/PORTRAIT-ASSET.md`. Astro's optimized WebP outputs retain transparency.

Astro checking and the production build passed. The targeted homepage loading, light/dark accessibility, and responsive overflow checks passed (seven passing tests, one intentional skip). Reviewed screenshots of the light/dark desktop hero and dark mobile layout. The transparent cutout blends directly into both page backgrounds.

## 10. CoMatch project case study

Expanded CoMatch using the supplied 40-page project documentation. Added a specific introduction and problem statement, team credit, a sign-in-required demo link, a three-step product walkthrough, clearer personal contributions, three engineering decisions with tradeoffs, an architecture summary, testing coverage, and reflection/next steps. Personal ownership remains limited to the work already attributed in the résumé; broader implementation decisions are described as team work.

Extracted four genuine screenshots from the PDF without alteration, replacing the conceptual artwork on the detailed CoMatch page. Each is labelled as a development screenshot with sample data. Screenshots use responsive WebP display assets, with full-resolution gallery links, descriptive alt text, and native lazy loading. The portfolio homepage retains its labelled interface concept. The live demo was checked through its sign-in page; no authenticated product actions were performed.

Added `src/data/comatch.ts` and `src/styles/case-study.css`, and extended the shared project template conditionally so Fittix and Myanmar Community retain their original layouts. Documented sources, asset provenance, claim boundaries, and editing instructions in `docs/COMATCH-CASE-STUDY.md` and the architecture guide.

Astro checking reported zero diagnostics and the production build passed. The complete browser suite passed 52 tests with two intentional skips, including 18 light/dark accessibility scans and the responsive width matrix. Verified all four displayed screenshots decode successfully, their built asset references respect the GitHub Pages base path, and the case-study section links navigate correctly. Visually reviewed the desktop dark page and mobile light layout. The local preview runs on port 4323. Preserved the user's pre-existing `index.astro` heading edit outside the commit.

## 11. Real CoMatch screenshot in the homepage preview

Replaced the CoMatch card’s illustrative mockup with the user-supplied screenshot from 23 September 2026 at 11:56:21 AM. The second supplied image served as a reference identifying the homepage card. Kept the screenshot unchanged, with responsive WebP delivery, its full aspect ratio, and the existing themed card surround. Changed the caption to “App screenshot” and allowed the image area to size naturally on mobile. The card still links to the CoMatch case study. Preserved the pre-existing homepage heading edit outside this change.

Verification: Astro checking and the production build passed. Nine targeted browser checks passed with one intentional skip, covering homepage loading, CoMatch navigation, light/dark accessibility, and the responsive width matrix. Reviewed the screenshot card in the browser at mobile and desktop widths. Formatting and whitespace checks passed.

## 12. Restore the CoMatch preview motion

Restored a slight -3-degree tilt on the real CoMatch screenshot. Hovering or keyboard-focusing its project link eases the image to -1 degree and lifts it 5px over 450ms, matching the other project previews. The caption stays level with extra clearance below the rotated image. Reduced-motion mode retains the static tilt without animation or position changes.

Verification: the production build passed. A focused Chromium check confirmed distinct resting and hover transforms, matching keyboard-focus feedback, static reduced-motion behaviour, and image bounds within the card at 390px, 760px, and 1440px. Refreshed the existing browser preview.

## 13. Myanmar Community screenshot preview

Replaced the Myanmar Community at NUS illustration with the supplied screenshot dated 23 September 2026 at 12:03:56 PM, copied unchanged to `src/assets/mcnus/preview.png`. The shared artwork component also displays this screenshot on the project detail page. Retained the clockwise 4-degree tilt and 450ms hover/focus transition to 1 degree with a 5px lift. Shared the screenshot styling with CoMatch while preserving its counterclockwise tilt. Both screenshots respect reduced-motion preferences and retain their complete aspect ratios. The caption identifies MC@NUS as a website screenshot.

Verification: Astro checking and the production build passed. Eleven targeted browser checks passed with one intentional skip, covering community-page navigation, homepage/community light and dark accessibility, and responsive document widths. A focused interaction check caught slight clipping at 760px; increased mobile screenshot padding and rechecked all bounds at 320, 390, 760, and 1440px. Hover, keyboard focus, and reduced-motion checks passed. Reviewed the final card screenshot.
