import { SelectionStyleKeys } from '@core/src/Selection/style';
import { ReactNode } from 'react';
import { PickSxBorderSize, PickSxSize } from '@core/enums';
import { WithClassesAndStyles } from '@core/emotion-styles/types';
import { BaseProps } from '@core/types';

export type SelectionSize = PickSxSize<'small' | 'medium' | 'large'>;
export type SelectionBorderRadius = PickSxBorderSize<'square' | 'smooth'>;

export interface OmittedStyleParams {
    subShown?: boolean,
}

export interface SelectionStyleParams extends OmittedStyleParams {
    /** Размер компонента */
    size?: SelectionSize,

    /** Отключить компонент */
    disabled?: boolean,

    /** Состояние фокуса */
    focused?: boolean,

    /** Фон при наведении */
    styleHover?: 'default' | 'smooth',

    /** Скругление компонента */
    borderRadius?: SelectionBorderRadius,
}

export interface SelectionPropsWithoutHtml extends
    Omit<SelectionStyleParams, keyof OmittedStyleParams>,
    WithClassesAndStyles<SelectionStyleKeys>,
    BaseProps<HTMLDivElement>
{
    /** Включить/Отключить обратный порядок элементов */
    reverse?: boolean

    /** Левый элемент */
    leftAdornment?: ReactNode,

    /** Правый элемент */
    rightAdornment?: ReactNode,

    /** Заголовок компонента */
    title?: string,

    /** Подзаголовок компонента */
    subTitle?: string,

    /** Текст ошибки компонента */
    errorText?: string,
}

export type SelectionHtmlAttributes = Omit<JSX.IntrinsicElements['div'], keyof SelectionPropsWithoutHtml>
export type SelectionProps = SelectionPropsWithoutHtml & SelectionHtmlAttributes
