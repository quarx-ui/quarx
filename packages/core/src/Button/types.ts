import { PaletteColor, PickSxBorderSize, PickSxSize } from '@core';

export type ButtonSize = PickSxSize<'xSmall' | 'small' | 'medium' | 'large'>;
export type ButtonType = 'contained' | 'outlined' | 'text';
export type ButtonBorderRadius = PickSxBorderSize<'square' | 'smooth' | 'rounded'>;
export type ButtonColor = PaletteColor;

export interface ButtonStyleParams {
    /** Цветовая палитра компонента
     * @param primary основной цвет бренда
     * @param secondary дополнительный нейтральный
     * @param critical цвет для негативных действий, например удаление */
    color?: ButtonColor,

    /** Размер компонента. Влияет на высоту и размер текста
     * @param xSmall минимальный размер
     * @param small маленький
     * @param medium средний
     * @param large наибольший размер */
    size?: ButtonSize,

    /** Скругление компонента
     * @param square минимальный радиус скругления и почти острые углы
     * @param smooth среднее скругление
     * @param rounded максимальный радиус скругления, который можно использовать в любом стиле бренда */
    borderRadius?: ButtonBorderRadius,

    /** Тип заливки компонента
     * @param contained используется, чтобы усилить акцент на основном действии
     * @param outlined используется для дополнительных действий или в элементах, где не нужен максимальный акцент
     * @param text текстовые кнопки обычно используются для не самых важных действий */
    type?: ButtonType,

    /** Анимация загрузки */
    loading?: boolean,

    /** Изменяет состояние компонента на активное/неактивное. Отключает обработчики события */
    disabled?: boolean,
}
