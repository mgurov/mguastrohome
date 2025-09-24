import { test, expect } from '@playwright/test';

test('about page displays main heading and summary', async ({ page }) => {
  await page.goto('/about');
  await expect(page).toHaveTitle("About Me - Mykola Gurov");
  await expect(page.getByTestId('page-title')).toContainText("About Me");

  await expect(page.locator('main')).toBeVisible();
  await expect(page.locator('article')).toBeVisible();

});