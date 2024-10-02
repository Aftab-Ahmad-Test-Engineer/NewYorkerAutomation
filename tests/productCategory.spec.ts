import {test, Browser, Page} from 'playwright/test';
import {webkit, firefox, chromium} from 'playwright/test';
import { BasePage } from '../pages/base.page';
import {MenuPage } from '../pages/menu.page';
import {ProductsCategory} from '../pages/productCategory';
import { LoginForm } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';

const randomAlphabet = String.fromCharCode(Math.floor(Math.random() * 26) + 98);
const email = `${randomAlphabet}hy56${randomAlphabet}44444${randomAlphabet}${randomAlphabet}${randomAlphabet}${randomAlphabet}${randomAlphabet}@gmail.com`;


//Product Category Test Class
test('This test case verifies the opening of Products Category starting from login', async () => {
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 400});
    const page: Page = await browser.newPage();

    const basePage = new BasePage(page);
    const menuPageOpener = new MenuPage(page);
    const selectProductCategory = new ProductsCategory(page);
    const loginPage = new LoginForm(page);

   

//Base Steps
    await basePage.navigateToHome();
    //await basePage.selectCountry();
    await basePage.clickGo();
    await basePage.acceptCookies();
    await basePage.clickMenLink();
    //Login steps
    await loginPage.openLoginForm();
    await loginPage.enterEmail('aftab.ahmadpro@gmail.com');
    await loginPage.enterPassword('Aftab12345');
    await loginPage.pressLoginBtn();

//base page resume


//Open Menu
    await menuPageOpener.openMenu();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Menu_Products_TC.png' });

//Select Category
    await selectProductCategory.openProductCategory();
    await selectProductCategory.openProductDetail();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Product_Detail_TC.png' });
    await selectProductCategory.openClickMore();
    await selectProductCategory.editUserProfile();
    await selectProductCategory.clickDob();
    await selectProductCategory.openDobField();
   
    browser.close();
});



//Product Category Test Class
test('This test case verifies the opening of Products Category starting from SignUp', async () => {
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 400});
    const page: Page = await browser.newPage();

    const basePage = new BasePage(page);
    const menuPageOpener = new MenuPage(page);
    const selectProductCategory = new ProductsCategory(page);
    const signupPage = new SignupPage(page);

   

//Base Steps
    await basePage.navigateToHome();
    await basePage.selectCountry();
    await basePage.clickGo();
    await basePage.acceptCookies();
    await basePage.clickMenLink();

//base page resume

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
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Menu_Products_TC.png' });
//Select Category
    await selectProductCategory.openProductCategory();
    await selectProductCategory.openProductDetail();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Products\\Product_Detail_TC.png' });
    await selectProductCategory.openClickMore();
    await selectProductCategory.editUserProfile();
    await selectProductCategory.clickDob();
    await selectProductCategory.openDobField();
    browser.close();
});


