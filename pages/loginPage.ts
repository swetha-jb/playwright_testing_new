import { Page } from "@playwright/test";
import { LoginLoc } from "../locators/loginLoc";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterTheUsername(username: string) {
    await this.page.fill(LoginLoc.email_input_loc, username);
  }

  async enterThePassword(password: string) {
    await this.page.fill(LoginLoc.password_input_loc, password);
  }

  async clickOnSignInButton() {
    await this.page.click(LoginLoc.signIn_button_loc);
    await this.page.waitForTimeout(5000);
  }
}
