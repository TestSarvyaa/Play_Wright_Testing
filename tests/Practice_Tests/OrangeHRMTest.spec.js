import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Affan');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Khan');
  await page.locator('form').getByRole('textbox').nth(4).click();
  await page.locator('form').getByRole('textbox').nth(4).press('ControlOrMeta+a');
  await page.locator('form').getByRole('textbox').nth(4).fill('0655');
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  const successMessage = await page.locator('//span[normalize-space()="Maintenance"]').textContent();
  console.log("Success Message is :- ",successMessage);
  

  //await expect(await page.getByText(successMessage)).toBeVisible();
});