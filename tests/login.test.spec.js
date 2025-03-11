const { test, expect } = require('@playwright/test');

test('SauceDemo: Erfolgreicher Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await expect(page.locator('.inventory_list')).toBeVisible();
});
