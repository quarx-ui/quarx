import { valuesAsKeysFromArray } from '@core';

export const SNACKBAR_COLORS = valuesAsKeysFromArray([
    'brand',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'default',
]);

export const SNACKBARS_LEFT_ITEMS = valuesAsKeysFromArray([
    'timer',
    'default',
] as const);
