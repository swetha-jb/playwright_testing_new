import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe("Login Tests", () => {
  test("Login with valid credentials", async ({ page }) => {
    await page.goto("https://accounts2.netgear.com/login?redirectUrl=https:%2F%2Finsight.netgear.com%2F&clientId=6dlf5ppqm5oic7hhtk68qrlc9j");

    const loginPage = new LoginPage(page);
    await loginPage.enterTheUsername("viku.prod@yopmail.com");
    await loginPage.enterThePassword("Netgear1@");
    await loginPage.clickOnSignInButton();
  });
});
