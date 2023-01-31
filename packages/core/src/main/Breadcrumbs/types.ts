import {
    BaseProps,
    ComponentPropsWithHTML,
    PopupProps,
    WithClassesAndStyles,
} from '@core';
import { FC, ReactChild } from 'react';
import { BreadCrumbStruct, BreadCrumbVisualProps } from './struct';
import { BreadcrumbsStyleParams } from './styles/types';
import { BreadcrumbsStyleKeys } from './styles';

export interface BreadCrumbsSlice {
    /** Начало среза
     * @default 2 */
    start: number;

    /** Конец среза
     * @default -3 */
    end: number;
}

export const isCustomCollapseSettings = (
    collapse: BreadcrumbsProps['collapse'],
    crumbsNumber: number,
): collapse is BreadCrumbsSlice => {
    if (typeof collapse === 'boolean') {
        return false;
    }

    return typeof collapse?.start === 'number'
        && typeof collapse?.end === 'number'
        && collapse.start < collapse.end
        && collapse.end <= crumbsNumber
        && collapse.end > 0
        && collapse.start >= 0;
};

export interface BreadcrumbsPropsWithoutHtml<S extends BreadCrumbStruct = BreadCrumbStruct> extends
    BaseProps<HTMLDivElement>,
    Partial<BreadcrumbsStyleParams>,
    WithClassesAndStyles<BreadcrumbsStyleKeys, BreadcrumbsStyleParams>
{
    /** Максимальная длина текста breadcrumb
     *
     * @default 24 */
    maxCrumbTextLength?: number;

    /** Максимальная длина текста текущего(последнего в списке) breadcrumb
     *
     * @default 32 */
    maxCurrentCrumbTextLength?: number;

    /** Скрытие части breadcrumbs в выпадающий список.
     * По умолчанию обрезается со 2 элемента до 4 с конца.
     * Меньше 5 элементов по умолчанию не обрезается.
     *
     * @default false */
    collapse?: boolean | null | BreadCrumbsSlice;

    /** Разделитель breadcrumbs
     *
     * @default / */
    divider?: ReactChild;

    /** Список breadcrumb */
    crumbs: S[];

    /** Компонент отображения Breadcrumb
     * @default QuarX Breadcrumb */
    BreadcrumbComponent?: FC<BreadCrumbVisualProps>;

    /** Компонент отображения Breadcrumb
     * @default QuarX Breadcrumb */
    EllipsisBreadcrumbComponent?: FC<BreadCrumbVisualProps>;

    /** Компонент отображения Breadcrumb в выпадающем списке
     * @default QuarX DroppedBreadcrumb */
    DroppedBreadcrumbComponent?: FC<BreadCrumbVisualProps>;

    /** Параметры popup */
    PopupProps?: PopupProps;
}

export type BreadcrumbsProps<S extends BreadCrumbStruct = BreadCrumbStruct> =
    ComponentPropsWithHTML<BreadcrumbsPropsWithoutHtml<S>>;
