const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open the website
  await page.goto('https://demoqa.com/alerts');

  // Handle the dialog (alert/confirm/prompt)
  page.on('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept(); // Click OK
    // To click Cancel: await dialog.dismiss();
  });

  // Click the confirm button
  await page.click('#confirmButton');

  // Optional: wait 1 second to see that OK was clicked
  await page.waitForTimeout(1000);
  const result = page.locator('#confirmResult');
  console.log(await result.textContent()); // Output: You selected Ok

  await browser.close();
})();
