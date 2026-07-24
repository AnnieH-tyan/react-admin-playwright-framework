import { test, expect } from '@playwright/test'
import {LoginPage} from "../pages/loginPage";

test.describe('Login page: Authentication', () => {
    let loginPage: LoginPage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        await loginPage.navigate()
    })

    test('Successful login', async ({page}) => {
        await loginPage.login()
        const sidebar = page.getByTestId('sidebar-menu')
        await expect(sidebar).toBeVisible()
    })
})