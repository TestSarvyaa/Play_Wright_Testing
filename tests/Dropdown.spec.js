import { expect, test  } from "@playwright/test";

test('Dropdown', async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/');//Navigate to web

    //Multiple options/ways to select option from the dropdown
    // await page.locator('//select[@id="country"]').selectOption({label : 'India'}); //Using Label
    // await page.locator('//select[@id="country"]').selectOption('India'); //Using text directly(Visible text)
    // await page.locator('//select[@id="country"]').selectOption({value : 'India'}); //By using the value attribute
    // await page.locator('//select[@id="country"]').selectOption({index : 4}); //By using index number of the option.
    // await page.selectOption('//select[@id="country"]','India') //By text only. With calling the selectOption method directly from page fixture.

  
   //First Approach to check number of option in dropdown
//    const option = await page.locator('#country option');
//    await expect(option).toHaveCount(10);


   //Second Approach to check number of the option in dropdown
    // const opt = await page.$$('#country option');  //Here we captured all the element in array 
    // console.log('Number of Option :- ', opt.length); //Here we find out total number of element in the array by using length function
    // expect(opt.length).toBe(10);  


    //To check presence of value in the dropdown
    //1)First approach 
    // const contrent = await page.locator('#country').textContent();
    // expect(contrent.includes('India')).toBeTruthy();  //Includes method check whether the text is present or not.

    //2)Second Approach
    // const options = await page.$$('#country option');
    // let status = false;

    // for(const opt of options)
    // {
    //     let value = await opt.textContent();
    //     const countryName = await opt.textContent();
    //     console.log(countryName.trim(' '));
    //     if(value.includes('France'))
    //     {
    //         status = true;
    //         continue; //It will print all the country name inside the dropdown.
    //         //break; -- It will not print the country name which are after france if we used break in the loop.
    //     }
    // }
    // expect (status).toBeTruthy();


    //3)Select option from dropdown using loop
    const options = await page.$$('#country option');
    
    for(const opt of options)
    {
        let value = await opt.textContent();
        if(value.includes('France'))
        {
            const valueAttr = await opt.getAttribute('value'); // get the actual value
            await page.selectOption('#country', valueAttr);
            break;
        }
    }
    await page.waitForTimeout(2000);
})