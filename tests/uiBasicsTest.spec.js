import {test, expect} from '@playwright/test';


test('First Playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
});

test('Browser Context Declaration', async ({page}) => {
    await page.goto('https://google.com');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    expect(title).toBe('Google');
    await expect(page).toHaveTitle('Google');
});
