const {test, expect} = require('@playwright/test');

// 46 - Alert Popups Handling
test('Alert Popups Handling', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // await page.locator('#alertbtn').click();
    //
    // await page.on('dialog', async dialog => {
    //     await dialog.accept()
    // })

    //teacher example
    await page.locator('#alertbtn').click();
    await page.on('dialog', dialog => dialog.accept());


    await page.locator('#alertbtn').click();

    await page.locator('#confirmbtn').click();
})