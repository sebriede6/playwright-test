const { test, expect } = require('@playwright/test');

test('Wikipedia Startseite hat eine Navigationsleiste mit Links', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  const navBar = await page.$('nav');
  expect(navBar).not.toBeNull();
});
