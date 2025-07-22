import { expect, test } from "@playwright/test";

test('HandleNestedFrame', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

  // Wait for nested iframe inside frame3
  const childFrames = frame3.childFrames();
  const nestedFrame = childFrames[0]; // Assuming only one child frame

  // ✅ Check the checkbox
  await nestedFrame.locator('//*[@id="i6"]/div[3]/div').click();

  // ✅ Click the "Choose" dropdown
  await nestedFrame.locator('//*[@id="i21"]/div[2]').click();

  // ✅ Wait for dropdown options to be visible
  await nestedFrame.locator('(//span[@class="vRMGwf oJeWuf"])[1]').click();
  (await nestedFrame.waitForSelector('(//span[@class="vRMGwf oJeWuf"])[1]', { state: 'visible' })); //---> Not able to select the oprtion from the dropdown

  // ✅ Select the desired dropdown option ("Yes")
  await nestedFrame.locator('//span[text()="Yes"]').click();

  await page.waitForTimeout(3000);
});
