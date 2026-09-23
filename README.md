# Win Htut Khaung Soe — Portfolio

A personal portfolio built with Astro 7 and strict TypeScript. Bold Farro typography, readable text, light and dark appearances, and original interface illustrations bring résumé-based content to a lightweight static website.

- Responsive homepage with selected work, background, skills, experience, and contact.
- Dedicated pages for CoMatch, Fittix, and the Myanmar Community at NUS website.
- Downloadable résumé, accessible mobile navigation, and email copying.
- Local fonts, social preview image, structured metadata, sitemap, and custom 404.
- System-aware dark mode with a saved preference and an accessible header toggle.
- GitHub Pages deployment with automated browser and accessibility checks.

## Develop

Use Node.js 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/winhtutkhaungsoe/`.

```sh
npm run check
npm run build
npm run preview
```

The configured base path also applies locally. Visit `/winhtutkhaungsoe/`, not just `/`.

## Verify

```sh
npx playwright install chromium
npm run format:check
npm run check
npm run build
npm test
```

Tests start their own production preview on port **4322** and run in desktop and mobile Chromium. The normal preview uses port **4321**. For the interactive test runner, use `npm run test:ui`. To format source files, use `npm run format`.

## Edit the content

| What                                              | Where                              |
| ------------------------------------------------- | ---------------------------------- |
| Profile, project descriptions, experience, skills | `src/data/portfolio.ts`            |
| Homepage layout and introduction                  | `src/pages/index.astro`            |
| Shared project routing                            | `src/pages/work/[slug].astro`      |
| Reusable concise project components               | `src/components/projects/`         |
| Fittix overview, status, and learnings            | `src/data/fittix.ts`               |
| Community overview, contributions, and learnings  | `src/data/mcnus.ts`                |
| Concise project content schema                    | `src/data/project-details.ts`      |
| CoMatch overview, contributions, and learnings    | `src/data/comatch.ts`              |
| Type, layout, responsive rules                    | `src/styles/global.css`            |
| Light and dark colour tokens                      | `src/styles/themes.css`            |
| Résumé PDF                                        | `public/resume.pdf`                |
| Hosting domain and repository path                | `astro.config.mjs`                 |
| Social preview image source                       | `scripts/generate-social-card.mjs` |

Run `npm run social:generate` after changing the social card’s source. It uses Playwright and local fonts; no external service is needed. Commit the generated `public/social-card.png` as well as the source change.

CoMatch and Myanmar Community at NUS use actual website screenshots in their previews. All three detail pages use the supplied project notes and shared components for their taglines, heroes, links, overviews, roles, contributions, and learnings. Tech stacks and features appear when supplied. Fittix also displays its development status and October MVP target. Fittix’s homepage illustration is labelled **Interface concept**. The supplied résumé is the source for biographical claims and project repository links. Fittix has no repository link because none was supplied.

## Publish

Configured destination: [winhks25.github.io/winhtutkhaungsoe](https://winhks25.github.io/winhtutkhaungsoe/).

Set the repository’s **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, then publish the reviewed changes to `main`. The workflow checks the site and deploys the generated `dist/` directory. This implementation is committed locally; publication is a separate step.

See the [deployment guide](docs/DEPLOYMENT.md) for first publication, custom domains, and troubleshooting.

## Documentation

- [Process journal](docs/PROCESS.md)
- [Architecture and maintenance](docs/ARCHITECTURE.md)
- [Deployment guide](docs/DEPLOYMENT.md)
- [Verification notes](docs/TESTING.md)
