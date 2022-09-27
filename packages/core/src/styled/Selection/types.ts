import { ReactNode } from 'react';
import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { BaseProps } from '@core/types';
import { OmittedStyleParams, SelectionStyleKeys, SelectionStyleParams } from './styles';

export interface SelectionPropsWithoutHtml extends
    Omit<SelectionStyleParams, keyof OmittedStyleParams>,
    WithClassesAndStyles<SelectionStyleKeys, SelectionStyleParams>,
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

export type SelectionProps = ComponentPropsWithHTML<SelectionPropsWithoutHtml>

export * from './styles/types';
