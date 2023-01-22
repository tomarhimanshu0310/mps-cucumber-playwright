/*
import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('Go to the playwright website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input').waitFor();
  await page.locator('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input',).click()
  await page.locator('//ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div[1]/div[1]/input',).fill("Hello");
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  let loginXpath = global.pomElements.getElementValue("LoginPage","brokerUsername")
  console.log(loginXpath)
});

*/