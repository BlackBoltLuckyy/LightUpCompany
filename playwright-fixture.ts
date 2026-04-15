import { test as base, expect } from '@playwright/test';

// Extend the base test with custom fixtures if needed
export const test = base.extend({
  // Add custom fixtures here
  // examplePage: async ({ page }, use) => {
  //   await page.goto('/');
  //   await use(page);
  // },
});

export { expect };
