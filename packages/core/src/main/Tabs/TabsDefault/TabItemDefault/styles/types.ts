import { TabsSize } from '../../../common';
import { TabsLine } from '../../index';

export interface TabItemDefaultStyleParams {
    /** Размер компонента
     *
     * @default large */
    size: TabsSize;

    /** Состояние активированности
     *
     * @default false */
    selected: boolean;

    /** Позиция разделяющей линии
     *
     * @default down */
    line: TabsLine;
}
