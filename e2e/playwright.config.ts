import { PlaywrightTestConfig, devices } from '@playwright/test';

const baseURL = 'http://localhost:6013/';
const deviceScaleFactor = 3;

const config: PlaywrightTestConfig = {
    timeout: 60 * 1000,
    testDir: './',
    quiet: true,
    workers: 3,
    expect: {
        toMatchSnapshot: {
            maxDiffPixels: 10,
        },
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                deviceScaleFactor,
            },
        },
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
                deviceScaleFactor,
            },
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                deviceScaleFactor,
            },
        },
    ],
    webServer: {
        reuseExistingServer: true,
        port: 6013,
        command: 'yarn run e2e:serve',
    },
    use: {
        baseURL,
    },
    testMatch: /.*test\.pw\.(js|ts)/,
    outputDir: 'test-diff',
};

export default config;
