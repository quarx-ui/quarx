import { ReactElement } from 'react';
import { BaseProps, ComponentPropsWithHTML, SVGIcon, Values, WithClassesAndStyles } from '@core';
import { CHIPS_VARIANT } from './constants';
import { ChipsCSSVarKeys, ChipsStyleKeys, ChipsStyleParams } from './styles';

export type ChipsVariant = Values<typeof CHIPS_VARIANT>;

export interface ChipsPropsWithoutHtml extends
    Partial<Omit<ChipsStyleParams, 'leftIconExists' | 'rightIconExists'>>,
    WithClassesAndStyles<ChipsStyleKeys, ChipsStyleParams, ChipsCSSVarKeys>,
    BaseProps<HTMLButtonElement>
{
    /** Текст */
    children?: string;

    /**
     * Иконка, отображаемая слева в активированном состоянии
     * @default CheckMarkIcon
     * */
    activeStateIcon?: ReactElement | SVGIcon;

    /** Левая иконка */
    leftIcon?: ReactElement | SVGIcon;

    /** Правая иконка (кастомная либо стандартная, если передан "true") */
    rightIcon?: boolean | ReactElement | SVGIcon;

    /** Скрыть элемент */
    hidden?: boolean;
}

export type ChipsProps = ComponentPropsWithHTML<ChipsPropsWithoutHtml, 'button'>;

export * from './styles/types';
