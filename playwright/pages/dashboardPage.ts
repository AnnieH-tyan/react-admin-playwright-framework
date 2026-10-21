import { Page, Locator } from '@playwright/test';
import {BasePage} from "./basePage";

export class DashboardPage extends BasePage {
    private sidebar: Locator

    constructor(page: Page) {
        super(page);

        this.sidebar = page.getByTestId('sidebar-menu')
    }
}