import {expect, test} from "@playwright/test";

test('Split text', async ({browser}) => {
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
    const arrayText = text.split("@")
    const domain = arrayText[1].split( " ")[0]
    console.log(domain)
    expect(text.trim()).toBe("Please email us at mentor@rahulshettyacademy.com " +
        "with below template to receive response");
})
