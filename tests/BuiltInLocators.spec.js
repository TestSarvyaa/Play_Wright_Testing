import {test,expect} from '@playwright/test'
test('Built-In-Locators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {type : 'submit'}).click();

    const name = await page.locator('(//p[@class="oxd-userdropdown-name"])[1]').textContent();
    console.log("The name is :- ",name)
    
    await expect(await page.getByText(name)).toBeVisible();
})