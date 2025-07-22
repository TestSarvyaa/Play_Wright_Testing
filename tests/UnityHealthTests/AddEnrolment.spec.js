import { expect, test } from "@playwright/test";

test('Add Enrollment', async({page})=>{

     await page.goto('https://android.app.unityhealth360.com/auth/login');
     await page.getByRole('textbox', { name: 'Enter Username' }).click();
     await page.getByRole('textbox', { name: 'Enter Username' }).fill('suresh');
     await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
     await page.getByRole('textbox', { name: 'Enter Password' }).fill('Suresh@123');
     await page.getByRole('button', { name: 'Login' }).click();

    const title = await page.title();
    // console.log('Title of the Page :- ', title);
    // await expect(page).toHaveTitle('Unity Health 360'); //Assertion added.
    // await page.waitForTimeout(3000);
    //page.close();

    
})