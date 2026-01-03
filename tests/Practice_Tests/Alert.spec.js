import { expect, test } from "@playwright/test";

test.skip('Alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //Enabling the Dialog window handler
    page.on('dialog' , async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
        })

    await page.click('//button[@id="alertBtn"]'); //Before opening the aler window we have to handle with the above code for validation.
  //  await page.waitForTimeout();
});


//Handling the Confirmation Alert Dialog
test.skip('Confirmation dialog-alert with OK and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //Enabling the Dialog window handler with OK and Cancel button
    page.on('dialog' , async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //close by using the OK button
        //await dialog.dismiss() //close by using the cancel button
        }) 


    await page.click('//button[@id="confirmBtn"]'); //Before opening the aler window we have to handle with the above code for validation.
  //  await page.waitForTimeout();

    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
});

test('Prompt Dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    //Enabling the Dialog window handler which has input box and text content with in
    page.on('dialog' , async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter'); //Validating the value present in the input box or not
        await dialog.accept('Sarvesh'); //Close the alert with OK
        })

    await page.click('//button[@id="promptBtn"]'); //Before opening the aler window we have to handle with the above code for validation.
  //  await page.waitForTimeout();
       const text =  await page.locator('//p[@id="demo"]').textContent();
       console.log("Text Message :-",text);
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Sarvesh! How are you today?');
});

