import { PickQxSize } from '@core';

export type AccordionSize = PickQxSize<'xSmall' | 'small' | 'medium' | 'large'>;

export interface AccordionStyleParams {
    /** Управление отображением внутреннего контента */
    open: boolean;

    /** Размер компонента
     * @default medium */
    size: AccordionSize;

    /** Отображать разделительную линию под компонентом
     * @default false */
    showDivider: boolean;

    /** Отключает назначение компонентом текстовых стелей для внутреннего контента
     * @default false */
    inheritTextStyles: boolean;
}
