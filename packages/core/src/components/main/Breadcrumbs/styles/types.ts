import { BreadcrumbColor, BreadcrumbSize, BreadcrumbType } from '../struct';

export interface BreadcrumbsStyleParams {
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
