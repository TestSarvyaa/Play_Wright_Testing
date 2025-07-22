import {expect,test} from '@playwright/test'

test('MultiSelectDropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors',['Red', 'Yellow', 'Blue'])

    //Assertions
    //Check number of options in dropdown
    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    //Check number of options in dropdown with JS Array
   // const opt = await page.$$('#colors option');
   // expect(opt.length).toBe(7);

    //Check Presence of the Value in the dropdown
    const content = await page.locator('#colors').textContent();
    expect(content.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(3000);
})