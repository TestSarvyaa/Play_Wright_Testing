import {test, expect} from '@playwright/test'

test('AutosuggestedDropdown', async({page})=>{
    await page.goto('https://www.redbus.in/');

    await page.locator('//input[@id="src"]').fill('Pune');
    await page.waitForSelector('//li[@class="sc-iwsKbI jTMXri"]//div/text[1]');

    const cityName = await page.$$('//li[@class="sc-iwsKbI jTMXri"]//div/text[1]');

    for(let name of cityName)
    {
        const value = await name.textContent();
        console.log(value);
        if(value.includes('Warje'))
        {
          await name.click();
          break;
        }
       
    }
        await page.waitForTimeout(3000);
})