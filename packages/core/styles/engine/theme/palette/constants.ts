import { valuesAsKeysFromArray } from '@core/utils';

export const PALETTE_COLORS = valuesAsKeysFromArray([
    'brand',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
] as const)

export const PALETTE_TYPE_ARR = ['light','dark'] as const;
export const PALETTE_TYPE = valuesAsKeysFromArray(PALETTE_TYPE_ARR);
