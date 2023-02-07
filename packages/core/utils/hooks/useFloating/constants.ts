import { valuesAsKeysFromArray } from '@core/enums';

export const SIDES = valuesAsKeysFromArray([
    'top',
    'left',
    'right',
    'bottom',
]);

export const ALIGNMENTS = valuesAsKeysFromArray([
    'start',
    'end',
]);

export const AXES = valuesAsKeysFromArray([
    'x',
    'y',
]);

export const DIMENSIONS = valuesAsKeysFromArray([
    'height',
    'width',
]);

export const ARRANGEMENTS = valuesAsKeysFromArray([
    'absolute',
    'fixed',
]);

export const CLIPPING_CONTEXTS = valuesAsKeysFromArray([
    'anchor',
    'floating',
]);

export const ROOT_BOUNDARIES = valuesAsKeysFromArray([
    'viewport',
    'document',
]);

export const PLACEMENTS = valuesAsKeysFromArray([
    /* Top */
    SIDES.top,
    `${SIDES.top}-${ALIGNMENTS.start}`,
    `${SIDES.top}-${ALIGNMENTS.end}`,

    /* Bottom */
    SIDES.bottom,
    `${SIDES.bottom}-${ALIGNMENTS.start}`,
    `${SIDES.bottom}-${ALIGNMENTS.end}`,

    /* Left */
    SIDES.left,
    `${SIDES.left}-${ALIGNMENTS.start}`,
    `${SIDES.left}-${ALIGNMENTS.end}`,

    /* Right */
    SIDES.right,
    `${SIDES.right}-${ALIGNMENTS.start}`,
    `${SIDES.right}-${ALIGNMENTS.end}`,
]);
