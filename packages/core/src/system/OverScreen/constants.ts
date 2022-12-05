import { valuesAsKeysFromArray } from '@core';

export const OVER_SCREEN_DATATYPE = 'overscreen';
export const OVER_SCREEN_ROLE = 'presentation';

export const OVER_SCREEN_PLACEMENT = valuesAsKeysFromArray([
    'top',
    'bottom',
    'left',
    'right',
    'center',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
]);

export const OVER_SCREEN_ORIGIN = valuesAsKeysFromArray([
    'top',
    'bottom',
    'left',
    'right',
]);

export const OVER_SCREEN_APPEARANCE = valuesAsKeysFromArray([
    'slide',
    'fade',
    'none',
]);

export const OVER_SCREEN_CLOSE_REASON = valuesAsKeysFromArray([
    'escape',
    'clickAway',
    'closeButton',
]);
