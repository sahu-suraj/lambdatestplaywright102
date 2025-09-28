const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test');

test.describe('PlayWright Vanilla JS - 6', () => {
test('Drag & Drop Sliders', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  //await page.getByText('Drag & Drop Sliders').click();
  await page.locator('text=Drag & Drop Sliders').click();
  
  const slider = page.locator('xpath=//h4[text()=\' Default value 15\']/following-sibling::div/input[@type="range"]'); 


const boundingBox = await slider.boundingBox();


const xOffset = boundingBox.width * 0.93; 
const yOffset = boundingBox.height / 2; 


await page.mouse.move(boundingBox.x + 1, boundingBox.y + yOffset); 
await page.mouse.down();
await page.mouse.move(boundingBox.x + xOffset, boundingBox.y + yOffset, { steps: 11 });
await page.mouse.up();

  await page.waitForTimeout(2000);
  
  const rangeValue = await page.textContent('xpath=//h4[text()=\' Default value 15\']/following-sibling::div/output');
  expect(rangeValue).toBe('95');
});
})
