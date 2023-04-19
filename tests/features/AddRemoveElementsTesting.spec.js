const { test, expect } = require('@playwright/test');
const AddRemoveElementsPage = require("../pageObjects/AddRemoveElementsPage");

test.beforeEach(async ({ page }) => {
    await AddRemoveElementsPage.goToPage(page);
  });
  
  test.describe('Tests things On The AddRemoveElements page', () => {
  
    test('Verify The AddRemoveElements Testing URL', async ({ page }) => {
      await AddRemoveElementsPage.goToPage(page);
      await expect(page).toHaveURL(AddRemoveElementsPage.pageURL);
    })

    test('Verify by default, there is only one Add Element Button on the page', async ({ page }) => {
        await expect(page.locator(AddRemoveElementsPage.addElementButton)).toHaveCount(1);
    })
})
