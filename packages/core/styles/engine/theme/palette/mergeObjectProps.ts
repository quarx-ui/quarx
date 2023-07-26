import { deepmerge } from '@core';
import { InitialPalette, Palette } from './types';

export const mergeObjectProps = (
    initial: InitialPalette,
    computed: Omit<Palette, 'type'>,
    exclude?: Array<keyof Palette>,
) => {
    const merged = { ...computed };

    Object.keys(initial)
        .forEach((key) => {
            if (typeof initial[key] === 'object' && !exclude?.includes(key)) {
                const mergedKey = deepmerge(computed[key], initial[key]);
                if (mergedKey) {
                    merged[key] = mergedKey;
                }
            }
        });

    return merged;
};
