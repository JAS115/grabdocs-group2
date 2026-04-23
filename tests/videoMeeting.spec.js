import { test, expect } from '@playwright/test';

test('Video Meeting Test', async ({ page }) => {

  // Go to login page
  await page.goto('https://app.grabdocs.com/login?redirect=%2F');

  // Pause so you can manually log in + MFA
  await page.pause();

  // After login, Playwright continues automatically
  await page.getByRole('link', { name: 'Reach' }).click();
  await page.getByRole('button', { name: 'Create Meeting' }).click();
  await page.getByRole('textbox', { name: 'Enter meeting name' }).fill('Meeting');
  await page.getByRole('button', { name: 'Create Meeting' }).nth(1).click();
  await page.getByRole('button', { name: 'Join meeting' }).nth(1).click();

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Continue without microphone' }).click();
  const page1 = await page1Promise;

  await page1.getByRole('textbox', { name: 'Enter name' }).fill('Joshua Sanders');
  await page1.getByRole('button', { name: 'Join Now' }).click();
});
