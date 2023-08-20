const {test , expect }  = require('@playwright/test');
const fs = require('fs');

test.only('First Test', async ({page})=>
{
  try {
    // Read the JSON file
    const jsonData = fs.readFileSync('/Users/amit.a.kumar/Documents/Playwright_POC/tests/urls.json', 'utf8');

     // Parse the JSON content
     const data = JSON.parse(jsonData);

     // Access the URLs from the "url" key
     const urls = data.url;
     
     async function addDelay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
      // Delay in milliseconds (5 minutes = 5 * 60 * 1000 ms)
    //  const delay = 1 * 60 * 1000;
      const delay = 500;
      // Add a 5-minute delay after each step
     // await addDelay(delay);
    //   var count  = 0 ;
    //  while(count<4)
    //  {
      
     // Visit each URL using Playwright
     for (const url of urls) {
       await page.goto(url);
       console.log(url);    
     }
     //await addDelay(delay);
     //count = count++ ;
     //}
   
  } catch (error) {
    console.error('Error', error);
  } finally {
    await page.close();
  }
});
