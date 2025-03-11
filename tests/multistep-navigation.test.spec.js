const { test, expect } = require('@playwright/test');

test('Multistep Wikipedia Navigation: English -> Search -> Article -> History', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: /English/ }).click();
  await expect(page).toHaveURL(/en.wikipedia.org/);
  await page.fill('input[name="search"]', 'Playwright');
  await page.press('input[name="search"]', 'Enter');
  await expect(page.locator('h1')).toHaveText('Playwright');
  const lang = await page.getAttribute('html', 'lang');
  expect(lang).toBe('en');
  await page.click('#ca-history a');
  await expect(page).toHaveURL(/action=history/);
  await expect(page.locator('h1')).toContainText('Revision history');
});
