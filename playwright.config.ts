import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report/html' }],
    ['junit', { outputFile: 'playwright-report/results.xml' }],
  ],
});
