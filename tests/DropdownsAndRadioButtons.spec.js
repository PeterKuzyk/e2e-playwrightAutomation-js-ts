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

test.only('Demo test for Radio Buttons and check boxes', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const radioButton = page.locator(".radiotextsty");
    const popup = page.locator("#okayBtn");
    const terns = page.locator("#terms");
    const documentLink = page.locator("[href*='documents-request']");

    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    // Radio Buttons
    // example for the first one
    await radioButton.first().click();
    // Last
    await radioButton.last().click();
    await popup.click();
    // assertion that Radio Button is Checked
    await expect(radioButton.last()).toBeChecked();
    console.log(await radioButton.last().isChecked());
    // click terms
    await  terns.click();
    // assert it is checked
    await expect(terns).toBeChecked();
    // print results in console
    console.log(await terns.isChecked());
    // uncheck terms
    await terns.uncheck();
    expect( await terns.isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
    await signInBtn.click();
    // await page.pause();

})
