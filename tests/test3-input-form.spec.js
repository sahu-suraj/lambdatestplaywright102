const { test } = require('../lambdatest-setup');
const { expect } = require('@playwright/test');

test.describe('PlayWright Vanilla JS - 7', () => {

  test('Input Form Submit', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    
    const formLink = page.locator('text=Input Form Submit');
    await formLink.scrollIntoViewIfNeeded();
    await formLink.click();
    await page.waitForTimeout(1000);

    // Click submit button without filling form
    await page.click("button:has-text('Submit')");

    // Locate first required field
    const inputField = page.locator("input[name='name']");

    // Trigger validation
    await page.evaluate(el => el.reportValidity(), await inputField.elementHandle());

    // Read browser-generated HTML5 validation message
    const validationMsg = await page.evaluate(
      el => el.validationMessage,
      await inputField.elementHandle()
    );

    console.log('Validation message:', validationMsg);

    // ✅ Verify validation message
    expect(validationMsg.toLowerCase()).toContain('please fill');

    // Fill all form fields
    await page.fill("input[name='name']", 'John Doe');
    await page.fill('#inputEmail4', 'johndoe@example.com');
    await page.fill('#inputPassword4', 'Password123');
    await page.fill("input[name='company']", 'LambdaTest');
    await page.fill("input[name='website']", 'www.lambdatest.com');
    await page.selectOption("select[name='country']", { label: 'United States' });
    await page.fill("input[name='city']", 'New York');
    await page.fill('#inputAddress1', '123 Test Street');
    await page.fill('#inputAddress2', 'Suite 45');
    await page.fill('#inputState', 'NY');
    await page.fill("input[name='zip']", '10001');
    
    await page.click("button:has-text('Submit')");
    await page.waitForTimeout(3000);

    // Read success message
    const successMsg = await page.textContent('p.success-msg');
    console.log('Success message:', successMsg);

    expect(successMsg.trim()).toBe(
      'Thanks for contacting us, we will get back to you shortly.'
    );

    console.log('✅ Input Form Test Passed');
  });

});
