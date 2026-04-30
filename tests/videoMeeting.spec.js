import { test, expect } from '@playwright/test';

test('Video Meeting Test', async ({ page }) => {

  // 1. Go to login page
  await page.goto('https://app.grabdocs.com/login?redirect=%2F');

  // 2. Pause so you can manually log in (this makes the browser show up)
  await page.pause();

  // 3. After login, click Reach
  await page.getByRole('link', { name: 'Reach' }).click();

  // 4. Create a new meeting
  await page.getByRole('button', { name: 'Create Meeting' }).click();
  await page.getByRole('textbox', { name: 'Enter meeting name' }).click();
  await page.getByRole('textbox', { name: 'Enter meeting name' }).fill('Meeting');
  await page.getByRole('button', { name: 'Create Meeting' }).nth(1).click();

  // 5. Click the Join button (this is the one you pressed — phone icon flow)
  await page.getByRole('button', { name: 'Join meeting' }).nth(1).click();

  // 6. Wait for the popup window to open
  const popupPromise = page.waitForEvent('popup');

  // 7. Continue without microphone (your UI shows this exact text)
  await page.getByRole('button', { name: 'Continue without microphone' }).click();

  // 8. Get the popup page
  const popup = await popupPromise;

  // 9. Enter your name
  await popup.getByRole('textbox', { name: 'Enter name' }).click();
  await popup.getByRole('textbox', { name: 'Enter name' }).fill('Joshua Sanders');

  // 10. Join the meeting
  await popup.getByRole('button', { name: 'Join Now' }).click();

  // 11. Leave the meeting
  await popup.getByRole('button', { name: 'Leave' }).click();
});
