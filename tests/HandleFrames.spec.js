import {test, expect} from '@playwright/test'

test.skip('HandleFrames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    let allFrames = await page.frames();
    console.log("Number of Frames:- ", allFrames.length);

    //-----Approach 1 :- By using the name or URL-------

    //const frame1 = await page.frame('name');  --> If name is avaialble
   // let frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}) //If name is not avaialable -->Getting frame into varaible
   // frame1.fill('//input[@name="mytext1"]', 'Sarvyaaaa');

    //await page.waitForTimeout(5000);

    //-------Approach 2 :- Using Frame Locator----------

   let inputBox = await page.frameLocator("frame[src='frame_1.html']").locator('//input[@name="mytext1"]')
   inputBox.fill('Welcome to Frame World....');

   await page.waitForTimeout(5000);
 
})

//---------------------------------------Practice Test of Mine-----------------------------------------------//
test('HandlingFrame', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //First Approach ---> By using the URL or Name 
 // let iFrame =  page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_2.html'});
  // iFrame.fill('//input[@name="mytext2"]','Welcome to Pune');
 
  // await page.waitForTimeout(3000);

   //Second Approach ---> By using the Frame Locator
    let mFrame = page.frameLocator('frame[src="frame_2.html"]').locator('//input[@name="mytext2"]');
    mFrame.fill('Sarvya is Monster');

    await page.waitForTimeout(3000);
})