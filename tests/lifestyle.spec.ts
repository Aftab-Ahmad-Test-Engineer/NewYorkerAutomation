import {test, expect, Browser, Page} from 'playwright/test';
const {webkit, firefox, chromium} = require('playwright/test');
import { BasePage } from '../pages/base.page';
import { SignupPage } from '../pages/signup.page';
import {MenuPage } from '../pages/menu.page';
import {ProductsCategory} from '../pages/productCategory';
import {LifeStyleCategory } from '../pages/lifestyle.page';
import { LoginForm } from '../pages/login.page';




const randomAlphabet = String.fromCharCode(Math.floor(Math.random() * 10) + 98);
const email = `${randomAlphabet}$123${randomAlphabet}100023${randomAlphabet}${randomAlphabet}@gmail.com`;


//Select Life Style Test Class
test('This test case verifies the opening of lifestyle Category starting from login', async () => {
    const browser: Browser = await chromium.launch({ headless: false});
    const page: Page = await browser.newPage();

    const loginPage = new LoginForm(page);
    const basePage = new BasePage(page);
    const menuPageOpener = new MenuPage(page);
    const openlifestyCategory = new LifeStyleCategory(page);
    const selectProductCategory = new ProductsCategory(page);

//Base Steps
    await basePage.navigateToHome();
    await basePage.clickGo();
    await basePage.acceptCookies();
    await basePage.clickMenLink();

//Login steps
     await loginPage.openLoginForm();
     await loginPage.enterEmail('aftab.ahmadpro@gmail.com');
     await loginPage.enterPassword('Aftab12345');
     await loginPage.pressLoginBtn();

//Open Menu
    await menuPageOpener.openMenu();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Menu_LifeCycle_TC.png' });

//Select Category
    await openlifestyCategory.openLifestykeCategory();
    await openlifestyCategory.openLifestyproduct();
    await openlifestyCategory.openLifestyproductDetail();
    await selectProductCategory.openClickMore();
    await selectProductCategory.editUserProfile();
    await selectProductCategory.clickDob();
    await selectProductCategory.openDobField();
    browser.close();

});


//Select Life Style Test Class
test('This test case verifies the opening of lifestyle Category starting from Signup', async () => {
    const browser: Browser = await chromium.launch({ headless: false});
    const page: Page = await browser.newPage();

    const basePage = new BasePage(page);
    const menuPageOpener = new MenuPage(page);
    const openlifestyCategory = new LifeStyleCategory(page);
    const selectProductCategory = new ProductsCategory(page);
    const signupPage = new SignupPage(page);

//Base Steps
    await basePage.navigateToHome();
    await basePage.clickGo();
    await basePage.acceptCookies();
    await basePage.clickMenLink();

//SignUp 
    await signupPage.clickRegister();
    await signupPage.fillEmail(email);
    await signupPage.fillPassword('Aftab12345');
    await signupPage.repeatFillPassword('Aftab12345');
    await signupPage.fillFirstnameField('Aftab');
    await signupPage.fillLastnameField('Ahmad');
    await signupPage.fillCheckbox();
    await signupPage.pushSubmitForm();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Signup_Successfull_TC.png' });
    await signupPage.clickCloseBtn();

//Open Menu
    await menuPageOpener.openMenu();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Menu_LifeCycle_TC.png' });

//Select Category
    await openlifestyCategory.openLifestykeCategory();
    await openlifestyCategory.openLifestyproduct();
    await openlifestyCategory.openLifestyproductDetail();
    await selectProductCategory.openClickMore();
    await selectProductCategory.editUserProfile();
    await selectProductCategory.clickDob();
    await selectProductCategory.openDobField();
    browser.close();

});
