# Verification

## Results — 23 September 2026

- Astro / TypeScript: zero errors, warnings, or hints.
- Production build: five static pages generated successfully.
- Playwright: 52 passed, two intentionally skipped, zero failed.
- Axe: zero violations across 18 desktop/mobile scans: the homepage and three project pages in light mode, plus all five pages in dark mode.
- Layout: no document overflow in the 25 page/viewport combinations.
- Visual review: larger Farro typography and both appearances reviewed on desktop and mobile; the existing in-app preview was refreshed. The initial implementation also included detailed project-artwork and social-preview reviews.

The final browser run after the Farro and dark-mode revision completed in 23.6 seconds on the local macOS environment. GitHub Actions execution and public hosting remain unverified until publication.

## Reproduce the checks

```sh
npm ci
npx playwright install chromium
npm run format:check
npm run check
npm run build
npm test
```

Playwright starts an isolated production preview at `http://127.0.0.1:4322/winhtutkhaungsoe/`. It deliberately runs with `--ignore-lock` so Astro 7 stays in the foreground even when launched by an agent, and cannot reuse a stale preview. Port 4321 remains available for development or manual review.

## Coverage

- Homepage and assets load without browser errors.
- Each project opens from its card and returns to the correct homepage section.
- Mobile navigation opens, closes on selection, and supports Escape with focus restoration.
- Clipboard copying reports success, and permission rejection leaves a usable contact method.
- Résumé download has the expected filename and a real PDF header.
- Axe checks WCAG 2 A/AA and WCAG 2.1 AA rules on the homepage and every project page at desktop and mobile sizes.
- All five pages fit 320, 390, 768, 1024, and 1440-pixel viewports without horizontal document overflow.
- Core content and navigation work with JavaScript disabled, including at 320px.
- Canonical URLs, sitemap entries, and the social image respect the repository base path.
- The custom 404 leads back home, and keyboard users can skip to main content.
- Dark mode initially follows the system, reacts to system changes, and respects a manual override.
- Keyboard theme changes persist across project navigation and reloads and synchronise between open tabs.
- A stored preference is applied before the body is parsed, avoiding an initial incorrect appearance.
- Blocked storage still allows in-page switching; JavaScript-disabled pages follow the system through CSS.
- All five pages pass dark-mode axe scans on desktop and mobile.

The same scenarios run in desktop Chromium and Pixel 7 emulation. The desktop mobile-menu test and the duplicate mobile viewport-matrix test are intentionally skipped. Mobile emulation is not a physical-device test, and automated axe checks are not a full manual accessibility audit.

## Visual review

Screenshots are kept in ignored `tmp/screenshots/` during development. Review the complete homepage, project pages, and social card for spacing, typography, clipping, and overflow. The original résumé was also rendered and visually inspected before its content was used.

The first browser pass caught low-contrast secondary labels. These were fixed in the stylesheet, including the decorative artwork. The mobile CoMatch case-study artwork received extra room so its floating card does not crowd the concept label.

The dark-mode revision caught one caption that overlapped a light product illustration on mobile. Captions now use an opaque themed surface and sit in the opposite corner from the floating cards; the complete suite passed after that correction.

Generated Playwright reports and traces are excluded from TypeScript checking. Without these exclusions, Astro’s broad source scan can traverse bundled report scripts and waste substantial memory; source and test TypeScript remain checked.

## Scope

These checks validate the local production build. They do not claim a completed GitHub-hosted deployment, external repository availability, physical mobile-device coverage, or manual screen-reader certification.
