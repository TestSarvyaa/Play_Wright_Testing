import {expect, test} from '@playwright/test'

test('Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.fill('#datepicker','03/15/2024'); //Filling the date directly if allowed

    //How to handle date picker element
    const year = '2000';
    const month = 'June';
    const date = '9';

    await page.click('#datepicker');  //Open the calender/date picker
    
    while(true)
    {
       const currentMonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent();
       const currentYear = await page.locator('//span[@class="ui-datepicker-year"]').textContent();

       if(currentMonth == month && currentYear == year)
       {
        break;
       }

      // await page.locator('//a[@title="Next"]').click(); //Clicking on the next button until condition matched
       await page.locator('//a[@title="Prev"]').click(); 
    }

    const dates = await page.$$('//a[@class="ui-state-default"]')

    //Date selection using the loop
    // for(const dt of dates)
    // {
    //     if(await dt.textContent() == date)
    //     {
    //         await dt.click();
    //         break;
    //     }
    // }

    //Date selection without looping statement
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`) //Selecting the date without looping staement
    await page.waitForTimeout(5000);
})