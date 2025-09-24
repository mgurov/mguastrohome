import { test, expect } from '@playwright/test';

test.describe('Main site functionality', () => {

  test('CV page has correct structure and content', async ({ page }) => {
    await page.goto('/cv');
    
    // Check title and main heading
    //TODO: fix me await expect(page).toHaveTitle(/CV/);
    //TODO: fix me await expect(page.locator('h1')).toContainText(/CV/);
    
    // Check for CV sections
    await expect(page.locator('main')).toBeVisible();
    //TODO: fix me ? await expect(page.locator('article')).toBeVisible();    
  });

  test('talks page has correct structure and content', async ({ page }) => {
    await page.goto('/talks');
    
    // Check title and main heading
    //TODO: fix me await expect(page).toHaveTitle(/Talks/);
    //TODO: fix me await expect(page.locator('h1')).toContainText(/Talks/);
    
    // Check for talks list
    await expect(page.locator('main')).toBeVisible();
    //TODO: fix me ? await expect(page.locator('article')).toBeVisible();
    
    // Check for talk entries
    // const talkEntries = page.locator('article');
    // await expect(talkEntries).toBeVisible();
  });

  test('trunk-based-delivery page has correct structure and content', async ({ page }) => {
    await page.goto('/trunk-based-delivery');
    
    // Check title and main heading
    //TODO: fix me await expect(page).toHaveTitle(/Trunk Based Delivery/);
    //TODO: fix me await expect(page.locator('h1')).toContainText(/Trunk Based Delivery/);
    
    // Check for article content
    await expect(page.locator('main')).toBeVisible();
    //TODO: fix me ? await expect(page.locator('article')).toBeVisible();
    
    // Check for key content elements
    //await expect(page.locator('h2')).toBeVisible();
  });

  test.skip('navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to each main section
    const navLinks = page.locator('nav a');
    const expectedLinks = ['/', '/about', '/cv', '/talks'];
    
    for (const href of expectedLinks) {
      const link = navLinks.filter({ hasText: new RegExp(href === '/' ? 'Home' : href.slice(1), 'i') });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(href);
    }
  });

  test('responsive design works', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator('nav')).toBeVisible();
  });

  test('meta tags and SEO elements are present', async ({ page }) => {
    await page.goto('/');
    
    // Check meta description
    //TODO: fix me await expect(page.locator('meta[name="description"]')).toBeVisible();
    
    // Check Open Graph tags
    //TODO: fix me await expect(page.locator('meta[property="og:title"]')).toBeVisible();
    //TODO: fix me await expect(page.locator('meta[property="og:description"]')).toBeVisible();    
  });
}); 