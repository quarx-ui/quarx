import { Narrow, Values, valuesAsKeysFromArray } from '@core';

export const SX_SIZE = valuesAsKeysFromArray([
    'xSmall',
    'small',
    'base',
    'medium',
    'large',
    'xLarge',
]);

export type SxSize = Values<typeof SX_SIZE>;

export type PickSxSize<Sizes extends SxSize = SxSize> = Narrow<SxSize, Sizes>;
