import {test, expect} from '@playwright/test'

test('RightClick', async({page})=> {

     await page.goto('https://dev.unityhealth360.com/');

    const button =  page.locator('');

    await button.click({button : 'right'}); //To right click
    await button.click({button : 'left'});
    await button.click({button : 'middle'});
})

   

