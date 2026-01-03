import { test, expect } from '@playwright/test';

test('Adding Template', async ({ page }) => {

    const tempName = "STAGE"
    const editedTempName= "A Edited Playwright Template"

    //Login into the System
    await page.goto('https://spice.stage.unityhealth360.com/auth/login');
    await page.getByRole('textbox', { name: 'Enter Username' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('stuart123');
    await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Pass@123');
    await page.getByRole('button', { name: 'Login' }).click();
    console.log('User has been Logged In Successfully.')
    await page.waitForTimeout(5000);
    

    //Navigating to the RPM Library
    //await page.locator('div').filter({ hasText: 'RPM Library' }).first().click();
    await page.locator('span').filter({ hasText: 'RPM Library' }).first().click();
    await page.waitForTimeout(5000);
    console.log("Successfully clicked on RPM Library Menu");

    //Clicking on the Add Template
    //await page.getByRole('button', { name: 'Add Templates' }).click();
    await page.locator('(//button[@tabindex="0"])[4]').click();
    await page.waitForTimeout(5000);
    console.log("Successfully clicked On Add Template");


    //Create Template
    //await page.waitForTimeout(2000);
    await page.locator('//input[@placeholder="Enter Name"]').fill(tempName)
   // const templateName = page.locator('#template');
    //await templateName.fill("Playwright Template");
    await page.locator('#templateContent').fill("I am learning the Automation Testing with Playwright with Java Script.");

    //await page.waitForTimeout(2000);

    console.log("Added Text inside the Template Content Box");
    await page.locator('//button[@type="submit"]').click(); //--> Clicked on Submit button
    console.log("Template has been Created Successfully");

    //Assertion for the Create Template
    const nameOfTemp = page.getByLabel(tempName , { exact: true });
    await expect(nameOfTemp).toBeVisible();

    //Assertion for Validation Message if user tries to save the template without entering the template name.
    // const validmsg = page.getByText('Template name is required', { exact: true });
    // let error = await validmsg.textContent();
    // console.log('Error Message :- ', error);
    // await expect(validmsg).toBeVisible();


    //Clicking on the Action Button of the Created Template
    //await page.locator("//span[normalize-space()='A Temp']/ancestor::div[contains(@class,'css-p980p')]/following-sibling::div//svg").click();
    //await page.locator(`(//span[text()='${tempName}']/../following-sibling::div)[3]`).click();
    await page.locator(`(//span[text()='${tempName}']/../following-sibling::div/div/div/div)`).click();
    await page.waitForTimeout(10000);

    //await templateRow.click();
    //await templateRow.getByTestId('MoreVertIcon').click();
    //await templateRow.locator('svg').nth(0).click();
    console.log("Successfully clikced on Action Button");
    //await page.waitForTimeout(2000);

    await page.locator("//button[text()='Edit']").isVisible();
    //Clicking on the Edit Button
    await page.locator("//button[text()='Edit']").click();
    //await page.getByRole('button', { name: 'Edit' }).click();
    console.log("Successfully clicked on Edit Button");


    //Editing the Template Name and Content
    await page.waitForTimeout(3000);
    const inputBoxofTemplate = page.locator('//input[@placeholder="Enter Name"]');
    await inputBoxofTemplate.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
   // await page.locator('//input[@placeholder="Enter Name"]').fill('A Edited Template');
    //await page.locator('//input[@placeholder="Enter Name"]').click();
    //await page.waitForTimeout(3000);
    //await page.keyboard.press('Control+A');
    //const editedTemplateName = page.locator('//input[@placeholder="Enter Name"]');
    await inputBoxofTemplate.fill(editedTempName);

    //Clicking on Save Button After Editing the Template
    await page.locator('//button[@type="submit"]').click();
    console.log('Template has been updated successfully.');

    //Assertion for the Edited Template
    const newTemp = page.getByLabel(editedTempName);
    await expect(newTemp).toBeVisible();

    const deltempactionbtn = page.locator(`(//span[text()='${editedTempName}']/../following-sibling::div/div/div/div)`).click();
   // await newTemp.locator('svg').nth(0).click()
    await page.locator("//button[text()='Delete']").click()

    await page.waitForTimeout(5000);
    //Confirm delete pop up
    await page.getByRole('button', { name: 'Delete' }).click();
    console.log("Template has been Deleted Successfully.");

    //Assertion for the Delete Template.
    await expect(newTemp).not.toBeVisible();    

});     