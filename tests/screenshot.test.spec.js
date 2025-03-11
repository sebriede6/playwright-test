const { test } = require('@playwright/test');

test('Seite laden und Screenshot speichern', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshots/example.png' });
});
