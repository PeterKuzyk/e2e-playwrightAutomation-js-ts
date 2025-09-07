import {test, expect} from '@playwright/test';

test('Demo Child windows', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");
    // go to child window
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        documentLink.click()
    ]);
    // assert text on new window
    const text = await newPage.locator(".red").textContent();
    console.log(text)
    expect(text.trim()).toBe("Please email us at mentor@rahulshettyacademy.com " +
        "with below template to receive response");
})

test('Use child window text as user name on parent page', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#userName");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");
    // go to child window
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        documentLink.click()
    ]);
    // assert text on new window
    const text = await newPage.locator(".red").textContent()
    expect(text.trim()).toBe("Please email us at mentor@rahulshettyacademy.com " +
        "with below template to receive response");
    const arrayText = text.split("@")
    const domain = arrayText[1].split( " ")[0]
    console.log(domain);
    // input text as a username
    await page.locator("#username").fill(domain)
    console.log("Input value: " + await page.locator("#username").inputValue());
})
