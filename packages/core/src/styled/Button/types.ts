import { QxBorderSize, PaletteColor, PickQxSize } from '@core';

export type ButtonSize = PickQxSize<'xSmall' | 'small' | 'medium' | 'large'>;
export type ButtonType = 'contained' | 'outlined' | 'text';
export type ButtonColor = PaletteColor;
export type ButtonBorderRadius = QxBorderSize;

export interface ButtonStyleParams {
    /** Цветовая палитра компонента. Значения соответствуют токенам объекта `palette.colors` */
    color: ButtonColor,

    /** Размер компонента. Влияет на высоту и размер текста
     * @property xSmall минимальный размер
     * @property small маленький
     * @property medium средний
     * @property large наибольший размер */
    size: ButtonSize,

    /** Скругление компонента. Значения соответствуют токенам объекта `borderRadii` */
    borderRadius: ButtonBorderRadius,

    /** Тип заливки компонента
     * @property contained используется, чтобы усилить акцент на основном действии
     * @property outlined используется для дополнительных действий или в элементах, где не нужен максимальный акцент
     * @property text текстовые кнопки обычно используются для не самых важных действий */
    type: ButtonType,

    /** Анимация загрузки */
    loading: boolean,

    /** Изменяет состояние компонента на активное/неактивное. Отключает обработчики события */
    disabled: boolean,
}
