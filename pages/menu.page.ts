import { Page } from 'playwright';

export class MenuPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators = {
        
        openMenu: () => this.page.locator('.left-items .hamburger-menu')
    
    };

    async openMenu() {
        await this.locators.openMenu().click();
    }
}
