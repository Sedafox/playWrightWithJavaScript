const { test, expect } = require('@playwright/test');
const { baseURL } = require('../pageObjects/SharedPage');

//Variables
export const pageURL = baseURL + "/add_remove_elements/";
//End of Variables

//Page Objects
    //Buttons
    export let addElementButton = "#content > div > button";
    export let deleteButton = "#elements > button";
    //End of Buttons
//End of Page Objects

export async function goToPage(page){
    await page.goto(pageURL);
}

export async function clickAddElementButton(page){
    await page.locator(addElementButton).click();
}

export async function clickDeleteButton(page){
    await page.locator(deleteButton).first().click();
}