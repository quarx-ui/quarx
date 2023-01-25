import { ClientRect } from '@core';
import { getBoundingClientRect } from './dom';

export const computeElementRect = (
    element: HTMLElement | null,
    defaultValue: Partial<ClientRect>,
): Partial<ClientRect> => (
    element
        ? getBoundingClientRect(element)
        : defaultValue
);
