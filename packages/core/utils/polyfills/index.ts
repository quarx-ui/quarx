import { addEventComposedPath } from './events';

export const setUpPolyfills = () => {
    addEventComposedPath();
};

export * from './events';
