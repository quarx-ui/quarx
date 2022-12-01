import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

global.beforeEach(() => {
    cleanup();
    jest.clearAllTimers();
    jest.clearAllMocks();
});
