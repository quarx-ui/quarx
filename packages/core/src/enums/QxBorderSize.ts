import { Narrow, Values } from '@core/types';
import { valuesAsKeysFromArray } from './utils';

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
