import { QxBorderSize, PaletteColor } from '@core';
import { TabsSize } from '../../../common';

export interface TabItemContainedStyleParams {
    /** @description Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** @description Размер компонента
     *
     * @default large */
    size: TabsSize;

    /** @description Состояние выбора
     *
     * @default false */
    selected: boolean;

    /** @description Радиус скругления углов
     *
     * @default medium */
    borderRadius: QxBorderSize;
}
