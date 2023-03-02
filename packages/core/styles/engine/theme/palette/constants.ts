import { valuesAsKeysFromArray, createValuesAsKeysTypeGuard } from '@core/enums';

export const PALETTE_COLORS = valuesAsKeysFromArray([
    'brand',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
])

export const PALETTE_STANDARD_KEYS = valuesAsKeysFromArray([
    'main',
    'secondary',
])

export const PALETTE_TYPES = valuesAsKeysFromArray([
    'light',
    'dark',
])

export const isPaletteStandardKey = createValuesAsKeysTypeGuard(PALETTE_STANDARD_KEYS);
