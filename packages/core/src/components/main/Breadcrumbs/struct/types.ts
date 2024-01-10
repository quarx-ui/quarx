import { MouseEvent, ReactChild } from 'react';
import { BREADCRUMB_TYPE, BreadcrumbsStyleParams, PaletteColor, PickQxSize, Values } from '@core';

export type BreadcrumbColor = PaletteColor;
export type BreadcrumbSize = PickQxSize<'small' | 'medium' | 'large'>;
export type BreadcrumbType = Values<typeof BREADCRUMB_TYPE>;

export interface BreadCrumbStruct {
    /** Уникальное значение breadcrumb */
    value: string | number;

    /** Текст breadcrumb */
    text: ReactChild;

    /** Ссылка breadcrumb */
    link: string;

    /** Обработчика клика по Breadcrumb */
    onClick?(currentBreadcrumb: BreadCrumbStruct, event: MouseEvent<HTMLElement>): void;
}

export interface BreadcrumbStyleParams {
    /** Цветовая схема компонента
     *
     * @default brand */
    color: BreadcrumbColor;

    /** Размер компонента
     *
     * @default medium */
    size: BreadcrumbSize;

    /** Тип отрисовки компонента
     *
     * @default link */
    type: BreadcrumbType;

    /** Отключение фокусировки компонента
     *
     * @default false */
    disableFocus: boolean;
}

export interface BreadCrumbVisualProps extends
    Partial<BreadcrumbsStyleParams>,
    Omit<BreadCrumbStruct, 'onClick' | 'text'> {
    /** Текст breadcrumb */
    children: ReactChild;

    /** Обработчика клика по Breadcrumb */
    onClick?(event: MouseEvent<HTMLElement>): void;

    /** Максимальная длина текста компонента
     *
     * @default 24 */
    maxCrumbLength?: number;
}
