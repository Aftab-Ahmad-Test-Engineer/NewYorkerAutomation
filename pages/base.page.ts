import { Page } from 'playwright';

export class BasePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators = {
        germanyLocator: () => this.page.locator('div.country:has-text("Germany | Deutschland")'),
        goButton: () => this.page.locator('button:has-text("GO")'),
        coockies: () => this.page.locator('.cookie-banner-controls').getByText("Alle Cookies akzeptieren"),
        menLink: () => this.page.locator('.cg-select.men')

    };

    
    
    
    async navigateToHome() {
        await this.page.goto('https://www.newyorker.de/');
    }
    async selectCountry() {
        await this.locators.germanyLocator();
    }

    async clickGo() {
        await this.locators.goButton().click();
    }

    async acceptCookies() {
        await this.locators.coockies().click();
    }

    async clickMenLink() {
        await this.locators.menLink().click();
    }

}
