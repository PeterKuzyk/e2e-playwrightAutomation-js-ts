const {test, expect} = require('@playwright/test');

//47 - Handling Frames
test('Handling Frames', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const framePage = page.frameLocator('courses-iframe');
    await framePage.locator('#name').fill('Test Frame');
})