import { test, expect, Page } from '@playwright/test'
import {LoginPage} from "../pages/loginPage";

test.describe('Login page: Authentication', () => {
    let loginPage: LoginPage

    test.beforeEach(async ({page}: {page: Page}) => {
        loginPage = new LoginPage(page)
        await loginPage.navigate()
    })

    test('Successful login', async ({page}: {page: Page}) => {
        await loginPage.login()
        const sidebar = page.getByTestId('sidebar-menu')
        await expect(sidebar).toBeVisible()

        const storageUsername = await page.evaluate(() => localStorage.getItem('username'))
        expect(storageUsername).toBe(process.env.ADMIN_DEMO_USERNAME)
    })
})