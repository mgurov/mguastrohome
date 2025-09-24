import { test, expect } from '@playwright/test';

  test('home page redirects to about', async ({ page }) => {
    await page.goto('/');

    await page.waitForURL(/\/about/)
    
    await expect(page).toHaveTitle(/About Me - Mykola Gurov/);
    await expect(page.getByTestId('page-title')).toContainText("About Me");
    
    // Check navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check main content sections
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('article')).toBeVisible();
  });
