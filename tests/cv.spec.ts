import { test, expect } from '@playwright/test';

test('cv page displays CV title and key sections', async ({ page }) => {
  await page.goto('/about/cv');
  //TODO: await expect(page).toHaveTitle(/CV/);
  //TODO: await expect(page.locator('h1')).toContainText(/CV/);
  await expect(page.locator('body')).toContainText(/iptiQ/);
  await expect(page.locator('body')).toContainText(/bol.com/);
  await expect(page.locator('body')).toContainText(/TomTom/);
});