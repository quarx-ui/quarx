import { Narrow, Values, valuesAsKeysFromArray } from '@core';

export const QX_BORDER_SIZE = valuesAsKeysFromArray([
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
    'max',
]);

export type QxBorderSize = Values<typeof QX_BORDER_SIZE>;

export type PickQxBorderSize<Sizes extends QxBorderSize = QxBorderSize> = Narrow<QxBorderSize, Sizes>;
