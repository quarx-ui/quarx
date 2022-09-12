import { Narrow, Values, valuesAsKeysFromArray } from '@core';

export const SX_BORDER_SIZE = valuesAsKeysFromArray([
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
    'max',
]);

export type SxBorderSize = Values<typeof SX_BORDER_SIZE>;

export type PickSxBorderSize<Sizes extends SxBorderSize = SxBorderSize> = Narrow<SxBorderSize, Sizes>;
