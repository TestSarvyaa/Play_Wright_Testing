import {expect, test} from '@playwright/test'

test('HandlingTable', async({page})=> {

   await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    const columns = table.locator('thead tr th');
    console.log('Number of columns:', await columns.count());
   // expect(await columns.count()).toBe(4);

    const rows = table.locator('tbody tr');
    console.log('Number of rows:', await rows.count());
   // expect(await rows.count()).toBe(5);

   // 1.-------Selecting the product from the table ---------
    // const matchedRow = rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch',
    // })
    // await matchedRow.locator('input').check()
    // await page.waitForTimeout(4000);

    // const matchedSecondRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Laptop',
    // })
    // await matchedSecondRow.locator('input').check();
    // await page.waitForTimeout(4000);
   
   // expect(await matchedRow.locator('input').isChecked()).toBeTruthy(); //Assertion to check if the checkbox is checked
   // expect(await matchedSecondRow.locator('input').isChecked()).toBeTruthy(); //Assertion to check if the checkbox is checked


   //2. ---------- Selecting the multiple product using the function ---------------------
//    await selectProduct(rows, page,'Smartphone');
//    await page.waitForTimeout(2000); // Wait for 2 seconds before selecting the next product
//    await selectProduct(rows, page,'Tablet');
//    await page.waitForTimeout(2000); // Wait for 2 seconds before selecting the next product
//    await selectProduct(rows, page,'Smartwatch'); 
//    await page.waitForTimeout(2000); 


   //3. ---------------- Print All the Produccts Details (Reading data from a single page) --------------
//    for(let i = 0 ; i< await rows.count(); i++) // Representing the rows
//    {
//     const row = rows.nth(i);
//     const tds = row.locator('td')
//     for(let j =0 ; j< await tds.count()-1; j++) // Representing the columns    
//     {
//         const details = await tds.nth(j).textContent();
//         console.log(details);
//     }
//    }


   // 4. -----------------Reading data from all the pages -----------------
   const pages = page.locator('.pagination li a')
   console.log('Number of pages in the Table:', await pages.count());

   for(let p= 0 ; p < await pages.count(); p++)
   {
          if(p>0)
         {
            await pages.nth(p).click();
         }
    
          for(let i = 0 ; i< await rows.count(); i++) // Representing the rows
        {
             const row = rows.nth(i);
             const tds = row.locator('td')
             for(let j =0 ; j< await tds.count()-1; j++) // Representing the columns    
            {
                 const details = await tds.nth(j).textContent();
                 console.log(details);
            }   
        }
            await page.waitForTimeout(2000);
   }
             await page.waitForTimeout(2000);
})


async function selectProduct(rows, page, name)
{
     const matchedRow = rows.filter({
        has:page.locator('td'),
        hasText:name,
    })
    await matchedRow.locator('input').check()
}