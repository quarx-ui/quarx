import { Narrow, Values, valuesAsKeysFromArray } from '@core';

export const QX_BORDER_SIZE = valuesAsKeysFromArray([
    'tiny',
    'small',
    'base',
    'large',
    'max',
    'rounded',
    'square',
    'smooth',
]);

export type QxBorderSize = Values<typeof QX_BORDER_SIZE>;

export type PickQxBorderSize<Sizes extends QxBorderSize = QxBorderSize> = Narrow<QxBorderSize, Sizes>;
