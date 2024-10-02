import {test, expect, Browser, Page} from 'playwright/test';
import { webkit, firefox, chromium } from 'playwright';
import { BasePage } from '../pages/base.page';
import {MenuPage } from '../pages/menu.page';
import {ProductsCategory} from '../pages/productCategory';
import {GetMoreClubCategory } from '../pages/getMoreClub.page';
import { LoginForm } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';

const randomAlphabet = String.fromCharCode(Math.floor(Math.random() * 10) + 98);
const email = `${randomAlphabet}3432423${randomAlphabet}123${randomAlphabet}${randomAlphabet}${randomAlphabet}ord@gmail.com`;

//Get More Club Test Class 1
test('This test case verifies the opening of Get more club Category starting from login', async () => {
    const browser: Browser = await chromium.launch({ headless: false});
    const page: Page = await browser.newPage();

    const loginPage = new LoginForm(page);
    const basePage = new BasePage(page);
    const menuPageOpener = new MenuPage(page);
    const selectProductCategory = new ProductsCategory(page);
    const selectGetMoreClubCategory = new GetMoreClubCategory(page);

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
    //await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Menu_Get_More_Club_TC.png' });

//Select Category
    await selectGetMoreClubCategory.openGetMoreClubCategory();
    await selectProductCategory.editUserProfile();
    await selectProductCategory.clickDob();
    await selectProductCategory.openDobField();
    browser.close();
    
});




//Get More Club Test Class 2
test('This test case verifies the opening of Get more club Category starting from Signup', async () => {
    const browser: Browser = await chromium.launch({ headless: false});
    const page: Page = await browser.newPage();


    const basePage = new BasePage(page);
    const signupPage = new SignupPage(page);
    const menuPageOpener = new MenuPage(page);
    const selectProductCategory = new ProductsCategory(page);
    const selectGetMoreClubCategory = new GetMoreClubCategory(page);

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
    //await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Signup_aftab_TC.png' });
    await signupPage.clickCloseBtn();

//Open Menu
    await menuPageOpener.openMenu();
    //await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Menu_Get_More_Club_TC.png' });

//Select Category
    await selectGetMoreClubCategory.openGetMoreClubCategory();
    await selectProductCategory.editUserProfile();
    await selectProductCategory.clickDob();
    await selectProductCategory.openDobField();
    browser.close();
    
});

