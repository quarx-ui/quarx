import { ReactNode } from 'react';
import { PickSxBorderSize, PickSxSize } from '@core/enums';
import { WithClassesAndStyles } from '@core/emotion-styles/types';
import { BaseProps } from '@core/types';
import { BaseButtonStyleKeys } from './style';

export type BaseButtonSize = PickSxSize<'xSmall' | 'small' | 'medium' | 'large'>;
export type BaseButtonType = 'contained' | 'outlined' | 'text';
export type BaseButtonBorderRadius = PickSxBorderSize<'square' | 'smooth' | 'rounded'>;
export type BaseButtonColor = 'primary' | 'secondary' | 'critical';

export interface BaseButtonStyleParams {
    /** Цветовая палитра компонента
     * @param primary основной цвет бренда
     * @param secondary дополнительный нейтральный
     * @param critical цвет для негативных действий, например удаление */
    color?: BaseButtonColor,

    /** Размер компонента. Влияет на высоту и размер текста
     * @param xSmall минимальный размер
     * @param small маленький
     * @param medium средний
     * @param large наибольший размер */
    size?: BaseButtonSize,

    /** Скругление компонента
     * @param square минимальный радиус скругления и почти острые углы
     * @param smooth среднее скругление
     * @param rounded максимальный радиус скругления, который можно использовать в любом стиле бренда */
    borderRadius?: BaseButtonBorderRadius,

    /** Тип заливки компонента
     * @param contained используется, чтобы усилить акцент на основном действии
     * @param outlined используется для дополнительных действий или в элементах, где не нужен максимальный акцент
     * @param text текстовые кнопки обычно используются для не самых важных действий */
    type?: BaseButtonType,

    /** Анимация загрузки */
    loading?: boolean,

    /** Изменяет состояние компонента на активное/неактивное. Отключает обработчики события */
    disabled?: boolean,
}

export interface BaseButtonPropsWithoutHtml extends
    BaseButtonStyleParams,
    WithClassesAndStyles<BaseButtonStyleKeys>,
    BaseProps<HTMLButtonElement>
{
    /** HTML-тип элемента button */
    buttonType?: 'submit' | 'reset' | 'button';

    /** Текст расположенный в компоненте */
    children?: ReactNode,
}

export type BaseButtonHtmlAttributes = Omit<JSX.IntrinsicElements['button'], keyof BaseButtonPropsWithoutHtml>

export type BaseButtonProps = BaseButtonPropsWithoutHtml & BaseButtonHtmlAttributes;
