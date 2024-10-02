import { Page } from 'playwright';

//Life Style Class
export class LifeStyleCategory {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators = {
        lifestyCategory: () => this.page.locator('menu-item.item-group-1[href="/lifestyle/"]'),
        lifestyproduct: () => this.page.locator('a').filter({ hasText: 'SLEEPWEAR SPECIAL' }).first(),
        lifestyproductDetail: () => this.page.locator('.gallery-item').first(),
     
    };

    async openLifestykeCategory() {
        await this.locators.lifestyCategory().click();

    }

    async openLifestyproduct() {
        await this.locators.lifestyproduct().click();

    }

    async openLifestyproductDetail() {
        await this.locators.lifestyproductDetail().click();

    }
    
    
}

