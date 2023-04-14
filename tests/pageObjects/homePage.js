const { test, expect } = require('@playwright/test');

//Top Menu Bar
const nodeJSMenuBarButton = "//a[text()='Node.js' and @class='navbar__link']";
const nodeJSDropDownMenu = ".dropdown__menu"
const nodeJSDropDownMenuItems = "//ul[@class='dropdown__menu']//li//a"
//End of Top Menu Bar

//Buttons
const getStartedButton = ".getStarted_Sjon";
//End Buttons

//Img
const browserImg = "//img[@src='img/logos/Browsers.png']";
//End Img


export async function verifyButtonIsVisible(page){
    console.log("I am verifying the Button is visible");
    await expect(page.locator(getStartedButton)).toBeVisible();
}

export async function clickGetStartedButton(page){
    console.log("I am going to click the button");
    await page.locator(getStartedButton).click();
}

export async function verifyBrowserImgIsDisplayed(page){
    console.log("I am asserting the img is displayed");
    await expect(page.locator(browserImg)).toBeVisible();
}

export async function hoverOverNodeJSInTopBar(page){
    console.log("I am hovering over the Node JS Button");
    page.locator(nodeJSMenuBarButton).hover();
}

export async function verifyNodeJSMenuIsDisplayed(page){
    console.log("I am verifying the node JS menu is displayed");
    await expect(page.locator(nodeJSDropDownMenu)).toBeVisible();
}

export async function verifyDropDownMenuItems(page, item){
    console.log(`I am verifying ${item} is displayed in the node JS menu`);
    expect(page.locator(`${nodeJSDropDownMenuItems}[text()='${item}']/..`)).toBeTruthy();
}