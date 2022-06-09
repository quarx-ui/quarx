import { PlaywrightTestConfig, devices } from '@playwright/test';

const baseURL = 'http://localhost:6006/';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
    use: {
        baseURL,
    },
    testMatch: /.*test\.pw\.(js|ts|jsx|tsx)/,
};

export default config;
