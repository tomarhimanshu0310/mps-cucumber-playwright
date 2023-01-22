import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
  ],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  channel: 'chrome',
  headless: false,
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: 'https://www.youtube.com',
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: 'https://www.youtube.com/api/',
};
