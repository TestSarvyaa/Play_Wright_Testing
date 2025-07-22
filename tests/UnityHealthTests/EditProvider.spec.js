import { test, expect } from '@playwright/test';

test('EditProvider', async ({ page }) => {
  await page.goto('https://android.app.unityhealth360.com/auth/login');
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('david123');
  await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('David@123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('list').locator('div').filter({ hasText: 'Settings' }).click();
  await page.getByRole('button', { name: 'Edit Profile' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  const cnfmsg = await page.locator('//div[@class="MuiAlert-message css-127h8j3"]').textContent();
  console.log("Confirmation Message :- ",cnfmsg);
  
  await expect(await page.getByText(cnfmsg)).toBeVisible();
});