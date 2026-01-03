import {test, expect} from '@playwright/test'

test('InputBoxes', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    //Assertions on the Element
    await expect(await page.locator('//input[@id="FirstName"]')).toBeVisible();
    await expect(await page.locator('//input[@id="FirstName"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="FirstName"]')).toBeEditable();
    await expect(await page.locator('//input[@id="FirstName"]')).toBeEnabled();


    //await page.locator('//input[@id="FirstName"]').fill('Steve')
    await page.fill('//input[@id="FirstName"]','Sarvya');

    await page.waitForTimeout(5000);

})