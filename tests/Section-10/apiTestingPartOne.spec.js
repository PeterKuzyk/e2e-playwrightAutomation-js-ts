import {expect, test, request} from "@playwright/test";

const loginPayload = {userEmail: "toem@example.com", userPassword: "n#4gRLp3w#Aq!9X"};
let authToken;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {data: loginPayload});
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJason = await loginResponse.json();
    const authToken = loginResponseJason.token;
    console.log(authToken);

})

test('Client App Login', async ({page}) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)}, authToken);
})

test('Api test example', async ({page}) => {
    const userEmail = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const login = page.locator("#login");
    const productName = "ZARA COAT 3";
    const cartButton = page.locator('[routerlink="/dashboard/cart"]');
    const checkoutButton = page.locator("text=Checkout");
    const placeOrderButton = page.locator(".btnn.action__submit.ng-star-inserted");
    const thankYouForOrder = page.locator('.hero-primary');
    const orderConfirmationNumber = page.locator("label[class='ng-star-inserted']");
    const orderHistoryPage = page.locator("button[routerlink*='myorders']");


    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await userEmail.fill("toem@example.com");
    await password.fill("n#4gRLp3w#Aq!9X");
    await login.click();
    await page.waitForLoadState("networkidle");

    await page.locator(".card-body").first().waitFor();

    const products = page.locator(".card-body");
    const count = await products.count();
    // Section -7 Client App Practice, folder 29
    for (let i = 0; i < count; i++) {
        const title = await products.nth(i).locator("b").textContent();
        if (title?.trim() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
});