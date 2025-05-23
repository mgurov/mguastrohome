import { test, expect } from '@playwright/test';

test('home page has correct title and main heading', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Mykola Gurov/);
  await expect(page.getByTestId('page-title')).toContainText("Mykola Gurov");
});