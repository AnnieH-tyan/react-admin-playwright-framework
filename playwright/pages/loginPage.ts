import { Page, Locator } from '@playwright/test';
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    private usernameField: Locator
    private passwordField: Locator
    private signInBtn: Locator

    constructor(page: Page) {
        super(page)

        this.usernameField = page.locator('form input[name="username"]')
        this.passwordField = page.locator('form input[name="password"]')
        this.signInBtn = page.locator('form button[type="submit"]')
    }

    async navigate() {
        await this.page.goto('/#/login');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        /** Using press('Enter') instead of click() to bypass
         * test flakiness in firefox and support keyboard form submission */
        await this.passwordField.press('Enter')
    }
}