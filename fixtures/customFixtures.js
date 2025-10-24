// fixtures/customFixtures.js
import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { LandingPage } from "../pages/LandingPage.js";
import { HTMLPlaygroundPage } from "../pages/HTMLPlaygroundPage.js";
import { HTMLPlaygroundAPIMockPage } from "../pages/HTMLPlaygroundAPIMockPage.js";
import { attachScreenshotOnFailure } from "../utils/helpers.js";

export const test = base.extend({
  loginPage: async ({ page }, use, testInfo) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
    await attachScreenshotOnFailure(page, testInfo);
  },

  landingPage: async ({ page }, use, testInfo) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
    await attachScreenshotOnFailure(page, testInfo);
  },

  htmlPlaygroundPage: async ({ page }, use, testInfo) => {
    const htmlPage = new HTMLPlaygroundPage(page);
    await use(htmlPage);
    await attachScreenshotOnFailure(page, testInfo);
  },

  htmlPlaygroundAPIMockPage: async ({ page }, use, testInfo) => {
    const htmlPage = new HTMLPlaygroundAPIMockPage(page);
    await use(htmlPage);
    await attachScreenshotOnFailure(page, testInfo);
  },
});

export { expect } from "@playwright/test";
