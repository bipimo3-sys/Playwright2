import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.example.com/');
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
});