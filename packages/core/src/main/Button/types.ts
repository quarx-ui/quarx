import { QxBorderSize, PaletteColor, PickQxSize } from '@core';

export type ButtonSize = PickQxSize<'xSmall' | 'small' | 'medium' | 'large'>;
export type ButtonType = 'contained' | 'outlined' | 'text';
export type ButtonColor = PaletteColor;
export type ButtonBorderRadius = QxBorderSize;

export interface ButtonStyleParams {
    /** @description Цветовая палитра компонента.
     * Значения соответствуют токенам объекта `palette.colors`
     *
     * @default brand */
    color: ButtonColor;

    /** @description Размер компонента. Влияет на высоту и размер текста
     * @property xSmall минимальный размер
     * @property small маленький
     * @property medium средний
     * @property large наибольший размер
     *
     * @default medium */
    size: ButtonSize;

    /** @description Скругление компонента.
     * Значения соответствуют токенам объекта `borderRadii`
     *
     * @default medium */
    borderRadius: ButtonBorderRadius;

    /** @description Тип заливки компонента
     *
     * @property contained используется, чтобы усилить акцент на основном действии
     * @property outlined используется для дополнительных действий или в элементах, где не нужен максимальный акцент
     * @property text текстовые кнопки обычно используются для не самых важных действий
     *
     * @default button */
    type: ButtonType;

    /** @description Анимация загрузки
     *
     * @default false */
    loading: boolean;

    /** @description Изменяет состояние компонента на активное/неактивное.
     * Отключает обработчики события
     *
     * @default false */
    disabled: boolean;
}
