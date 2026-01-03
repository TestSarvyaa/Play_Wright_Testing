const{test, expect} = require('@playwright/test');
test('HomePage', async({page})=>{

   await page.goto("https://demoblaze.com/");

   const pageTite = await page.title();
   console.log("The page title is :- ", pageTite);

   await expect(page).toHaveTitle('STORE');

   const pageURL = page.url();
   console.log("The URL is :- ", pageURL)

   await expect(page).toHaveURL('https://demoblaze.com/')

   await page.close();
})