import { expect, test } from "@playwright/test";

test('CheckBoxePractice', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const days = await page.$$('//label[@class="form-check-label"]');

    for (const name of days) {
        const labelName = (await name.textContent()).trim().toLowerCase();
    
        if (labelName !== 'male' && labelName !== 'female') {
            console.log("Day in Week:- ",labelName);
        }
    }    

    const arr = ['//input[@id="sunday"]','//input[@id="monday"]','//input[@id="tuesday"]',
        '//input[@id="wednesday"]','//input[@id="thursday"]','//input[@id="friday"]',
         '//input[@id="saturday"]'];
        
        for(let loc of arr)
        {
            await page.locator(loc).check();
        }

        await page.waitForTimeout(3000);

        const uncheckArr = ['sunday', 'tuesday', 'thursday', 'saturday'];
        for(let loc of arr)
        {
            for(const day of uncheckArr)
            {
               
                if(loc.includes(day))
                {
                    const checkbox = page.locator(loc);
                      if(await checkbox.isChecked())
                          {
                             await checkbox.uncheck();
                          }
                          console.log('The Uncheck checkbox :- ', day)
                }
            }
        }
             await page.waitForTimeout(3000);
})