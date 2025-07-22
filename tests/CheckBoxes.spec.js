import { expect, test } from "@playwright/test";

test('CheckBoxesHandling', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const sunday = await page.locator('//input[@id="sunday"]');
    sunday.check();

    //expect(await page.locator('//input[@id="sunday"]')).toBeChecked();
   //expect(await page.locator('//input[@id="sunday"]').isChecked()).toBeTruthy();
    await expect(sunday).toBeChecked();
    await expect(sunday.isChecked()).toBeTruthy();

    const monday = page.locator('//input[@id="monday"]');
    //monday.check();
   // await expect(monday).toBeChecked();
  //  await expect(monday.isChecked()).toBeTruthy();
   //expect(await page.locator('//input[@id="monday"]').isChecked()).toBeFalsy();
    expect(await monday.isChecked()).toBeFalsy();
    


    //Multiple Checkboxes 
    const checkBoxesArray = ['//input[@id="sunday"]','//input[@id="monday"]','//input[@id="tuesday"]',
                             '//input[@id="wednesday"]','//input[@id="thursday"]','//input[@id="friday"]',
                              '//input[@id="saturday"]'];
   

    for(const locator of checkBoxesArray)
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(3000);

    for(let locator of checkBoxesArray) //For unselecting the selected checkboxes
    {
        console.log(locator);
        if(await page.locator('//input[@id="monday"]').isChecked())
        {
            await page.locator('//input[@id="monday"]').uncheck();
        }
        
    }
    
    
    await page.waitForTimeout(3000);

})