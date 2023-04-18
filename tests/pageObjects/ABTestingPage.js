const { test, expect } = require('@playwright/test');
const { baseURL } = require('../pageObjects/SharedPage');

//Variables
const pageURL = baseURL + "/abtest";
//End of Variables

//Page Objects
const pageTitle = (page) => {return page.locator("#content > div > h3");}
//End of Page Objects

export async function goToPage(page){
    await page.goto(pageURL);
}

export async function verifyPageURL(page){
    await expect(page).toHaveURL(pageURL);
}

export async function verifyPageTitleSaysNoABTest(page){
    await expect(pageTitle(page)).toHaveText("No A/B Test");
}

export async function verifyPageTitleIsBold(page){
    await expect(pageTitle(page)).toHaveCSS("font-weight", "700"); //In our case, 700 is bold.
}