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

    test('Verify that by default there are no delete buttons', async ({ page }) => {
        await expect(page.locator(AddRemoveElementsPage.deleteButton)).toHaveCount(0);
    })

    test('Verify that Clicking the Add Elements Button spawns a delete button', async ({ page }) => {
        await AddRemoveElementsPage.clickAddElementButton(page);
        await expect(page.locator(AddRemoveElementsPage.deleteButton)).toHaveCount(1);
    })

    test('Verify that Clicking the delete button will remove one of the delete buttons', async ({ page }) => {
        await AddRemoveElementsPage.clickAddElementButton(page);
        await AddRemoveElementsPage.clickAddElementButton(page);
        
        await AddRemoveElementsPage.clickDeleteButton(page);
    })
})
