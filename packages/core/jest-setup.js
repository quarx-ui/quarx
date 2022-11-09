import '@testing-library/jest-dom';
import 'mock-match-media/jest-setup.cjs';
import { setMedia } from 'mock-match-media';

setMedia({
    'prefers-color-scheme': 'light',
});
