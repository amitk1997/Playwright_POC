const {test,expect} = require('@playwright/test')


test("hide and visble method",async({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
expect(await page.locator('#displayed-text')).toBeVisible();
await page.locator('#hide-textbox').click();
expect(await page.locator('#displayed-text')).toBeHidden();
await page.on('dialog',dialog=>dialog.dismiss());
await page.locator('#confirmbtn').click();
await page.pause();
await page.locator('#confirmbtn').click();
await page.locator('#mousehover').hover();


});