import { QX_SIZE, valuesAsKeysFromArray } from '@core';

export const ALERT_COLORS = valuesAsKeysFromArray([
    'brand',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'default',
]);

export const ALERT_TYPE = valuesAsKeysFromArray([
    'vertical',
    'horizontal',
]);

export const ALERT_SIZE = valuesAsKeysFromArray([
    QX_SIZE.small,
    QX_SIZE.large,
]);
