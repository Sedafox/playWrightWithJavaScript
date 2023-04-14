const { test, expect } = require('@playwright/test');


const pageURL = "https://playwright.dev/docs/intro";

export async function verifyPageURL(page){
    console.log("I am verifying the Button is visible");
    await expect(page).toHaveURL(pageURL);
}

