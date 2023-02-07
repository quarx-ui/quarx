import { Narrow, Values } from '@core/types';
import { valuesAsKeysFromArray } from './utils';

export const QX_SIZE = valuesAsKeysFromArray([
    'xSmall',
    'small',
    'base',
    'medium',
    'large',
    'xLarge',
]);

export type QxSize = Values<typeof QX_SIZE>;

export type PickQxSize<Sizes extends QxSize = QxSize> = Narrow<QxSize, Sizes>;
