import { QxBorderSize, PaletteColor } from '@core';
import { TabsSize } from '../../../common';

export interface TabItemContainedStyleParams {
    /** Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Размер компонента
     *
     * @default large */
    size: TabsSize;

    /** Состояние выбора
     *
     * @default false */
    selected: boolean;

    /** Радиус скругления углов
     *
     * @default medium */
    borderRadius: QxBorderSize;
}
