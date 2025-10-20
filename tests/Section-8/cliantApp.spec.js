import {test, expect} from "@playwright/test";

test('Client App login - 40', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill("toem@example.com");
    await page.getByPlaceholder('enter your passsword').fill("n#4gRLp3w#Aq!9X");
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator(".card-body b").first().waitFor();

    await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3'})
        .getByRole('button', { name: 'Add To Cart' }).click();

    await page.getByRole('listitem').getByRole('button', { name: 'Cart' }).click();

    await expect(page.getByText('ZARA COAT 3')).toBeVisible();

    await page.getByRole('button', { name: 'Checkout' }).click();

    await page.getByPlaceholder('Select Country').pressSequentially('ind');

    await page.getByRole("button", { name: 'India' }).nth(1).click();
    await page.getByText( 'Place Order' ).click();

    await expect(page.getByText('Thankyou for the order.')).toBeVisible();


})