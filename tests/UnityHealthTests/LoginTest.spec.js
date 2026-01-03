import { test, expect } from '@playwright/test';

test('Valid Creds', async ({ page }) => {
  await page.goto('https://android.app.unityhealth360.com/auth/login');
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('suresh');
  await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Suresh@123');
  await page.getByRole('button', { name: 'Login' }).click();

  const name = await page.locator('(//p[@class="MuiTypography-root MuiTypography-body1 css-ffxfoe"])[1]').textContent();

  await page.waitForTimeout(2000);
  console.log("The Name of the Provider is:- ", name);

   // Use the locator directly for the assertion
   await expect(page.getByText(name).nth(0)).toBeVisible();


   //Logging out the user
  await page.locator('(//span[@class="MuiTypography-root MuiTypography-title2 css-11f79r4"][normalize-space()="Logout"])[1]').click();
  await page.locator('//button[normalize-space()="Logout"]').click();

  const loginPageTxt = await page.locator('//h3[normalize-space()="Unity Health"]').textContent();
  console.log("The URL is :- ", loginPageTxt);

 await expect(page.getByText(loginPageTxt)).toBeVisible();

});

test('Invalid Creds', async ({ page }) => {
  await page.goto('https://android.app.unityhealth360.com/auth/login');
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('suresh');
  await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Pass@123');
  await page.getByRole('button', { name: 'Login' }).click();


  const errorMsg = page.getByText('Invalid credentials. Please check your username & password and try again.', { exact: true });
  await errorMsg.click();
  await expect(errorMsg).toBeVisible();

  const textMsg = await errorMsg.textContent();
  //await expect(errorMsg).toHaveText('Invalid credentials. Please check your username & password and try again.');

  console.log(textMsg);

});
