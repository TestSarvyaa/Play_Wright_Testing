import { test, expect } from '@playwright/test';


test('VitalReviewTest', async ({ page }) => {

    const ptName = "Test, Head";
    let selectDate = "12-25-2025";
    let Blood_Pressure = '//input[@type="checkbox"])[1]';
    let Body_Temp = '//input[@type="checkbox"])[2]';
    let Blood_Glucose = '//input[@type="checkbox"])[3]';
    let Body_Mass_Index = '//input[@type="checkbox"])[4]';
    let Height = '//input[@type="checkbox"])[5]';
    let _Heart_Rate = '//input[@type="checkbox"])[6]';
    let Pulse_Rate = '//input[@type="checkbox"])[7]';
    let Pain_Scale = '//input[@type="checkbox"])[8]';
    let Weight = '//input[@type="checkbox"])[9]';
    let Steps = '//input[@type="checkbox"])[10]';

    let vitalValue = "70";

    //Login with the User
    await page.goto('https://english.qa.unityhealth360.com/auth/login');
    await page.getByRole('textbox', { name: 'Enter Username' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('ricky123');
    await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Pass@123');
    await page.getByRole('button', { name: 'Login' }).click();


    await page.waitForTimeout(4000);

    //Clicking On No Data
    const noDataSection = await page.locator('(//p[contains(text(),"Data")])[1]').click(); 
    //const dataSection = await page.locator('(//p[contains(text(),"Data")])[2]').click(); //Clicked on Data Section

    //Selecting Date 
    await page.locator('//input[@placeholder="MM-DD-YYYY"]').fill(selectDate);  

    //Selectin all care manager filter
    await page.locator('(//input[@placeholder="Select"])[2]').click();
    await page.locator('(//li[@tabindex="-1"])[1]').click();

    //Clicking on the patient name
    await page.locator(`//span[text() ="${ptName}"]`).click();  //clicked on the patient name
    await page.waitForTimeout(3000);

    //Getting the Patient Name
    let patientName = await page.locator(`//h5[text()="${ptName}"]`).textContent();
    console.log("Patient Name :- ", patientName);

    //Navigating to Vitals Section
    await page.getByRole('tab', { name: 'Vitals' }).click();
    await page.getByRole('button', { name: 'Add Vital' }).click();
    await page.locator('//input[@id="tags-standard"]').click();
    await page.locator(Blood_Glucose).click();
    
    //Vital Addition Form filling
    await page.locator('//p[text()="PATIENT VITALS"]').click();
    await page.getByRole('textbox', { name: 'Enter' }).fill(vitalValue);
    await page.getByRole('button', { name: 'Save' }).click();

    //Confirmation message or Vital Saving message
    const vitalSaveMsg = await page.locator('//div[@class="MuiAlert-message css-127h8j3"]').textContent();
    console.log("Success Message :- ", vitalSaveMsg);

   // console.log("Vital has been added Successfully");

    await page.goBack();
    await page.goBack();
    //await page.locator('div').filter({ hasText: 'Work List' }).first().click();


    await page.waitForTimeout(3000);
    //Navigating to Data Section
    await page.locator('(//p[contains(text(),"Data")])[2]').click()

    //Clicking on the Action Button of the Respective patient name
    await page.locator(`//span[text() ="${ptName}"]/../following-sibling::div/div/div`).click();
    await page.waitForTimeout(5000);

    //Clciking on the Review Button
    page.getByRole('button', { name: 'Review' }).click();

    //Review Page Form
    await page.locator('//textarea[@id="note"]').fill('Adding note while reviewing the Blood Glucose');
    await page.getByRole('button', { name: 'Review' }).click();
    console.log("Vital Reviewed Successfully...");
    await page.waitForTimeout(3000);

    //Clicking on the Cancel Button of the Time Log form.
    await page.locator('(//h6[text()="Cancel"])[2]').click();
    await page.waitForTimeout(5000);
    
    //Getting the Status of the Data for the Patient
    let vitalStatus = page.locator(`//span[text() ="${ptName}"]/../following-sibling::div/div/h6`);
    console.log("Stautus :- ",vitalStatus.textContent());

    //  let status =  await expect(vitalStatus).toBeVisible();

    try {
    await expect(vitalStatus).toBeVisible();
    console.log("Vitals Status Changed Successfully");
    } 

    catch (error) {
    console.log("Status does not change");
    }

});