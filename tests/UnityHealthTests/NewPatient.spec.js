import { test, expect } from '@playwright/test';

test('NewPatient', async ({ page }) => {
  await page.goto('https://english.qa.unityhealth360.com/auth/login');
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('ricky123');
  await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Pass@123');
  await page.getByRole('button', { name: 'Login' }).click();


  //Clicking on the New Patient
  await page.getByRole('button', { name: 'New Patient' }).click();
 // console.log("Successfully Clicked on the New Patient Button");

  await page.waitForTimeout(3000);

  //Clicking on the Enter Patient Details 
  await page.getByRole('button', { name: 'Enter Patient Details' }).click();
 //console.log("Successfully clicked on the Enter Patient Details button");

  await page.waitForTimeout(3000);

 //Patient Details Text Locator 
  const text = page.getByText('PATIENT DETAILS');

  //Assertion for the Text (Patient Details) are visible or not
  await expect (text).toBeVisible();

 // console.log("----------------------------------------")
 // console.log("Test Passed Successfully")

  //Entering the First Name and Last Name
  await page.getByRole('textbox', { name: 'Enter First Name' }).fill("Micheal");
  await page.getByRole('textbox', { name: 'Enter Last Name' }).fill("Nesaar");

  //Selecting Gender
  await page.locator('#mui-component-select-gender').click();
  await page.getByText('Male', { exact: true }).click();
  //console.log("Gender Has Been Successfully Selected")

  
 //DOB Selection
  const datePicker = page.locator('input').nth(0);
  //await datePicker.waitFor({ state: 'visible' });
  //await datePicker.click();
  await datePicker.fill('15/11/1989');
 // await datePicker.press('Enter');

  console.log("Successfully Selected the DOB");

  //Entering Mobile Number
  await page.locator('#phone').fill('8053818885');

  console.log("Successfully Added Mob Number.");
  //Clicking on Upload Profile Photo
  //await page.getByText('Drop Here Image', { exact: true }).click();


  //Uploading File
  await page.setInputFiles('input[type="file"]','tests/UploadFiles/David Warner.jpg');
  

  //Waiting Until the close Button Appears
  const closeBtn = page.locator('button').nth(1);
  await expect(closeBtn).toBeEnabled();


  await page.waitForTimeout(3000);
  console.log("File Uploaded Successfully...");


  //await page.getByRole('button', { name: 'Save & Next' }).click();

  await page.waitForTimeout(3000);

  const validationMessage = page.getByText('First Name is required', { exact: true });

  //Assertion for Validation Message.
  await expect(validationMessage).toBeVisible();

  console.log("Validation Message Displayed Successfully.");

 // console.log("Patient Created Successfully...");

});