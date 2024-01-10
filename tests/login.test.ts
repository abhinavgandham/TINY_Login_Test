import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://www.staging.tiny.cloud/");
  await page.click('a:has-text("Log in")');
  const email = page.locator("input[name='email']");
  const password = page.locator("input[name='password']");
  await email.fill("abhinavgandham+staging@gmail.com");
  await password.fill("Test123#1");
  await page.click('button:has-text("Log In")');
  await page.waitForNavigation();
  await expect(page).toHaveTitle("My Account | Tiny Cloud");
  await page.click("'Settings'");
  await page.click('span:has-text("Logout")');
});
