# CoMatch content and asset notes

## Current content source

The user-supplied `CoMatch.md` is the source for the CoMatch detail page. Its six sections are Overview, Role, Tech Stack, My Contributions, Key Features, and What I Learned. `src/data/comatch.ts` preserves the wording and bold emphasis from that document.

Personal contributions now describe authentication, profiles, the application dashboard, frontend/backend integration, and UI refactoring within a two-person team. Real-time chat is presented as a product feature. The former engineering decisions, testing descriptions, product walkthrough, timeline, named team credit, demo link, and editorial reflection are no longer rendered on this page.

## Editing the page

- `src/data/comatch.ts`: all six sections in the shared `ProjectDetails` format.
- `src/data/project-details.ts`: reusable content types, including optional bold paragraph spans.
- `src/components/projects/`: shared layout, section, paragraph, and feature-list components with responsive styles.
- `src/data/portfolio.ts`: the homepage summary and the reference to `comatchDetails`.
- `src/pages/work/[slug].astro`: selects the concise layout for any project with `details`; retains the existing format for other projects.

No project-specific layout or raw HTML is needed to add another overview. See `docs/ARCHITECTURE.md` for migration instructions.

## Retained screenshot provenance

The homepage preview remains `src/assets/comatch/preview.png`, copied unchanged from the user’s screenshot dated 23 September 2026 at 11:56:21 AM. `ProjectArtwork.astro` displays a responsive WebP with an “App screenshot” caption. The full image is visible without cropping.

The following images were extracted unchanged with pypdf from the earlier supplied `Proposal for Orbital 26.pdf`. They remain as source assets but are no longer imported by the CoMatch detail page or shipped in its gallery:

| Asset                                | PDF page | Embedded image |
| ------------------------------------ | -------- | -------------- |
| `src/assets/comatch/spaces.png`      | 16       | X92.png        |
| `src/assets/comatch/recruitment.png` | 19       | X101.png       |
| `src/assets/comatch/dashboard.png`   | 24       | X116.png       |
| `src/assets/comatch/chat.png`        | 28       | X129.png       |

These development screenshots contain sample data. They are historical references, not additional sources for the current page’s copy.
