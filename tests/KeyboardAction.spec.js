import { expect, test } from "@playwright/test";

test("KeyboardAction", async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    await page.fill('//textarea[@name="text1"]', "Welcome to Unity Health... I am ")

    //CTRL + A
    await page.keyboard.press('Control+A')
    await page.waitForTimeout(1000)

    //CTRL + C
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(1000)

    //Tab
    await page.keyboard.press('Tab')
    await page.waitForTimeout(1000)

    //CTRL + V
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(2000)
})