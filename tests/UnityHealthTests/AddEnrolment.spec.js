import { expect, test } from "@playwright/test";

test('Add Enrollment', async({page})=>{

    await page.goto('https://android.app.unityhealth360.com/auth/login');
    await page.getByRole('textbox', { name: 'Enter Username' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('suresh');
    await page.getByRole('textbox', { name: 'Enter Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Suresh@123');
    await page.getByRole('button', { name: 'Login' }).click();


    await page.locator('li').filter({ hasText: 'Enrollments' }).first().click();
    await page.locator('(//button[@tabindex="0"])[5]').click();


    await page.waitForTimeout(5000);
    console.log("Clicked on the Add Enrollment Button");


    await page.getByPlaceholder('Search', { exact: true }).click();
    await page.getByPlaceholder('Search', { exact: true }).fill('Log');


    await page.locator('li:has-text("Log, Time")').click();
    console.log("Patient Selected Successfully");


    await page.getByText('Select Service', { exact: true }).click();
    await page.getByText('Remote Therapeutic Monitoring (RTM)', { exact: true }).click();


    await page.getByRole('combobox', { name: 'Search & Select Provider' }).click();
    await page.locator('li:has-text("David Miller Provider")').click();


    await page.getByRole('combobox', { name: 'Search & Select Primary Care Manager' }).click();
    await page.locator('li:has-text("Suresh Raina")').click();


    await page.getByRole('combobox', { name: 'Search & Select Diagnoses' }).click();
    await page.locator("//li[@id='tags-standard-option-0']//input[@type='checkbox']").click();
    await page.locator("li[id='tags-standard-option-2'] input[type='checkbox']").click();


    await page.locator('h5:has-text("NEW ENROLLMENT")').click();
    console.log("Conditions Selected Successfully..");
    
    
})