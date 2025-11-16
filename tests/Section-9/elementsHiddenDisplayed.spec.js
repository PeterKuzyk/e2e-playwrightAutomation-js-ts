const {test, expect} = require('@playwright/test');

// 45 - Elements Hidden and Displayed
test('Elements Hidden and Displayed', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goBack();
    await page.goForward();
    await page.reload();

    await expect(page.locator('#displayed-text')).toBeVisible();

    await page.locator('#hide-textbox').click();

    await expect(page.locator('#displayed-text')).not.toBeVisible();
});