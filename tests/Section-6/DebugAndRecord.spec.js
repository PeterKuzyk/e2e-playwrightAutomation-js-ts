import {expect, test} from "@playwright/test";

// npx playwright codegen https://rahulshettyacademy.com/loginpagePractise/

test('Recorded test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.getByRole('textbox', {name: 'Username:'}).click();
    await page.getByRole('textbox', {name: 'Username:'}).fill('username');
    await page.getByRole('textbox', {name: 'Password:'}).click();
    await page.getByRole('textbox', {name: 'Password:'}).fill('1234567');
    await page.locator('label:nth-child(2) > .checkmark').click();
    await page.locator('#myModal').click();
    await page.locator("#okayBtn").click();
    await page.getByRole('combobox').selectOption('teach');
    await page.getByRole('checkbox', {name: 'I Agree to the terms and'}).check();
    await page.getByRole('button', {name: 'Sign In'}).click();
    await expect(page).toHaveTitle("INVALID TITLE");
});
