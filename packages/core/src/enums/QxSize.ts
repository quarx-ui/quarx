import { Narrow, Values } from '@core/types';
import { createValuesAsKeysTypeGuard, valuesAsKeysFromArray } from './utils';

export const QX_SIZE = valuesAsKeysFromArray([
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
]);

export type QxSize = Values<typeof QX_SIZE>;

export const isSize = createValuesAsKeysTypeGuard(QX_SIZE);

export type PickQxSize<Sizes extends QxSize = QxSize> = Narrow<QxSize, Sizes>;
