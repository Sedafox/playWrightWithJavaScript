const { test, expect } = require('@playwright/test');

const homePage = require('../pageObjects/homePage');
const installPage = require('../pageObjects/installPage');

//Runs this before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test.describe('Tests Things On The Home Page', () => {

  test('Get Started Button on the Home Page Takes User to Install Page', async ({ page }) => {

      //Verify the Get Started button is visible
      await homePage.verifyButtonIsVisible(page);

      //Click the Get Started Button
      await homePage.clickGetStartedButton(page);

      //Verify we were directed to the install page
      await installPage.verifyPageURL(page);
  })

  test('An image displaying the different browsers PlayWright supports is displayed', async ({ page }) => {

    //assert the img displaying the browsers is displayed
    await homePage.verifyBrowserImgIsDisplayed(page);
  })

  test('When hovering over Node.js in the top bar, Node.js, Python, Java, and .NET are displayed', async ({ page }) => {
    
    //Hover over the node.js in the top bar
    await homePage.hoverOverNodeJSInTopBar(page);

    //Assert the Menu is displayed
    await homePage.verifyNodeJSMenuIsDisplayed(page);

    //Assert the Menu contains Node.JS, Python, Java, and .NET are displayed
    const menuItems = ['Node.js', 'Python', 'Java', '.NET'];
    
    menuItems.forEach((x) => homePage.verifyDropDownMenuItems(page, x));
  })

})
