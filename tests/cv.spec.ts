import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/about/cv');
});

test('cv page displays CV title and key sections', async ({ page }) => {

  await expect(page).toHaveTitle("CV Mykola Gurov");
  const body = page.locator('body');
  await expect(body).toContainText(/iptiQ/);
  await expect(body).toContainText(/bol.com/);
  await expect(body).toContainText(/TomTom/);

  await expect(page.getByTestId('page-title')).not.toBeAttached();

});

for (const [text, url] of [
  ['comprehensive and thoughtful automatic test coverage', "/talks/app-testing-with-playwright/"],
  ['trunk-based continuous delivery development', "/talks/trunk-based-delivery/"],
  ['extensive testing on production via gradual process takeover', "/talks/testing-on-production/"],
  ['more about the great time at bol', "/about/bol"],
]) {
  test(`can follow ${text} link`, async ({ page }) => {
    const body = page.locator('body');
    await body.locator('a').getByText(text).click();
    await expect(page).toHaveURL(url);
    await expect(page.locator('article')).toBeVisible();
  });
}