import { test, expect } from '@playwright/test';

test.describe('Create New Patient Test', () => {
  test('should create a new patient with mandatory details and verify it appears in the patient list', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://stage_ketamin.uat.provider.ecarehealth.com/auth/login');
    
    // Wait for the page to load
    await page.waitForTimeout(3000);
    await expect(page.locator('heading:has-text("Welcome to eCarehealth")')).toBeVisible();
    
    // Login with provided credentials
    await page.getByRole('textbox', { name: 'Email' }).fill('amol.shete+TP@medarch.com');
    await page.getByRole('textbox', { name: '*********' }).fill('Test@123$');
    await page.getByRole('button', { name: 'Let\'s get Started' }).click();
    
    // Wait for the scheduling page to load
    await expect(page).toHaveURL(/.*scheduling\/appointment/);
    
    // Click on Create dropdown
    await page.locator('div').filter({ hasText: /^Create$/ }).nth(1).click();
    
    // Click on New Patient from the dropdown menu
    await page.getByRole('menuitem', { name: 'New Patient' }).click();
    
    // Wait for the Add Patient dialog to appear
    await expect(page.locator('dialog').getByText('Add Patient')).toBeVisible();
    
    // Click on "Enter Patient Details" option
    await page.locator('div').filter({ hasText: /^Enter Patient Details$/ }).click();
    
    // Click Next to proceed to patient details form
    await page.getByRole('button', { name: 'Next' }).click();
    
    // Wait for the patient details form to load
    await expect(page.locator('text=PATIENT DETAILS')).toBeVisible();
    
    // Fill mandatory patient details
    await page.getByRole('textbox', { name: 'First Name *' }).fill('Sarvesh');
    await page.getByRole('textbox', { name: 'Last Name *' }).fill('Test');
    await page.getByRole('textbox', { name: 'Date Of Birth *' }).fill('01-01-1990');
    
    // Select Gender as Male
    await page.locator('form').filter({ hasText: 'Gender *Gender *' }).getByLabel('Open').click();
    await page.getByRole('option', { name: 'Male', exact: true }).click();
    
    // Fill contact information
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('8856099567');
    
    // Generate a unique email to avoid conflicts
    const timestamp = Date.now();
    const uniqueEmail = `sarvesh.patient.${timestamp}@mailinator.com`;
    await page.getByRole('textbox', { name: 'Email *' }).fill(uniqueEmail);
    
    // Save the patient
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Wait for success message and verify patient is created
    await expect(page.locator('text=Patient Details Added Successfully')).toBeVisible();
    
    // Verify we are redirected to the patients page
    await expect(page).toHaveURL(/.*provider\/patients/);
    
    // Wait for the patient list to load
    await page.waitForTimeout(3000);
    
    // Verify the new patient appears in the patient list
    await expect(page.locator('text=Sarvesh Test')).toBeVisible();
    
    // Verify patient details in the list
    const patientRow = page.locator('text=Sarvesh Test').locator('..');
    await expect(patientRow.locator('text=35 yrs - Male')).toBeVisible();
    await expect(patientRow.locator('text=01/01/1990')).toBeVisible();
    await expect(patientRow.locator('text=(885) 609-9567')).toBeVisible();
    await expect(patientRow.locator('text=Active')).toBeVisible();
    
    console.log('✅ Test completed successfully: New patient created and visible in the list');
  });
});