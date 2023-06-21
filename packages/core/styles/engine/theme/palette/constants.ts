import { valuesAsKeysFromArray, createValuesAsKeysTypeGuard } from '@core/enums';

export const PALETTE_COLORS = valuesAsKeysFromArray([
    'brand',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
]);

export const PALETTE_STANDARD_KEYS = valuesAsKeysFromArray([
    'main',
    'secondary',
]);

export const isPaletteStandardKey = createValuesAsKeysTypeGuard(PALETTE_STANDARD_KEYS);

export const PALETTE_TEXT_KEYS = valuesAsKeysFromArray([
    'main',
    'secondary',
    'tertiary',
    'constant',
]);
