import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6 580 000+ articles' }).click();
  await page.getByRole('link', { name: 'Azerbaijan Airlines Flight 56' }).click();
  await page.getByRole('link', { name: 'climbing' }).click();
});