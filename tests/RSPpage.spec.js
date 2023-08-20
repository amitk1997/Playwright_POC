const { test, expect } = require("@playwright/test");


test.only('Launch Browser', async ({page})=>
{
    await page.goto("https://backendnew.rta.altr.jp/memberships/memberships/edit/75428");
    await page.locator('#login_id').type('ts-rt-admin');
    await page.locator('#password').type('admin1234');
    await Promise.all([
        page.waitForNavigation(),
        page.locator('[type="submit"]').click(),
    ]);
    await page.locator("input#enable_point_input").click();
    var Checkboxstatus=await page.locator("input#enable_point_input").isChecked();
    await page.locator('[type="submit"]').click();
   
    await page.goto("https://stg.ticket.rakuten.co.jp/lots_api/events/15036/entry/9303");
    await page.locator("#loginInner_u").type("umesh.c@rakuten.com");
    await page.locator("#loginInner_p").type("Rakuten-123");
    //page.locator('.loginButton').click();
    await Promise.all([
    page.waitForNavigation(),
    page.locator('.loginButton').click(),
   // page.waitForLoadState('domcontentloaded'),
    ]);
   // await page.waitForLoadState('domcontentloaded');
    await page.locator('[type="button"]').last().click();
    await page.waitForLoadState('domcontentloaded');
    //await page.getByRole('button', { type: 'button' }).nth(3).click();
   // await page.locator("(//button[@type='button'])[4]").click();
    await page.locator("(//div[@id='root']//button[3])[1]").click();
    await page.locator("//button[contains(text(),'引取・決済へ')]").click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//p[contains(text(),'Mail')]").click();
    await page.locator("//p[contains(text(),'窓口支払')]").click();
    await page.locator("//button[contains(text(),'購入者情報へ')]").click();
    console.log("Value of chcek"+ Checkboxstatus);
    console.log(typeof(Checkboxstatus));
    if(Checkboxstatus==1)
    {
    await  expect((await page.locator("//span[contains(text(),'楽天ポイント口座 (半角数字)')]").isVisible())).toBeTruthy();
    console.log("if block");
    }
    else
    {
        await  expect((await page.locator("//span[contains(text(),'楽天ポイント口座 (半角数字)')]").isVisible())).toBeTruthy();
        console.log("else block");
    }
    await page.pause();  
});