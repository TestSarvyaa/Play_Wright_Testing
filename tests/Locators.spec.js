//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test' // Another way to import the playwright functions

test('Locators', async({page})=>{

    await page.goto('https://demoblaze.com/')

    //Login anchor tag action
    await page.locator('id=login2').click() // First way of clicking the element
    //await page.click(('//a[@class=nav-link])[5]'))        //Second way of clcicking the element

    //This is for username
    //await page.locator('id="loginusername"').fill("pavanol") //First way of gving input in the text field
    await page.fill('#loginusername', 'pavanol')           //Second way of giving the input in the text field

    //This is for password
    await page.locator("input[id='loginpassword']").fill('test@123')

    //Login button action
    await page.locator("//button[normalize-space()='Log in']").click()

    //Verify log out link is present or not
    const logoutelement = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutelement).toBeVisible();

    await page.close();

})
