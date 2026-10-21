import { test, expect, Page } from '@playwright/test'
import {LoginPage} from "../pages/loginPage"
import {DashboardPage} from "../pages/dashboardPage"

test.describe('Login page: Authentication', () => {
    let loginPage: LoginPage
    let dashboardPage: DashboardPage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        await loginPage.navigate()
    })

    test('Successful login', async ({page}) => {
        dashboardPage = new DashboardPage(page)

        await loginPage.login()
        await expect(dashboardPage.sidebar).toBeVisible()

        const storageUsername = await page.evaluate(() => localStorage.getItem('username'))
        expect(storageUsername).toBe(process.env.ADMIN_DEMO_USERNAME)
    })
})