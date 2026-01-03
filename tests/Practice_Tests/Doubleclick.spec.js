import {test, expect} from '@playwright/test'

test('DoubleClick', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const filed1 = await page.locator('//input[@id="field1"]').textContent();
   
    const copyButton = page.locator('//button[@ondblclick="myFunction1()"]');
    await copyButton.dblclick();

     const field2 = page.locator('//input[@id="field2"]')

     await expect(field2).toHaveValue('Hello World!')

     await page.waitForTimeout(4000);
})