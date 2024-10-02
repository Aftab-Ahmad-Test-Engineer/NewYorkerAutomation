import { Page } from 'playwright';


//Get More Club Class
export class GetMoreClubCategory {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators = {
       
        getMoreClubCategory: () => this.page.locator('menu-item.item-group-1[href="/get-more-club/"]'),

    };

    async openGetMoreClubCategory() {
        await this.locators.getMoreClubCategory().click();
    }

    
    
}
