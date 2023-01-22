import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I should login into the application with "{broker}" credentials', async function (this: ICustomWorld) {
    const page = this.page!;

});
