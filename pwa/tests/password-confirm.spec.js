import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByText('I want to launch productsBecome a company on Funded and start launching products').click();
  await page.getByRole('button', { name: 'Continue as a Company ' }).click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('kassim91000@gmail.com');
  await page.locator('input[id="login-password"]').click();
  await page.locator('input[id="login-password"]').fill('motdepasse');
  await page.locator('input[id="login-password-confirm"]').click();
  await page.locator('input[id="login-password-confirm"]').fill('motdepasseconfirm');
  await page.getByRole('button', { name: 'Create Account' }).click();

    const error = await page.locator('div').filter({ hasText: "Passwords don't match" }).first();
    expect(error).toBeTruthy();
});