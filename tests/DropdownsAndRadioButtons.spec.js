import {test, expect} from '@playwright/test';

test('Demo test for selective Dropdowns', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const dropdown = page.locator("select.form-control");

    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    // Dropdowns selectOption
    await dropdown.selectOption("Consultant");
    await signInBtn.click();
})

test.only('Demo test for Radio Buttons', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const radioButton = page.locator(".radiotextsty");
    const popup = page.locator("#okayBtn");

    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    // Radio Buttons
    // example for the first one
    // await radioButton.first().click();
    await radioButton.last().click();
    await popup.click();
    // assertiong that Radio Button is Checked
    await expect(radioButton.last()).toBeChecked();
    await signInBtn.click();
})
