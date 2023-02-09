import { Values, valuesAsKeysFromArray } from '@core';

// ToDo: Нужно ли вынести в css утилиты?
export const GAP_DIRECTION = valuesAsKeysFromArray([
    'top',
    'right',
    'bottom',
    'left',
]);

export type GapDirection = Values<typeof GAP_DIRECTION>;

export const gap = (
    value: number | string,
    direction: GapDirection = GAP_DIRECTION.bottom,
) => ({
    '& > *:not(:last-child)': {
        [`margin-${direction}`]: value,
    },
});
