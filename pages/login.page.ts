import { Page } from 'playwright';


//Prodcuts Class
export class LoginForm {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators = {

openLogin: () => this.page.locator('button.get-more-button-red[onclick="handleClickLoginFromMain()"]:has-text("ANMELDEN")'),
loginEmail: () => this.page.locator('#interstitial-login-email-input'),
loginPassword: () => this.page.locator('#interstitial-login-password-input'),
loginClick: () => this.page.locator('#interstitial-login-button')
    };


async openLoginForm() {
    await this.locators.openLogin().click();
}
async enterEmail(loginemail: string) {
    await this.locators.loginEmail().fill(loginemail);
}async enterPassword(loginpassword: string) {
    await this.locators.loginPassword().fill(loginpassword);
}async pressLoginBtn() {
    await this.locators.loginClick().click();
}
}