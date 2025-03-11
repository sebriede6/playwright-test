const { test, expect } = require('@playwright/test');

test.describe('Titel-Tests', () => {
  test('example.com hat den Titel "Example Domain"', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('wikipedia.org hat den Titel "Wikipedia"', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle(/Wikipedia/); // Regex falls der Titel noch weitere Infos enthält.
  });
});
