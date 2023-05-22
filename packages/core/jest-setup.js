import '@testing-library/jest-dom';
import 'mock-match-media/jest-setup.cjs';
import { setMedia } from 'mock-match-media';
import { cleanup } from '@testing-library/react';

setMedia({
    'prefers-color-scheme': 'light',
});
global.beforeEach(() => {
    cleanup();
    jest.clearAllTimers();
    jest.clearAllMocks();
});
