import { expect, test } from "@playwright/test";
import { count } from "console";

//------ ✅  This script is useful for getting the patient names who does not send the data Today.  ✅//------------
test('NoDataRecord',async ({page})=>{

    test.setTimeout(40000000); 
    page.goto('https://android.app.unityhealth360.com/auth/login');

    //------ ✅     Login with the Provider Credentials      ✅----------
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('suresh');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Suresh@123');
    await page.getByRole('button', { name: 'Login' }).click();

    //------ ✅      Clicking on the Care Team Work List     ✅----------
    await page.click('(//button[@role="tab"])[2]');


    //------ ✅      Navigating to No Data Bucket  (RPM)   ✅----------
    await page.locator('//*[@id="root"]/div/div/main/div/div/div[2]/div/div[1]/div[2]/div/div/table/tbody/tr[2]/td[1]').click();


    //------ ✅     Changing The Pagination to 50 Records per Page    ------ ✅

    await page.click('(//div[@role="combobox"])[2]');
    await page.click('//li[@data-value="100"]');

    await page.waitForTimeout(3000); //---> Waiting for all the record to be visible.
    
    //------ ✅      Records on the Patient to No Data Bucket     ✅----------
    const patientsName = await page.locator('//span[@class="MuiTypography-root MuiTypography-title2 css-10q2tbw"]').elementHandles();

    for(const patient of patientsName)
    {
        let nameOfPateint = await patient.textContent();
        console.log("Name Of Patient:- ", nameOfPateint)
        

        console.log('Test Started');
       const patientsName = await page.locator('//span[@class="MuiTypography-root MuiTypography-title2 css-10q2tbw"]').elementHandles(); //Refetching the loator to avoid the stale element error.
       //console.log('');
        //------ ✅     Clicking on the Patient Name to get the details of the patient    ✅----------
        await page.waitForTimeout(3000);
        await patient.click();   //----> This line throwing error in the second iteration.
        await page.waitForTimeout(2000);

        //------ ✅     Click on the Vitals Section   ✅----------
        await page.click('(//button[@role="tab"])[2]');
        //  await page.waitForTimeout(3000);

        // ------ ✅  Click on Add Vital Button    ✅----------
        await page.click('//button[normalize-space()="Add Vital"]');
        await page.waitForTimeout(2000);

         //------ ✅ Click the Dropdown to select the Vital Type   ✅----------
        await page.click('(//input[@type="text"])[3]');
        await page.waitForTimeout(2000);

        //------ ✅  Selecting the Vital Type from the Dropdown   ✅----------  
        await page.click('(//input[@type="checkbox"])[3]');

        //------ ✅  Filling the Vitals Value   ✅----------
        await page.fill('//input[@id="bloodGlucose"]', '85');

        //------ ✅  Clicking on the Save Button   ✅----------
        await page.click('//button[@type="submit"]');
        await page.waitForTimeout(3000);

         //------ ✅ Confirmation Message after Saving the Vitals   ✅----------
         const confirmationMessage = await page.locator('//div[@class="MuiAlert-message css-127h8j3"]').textContent()
        // console.log("Confirmation Message:- ", confirmationMessage);
            if(confirmationMessage.includes('Vitals Saved Successfully'))
            {
                //------ ✅  Clicking on the Worklist Tab   ✅----------
                await page.click('(//div[@class="MuiListItemText-root css-14rdsw0"])[1]');
                await page.waitForTimeout(3000);

                //------ ✅      Clicking on the Care Team Work List     ✅----------
                await page.click('(//button[@role="tab"])[2]');

                 //------ ✅      Navigating to No Data Bucket  (RPM)   ✅----------
                await page.locator('//*[@id="root"]/div/div/main/div/div/div[2]/div/div[1]/div[2]/div/div/table/tbody/tr[2]/td[1]').click();

                 //------ ✅     Changing The Pagination to 50 Records per Page    ------ ✅
                await page.click('(//div[@role="combobox"])[2]');
                await page.click('//li[@data-value="100"]');

                await page.waitForTimeout(5000); //---> Waiting for all the record to be visible.

                console.log('Test Ended');
            }

            else
              {
                const errorMessage = await page.locator('//div[@class="MuiAlert-message css-127h8j3"]').textContent();
                console.log("Error Message:- ", errorMessage);
                console.log("Patient Name:- ", nameOfPateint);
                continue;
            } 
    }
        console.log(patientsName.length, "Patients are there in the No Data Bucket"); //------ ✅  Total Number of Patients in the No Data Bucket   ✅----------
    // await page.waitForTimeout(3000);
  
})