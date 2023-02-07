import { valuesAsKeysFromArray } from '@core/enums';

/* Отсортированы от меньшего значения к большему, это важно! */
export const BREAKPOINT_KEYS_ARR = [
    'XS',
    'S',
    'M',
    'L',
] as const;

export const BREAKPOINT_KEYS = valuesAsKeysFromArray(BREAKPOINT_KEYS_ARR);
