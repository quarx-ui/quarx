import { QxBorderSize, PaletteColor, PickQxSize } from '@core';

export type ButtonSize = PickQxSize<'xSmall' | 'small' | 'medium' | 'large'>;
export type ButtonType = 'contained' | 'outlined' | 'text';
export type ButtonColor = PaletteColor;
export type ButtonBorderRadius = QxBorderSize;

export interface BaseButtonStyleParams {
    /** Цветовая палитра компонента.
     * Значения соответствуют токенам объекта `theme.palette.colors`
     *
     * @default brand */
    color: ButtonColor;

    /** Размер компонента. Влияет на высоту и размер текста
     * - **xSmall** – минимальный размер
     * - **small** – маленький
     * - **medium** – средний
     * - **large** – наибольший размер
     *
     * @default medium */
    size: ButtonSize;

    /** Скругление компонента.
     * Значения соответствуют токенам объекта `theme.borderRadii`
     *
     * @default medium */
    borderRadius: ButtonBorderRadius;

    /** Тип заливки компонента
     *
     * - **contained** – используется, чтобы усилить акцент на основном действии
     * - **outlined** – используется для дополнительных действий или в элементах, где не нужен максимальный акцент
     * - **text** – текстовые кнопки обычно используются для не самых важных действий
     *
     * @default button */
    type: ButtonType;

    /** Анимация загрузки
     *
     * @default false */
    loading: boolean;

    /** Изменяет состояние компонента на активное/неактивное.
     * Отключает обработчики события
     *
     * @default false */
    disabled: boolean;
}
