const { test, expect } = require('@playwright/test');
const ABTestingPage = require("../pageObjects/ABTestingPage");

//Runs this before each test
test.beforeEach(async ({ page }) => {
  await ABTestingPage.goToPage(page);
});

test.describe('Tests things On The ABTesting page', () => {

  test('Verify The AB Testing URL', async ({ page }) => {
    await ABTestingPage.verifyPageURL(page);
  })

  test('Verify The AB Testing Page displays a Bold Text that says: "No A/B Test"', async ({ page }) => {
    await ABTestingPage.verifyPageTitleSaysNoABTest(page);
    await ABTestingPage.verifyPageTitleIsBold(page);
  })
});