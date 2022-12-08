import { RefObject } from 'react';
import { Values } from '@core';
import { ARROW_KEYS, ORIENTATIONS } from './constants';
import { createValuesAsKeysTypeGuard } from '../../object';

export type Orientation = Values<typeof ORIENTATIONS>;
export type ArrowKey = Values<typeof ARROW_KEYS>;

export const isArrowKey = createValuesAsKeysTypeGuard(ARROW_KEYS);

export interface UseKeyboardNavigationProps {
    /** Ссылка на контейнер, в котором расположены элементы списка */
    listRef: RefObject<HTMLElement>;
    /** Направление расположения элементов списка
     *
     * @default undefined
     *
     * @property vertical
     * Вертикальное расположение элементов списка,
     * переключение фокуса будет происходить стрелками ← / →
     *
     * @property horizontal
     * Горизонтальное расположение элементов списка,
     * для переключения фокуса используются стрелки ↑ / ↓
     * */
    orientation?: Orientation;
}
