import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = '/winhtutkhaungsoe/';
const projectPages = [
  { slug: 'comatch', name: 'CoMatch' },
  { slug: 'fittix', name: 'Fittix' },
  { slug: 'mcnus', name: 'Myanmar Community at NUS' },
  { slug: 'bike-datalakehouse', name: 'Bike Sales Data Lakehouse' },
];

test('homepage loads without broken assets or browser errors', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()}: ${response.url()}`);
  });
  const response = await page.goto(base);
  expect(response?.status()).toBe(200);
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Thoughtful code.Human impact.',
  );
  await expect(
    page.getByRole('link', { name: 'Explore my work' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Explore my work' }).click();
  await expect(page).toHaveURL(/#work$/);
  expect(errors).toEqual([]);
});

for (const project of projectPages) {
  test(`${project.name} opens from the homepage and returns to selected work`, async ({
    page,
  }) => {
    await page.goto(base);
    await page
      .getByRole('link', { name: `Explore ${project.name}`, exact: true })
      .click();
    await expect(page).toHaveURL(`${base}work/${project.slug}/`);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      project.name,
    );
    await expect(page.getByText(/^my contributions$/i)).toBeVisible();
    await page.getByRole('link', { name: 'All projects' }).click();
    await expect(page).toHaveURL(`${base}#work`);
  });
}

test('mobile navigation supports keyboard dismissal and section links', async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, 'The menu is only present on small screens.');
  await page.goto(base);
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' });
  await toggle.click();
  await expect(nav).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(nav).toBeHidden();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await nav.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/#about$/);
  await expect(nav).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('email can be copied with accessible confirmation', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto(base);
  await page.getByRole('button', { name: 'Copy email address' }).click();
  await expect(page.getByRole('status')).toHaveText('Email copied. Talk soon!');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    'winhks@u.nus.edu',
  );
});

test('blocked clipboard access offers a usable fallback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator.clipboard, 'writeText', {
      value: () => Promise.reject(new Error('Permission denied')),
    });
  });
  await page.goto(base);
  await page.getByRole('button', { name: 'Copy email address' }).click();
  await expect(page.getByRole('status')).toContainText(
    'You can select the email address above.',
  );
  await expect(
    page.getByRole('link', { name: 'winhks@u.nus.edu' }),
  ).toHaveAttribute('href', 'mailto:winhks@u.nus.edu');
});

test('download delivers the actual PDF from the repository base path', async ({
  page,
  request,
}) => {
  await page.goto(base);
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download résumé' }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe('Win-Htut-Khaung-Soe-Resume.pdf');
  expect(await download.failure()).toBeNull();
  const response = await request.get(`${base}resume.pdf`);
  expect(response.status()).toBe(200);
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
});

for (const path of [
  '',
  ...projectPages.map((project) => `work/${project.slug}/`),
]) {
  test(`accessibility scan: ${path || 'home'}`, async ({ page }) => {
    await page.goto(`${base}${path}`);
    await page.evaluate(() => document.fonts.ready);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      results.violations.map((violation) => ({
        rule: violation.id,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      })),
    ).toEqual([]);
  });
}

test('all pages fit small phones, tablets, and desktop viewports', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'Width matrix runs once.');
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      '',
      ...projectPages.map((project) => `work/${project.slug}/`),
      '404.html',
    ]) {
      await page.goto(`${base}${path}`);
      await page.evaluate(() => document.fonts.ready);
      const { documentWidth, viewportWidth } = await page.evaluate(() => ({
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
      }));
      expect(
        documentWidth,
        `${path || 'home'} at ${width}px`,
      ).toBeLessThanOrEqual(viewportWidth);
    }
  }
});

test('core content and navigation work without JavaScript', async ({
  browser,
  isMobile,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: isMobile ? 320 : 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto(`${baseURL}${base}`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Copy email address' }),
  ).toBeHidden();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Contact' })
    .click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(
    page.getByRole('link', { name: 'winhks@u.nus.edu' }),
  ).toBeVisible();
  await context.close();
});

test('canonical URLs, sitemap, social image, and 404 respect GitHub Pages', async ({
  page,
  request,
}) => {
  await page.goto(base);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    `https://winhks25.github.io${base}`,
  );
  const sitemap = await request.get(`${base}sitemap-0.xml`);
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  for (const project of projectPages)
    expect(xml).toContain(
      `https://winhks25.github.io${base}work/${project.slug}/`,
    );
  expect(xml).not.toContain('404');
  const social = await request.get(`${base}social-card.png`);
  expect(social.status()).toBe(200);
  expect(social.headers()['content-type']).toContain('image/png');
  await page.goto(`${base}404.html`);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'off course.',
  );
  await page.getByRole('link', { name: 'Back to the portfolio' }).click();
  await expect(page).toHaveURL(base);
});

test('skip link reaches the main content with the keyboard', async ({
  page,
}) => {
  await page.goto(base);
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
});
