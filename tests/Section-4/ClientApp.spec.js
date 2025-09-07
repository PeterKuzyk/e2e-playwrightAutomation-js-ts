const {test, expect} = require('@playwright/test');

test('Practice Website', async ({page}) => {
    const userEmail = page.locator(" #userEmail");
    const password = page.locator(' #userPassword');
    const login = page.locator(" #login");
    const allCards = page.locator(".card-body b");

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await userEmail.fill("toem@example.com");
    await password.fill("n#4gRLp3w#Aq!9X");
    await login.click();
    // wait example
    await page.waitForLoadState("networkidle");
    // in case previous wait not working
    await page.locator(".card-body b").first().waitFor();
    await expect(allCards.first()).toHaveText("ZARA COAT 3");
    console.log(await allCards.allTextContents());
})
