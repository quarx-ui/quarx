import { BaseTypographySize, PaletteTextKey, TypographyWeight, TypographyWeightNumber } from '@core';

export type HeadlineColor =
    | PaletteTextKey
    | string

export interface HeadlineStyleParams {
    /** Размер компонента
     * @default medium */
    size: BaseTypographySize;

    /** Вес шрифта
     * @default normal */
    fontWeight: TypographyWeight | TypographyWeightNumber;

    /** Цвет текста, который задается ключом объекта `palette.text`, либо строковым значением
     * @default main */
    color: HeadlineColor;
}
