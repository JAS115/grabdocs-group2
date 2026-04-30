import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});
