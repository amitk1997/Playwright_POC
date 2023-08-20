const {test , expect }  = require('@playwright/test');

test.only('First Test', async ({browser})=>
{ 
 const context = await browser.newContext();
 const page = await context.newPage();
 const username = page.locator('#loginInner_u');
 const password = page.locator('#loginInner_p');
 const submitbutton = page.locator("[type = 'submit']")

// await page.goto("https://ticket.rakuten.co.jp/");
 await page.goto("https://stg.ticket.rakuten.co.jp/lots_api/events/15036/entry/9303");
 await username.fill("realots7@test.com");
 await password.type("test@123");
 await submitbutton.click();
 await page.waitForLoadState('networkidle');
 console.log("Login step done ");

 const Eventname = await page.locator("[class = 'MuiTypography-root MuiTypography-body1 css-1bo0gaa']").textContent();
 console.log(Eventname);
 await page.pause();
 console.log(await page.title());
 await expect(page).toHaveTitle('チケット抽選申込・販売・購入');
 
});