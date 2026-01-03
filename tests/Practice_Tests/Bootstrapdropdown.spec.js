import { expect, test } from "@playwright/test";

test('BootstrapDropdown', async ({page})=>{

   await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_1');

   await page.locator('//span[@class="multiselect-selected-text"]').click();

    //const options = page.locator('ul>li label input');
    //await expect(options).toHaveCount(5);

//    const opt = await page.$$('//label[@class="checkbox"]');
//    expect(opt.length).toBe(5);
//    for(const name of opt)
//    {
//     const drop = await name.textContent();
//     console.log(drop);
//    }
   
   //--------To select multiple options from dropdown----------------
   const opt = await page.$$('//label[@class="checkbox"]'); 

   
   //-----------By using the For Each Loop------
//    for(let options of opt)
//        {
//        // let i = 1;
//         const value = await options.textContent();
//         console.log('The Value is :- ', value);
//         if(value.includes(' Bootstrap Tips' )||  value.includes('CSS tricks') || value.includes(' Angular JS'))
//         {
//             await options.click();
//         }
//        }
//       await page.waitForTimeout(4000);


    //-------By using traditional For Loop--------
      for(let i = 0 ; i< opt.length ; i++)
      {
        const drop = await opt[i].textContent();
        console.log(drop);
        if(drop.includes('Bootstrap Tips') || drop.includes('Angular JS'))
        {
            await opt[i].click();
        //    console.log(await opt[i].textContent())    
        }
      }
      await page.waitForTimeout(4000);
})
