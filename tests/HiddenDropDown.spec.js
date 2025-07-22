import {expect, test} from '@playwright/test'

test('HidenDropdown', async ({page})=>{

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   await page.locator('//input[@name="username"]').fill('Admin');
   await page.locator('//input[@name="password"]').fill('admin123');
   await page.locator('//button[@type="submit"]').click();

   await page.locator('//span[normalize-space()="PIM"]').click();

   await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click();

   //Waiting for option
   await page.waitForTimeout(3000)

   const options =await page.$$('//div[@role="listbox"]//span')

   for(let option of options )
   {
      const jobTitle = await option.textContent();
    //console.log('Job Title :- ', jobTitle);
      if(jobTitle.includes('QA Engineer'))
      {
         await option.click();
         break;
      }
   }
   await page.waitForTimeout(3000);
})