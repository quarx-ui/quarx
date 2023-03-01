module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
            'babel-jest',
            {
                rootMode: 'upward',
            },
        ],
    },
    // eslint-disable-next-line no-useless-escape
    modulePathIgnorePatterns: ['.*\.test\.pw\..*', '.*__tests__/stubs/.*'],
    testEnvironment: 'jest-environment-jsdom',
};
