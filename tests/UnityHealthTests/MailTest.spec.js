import {test, expect} from '@playwright/test'

test('MailTest', async({page})=>{

    await page.goto('https://talk.dev.unityhealth360.com');
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('deadpool');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Pass@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('list').locator('div').filter({ hasText: 'Settings' }).click();
    
   await page.waitForTimeout(3000);

    const email =  await page.locator('(//p[@class="MuiTypography-root MuiTypography-body1 css-qhw0se"])[6]').textContent();  
    console.log('Email :- ', email);

    await expect(page.getByRole('main').getByText('siddhesh.dongare@thinkitive.')).toBeVisible();
})