const { test, expect } = require("@playwright/test");

test("SauceDemo: Produkt in den Warenkorb und Checkout", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Login
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.click('[data-test="login-button"]');

  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  await page.click(".shopping_cart_link");

  await expect(page.locator(".cart_item")).toHaveCount(1);

  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', "Max");
  await page.fill('[data-test="lastName"]', "Mustermann");
  await page.fill('[data-test="postalCode"]', "12345");
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  await expect(page.locator(".complete-header")).toHaveText(
    /Thank you for your order!/
  );

  await page.goto("https://www.saucedemo.com/");
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.click('[data-test="login-button"]');
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click(".shopping_cart_link");
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', "Max");
  await page.fill('[data-test="lastName"]', "Mustermann");
  await page.fill('[data-test="postalCode"]', ""); 
  await page.click('[data-test="continue"]');

  const errorMsg = await page.locator('[data-test="error"]').innerText();
  expect(errorMsg).toContain("Postal Code is required");
  await page.screenshot({ path: "screenshots/checkout-error.png" });
});
