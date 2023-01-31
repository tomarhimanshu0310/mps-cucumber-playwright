import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { WebActions } from './WebActions';

let webActions;

Given('I should land on {string}', async function (this: ICustomWorld, screen : string){
  webActions = new WebActions(this.page)
  await webActions.navigateToURL(config.BASE_URL)
});


When('{string} title should be {string}', async function (this: ICustomWorld, screen : string, title:string){
  if (screen== "Homepage"){
    let firstTitleXpath = global.pomElements.getElementValue("","")
    let secondTitleXpath = global.pomElements.getElementValue("","")

    let firstTitleVal = await webActions.getTextFromWebElements(firstTitleXpath)
    let secondTitleVal = await webActions.getTextFromWebElements(secondTitleXpath)
    let actualTitle = firstTitleVal.concat(secondTitleVal)
  
    expect(title).toEqual(actualTitle);
  }
});


Then('I select the role of the user as {string}', async function (this: ICustomWorld, role : string){
  let roleXpath = global.pomElements.getElementValue("","")    
  if(role=="Broker"){
    await webActions.selectOptionFromDropdown(roleXpath,"Broker")
  }else{
    await webActions.selectOptionFromDropdown(roleXpath,"Insurer")
  }
});


Then('Select the {string} name from the Servicer dropdown', async function(this:ICustomWorld, servicer:string) {
  let servicerXpath = global.pomElements.getElementValue("","") 
  if(servicer == "Broker"){
    await webActions.selectOptionFromDropdown(servicerXpath,"Broker")
  }else{
    await webActions.selectOptionFromDropdown(servicerXpath,"Insurer")
  }
});


Given('I select {string} value for creating a new draft quote', async function(this:ICustomWorld, quoteTitle: string){
  let newDraftQuoteXpath = global.pomElements.getElementValue("","")
  await webActions.clickElement(newDraftQuoteXpath)
});


When('I select the Policy templates as {string}', async function(this:ICustomWorld, product: string) {
  let MISCIPXpath = global.pomElements.getElementValue("","")
  await webActions.clickElement(MISCIPXpath)
});




Given('Go to the playwright website', async function (this: ICustomWorld) {
  const page = this.page!;
  // await page.goto(config.BASE_URL)
  await webActions.navigateToURL(config.BASE_URL)
  await webActions.verifyElementIsDisplayed('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input','Not visible')
  // await page.locator().waitFor();
  await webActions.clickElement('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input')
  // await page.locator('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input',).click()
  await webActions.enterElementText('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input','Heloo')
  // await page.locator('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input',).fill("Hello");
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  let loginXpath = global.pomElements.getElementValue("LoginPage","brokerUsername")
  console.log(loginXpath)
});

When('Change theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const html = page.locator('html');
  const current = await html.getAttribute('data-theme');
  if (current !== mode) {
    await page.locator('nav >> button[title*="dark and light mode"]').click();
  }
  await page.waitForSelector(`html[data-theme=${mode}]`);
});

Then('We see {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const theme = await page.locator('html').getAttribute('data-theme');
  expect(theme).toEqual(mode);
});
