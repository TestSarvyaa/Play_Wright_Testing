import { expect, test } from "@playwright/test";

test('SoftAssertion', async ({page})=>{

    //Hard Assertions

     await page.goto('https://demoblaze.com/')

    // await expect (page).toHaveURL('https://demoblaze.com/');
    // await expect (page).toHaveTitle('STORE');
    
    // const element = await page.locator('(//a[@class="nav-link"])[1]');
    // await expect(element).toBeVisible();

    //Soft Assertion :- It does not terminate the flow of execution of the code even the assertion fails
    await expect.soft (page).toHaveURL('https://demoblaze.com/');
    await expect.soft (page).toHaveTitle('STORE'); //Failing the assertion 
    
    const element = await page.locator('(//a[@class="nav-link"])[1]');
    await expect.soft(element).toBeVisible();


})