import { BaseProps, PaletteColor, PickQxSize, Values } from '@core';
import { ElementType, ReactNode } from 'react';
import { TABS_SCROLL_POSITIONS, TABS_TYPES } from './constants';

export type TabsType = Values<typeof TABS_TYPES>;
export type TabsSize = PickQxSize<'small' | 'medium' | 'large'>;

export interface TabsStyleParamsCommon {
    /** @description Акцентный цвет компонента. Возможные значения – любой из стандартных цветов палитры
     *
     * @default brand */
    color: PaletteColor;

    /** @description Размер компонента
     *
     * @property small
     * @property medium
     * @property large
     *
     * @default medium */
    size: TabsSize;
}

export interface TabItem {
    /** @description Текст вкладки */
    label: ReactNode;

    /** @description Значение `value` выбранной вкладки */
    value: string;

    /** @description Счетчик вкладки */
    counter?: ReactNode;
}

export interface TabsPropsCommon<T extends TabItem = TabItem> extends Omit<BaseProps, 'permissions'> {
    /** @description Набор объектов для отображения в виде вкладок. В каждом объекте
     * обязательно наличие строкового `value` и `label` для отрисовки.
     * Также возможно опциональное значение `counter`. Остальные поля
     * могут быть любыми. */
    items: T[];

    /** @description Значение `value` выбранной вкладки */
    value?: T['value'];

    /** @description Значение, выбранное по-умолчанию */
    defaultValue?: T['value'];

    /** @description Callback, вызываемый при переключении вкладки */
    onSetValue?: (item: T) => void;

    /** @description Настройки прокрутки к выбранной вкладке во время изменения value */
    scrollOptions?: ScrollIntoViewOptions & {
        disabled?: boolean;
        padding?: number;
    };

    /** @description Корневой компонент для отображения каждой вкладки */
    TabItemComponent?: ElementType;
}

export type TabsScrollPosition = Values<typeof TABS_SCROLL_POSITIONS>;
