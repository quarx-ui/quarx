import { RefObject } from 'react';
import { Values } from '@core';
import { Orientation, createValuesAsKeysTypeGuard } from '@core/enums';
import { ARROW_KEYS } from './constants';

export type ArrowKey = Values<typeof ARROW_KEYS>;

export const isArrowKey = createValuesAsKeysTypeGuard(ARROW_KEYS);

export interface UseKeyboardNavigationProps {
    /** Ссылка на контейнер, в котором расположены элементы списка */
    listRef: RefObject<HTMLElement>;
    /** Направление расположения элементов списка
     *
     * @default undefined
     *
     * - **vertical** – вертикальное расположение элементов списка,
     * переключение фокуса будет происходить стрелками ← / →
     *
     * - **horizontal** – горизонтальное расположение элементов списка,
     * для переключения фокуса используются стрелки ↑ / ↓
     * */
    orientation?: Orientation;
}
