import {test, expect, Browser, Page} from 'playwright/test';
import {webkit, firefox, chromium} from 'playwright/test';
import { BasePage } from '../pages/base.page';
import { SignupPage } from '../pages/signup.page';

const randomAlphabet = String.fromCharCode(Math.floor(Math.random() * 26) + 98);
const email = `abcd${randomAlphabet}y5y5y${randomAlphabet}${randomAlphabet}${randomAlphabet}${randomAlphabet}${randomAlphabet}${randomAlphabet}@gmail.com`;


//Signup Test Class
test('This test case verifies the successfull Signup with valid data', async () => {
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 400});
    const page: Page = await browser.newPage();

    const basePage = new BasePage(page);
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
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\testAutomation\\Screenshots\\Signup_Successfull_TC.png' });

    browser.close();
});

test('This test case verifies the Signup with empty email field', async () => {
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 400});
    const page: Page = await browser.newPage();

    const basePage = new BasePage(page);
    const signupPage = new SignupPage(page);

   

//Base Steps
    await basePage.navigateToHome();
    await basePage.selectCountry();
    await basePage.clickGo();
    await basePage.acceptCookies();
    await basePage.clickMenLink();
    

//base page resume

    await signupPage.clickRegister();
    await signupPage.fillEmail('');
    await signupPage.fillPassword('Aftab12345');
    await signupPage.repeatFillPassword('Aftab12345');
    await signupPage.fillFirstnameField('Aftab');
    await signupPage.fillLastnameField('Ahmad');
    await signupPage.fillCheckbox();
    await signupPage.missingData();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Signup_Successfull_TC.png' });

    browser.close();
});


test('This test case verifies the Signup with missing First Name', async () => {
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 400});
    const page: Page = await browser.newPage();

    const basePage = new BasePage(page);
    const signupPage = new SignupPage(page);

   

//Base Steps
    await basePage.navigateToHome();
    //await basePage.selectCountry();
    await basePage.clickGo();
    await basePage.acceptCookies();
    await basePage.clickMenLink();
    

//base page resume

    await signupPage.clickRegister();
    await signupPage.fillEmail(email);
    await signupPage.fillPassword('Aftab12345');
    await signupPage.repeatFillPassword('Aftab12345');
    await signupPage.fillFirstnameField('');
    await signupPage.fillLastnameField('Ahmad');
    await signupPage.fillCheckbox();
    await signupPage.missingData();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Signup_Successfull_TC.png' });
    
    browser.close();
});


test('This test case verifies the Signup with missing Last Name', async () => {
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 400});
    const page: Page = await browser.newPage();

    const basePage = new BasePage(page);
    const signupPage = new SignupPage(page);

   

//Base Steps
    await basePage.navigateToHome();
    //await basePage.selectCountry();
    await basePage.clickGo();
    await basePage.acceptCookies();
    await basePage.clickMenLink();
    

//base page resume

    await signupPage.clickRegister();
    await signupPage.fillEmail(email);
    await signupPage.fillPassword('Aftab12345');
    await signupPage.repeatFillPassword('Aftab12345');
    await signupPage.fillFirstnameField('');
    await signupPage.fillLastnameField('Ahmad');
    await signupPage.fillCheckbox();
    await signupPage.missingData();
    await page.screenshot({ path: 'C:\\Users\\Aftab Ahmad\\OneDrive\\Desktop\\NYTestAutomation\\Screenshots\\Signup_Successfull_TC.png' });
    
    browser.close();
});

