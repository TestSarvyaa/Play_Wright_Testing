import { expect,test } from "@playwright/test";

test('RadioButtons',async ({page})=>{

    await page.goto(' https://testautomationpractice.blogspot.com/')

    //Radio Buttons Action
    await page.locator('//input[@id="male"]').check();
    await expect(await page.locator('//input[@id="male"]')).toBeChecked();
    await expect(await page.locator('//input[@id="male"]').isChecked()).toBeTruthy(); //Male checkbox

    await expect(await page.locator('//input[@id="female"]').isChecked()).toBeFalsy(); //Female checkbox

   await page.waitForTimeout(5000);
})