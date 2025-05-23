import { test, expect } from '@playwright/test';

test('trunk-based delivery talk page displays title and video', async ({ page }) => {
  await page.goto('/talks/trunk-based-delivery');
  await expect(page).toHaveTitle(/Back to Trunk/);
  //TODO: await expect(page.locator('h1')).toContainText(/Back to Trunk/);
  await expect(page.locator('body')).toContainText(/Continuous Delivery/);
  await expect(page.locator('iframe')).toBeVisible(); // Assuming the Youtube embed renders as iframe
});