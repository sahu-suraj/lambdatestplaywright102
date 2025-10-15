const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test');
test.describe('PlayWright Vanilla JS - 5', () => {
test('Simple Form Demo', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.locator('text=Simple Form Demo').click();
  await page.waitForTimeout(4000);
  expect(page.url()).toContain('simple-form-demo');
  const message = 'Welcome to LambdaTest';
  await page.type('#user-message', message);
  await page.locator('text=Get Checked Value').click();
  await page.waitForTimeout(1000);
  const output = await page.textContent('#message');
  expect(output).toBe(message);
});
})
