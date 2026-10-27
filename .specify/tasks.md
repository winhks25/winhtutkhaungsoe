# Tasks: Add NUS Exchange Planner and BrewGo to the Portfolio

Source brief: `/Users/winhtutkhaungsoe/Desktop/obsidianNodes/Portfolio/New Projects.md`

## Scope

Add two project case-study entries to the existing Astro portfolio using the current typed data model, shared project-detail renderer, artwork conventions, and Playwright coverage. Do not change the project applications themselves.

## Phase 1: Setup

- [ ] T001 Confirm the final slugs, project order, visible titles, dates, roles, repository URLs, and technology labels from `/Users/winhtutkhaungsoe/Desktop/obsidianNodes/Portfolio/New Projects.md` before editing portfolio content
- [ ] T002 [P] Review existing artwork and asset conventions in `src/components/ProjectArtwork.astro` and `src/assets/` to choose whether each project can use existing artwork or needs a new local asset

## Phase 2: Foundational

- [ ] T003 Extend the `Project['slug']` union in `src/data/portfolio.ts` with stable URL-safe slugs for NUS Exchange Planner and BrewGo
- [ ] T004 [P] Define the complete typed content shape for NUS Exchange Planner in `src/data/nus-exchange-planner.ts`, including overview, role, stack, status, contributions, features, learnings, and links from the source brief
- [ ] T005 [P] Define the complete typed content shape for BrewGo in `src/data/brewgo.ts`, including overview, role, stack, status, contributions, features, learnings, and links from the source brief

## Phase 3: User Story 1 — NUS Exchange Planner appears as a complete portfolio project (P1)

Goal: A visitor can discover NUS Exchange Planner on the homepage, open its case-study route, and read an accurate, accessible project summary.

Independent test criteria:

- The homepage contains one accessible project link named `NUS Exchange Planner`.
- The link resolves to the chosen slug and the page renders a level-one heading containing `NUS Exchange Planner`.
- The page presents the project’s full-stack/open-source context, individual developer role, in-progress status, technology stack, key features, and available repository link without broken assets.
- The project page passes the existing accessibility and responsive-layout checks.

- [ ] T006 [US1] Add the NUS Exchange Planner import and project record to `src/data/portfolio.ts`, including number, category, headline, description, period, role, stack, repository, and details reference
- [ ] T007 [US1] Write portfolio-ready NUS Exchange Planner copy in `src/data/nus-exchange-planner.ts`, translating the source brief’s overview, recommendation, course-mapping, university-directory, and geographic-filter features into the existing `ProjectDetails` format
- [ ] T008 [US1] Add or assign NUS Exchange Planner hero artwork and accessible alt text in `src/assets/` and `src/data/nus-exchange-planner.ts` if the shared artwork fallback is insufficient
- [ ] T009 [US1] Add the NUS Exchange Planner slug and display name to the project-page fixtures in `tests/portfolio.spec.ts`

## Phase 4: User Story 2 — BrewGo appears as a complete portfolio project (P1)

Goal: A visitor can discover BrewGo on the homepage, open its case-study route, and understand the project’s product scope and leadership contribution.

Independent test criteria:

- The homepage contains one accessible project link named `BrewGo`.
- The link resolves to the chosen slug and the page renders a level-one heading containing `BrewGo`.
- The page presents BrewGo as a full-stack/open-source queue-management system, identifies the project-lead role, and accurately covers the listed operational features and contributions.
- The project page passes the existing accessibility and responsive-layout checks.

- [ ] T010 [US2] Add the BrewGo import and project record to `src/data/portfolio.ts`, including number, category, headline, description, period, role, stack, repository, and details reference
- [ ] T011 [US2] Write portfolio-ready BrewGo copy in `src/data/brewgo.ts`, covering order management, queue tracking, customer tracking, notifications, pickup display, menu management, sales reporting, offline support, and role-based access control
- [ ] T012 [US2] Add or assign BrewGo hero artwork and accessible alt text in `src/assets/` and `src/data/brewgo.ts` if the shared artwork fallback is insufficient
- [ ] T013 [US2] Add the BrewGo slug and display name to the project-page fixtures in `tests/portfolio.spec.ts`

## Phase 5: Polish and Cross-Cutting Validation

- [ ] T014 Update project numbering and next-project ordering in `src/data/portfolio.ts` so all six projects have unique, intentional ordering and every project’s next link remains valid
- [ ] T015 [P] Verify all new repository and live-preview links in `src/data/nus-exchange-planner.ts` and `src/data/brewgo.ts`, leaving unavailable URLs absent rather than inventing destinations
- [ ] T016 Run `npm run check` and resolve any Astro or TypeScript errors caused by the new project data in `src/data/portfolio.ts`, `src/data/nus-exchange-planner.ts`, and `src/data/brewgo.ts`
- [ ] T017 Run `npm run build` and `npm run test`, confirming the homepage, both new project routes, accessibility scans, responsive widths, no-JavaScript navigation, and existing projects remain passing
- [ ] T018 Review rendered pages for factual accuracy, copy consistency, heading hierarchy, image alt text, external-link behavior, and absence of placeholder content in `src/data/nus-exchange-planner.ts` and `src/data/brewgo.ts`

## Dependencies

```text
T001 -> T003 -> T004/T005
T002 -> T008/T012
T003 + T004 -> T006 -> T009
T003 + T005 -> T010 -> T013
T006 + T010 -> T014
T008 + T012 -> T015
T009 + T013 + T014 -> T016 -> T017 -> T018
```

User stories can be implemented independently after foundational tasks complete. US1 and US2 may proceed in parallel; each story’s data file, portfolio record, artwork decision, and test fixture should be completed together.

## Parallel Execution Examples

- After T003: run T004 and T005 in parallel.
- After T004: run T006–T009 as the US1 workstream, while T010–T013 runs as the US2 workstream after T005.
- After both stories: run T015 and T016 in parallel only if the content and source links are already stable; T017 must wait for both.

## Implementation Strategy

1. Deliver the smallest complete MVP by adding typed data files, portfolio records, valid slugs, and the existing route/test coverage for both projects.
2. Add project-specific artwork only where existing artwork cannot represent the project clearly.
3. Finish with type-checking, production build, Playwright regression coverage, and a factual copy review.

## Completion Criteria

- All tasks above are completed with no application implementation outside the portfolio repository.
- Both new projects are discoverable from the homepage and have working detail routes.
- Existing projects and shared navigation continue to pass the current test suite.
- No unverified repository, live-preview, image, or project claim is published.
