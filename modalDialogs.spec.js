const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false }); // headless false → browser will be visible
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open the website
  await page.goto("https://demoqa.com/modal-dialogs");

  // Open the small modal
  await page.click('#showSmallModal');

  // Click the Close button
  await page.click('#closeSmallModal');

  // Optional: wait a bit to see that the modal has closed
  await page.waitForTimeout(1000);

  await browser.close();
})();
