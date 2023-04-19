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
        await expect(page.locator(AddRemoveElementsPage.deleteButton)).toHaveCount(2);
        
        await AddRemoveElementsPage.clickDeleteButton(page);
        await expect(page.locator(AddRemoveElementsPage.deleteButton)).toHaveCount(1);
    })

    test('Verify that there can be at least 20 delete buttons on the page', async ({ page }) => {
        for(let i=0; i < 20; i++){
            await AddRemoveElementsPage.clickAddElementButton(page);
        }
        await expect(page.locator(AddRemoveElementsPage.deleteButton)).toHaveCount(20);
    })
})
