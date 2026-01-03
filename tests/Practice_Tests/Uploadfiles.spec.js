import {expect, test} from '@playwright/test'

test('UploadFile', async({page}) =>
{

    //Login With the Provider
  await page.goto('https://english.qa.unityhealth360.com/auth/login');
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('paul123');
  await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Pass@123');
  await page.getByRole('button', { name: 'Login' }).click();

   // await page.waitForTimeout(30000);

   //Navigate to Documents Section :- 
   await page.locator('span').filter({ hasText: 'Document Library' }).first().click();
    //await page.locator('(//li[@class="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-1wijt0l"])[5]').click();
    await page.waitForTimeout(2000);

    //Click on Upload Material :- 
    await page.locator('//button[normalize-space()="Upload Material"]').click();
    await page.waitForTimeout(2000);

    //Add the file Now :- 
    await page.locator('//div[@id="mui-component-select-documentType"]').click();
    await page.locator('//li[@data-value="CHALLENGES"]').click();

    await page.waitForTimeout(3000);

    //----> Second Drop Down
    await page.locator('//div[@id="mui-component-select-specialitySet"]').click();
    await page.locator('//h6[@title="Addiction Specialist"]').click() // ----> Second Drop Down


    await page.fill('//input[@name="fileName"]', 'My Document'); //----> Enter the Name of the file
   // await page.locator('//div[@class="MuiBox-root css-5pd12w"]').click();

    await page.setInputFiles('input[type="file"]', 'tests/UploadFiles/sample pdf.pdf');  //----> Uploading the file
    await page.waitForTimeout(4000);

    await page.locator('//button[@class="MuiButtonBase-root css-1a2gi7s"]').click(); //---> Clicking on Upload file

    await page.locator('(//div[@class="MuiBox-root css-70qvj9"])[3]').click(); //--> Clicking on Challenges Folder

    await page.waitForTimeout(2000);

    //--> Putting Assertion -->
    const docName = page.locator('//div[@title="My Document"]');
    let output = await page.locator('//div[@title="My Document"]').textContent();
    await expect(docName).toBeVisible();

    console.log("The New File Name is :- ", output);

});