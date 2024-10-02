import { Page } from 'playwright';
import {test, expect, Browser} from 'playwright/test';

export class SignupPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators = {
        registerBtn: () => this.page.locator('button.get-more-button-red[onclick="handleClickRegisterFromMain()"]:has-text("REGISTRIEREN")'),
        
        emailField: () => this.page.locator('#interstitial-register-email-input'),
        passwordField: () => this.page.locator('#interstitial-register-password-input'), 
        repeatPasswordField: () => this.page.locator('#interstitial-register-password-repeat-input'),
        firstnameField: () => this.page.locator('#interstitial-register-firstname-input'),
        lastnameField: () => this.page.locator('#interstitial-register-lastname-input'),
        checkbox: () => this.page.locator('#register_form .legals-checkbox-container:has-text("Ich bin mit den AGB einverstanden.")'),
        submitForm: () => this.page.locator('form#register_form .get-more-button-red:has-text("Registrieren")'),
        closeBtn: () => this.page.locator('.continue-button button.get-more-button-red').nth(0),
        passwordMismatchError: () => this.page.locator('.registration-error-missmatch-container show:has-text("Vertippt? Die Passwörter stimmen leider nicht überein.")')
    
    };

    async clickRegister() {
        await this.locators.registerBtn().click();
    }

    async fillEmail(email: string) {
        await this.locators.emailField().fill(email);
    }

    async fillPassword(password: string) {
        await this.locators.passwordField().fill(password);
    }
    async repeatFillPassword(repeatPassword: string) {
        await this.locators.repeatPasswordField().fill(repeatPassword);

    } 
   
    async fillFirstnameField(firstname: string) {
        await this.locators.firstnameField().fill(firstname);

    }
     async fillLastnameField(lastname: string) {
        await this.locators.lastnameField().fill(lastname);

    }
     async fillCheckbox() {
        await this.locators.checkbox().click();

    } 
    
    async missingData() {
        const submitButton = this.locators.submitForm();
        const isVisible = await submitButton.isVisible();
        const isEnabled = await submitButton.isEnabled();
    
        if (isVisible && isEnabled) {
            await submitButton.click();
        } else {
            console.log('Submit button is not visible or not enabled.');
        }
    }
    

    async pushSubmitForm(){
        await this.locators.submitForm().click();
    }

    async checkPasswordMismatchError() {
        const passwordMismatchError = this.locators.passwordMismatchError();
        await expect(passwordMismatchError).toBeVisible();
      }

    async clickCloseBtn() {
        
        await this.locators.closeBtn().click();
    }


}
