import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = '/winhtutkhaungsoe/';

test('appearance follows the system until a manual choice is made', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(base);
  const toggle = page.getByRole('button', { name: 'Dark mode' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
    'content',
    '#142019',
  );
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('a keyboard-selected theme survives project navigation and reload', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto(base);
  const toggle = page.getByRole('button', { name: 'Dark mode' });
  await toggle.focus();
  await page.keyboard.press('Space');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await page
    .getByRole('link', { name: 'Explore CoMatch', exact: true })
    .click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await toggle.click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
    'content',
    '#f7f8f2',
  );
});

test('saved appearance is applied before the body is parsed', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.addInitScript(() => {
    localStorage.setItem('portfolio-theme', 'dark');
    const observer = new MutationObserver(() => {
      if (document.body) {
        document.documentElement.dataset.themeAtBody =
          document.documentElement.dataset.theme;
        observer.disconnect();
      }
    });
    observer.observe(document, { childList: true, subtree: true });
  });
  await page.goto(base);
  await expect(page.locator('html')).toHaveAttribute(
    'data-theme-at-body',
    'dark',
  );
});

test('theme switching still works when browser storage is blocked', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get: () => {
        throw new Error('Storage blocked');
      },
    });
  });
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(base);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Dark mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  expect(errors).toEqual([]);
});

test('appearance changes sync between open pages', async ({
  page,
  context,
}) => {
  await page.goto(base);
  const otherPage = await context.newPage();
  await otherPage.goto(base);
  await page.getByRole('button', { name: 'Dark mode' }).click();
  const selectedTheme = await page.locator('html').getAttribute('data-theme');
  await expect(otherPage.locator('html')).toHaveAttribute(
    'data-theme',
    selectedTheme!,
  );
  await otherPage.close();
});

test('system dark mode works without JavaScript', async ({
  browser,
  baseURL,
  isMobile,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    colorScheme: 'dark',
    viewport: { width: isMobile ? 320 : 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto(`${baseURL}${base}`);
  await expect(page.locator('html')).toHaveCSS(
    'background-color',
    'rgb(20, 32, 25)',
  );
  await expect(page.getByRole('button', { name: 'Dark mode' })).toBeHidden();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Contact' })
    .click();
  await expect(page).toHaveURL(/#contact$/);
  await context.close();
});

for (const path of [
  '',
  'work/comatch/',
  'work/fittix/',
  'work/mcnus/',
  '404.html',
]) {
  test(`dark appearance accessibility: ${path || 'home'}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
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
