import { QxBorderSize, PaletteColor } from '@core';
import { TabsSize } from '../../../common';

export interface TabItemSegmentedStyleParams {
    /** @description Переключение в режим отображения иконок в виде вкладок, доступно
     * только для `Tabs` с типом `segmented`
     *
     * @default false */
    icon: boolean;

    /** @description Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** @description Размер компонента
     *
     * @default large */
    size: TabsSize;

    /** @description Состояние активированности
     *
     * @default false */
    selected: boolean;

    /** @description Размер скругления компонента
     *
     * @default medium */
    borderRadius: QxBorderSize;
}
