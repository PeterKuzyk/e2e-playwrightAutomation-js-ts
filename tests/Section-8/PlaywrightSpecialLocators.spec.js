import {test, expect} from "@playwright/test";

test("Playwright Special Locators - Test 36, 37, 38, 39", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await expect(page.getByLabel('Check me out if you Love IceCreams!')).toBeChecked();

    await page.getByLabel('Employed').click();
    await expect(page.getByLabel('Employed')).toBeChecked();

    await page.getByLabel("Gender").selectOption("Female");
    await expect(page.getByLabel("Gender")).toHaveValue("Female");

    await page.getByLabel('Password').fill('Password123');
    await expect(page.getByLabel('Password')).toHaveValue('Password123');

    await page.getByRole("button", {name: 'Submit'}).click();

    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();

    await page.getByRole('link',{ name: 'Shop' }).click();

    await page.locator("app-card").filter({ hasText: 'Nokia Edge' })
        .getByRole('button', { name: 'Add' }).click();
})