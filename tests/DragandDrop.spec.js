import { expect, test } from "@playwright/test";

test('DragandDrop', async({page})=>{


    page.goto("https://testautomationpractice.blogspot.com");

    const source =  page.locator('//div[@id="draggable"]');
    const target =  page.locator('//div[@id="droppable"]');


    //Approach One
    // await source.hover();
    // await page.mouse.down();

    // await target.hover();
    // await page.mouse.up();


    //Approach 2

    await source.dragTo(target)

    await page.waitForTimeout(3000);
})