# CoMatch case study: editorial and asset notes

## Sources and scope

The supplied `Proposal for Orbital 26.pdf` is the source for the product workflow, team credit, implementation descriptions, design decisions, and testing coverage. It is a 40-page document containing both proposal language and descriptions/screenshots of a development build. The page describes that documented build; it does not claim a completed release or independently verified usage outcomes.

Personal attribution remains limited to the authentication, real-time messaging, and testing work already recorded in the supplied résumé and the portfolio. The documentation uses collective authorship, so product-wide decisions are presented as team decisions. Credit is given to both Win Htut Khaung Soe and Nay Min Thar.

The live URL supplied in the document, `https://co-match-two.vercel.app/`, was checked in the browser. It redirects to a working sign-in interface with email/password and Google/LinkedIn options. The portfolio labels this link “Sign-in required”. No account was created and authenticated functionality was not independently exercised.

## Content map

- Introduction and problem: pages 3–4.
- Authentication and personal profiles: pages 5–12.
- Spaces and recruitment: pages 13–21.
- Applications and notification state: pages 22–25.
- Chat entry points, conversation model, and Realtime: pages 26–28.
- Architecture and refactoring: pages 28–34.
- Unit, integration, and browser test descriptions: pages 35–40.

The testing section distinguishes component rendering/interaction, schema/query checks, and browser route protection. It does not claim complete signed-in workflow coverage, current test totals, or measured performance improvements. The concurrency, cross-tab, and full-journey testing suggestions are editorial next steps, not completed work. No user counts or outcome metrics were invented.

## Screenshot provenance

The following embedded images were extracted unchanged with pypdf; they were not recreated or AI-edited:

| Asset                                | PDF page | Embedded image |
| ------------------------------------ | -------- | -------------- |
| `src/assets/comatch/spaces.png`      | 16       | X92.png        |
| `src/assets/comatch/recruitment.png` | 19       | X101.png       |
| `src/assets/comatch/dashboard.png`   | 24       | X116.png       |
| `src/assets/comatch/chat.png`        | 28       | X129.png       |

They are labelled “Development screenshot · sample data” because the source contains test project names and casual test messages. The screenshot gallery opens the original images at full resolution. Replace these assets with current screenshots containing curated demo content when available; keep real user information out of that demo data. Do not edit the image to imply functionality or results that the app does not have.

Astro generates responsive WebP copies for page display. The cover loads eagerly; gallery images load lazily. Their intrinsic dimensions reserve layout space, and all generated URLs include the GitHub Pages base path.

## Editing the page

- `src/data/portfolio.ts`: shared project summary and personal contributions.
- `src/data/comatch.ts`: team, demo URL, introduction, screenshots, workflow, decisions, and testing summaries.
- `src/pages/work/[slug].astro`: case-study layout, reflection, and status. Extended sections apply only to CoMatch; other projects retain their existing structure.
- `src/styles/case-study.css`: responsive gallery, section navigation, and extended case-study styling. Uses the shared light/dark tokens.

The homepage’s illustrated CoMatch preview remains an explicitly labelled interface concept. The detailed CoMatch page uses the genuine screenshots instead. An existing user edit to the homepage heading (“My Projects.”) was preserved and is outside this change.
