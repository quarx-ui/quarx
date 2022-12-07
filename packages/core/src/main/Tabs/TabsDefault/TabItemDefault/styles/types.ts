import { TabsSize } from '../../../common';
import { TabsLine } from '../../index';

export interface TabItemDefaultStyleParams {
    /** @description Размер компонента
     *
     * @default large */
    size: TabsSize;

    /** @description Состояние активированности
     *
     * @default false */
    selected: boolean;

    /** @description Позиция разделяющей линии
     *
     * @default down */
    line: TabsLine;
}
