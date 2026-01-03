const { test, expect } = require("@playwright/test");

test('LocateMultipleElements', async({page})=>{

    await page.goto('https://demoblaze.com/');

    // const elements = await page.$$('a')
    // for(const element of elements)
    // {
    //     const elementText = await element.textContent();
    //     console.log(elementText);
    // }

    await page.waitForSelector("//div[@id='tbodyid']//h4/a"); //is await is optional here??

    const products =  await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products)
    {
        const productname = await product.textContent();
        console.log(productname);
    }
})