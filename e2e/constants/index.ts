import { valuesAsKeysFromArray, Values } from '@kit';

export const FRAME_ID = 'render-frame';

export const SEPARATORS = {
    PROP: ';',
    VALUE: '=',
    NAME: '-',
};

export const THEME_TYPES_ARR = ['light', 'dark'] as const;
export const THEME_TYPES = valuesAsKeysFromArray(THEME_TYPES_ARR);
export type ThemeTypes = Values<typeof THEME_TYPES>;

export * from './types';
