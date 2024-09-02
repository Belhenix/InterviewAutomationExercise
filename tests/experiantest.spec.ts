import { test, expect } from '@playwright/test';

test('submit tax credit survey form', async ({ page }) => {
  // Test data
  const firstName = 'Joe';
  const lastName = 'Sample';

  // Enter page
  await page.goto('https://uat-survey.taxcreditco.com/automation-challenge');

  // > First page
  // Wait for page to load
  await expect(page.getByText('basic information')).toBeVisible();
  // Set first name
  await page.getByLabel('First Name').fill(firstName);
  // Set last name
  await page.getByLabel('Last Name').fill(lastName);
  // Set email
  await page.getByLabel('Email Address').fill('xyztest1001@taxcc.bg');
  // Set street address
  await page.getByLabel('Street Address').fill('Street line 1');
  // Set city
  await page.getByLabel('City').fill('Monterey Park');
  // Set zip code
  await page.getByLabel('Zip Code').fill('91745');

  // Go to next page
  await page.locator('id=SurveyControl_SurveySubmit').click()

  // > Second page
  // Wait for page to load
  await expect(page.getByText('Yes or No')).toBeVisible();

  // No for SNAP food stamps
  await page.locator('css=.survey-question-container > .row', { has: page.getByText('SNAP') }).locator('label', { has: page.getByLabel('No') }).click();
  // No for TANF welfare  
  await page.locator('css=.survey-question-container > .row', { has: page.getByText('TANF') }).locator('label', { has: page.getByLabel('No') }).click();
  // No for veteran
  await page.locator('css=.survey-question-container > .row', { has: page.getByText('veteran') }).locator('label', { has: page.getByLabel('No') }).click();
  // No for disability
  await page.locator('css=.survey-question-container > .row', { has: page.getByText('disability') }).locator('label', { has: page.getByLabel('No') }).click();
  // No for felony (if applicable)
  if(await page.getByText('convicted').isVisible()) {
    await page.locator('css=.survey-question-container > .row', { has: page.getByText('convicted') }).locator('label', { has: page.getByLabel('No') }).click();
  }
  // No for unemployment benefits
  await page.locator('css=.survey-question-container > .row', { has: page.getByText('unemployed') }).locator('label', { has: page.getByLabel('No') }).click();

  // Go to next page
  await page.locator('id=SurveyControl_SurveySubmit').click()
  
  // > Third page
  // Wait for page to load
  await expect(page.getByText('Additional Information')).toBeVisible();

  await expect(page.getByLabel('Confirm')).toHaveValue(firstName + ' ' + lastName)
  
  // Go to next page
  await page.locator('id=SurveyControl_SurveySubmit').click()

  // > Last page
  // wait for page to load (just the page, we check URL not content)
  await page.waitForLoadState('load');
  // Check if we are in the correct page
  await expect(page.url()).toContain('https://www.experian.com/employer-services');
});
