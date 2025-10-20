import {test, expect} from '@playwright/test';

test('Calendar Date Picker Test - 42', async ({page}) => {

    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber, date, year];

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click()
    await page.locator('.react-calendar__year-view__months button').nth(Number(monthNumber) - 1).click();
    await page.locator("//abbr[text()='" + date + "']").click({force: true});

    const inputs = await page.locator('.react-date-picker__inputGroup__input')

    // for(let i = 0; i < inputs.length; i++) {
    //     await expect(inputs.nth(i)).toHaveValue(expectedList[i]);
    // }

    for(let i =0; i < expectedList.length; i++){
      const value = await inputs.nth(i).inputValue();
      expect(value).toEqual(expectedList[i]);
    }
})