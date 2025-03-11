const { test, expect } = require('@playwright/test');

test('Wikipedia: Suche nach "Playwright"', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.fill('input[name="search"]', 'Playwright');
  await page.press('input[name="search"]', 'Enter');
  await expect(page.locator('h1')).toContainText(/Playwright/i);
});
