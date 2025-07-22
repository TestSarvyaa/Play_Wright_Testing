import { expect, test } from "@playwright/test";


test('Assertions', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');
    const url = page.url();
    console.log("The url is :- ",url)

    const title = await page.title();
    await console.log("The title of the page is :-",title);

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const searchBtn = await page.locator('(//button[@type="submit"])[1]');
   
    await expect(searchBtn).toBeVisible();

    const searchInputBox = await page.locator('//input[@id="small-searchterms"]');

    await expect(searchInputBox).toBeEnabled();

    const newsLetterBtn = await page.locator('(//input[@name="Newsletter"])[1]');

    await expect(newsLetterBtn).toBeChecked();

    const regBtn = await page.locator('//button[@name="register-button"]');
    
    await expect(regBtn).toHaveAttribute('type', 'submit');

    const reg = await page.locator('.page-title h1').textContent();
    console.log("Element Name :- ",reg);

    await expect(await page.locator('.page-title h1')).toHaveText('Register'); //Need exact text.

    await expect(await page.locator('.page-title h1')).toContainText('Reg');  //Pass Partial Text.

    const fName = await page.locator('//input[@id="FirstName"]');
    await fName.fill('Sarvesh')
    await expect (fName).toHaveValue('Sarvesh');

    const options = await page.locator('//select[@name="customerCurrency"]/option');
    await expect(options).toHaveCount(2);

})