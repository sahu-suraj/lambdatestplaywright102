const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test');
test.describe('PlayWright Vanilla JS - 5', () => {
test('Simple Form Demo', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  //await page.getByText('Simple Form Demo').click();
  await page.locator('text=Simple Form Demo').click();

  
  expect(page.url()).toContain('simple-form-demo');

  
  const message = 'Welcome to LambdaTest';
  await page.fill('#user-message', message);

  
  //await page.getByText('Get Checked Value').click();
  await page.locator('text=Get Checked Value').click();
  const output = await page.textContent('#message');
  expect(output).toBe(message);
});
})
