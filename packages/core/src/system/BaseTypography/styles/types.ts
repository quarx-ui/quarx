import {
    BaseTypographySize,
    BaseTypographyType,
    PaletteTextKey,
    TypographyWeight,
    TypographyWeightNumber,
} from '@core';

export type BaseTypographyColor =
    | PaletteTextKey
    | string

export interface BaseTypographyStyleParams {
    /** Размер компонента
     * @default medium */
    size: BaseTypographySize;

    /** Вес шрифта
     * @default normal */
    fontWeight: TypographyWeight | TypographyWeightNumber;

    /** Тип типографики
     * - text – типографика для текста
     * - headline – типографика для заголовков
     * @default text */
    type: BaseTypographyType;

    /** Цвет текста, который задается ключом объекта `palette.text`, либо строковым значением
     * @default main */
    color: BaseTypographyColor;
}
