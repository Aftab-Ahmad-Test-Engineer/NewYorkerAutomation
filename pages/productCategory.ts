import { Page } from 'playwright';


//Prodcuts Class
export class ProductsCategory {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators = {
    
        productsCategory: () => this.page.locator('menu-item.item-group-1[href="/products/?gender=MALE"]'),
        productDetail: () => this.page.locator('a[href="/products/detail/05.03.105.1152/001?gender=MALE"]'),
        clickMore: () => this.page.locator('a[href="/get-more-club"]'),
        editProfile: () => this.page.locator('._user-edit_hozc3_121'),
        dobField: () => this.page.locator('input.au-target.flatpickr-input')
    };

   
    async openProductCategory() {
        await this.locators.productsCategory().click();
    }

    async openProductDetail() {
        await this.locators.productDetail().click();
    }

    async openClickMore() {
        await this.locators.clickMore().click();
    }

    async editUserProfile() {
        await this.locators.editProfile().click();
    }


async clickDob() {
       await this.locators.dobField().click();
    }
   


    async openDobField() {
        if (await this.locators.dobField().isVisible()) {
            console.log('Date of Birth field found. Test case stopped');
            return
        } else {
            console.log('Looking for Dob');
        }
    }

}

