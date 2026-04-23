import { test, expect } from '@playwright/test';

test('Messages Test - @ mention + send message', async ({ page }) => {

  // Go to login page
  await page.goto('https://app.grabdocs.com/login?redirect=%2F');

  // Pause so you can manually log in + MFA
  await page.pause();

  // After login, Playwright continues automatically
  await page.getByRole('link', { name: 'Chat' }).click();

  // Click the @ mention search box
  await page.getByRole('textbox', { name: 'Type @ to find users or' }).click();

  // Type @C (or whatever your teammate's name starts with)
  await page.getByRole('textbox', { name: 'Type @ to find users or' }).fill('@C');

  // Select the user
  await page.getByText('U', { exact: true }).click();

  // Click the message input
  await page.getByRole('textbox', { name: 'Type a message... Use @ to' }).click();

  // Type your message
  await page.getByRole('textbox', { name: 'Type a message... Use @ to' }).fill('Hello');

  // Press Enter to send
  await page.keyboard.press('Enter');

  // Assertion: message should appear
  await expect(page.locator('text=Hello')).toBeVisible();
});
