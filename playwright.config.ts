import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // or wherever your test files are
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: true,
  },
});
