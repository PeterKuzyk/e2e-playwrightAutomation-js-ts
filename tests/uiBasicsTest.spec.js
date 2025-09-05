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

test('Assertion demo failure', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy1');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});

test('Assertion demo success', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await signInBtn.click();
    console.log(await page.locator(".card-body a").first().textContent());
    await expect(page.locator(".card-body a").first()).toHaveText('iphone X');
    await expect(page.locator(".card-body a").nth(1)).toHaveText('Samsung Note 8');
})

test('Assertion demo working with titles', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await signInBtn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
})
