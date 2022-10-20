import { ReactNode } from 'react';

export const getContainer = (container: ReactNode) => (
    typeof container === 'function'
        ? container()
        : container
);
