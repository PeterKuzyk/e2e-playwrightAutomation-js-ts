import {expect, test} from "@playwright/test";

// Section-7 Client App Practice, folder 28
test.only('Client app e2e test', async ({page}) => {
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

    await cartButton.click();
    const text = await page.locator("div[class='cartSection'] h3").textContent();
    await page.locator("div li").first().waitFor();
    console.log("Item text is: " + text);
    expect(text).toEqual(productName);
    await checkoutButton.click();
    // Section -7 Client App Practice, folder 30
    await page.locator("input[placeholder='Select Country']").waitFor();
    await page.locator("input[placeholder='Select Country']").pressSequentially("ind");
    const countryDropdown = page.locator(".list-group");
    await countryDropdown.waitFor();

    const countryButtons = countryDropdown.locator("button");
    const countryOptionsCount = await countryButtons.count();

    for (let i = 0; i < countryOptionsCount; i++) {
        const countryName = await countryButtons.nth(i).textContent();
        if (countryName?.trim() === "India") {
            await countryButtons.nth(i).click();
            break;
        }
    }
    const emailValue = await page.locator('.user__name [type="text"]').first().textContent();
    console.log("Email field contains:", emailValue);
    expect(emailValue).toBe("toem@example.com");
    await placeOrderButton.click();
    const thankYouForOrderText = await thankYouForOrder.textContent();
    await expect(thankYouForOrderText).toContain(" Thankyou for the order. ");
    // Section -7 Client App Practice, folder 31
    console.log("Confirmation text: " + thankYouForOrderText);
    const orderId = (await orderConfirmationNumber.textContent()).replace(/\|/g, "").trim();
    console.log("Order confirmation number: " + orderId);

    await orderHistoryPage.click();

    // Section -7 Client App Practice, folder 34
    await page.locator("tbody tr").first().waitFor();
    const rows = page.locator("tbody tr");
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
        const rowOrderId = (await rows.nth(i).locator("th").textContent())?.trim() || "";
        if (rowOrderId.includes(orderId)) {
            await rows.nth(i).locator("td button").first().click({ force: true });
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text.-main").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
});