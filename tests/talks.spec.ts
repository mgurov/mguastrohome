import { test, expect } from '@playwright/test';

test('talks page lists talks', async ({ page }) => {
  await page.goto('/talks');
  //TODO: await expect(page).toHaveTitle(/Talks/);
  await expect(page.locator('body')).toContainText(/Continuous Delivery/);
});