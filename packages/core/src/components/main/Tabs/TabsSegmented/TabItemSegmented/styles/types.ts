import { QxBorderSize, PaletteColor } from '@core';
import { TabsSize } from '../../../common';

export interface TabItemSegmentedStyleParams {
    /** Переключение в режим отображения иконок в виде вкладок, доступно
     * только для `Tabs` с типом `segmented`
     *
     * @default false */
    icon: boolean;

    /** Цветовая схема компонента
     *
     * @default brand */
    color: PaletteColor;

    /** Размер компонента
     *
     * @default large */
    size: TabsSize;

    /** Состояние активированности
     *
     * @default false */
    selected: boolean;

    /** Размер скругления компонента
     *
     * @default medium */
    borderRadius: QxBorderSize;
}
