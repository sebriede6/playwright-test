const { test, expect } = require('@playwright/test');

test.describe('SauceDemo: Login-Validierung', () => {
  test('Leere Felder: Fehlermeldung', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('[data-test="login-button"]');
    const errorMessage = await page.locator('[data-test="error"]').innerText();
    expect(errorMessage).toContain('Username is required');
  });

  test('Falsches Passwort: Fehlermeldung', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'wrong_password');
    await page.click('[data-test="login-button"]');
    const errorMessage = await page.locator('[data-test="error"]').innerText();
    expect(errorMessage).toContain('Username and password do not match any user in this service');
    await page.screenshot({ path: 'screenshots/login-error.png' });
  });
});
