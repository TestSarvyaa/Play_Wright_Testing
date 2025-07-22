import {expect, test} from '@playwright/test'

test('Mouse Hover', async({page})=>{

    await page.goto('https://demo.opencart.com.gr/');
//     await page.goto('http://dev.unityhealth360.com/auth/login');

//    await page.fill('#id="userName"', 'superadmin');
//    await page.fill('//input[@placeholder="Enter Password"]', 'Pass@123');
//    await page.click('//button[@type="submit"]');


  // const speciality = page.locator('(//div[@class="MuiBox-root css-0"])[1]');
   const desktop = page.locator('//a[normalize-space()="Desktops"]')
   const macBook = page.locator('//a[normalize-space()="Mac (1)"]')

    //Mouse Hover
    //await speciality.hover();
    await desktop.hover();
    await page.waitForTimeout(2000)
    await macBook.hover();
    await page.waitForTimeout(5000) 


})